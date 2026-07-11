"""
generate_data.py
-----------------
Builds a synthetic but realistic B2B SaaS customer dataset and loads it into
a SQLite database (customer_health.db). This stands in for data a CSM/TAM
would normally pull from a CRM (Salesforce/Gainsight), a product analytics
tool (Amplitude/Mixpanel), and a support desk (Zendesk/Intercom).

Tables created:
  accounts        - one row per customer account (firmographics, contract)
  daily_logins    - daily active-user counts per account (90-day window)
  feature_usage   - per-account adoption of key product features
  support_tickets - support ticket history with priority + resolution time

Run:
    python3 generate_data.py
"""

import sqlite3
import random
from datetime import date, timedelta
from pathlib import Path

random.seed(42)

BASE_DIR = Path(__file__).resolve().parent.parent
# SQLite needs real POSIX file locking; the outputs folder is a FUSE mount
# that doesn't support it, so build the DB on local disk and copy it over.
BUILD_DIR = Path("/tmp/customer_health_build")
DB_PATH = BUILD_DIR / "customer_health.db"
FINAL_DB_PATH = BASE_DIR / "data" / "customer_health.db"
TODAY = date(2026, 7, 11)
WINDOW_DAYS = 90

INDUSTRIES = ["FinTech", "Healthcare", "Retail", "Manufacturing", "Media",
              "Education", "Logistics", "SaaS/Tech", "Real Estate", "Energy"]
PLAN_TIERS = ["Starter", "Growth", "Enterprise"]
CSMS = ["Amanda Schembri", "Jordan Lee", "Priya Nair", "Marcus Webb", "Sofia Torres"]
KEY_FEATURES = ["dashboards", "automations", "api_integration", "sso",
                 "reporting_exports", "mobile_app", "custom_fields", "team_collab"]
TICKET_CATEGORIES = ["bug", "how_to", "billing", "feature_request", "outage", "onboarding"]
TICKET_PRIORITIES = ["low", "medium", "high", "critical"]

COMPANY_PREFIXES = ["Nimbus", "Vertex", "Cascade", "Bright", "Anchor", "Solace",
                     "Lumen", "Granite", "Orbit", "Harbor", "Trellis", "Beacon",
                     "Meridian", "Pinehurst", "Ironclad", "Willow", "Sable",
                     "Northwind", "Fathom", "Quartz", "Halcyon", "Redwood",
                     "Cobalt", "Everline", "Summit", "Driftwood", "Lattice",
                     "Palisade", "Emberly", "Kestrel"]
COMPANY_SUFFIXES = ["Systems", "Group", "Labs", "Partners", "Holdings", "Co.",
                     "Technologies", "Solutions", "Industries", "Networks"]

N_ACCOUNTS = 60


def make_account(i):
    name = f"{COMPANY_PREFIXES[i % len(COMPANY_PREFIXES)]} {random.choice(COMPANY_SUFFIXES)}"
    industry = random.choice(INDUSTRIES)
    tier = random.choices(PLAN_TIERS, weights=[0.35, 0.4, 0.25])[0]
    mrr = {"Starter": random.randint(300, 1200),
           "Growth": random.randint(1200, 6000),
           "Enterprise": random.randint(6000, 40000)}[tier]
    employees = {"Starter": random.randint(5, 50),
                 "Growth": random.randint(50, 500),
                 "Enterprise": random.randint(500, 10000)}[tier]
    tenure_days = random.randint(30, 1500)
    contract_start = TODAY - timedelta(days=tenure_days)
    csm = random.choice(CSMS)

    # Assign a hidden "true health" archetype that drives correlated behavior
    # across logins / adoption / tickets, so the resulting score tells a
    # coherent story instead of being pure noise.
    archetype = random.choices(
        ["thriving", "steady", "slipping", "at_risk", "critical"],
        weights=[0.22, 0.28, 0.22, 0.18, 0.10]
    )[0]

    return {
        "account_id": i,
        "account_name": name,
        "industry": industry,
        "plan_tier": tier,
        "mrr": mrr,
        "employee_count": employees,
        "contract_start_date": contract_start.isoformat(),
        "csm_owner": csm,
        "archetype": archetype,
    }


ARCHETYPE_PARAMS = {
    # login_rate: prob a given active user logs in on a given day (engagement)
    # trend: multiplicative drift applied over the 90-day window (declining <1)
    # adoption_rate: fraction of key features meaningfully adopted
    # ticket_rate: tickets per 30 days
    # escalation_bias: weight shift toward high/critical priority tickets
    "thriving":  dict(login_rate=0.55, trend=1.15, adoption_rate=0.85, ticket_rate=1.2, escalation_bias=0.05, csat_mean=4.6),
    "steady":    dict(login_rate=0.40, trend=1.02, adoption_rate=0.65, ticket_rate=1.8, escalation_bias=0.15, csat_mean=4.2),
    "slipping":  dict(login_rate=0.30, trend=0.80, adoption_rate=0.45, ticket_rate=2.6, escalation_bias=0.30, csat_mean=3.5),
    "at_risk":   dict(login_rate=0.18, trend=0.55, adoption_rate=0.28, ticket_rate=3.6, escalation_bias=0.45, csat_mean=2.8),
    "critical":  dict(login_rate=0.08, trend=0.30, adoption_rate=0.12, ticket_rate=4.5, escalation_bias=0.65, csat_mean=2.1),
}


