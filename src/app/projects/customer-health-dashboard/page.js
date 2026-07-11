export default function CustomerHealthDashboard() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Customer Health Dashboard
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A SQL-driven account health scoring engine and dashboard, built to mirror the
        kind of health-score tooling a CSM/TAM team relies on — synthetic login,
        feature-adoption, and support-ticket data feed a scoring model written entirely
        in SQL, surfaced through both a Streamlit app and a zero-install HTML dashboard.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📊 Project Summary
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>
          Generated a synthetic 60-account SaaS dataset — 90 days of daily logins,
          feature-adoption records, and support tickets — loaded into SQLite.
        </li>
        <li>
          Built the entire scoring model in SQL: a chain of views using window
          functions (rolling 30-day sums, <code>NTILE</code>, <code>PERCENT_RANK</code>)
          and CTEs to compute engagement, adoption, and support sub-scores.
        </li>
        <li>
          Combined sub-scores into a 0–100 health score and risk tier (Healthy / At
          Risk / Critical) per account, with peer quartile benchmarking.
        </li>
        <li>
          Visualized results in a Streamlit app — KPI cards, risk distribution, an
          engagement-vs-adoption risk matrix, a filterable account table, and a
          full account drill-down.
        </li>
        <li>
          Packaged a second, self-contained HTML/Chart.js version of the same
          dashboard so it can be viewed instantly with no install — see the live
          demo below.
        </li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        🧰 Tools Used
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>SQLite — CTEs, window functions, views</li>
        <li>Python, Pandas — data generation and the SQL-to-export pipeline</li>
        <li>Streamlit, Plotly — interactive dashboard</li>
        <li>Vanilla JS + Chart.js — standalone HTML dashboard</li>
      </ul>

      {/* Live Demo */}
      <div className="bg-gray-900 rounded-lg p-6 mt-10 mb-10 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-300">
          🖥️ Live Demo
        </h2>
        <p className="text-gray-300 mb-4">
          Explore the interactive dashboard directly — filter by risk tier, plan,
          industry, or CSM, sort the account table, and drill into any account&apos;s
          trend line, score breakdown, and ticket history.
        </p>
        <a
          href="/demos/customer-health-dashboard/dashboard.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Open the Dashboard
        </a>
      </div>

      {/* Files */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📁 Files
      </h2>
      <p className="text-gray-300 mb-4">
        Download the SQL scoring logic, the Streamlit app, the data generator, or a
        sample of the scored output.
      </p>
      <div className="flex flex-wrap gap-4 mb-10">
        <a
          href="/files/customer-health-dashboard/health_scoring.sql"
          download
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          Download health_scoring.sql
        </a>
        <a
          href="/files/customer-health-dashboard/app.py"
          download
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          Download app.py
        </a>
        <a
          href="/files/customer-health-dashboard/generate_data.py"
          download
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          Download generate_data.py
        </a>
        <a
          href="/files/customer-health-dashboard/account_health_sample.csv"
          download
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          Download Sample Output (.csv)
        </a>
      </div>

      {/* GitHub Link */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📂 GitHub Repository
      </h2>
      <p>
        <a
          href="https://github.com/amschembri81/Customer-Health-Dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Project on GitHub
        </a>
      </p>
    </div>
  );
}
