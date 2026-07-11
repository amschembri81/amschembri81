-- =====================================================================
-- health_scoring.sql
-- ---------------------------------------------------------------------
-- Computes a 0-100 customer health score and risk tier per account from
-- three raw signal tables: daily_logins, feature_usage, support_tickets.
--
-- Scoring model (weights sum to 100):
--   Engagement   (40 pts) - rolling 30-day active usage + trend vs prior 30d
--   Adoption     (30 pts) - % of key features meaningfully adopted
--   Support      (30 pts) - ticket load, escalation rate, CSAT, open backlog
--
-- Risk tiers:
--   Healthy   >= 70
--   At Risk   40-69
--   Critical  < 40
--
-- Built as a chain of views so each stage is independently inspectable:
--   v_rolling_logins -> v_engagement -> v_adoption -> v_support -> v_account_health
-- =====================================================================

DROP VIEW IF EXISTS v_account_health;
DROP VIEW IF EXISTS v_support;
DROP VIEW IF EXISTS v_adoption;
DROP VIEW IF EXISTS v_engagement;
DROP VIEW IF EXISTS v_rolling_logins;

-- ---------------------------------------------------------------------
-- 1. Rolling 30-day active-user totals per account/day, using a window
--    frame instead of a self-join. rn_desc lets us grab "as of latest
--    day" (rn_desc = 1) and "as of 30 days ago" (rn_desc = 31) snapshots
--    of the same rolling sum to compare current vs prior engagement.
-- ---------------------------------------------------------------------
CREATE VIEW v_rolling_logins AS
SELECT
    account_id,
    login_date,
    active_users,
    SUM(active_users) OVER (
        PARTITION BY account_id
        ORDER BY login_date
        ROWS BETWEEN 29 PRECEDING AND CURRENT ROW
    ) AS rolling_30d_active_users,
    ROW_NUMBER() OVER (
        PARTITION BY account_id ORDER BY login_date DESC
    ) AS rn_desc
FROM daily_logins;

-- ---------------------------------------------------------------------
-- 2. Engagement summary: current vs prior 30-day usage, trend %, and
--    recency of last real login (active_users > 0).
-- ---------------------------------------------------------------------
CREATE VIEW v_engagement AS
WITH last_login AS (
    SELECT account_id, MAX(login_date) AS last_active_date
    FROM daily_logins
    WHERE active_users > 0
    GROUP BY account_id
)
SELECT
    cur.account_id,
    cur.rolling_30d_active_users  AS active_users_last_30,
    prior.rolling_30d_active_users AS active_users_prior_30,
    ROUND(
        CASE WHEN COALESCE(prior.rolling_30d_active_users, 0) = 0 THEN 0
             ELSE (cur.rolling_30d_active_users - prior.rolling_30d_active_users) * 100.0
                  / prior.rolling_30d_active_users
        END, 1
    ) AS login_trend_pct,
    ll.last_active_date,
    CAST(julianday('2026-07-11') - julianday(ll.last_active_date) AS INTEGER) AS days_since_last_login
FROM v_rolling_logins cur
LEFT JOIN v_rolling_logins prior
    ON prior.account_id = cur.account_id AND prior.rn_desc = 31
LEFT JOIN last_login ll
    ON ll.account_id = cur.account_id
WHERE cur.rn_desc = 1;

-- ---------------------------------------------------------------------
-- 3. Adoption summary: share of the 8 key features meaningfully adopted,
--    plus how stale the most-recently-touched feature is.
-- ---------------------------------------------------------------------
CREATE VIEW v_adoption AS
SELECT
    account_id,
    COUNT(*) AS total_features_tracked,
    SUM(is_adopted) AS features_adopted,
    ROUND(SUM(is_adopted) * 100.0 / COUNT(*), 1) AS adoption_pct,
    MIN(CAST(julianday('2026-07-11') - julianday(last_used_date) AS INTEGER)) AS days_since_any_feature_use
FROM feature_usage
GROUP BY account_id;

