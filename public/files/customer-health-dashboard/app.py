"""
Customer Health Dashboard
--------------------------
Streamlit app visualizing account health scores computed by
sql/health_scoring.sql from synthetic adoption, login, and support data.

Run:
    pip install -r requirements.txt
    python3 scripts/process_health_scores.py   # (re)generate data + scores
    streamlit run app.py
"""

from pathlib import Path

import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import streamlit as st

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"

RISK_COLORS = {"Healthy": "#2E7D32", "At Risk": "#F5A623", "Critical": "#D64545"}
RISK_ORDER = ["Critical", "At Risk", "Healthy"]

st.set_page_config(
    page_title="Customer Health Dashboard",
    page_icon="\U0001F4CA",
    layout="wide",
)


@st.cache_data
def load_data():
    accounts = pd.read_csv(DATA_DIR / "account_health.csv")
    engagement = pd.read_csv(DATA_DIR / "daily_engagement.csv", parse_dates=["login_date"])
    tickets = pd.read_csv(DATA_DIR / "support_tickets.csv", parse_dates=["created_date", "resolved_date"])
    features = pd.read_csv(DATA_DIR / "feature_usage.csv")
    return accounts, engagement, tickets, features


accounts, engagement, tickets, features = load_data()

# ---------------------------------------------------------------------------
# Sidebar filters
# ---------------------------------------------------------------------------
st.sidebar.title("Filters")

risk_filter = st.sidebar.multiselect(
    "Risk tier", options=RISK_ORDER, default=RISK_ORDER
)
tier_filter = st.sidebar.multiselect(
    "Plan tier", options=sorted(accounts["plan_tier"].unique()),
    default=sorted(accounts["plan_tier"].unique())
)
industry_filter = st.sidebar.multiselect(
    "Industry", options=sorted(accounts["industry"].unique()),
    default=sorted(accounts["industry"].unique())
)
csm_filter = st.sidebar.multiselect(
    "CSM owner", options=sorted(accounts["csm_owner"].unique()),
    default=sorted(accounts["csm_owner"].unique())
)
search = st.sidebar.text_input("Search account name")

filtered = accounts[
    accounts["risk_tier"].isin(risk_filter)
    & accounts["plan_tier"].isin(tier_filter)
    & accounts["industry"].isin(industry_filter)
    & accounts["csm_owner"].isin(csm_filter)
]
if search:
    filtered = filtered[filtered["account_name"].str.contains(search, case=False, na=False)]

st.sidebar.markdown("---")
st.sidebar.caption(
    "Health score = Engagement (40 pts) + Adoption (30 pts) + Support (30 pts). "
    "Computed entirely in SQL — see sql/health_scoring.sql."
)

# ---------------------------------------------------------------------------
# Header + KPIs
# ---------------------------------------------------------------------------
st.title("Customer Health Dashboard")
st.caption("Account health scoring from adoption, login, and support-ticket signals")

k1, k2, k3, k4, k5 = st.columns(5)
k1.metric("Accounts", len(filtered))
k2.metric("Total MRR", f"${filtered['mrr'].sum():,.0f}")
mrr_at_risk = filtered.loc[filtered["risk_tier"] != "Healthy", "mrr"].sum()
k3.metric("MRR At Risk", f"${mrr_at_risk:,.0f}",
          delta=f"{mrr_at_risk / filtered['mrr'].sum() * 100:.0f}% of total" if filtered['mrr'].sum() else "0%",
          delta_color="inverse")
k4.metric("Avg Health Score", f"{filtered['health_score'].mean():.1f}" if len(filtered) else "—")
critical_count = (filtered["risk_tier"] == "Critical").sum()
k5.metric("Critical Accounts", int(critical_count), delta_color="inverse")

st.markdown("---")

# ---------------------------------------------------------------------------
# Row 1: Risk distribution + health score histogram
# ---------------------------------------------------------------------------
c1, c2 = st.columns([1, 2])

with c1:
    st.subheader("Risk Distribution")
    dist = filtered["risk_tier"].value_counts().reindex(RISK_ORDER).fillna(0).reset_index()
    dist.columns = ["risk_tier", "count"]
    fig = go.Figure(data=[go.Pie(
        labels=dist["risk_tier"], values=dist["count"], hole=0.55,
        marker=dict(colors=[RISK_COLORS[t] for t in dist["risk_tier"]]),
        sort=False,
    )])
    fig.update_layout(margin=dict(t=10, b=10, l=10, r=10), height=320,
                       legend=dict(orientation="h", yanchor="bottom", y=-0.15))
    st.plotly_chart(fig, use_container_width=True)

with c2:
    st.subheader("Health Score Distribution")
    fig = px.histogram(
        filtered, x="health_score", color="risk_tier",
        color_discrete_map=RISK_COLORS, nbins=20,
        category_orders={"risk_tier": RISK_ORDER},
    )
    fig.update_layout(margin=dict(t=10, b=10, l=10, r=10), height=320,
                       xaxis_title="Health Score", yaxis_title="# Accounts",
                       legend_title=None)
    st.plotly_chart(fig, use_container_width=True)