def make_daily_logins(account):
    params = ARCHETYPE_PARAMS[account["archetype"]]
    seat_count = max(1, account["employee_count"] // random.randint(8, 20))
    rows = []
    for d in range(WINDOW_DAYS):
        day = TODAY - timedelta(days=WINDOW_DAYS - 1 - d)
        if day.weekday() >= 5:  # weekends quieter
            weekend_factor = 0.35
        else:
            weekend_factor = 1.0
        # linear drift from trend across the window (early days = 1/trend-ish, later = trend-ish)
        progress = d / (WINDOW_DAYS - 1)
        drift = (1 - progress) * (1 / params["trend"]) + progress * params["trend"]
        drift = max(0.05, drift)
        expected = seat_count * params["login_rate"] * weekend_factor * drift
        active_users = max(0, int(random.gauss(expected, max(0.5, expected * 0.3))))
        rows.append((account["account_id"], day.isoformat(), active_users))
    return rows


def make_feature_usage(account):
    params = ARCHETYPE_PARAMS[account["archetype"]]
    rows = []
    for feature in KEY_FEATURES:
        adopted = random.random() < params["adoption_rate"]
        if adopted:
            usage_count = random.randint(15, 400)
            days_since_use = random.randint(0, 10)
        else:
            usage_count = random.randint(0, 5)
            days_since_use = random.randint(20, 120)
        last_used = TODAY - timedelta(days=days_since_use)
        rows.append((account["account_id"], feature, usage_count, last_used.isoformat(), int(adopted)))
    return rows


def make_support_tickets(account, next_id):
    params = ARCHETYPE_PARAMS[account["archetype"]]
    months = WINDOW_DAYS / 30
    n_tickets = max(0, int(random.gauss(params["ticket_rate"] * months, 1.0)))
    rows = []
    for _ in range(n_tickets):
        created = TODAY - timedelta(days=random.randint(0, WINDOW_DAYS))
        priority = random.choices(
            TICKET_PRIORITIES,
            weights=[
                0.45 - 0.3 * params["escalation_bias"],
                0.35,
                0.15 + 0.5 * params["escalation_bias"],
                0.05 + 0.3 * params["escalation_bias"],
            ]
        )[0]
        category = random.choice(TICKET_CATEGORIES)
        resolve_days = {
            "low": random.randint(1, 5), "medium": random.randint(1, 4),
            "high": random.randint(0, 3), "critical": random.randint(0, 2)
        }[priority]
        is_resolved = random.random() < 0.85
        resolved = (created + timedelta(days=resolve_days)).isoformat() if is_resolved else None
        csat = round(min(5.0, max(1.0, random.gauss(params["csat_mean"], 0.7))), 1) if is_resolved and random.random() < 0.6 else None
        rows.append((next_id, account["account_id"], created.isoformat(), resolved,
                     priority, category, csat))
        next_id += 1
    return rows, next_id


def main():
    BUILD_DIR.mkdir(parents=True, exist_ok=True)
    if DB_PATH.exists():
        DB_PATH.unlink()

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.executescript("""
    CREATE TABLE accounts (
        account_id INTEGER PRIMARY KEY,
        account_name TEXT NOT NULL,
        industry TEXT,
        plan_tier TEXT,
        mrr INTEGER,
        employee_count INTEGER,
        contract_start_date TEXT,
        csm_owner TEXT
    );

    CREATE TABLE daily_logins (
        account_id INTEGER,
        login_date TEXT,
        active_users INTEGER,
        FOREIGN KEY (account_id) REFERENCES accounts(account_id)
    );

    CREATE TABLE feature_usage (
        account_id INTEGER,
        feature_name TEXT,
        usage_count INTEGER,
        last_used_date TEXT,
        is_adopted INTEGER,
        FOREIGN KEY (account_id) REFERENCES accounts(account_id)
    );

    CREATE TABLE support_tickets (
        ticket_id INTEGER PRIMARY KEY,
        account_id INTEGER,
        created_date TEXT,
        resolved_date TEXT,
        priority TEXT,
        category TEXT,
        csat_score REAL,
        FOREIGN KEY (account_id) REFERENCES accounts(account_id)
    );

    CREATE INDEX idx_logins_account ON daily_logins(account_id);
    CREATE INDEX idx_features_account ON feature_usage(account_id);
    CREATE INDEX idx_tickets_account ON support_tickets(account_id);
    """)

    accounts = [make_account(i) for i in range(1, N_ACCOUNTS + 1)]

    cur.executemany(
        """INSERT INTO accounts
           (account_id, account_name, industry, plan_tier, mrr, employee_count,
            contract_start_date, csm_owner)
           VALUES (:account_id, :account_name, :industry, :plan_tier, :mrr,
                   :employee_count, :contract_start_date, :csm_owner)""",
        accounts
    )

    login_rows, feature_rows, ticket_rows = [], [], []
    next_ticket_id = 1
    for account in accounts:
        login_rows.extend(make_daily_logins(account))
        feature_rows.extend(make_feature_usage(account))
        t_rows, next_ticket_id = make_support_tickets(account, next_ticket_id)
        ticket_rows.extend(t_rows)

    cur.executemany(
        "INSERT INTO daily_logins (account_id, login_date, active_users) VALUES (?, ?, ?)",
        login_rows
    )
    cur.executemany(
        """INSERT INTO feature_usage
           (account_id, feature_name, usage_count, last_used_date, is_adopted)
           VALUES (?, ?, ?, ?, ?)""",
        feature_rows
    )
    cur.executemany(
        """INSERT INTO support_tickets
           (ticket_id, account_id, created_date, resolved_date, priority, category, csat_score)
           VALUES (?, ?, ?, ?, ?, ?, ?)""",
        ticket_rows
    )

    conn.commit()
    conn.close()

    import shutil
    FINAL_DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(DB_PATH, FINAL_DB_PATH)

    print(f"Loaded {len(accounts)} accounts, {len(login_rows)} login rows, "
          f"{len(feature_rows)} feature rows, {len(ticket_rows)} tickets -> {FINAL_DB_PATH}")


if __name__ == "__main__":
    main()