-- ---------------------------------------------------------------------
-- 4. Support summary: ticket volume, escalation rate, open backlog, CSAT.
-- ---------------------------------------------------------------------
CREATE VIEW v_support AS
SELECT
    a.account_id,
    COUNT(t.ticket_id) AS ticket_count_90d,
    SUM(CASE WHEN t.priority IN ('high', 'critical') THEN 1 ELSE 0 END) AS high_severity_count,
    ROUND(
        CASE WHEN COUNT(t.ticket_id) = 0 THEN 0
             ELSE SUM(CASE WHEN t.priority IN ('high', 'critical') THEN 1 ELSE 0 END) * 100.0
                  / COUNT(t.ticket_id)
        END, 1
    ) AS escalation_rate_pct,
    SUM(CASE WHEN t.resolved_date IS NULL THEN 1 ELSE 0 END) AS open_tickets,
    ROUND(AVG(t.csat_score), 2) AS avg_csat
FROM accounts a
LEFT JOIN support_tickets t ON t.account_id = a.account_id
GROUP BY a.account_id;

-- ---------------------------------------------------------------------
-- 5. Final composite score + risk tier + peer benchmarking.
--    NTILE / PERCENT_RANK window functions rank each account against its
--    peers on the composite score for the "bottom quartile" flag.
-- ---------------------------------------------------------------------
CREATE VIEW v_account_health AS
WITH scored AS (
    SELECT
        a.account_id,
        a.account_name,
        a.industry,
        a.plan_tier,
        a.mrr,
        a.employee_count,
        a.csm_owner,
        a.contract_start_date,

        e.active_users_last_30,
        e.login_trend_pct,
        e.days_since_last_login,

        ad.adoption_pct,
        ad.features_adopted,
        ad.total_features_tracked,

        s.ticket_count_90d,
        s.escalation_rate_pct,
        s.open_tickets,
        s.avg_csat,

        -- Engagement score (0-40): 25 pts for recency/activity level,
        -- 15 pts for trend direction (rewards growth, penalizes decline)
        ROUND(
            CASE
                WHEN e.days_since_last_login <= 3 THEN 25
                WHEN e.days_since_last_login <= 7 THEN 20
                WHEN e.days_since_last_login <= 14 THEN 13
                WHEN e.days_since_last_login <= 30 THEN 6
                ELSE 0
            END
            + MAX(0, MIN(15, 7.5 + (COALESCE(e.login_trend_pct, 0) / 10.0)))
        , 1) AS engagement_score,

        -- Adoption score (0-30): directly proportional to feature adoption %
        ROUND(COALESCE(ad.adoption_pct, 0) * 0.30, 1) AS adoption_score,

        -- Support score (0-30): starts at 30, deducts for escalations,
        -- open backlog, and low CSAT
        ROUND(
            MAX(0, 30
                - (COALESCE(s.escalation_rate_pct, 0) * 0.20)
                - (COALESCE(s.open_tickets, 0) * 2.5)
                - (CASE WHEN s.avg_csat IS NOT NULL AND s.avg_csat < 3.5
                        THEN (3.5 - s.avg_csat) * 6 ELSE 0 END)
            )
        , 1) AS support_score

    FROM accounts a
    LEFT JOIN v_engagement e ON e.account_id = a.account_id
    LEFT JOIN v_adoption ad ON ad.account_id = a.account_id
    LEFT JOIN v_support s ON s.account_id = a.account_id
)
SELECT
    *,
    ROUND(engagement_score + adoption_score + support_score, 1) AS health_score,
    CASE
        WHEN (engagement_score + adoption_score + support_score) >= 70 THEN 'Healthy'
        WHEN (engagement_score + adoption_score + support_score) >= 40 THEN 'At Risk'
        ELSE 'Critical'
    END AS risk_tier,
    NTILE(4) OVER (ORDER BY (engagement_score + adoption_score + support_score)) AS health_quartile,
    ROUND(PERCENT_RANK() OVER (ORDER BY (engagement_score + adoption_score + support_score)) * 100, 0) AS health_percentile
FROM scored
ORDER BY health_score ASC;