# ---------------------------------------------------------------------------
# Row 2: Risk matrix (engagement trend vs adoption, sized by MRR)
# ---------------------------------------------------------------------------
st.subheader("Risk Matrix — Engagement Trend vs. Feature Adoption")
fig = px.scatter(
    filtered, x="login_trend_pct", y="adoption_pct",
    size="mrr", color="risk_tier", color_discrete_map=RISK_COLORS,
    hover_name="account_name",
    hover_data={"mrr": ":$,.0f", "health_score": True, "csm_owner": True,
                "login_trend_pct": ":.1f", "adoption_pct": ":.1f"},
    category_orders={"risk_tier": RISK_ORDER},
    labels={"login_trend_pct": "30-Day Login Trend (%)", "adoption_pct": "Feature Adoption (%)"},
    size_max=45,
)
fig.add_vline(x=0, line_dash="dot", line_color="gray")
fig.update_layout(height=440, margin=dict(t=10, b=10, l=10, r=10))
st.plotly_chart(fig, use_container_width=True)

# ---------------------------------------------------------------------------
# Row 3: Account table
# ---------------------------------------------------------------------------
st.subheader(f"Accounts ({len(filtered)})")
table_cols = [
    "account_name", "risk_tier", "health_score", "engagement_score",
    "adoption_score", "support_score", "plan_tier", "mrr", "csm_owner",
    "days_since_last_login", "adoption_pct", "ticket_count_90d",
    "escalation_rate_pct", "open_tickets", "avg_csat",
]
display = filtered[table_cols].sort_values("health_score").reset_index(drop=True)
st.dataframe(
    display,
    use_container_width=True,
    height=380,
    column_config={
        "risk_tier": st.column_config.TextColumn("Risk"),
        "health_score": st.column_config.ProgressColumn(
            "Health Score", min_value=0, max_value=100, format="%.1f"
        ),
        "mrr": st.column_config.NumberColumn("MRR", format="$%d"),
        "adoption_pct": st.column_config.NumberColumn("Adoption %", format="%.0f%%"),
        "escalation_rate_pct": st.column_config.NumberColumn("Escalation %", format="%.0f%%"),
    },
)

st.markdown("---")

# ---------------------------------------------------------------------------
# Row 4: Account drill-down
# ---------------------------------------------------------------------------
st.subheader("Account Drill-Down")
account_names = filtered.sort_values("health_score")["account_name"].tolist()
if not account_names:
    st.info("No accounts match the current filters.")
else:
    selected_name = st.selectbox("Select an account", account_names)
    row = accounts[accounts["account_name"] == selected_name].iloc[0]

    d1, d2, d3, d4 = st.columns(4)
    d1.metric("Health Score", f"{row['health_score']:.1f}", help=row["risk_tier"])
    d2.metric("Engagement", f"{row['engagement_score']:.1f} / 40")
    d3.metric("Adoption", f"{row['adoption_score']:.1f} / 30")
    d4.metric("Support", f"{row['support_score']:.1f} / 30")

    dc1, dc2 = st.columns([2, 1])

    with dc1:
        st.markdown("**90-Day Rolling Active Users**")
        acct_engagement = engagement[engagement["account_name"] == selected_name]
        fig = px.line(acct_engagement, x="login_date", y="rolling_30d_active_users")
        fig.update_layout(height=300, margin=dict(t=10, b=10, l=10, r=10),
                           xaxis_title=None, yaxis_title="Rolling 30d Active Users")
        fig.update_traces(line_color=RISK_COLORS[row["risk_tier"]])
        st.plotly_chart(fig, use_container_width=True)

    with dc2:
        st.markdown("**Score Breakdown**")
        fig = go.Figure(go.Bar(
            x=[row["engagement_score"], row["adoption_score"], row["support_score"]],
            y=["Engagement", "Adoption", "Support"],
            orientation="h",
            marker_color=RISK_COLORS[row["risk_tier"]],
        ))
        fig.update_layout(height=300, margin=dict(t=10, b=10, l=10, r=10),
                           xaxis_title="Points")
        st.plotly_chart(fig, use_container_width=True)

    dc3, dc4 = st.columns(2)
    with dc3:
        st.markdown("**Feature Adoption**")
        acct_features = features[features["account_name"] == selected_name].copy()
        acct_features["status"] = acct_features["is_adopted"].map({1: "Adopted", 0: "Not Adopted"})
        fig = px.bar(
            acct_features.sort_values("usage_count"), x="usage_count", y="feature_name",
            color="status", orientation="h",
            color_discrete_map={"Adopted": "#2E7D32", "Not Adopted": "#D64545"},
        )
        fig.update_layout(height=320, margin=dict(t=10, b=10, l=10, r=10), yaxis_title=None)
        st.plotly_chart(fig, use_container_width=True)

    with dc4:
        st.markdown("**Recent Support Tickets**")
        acct_tickets = tickets[tickets["account_name"] == selected_name].sort_values(
            "created_date", ascending=False
        )[["created_date", "priority", "category", "resolved_date", "csat_score"]]
        st.dataframe(acct_tickets, use_container_width=True, height=320, hide_index=True)

st.markdown("---")
st.caption(
    "Synthetic demo data · Scoring logic lives in sql/health_scoring.sql · "
    "Pipeline: scripts/generate_data.py -> scripts/process_health_scores.py -> app.py"
)
