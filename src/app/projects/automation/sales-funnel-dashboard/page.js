export default function SalesFunnelDashboard() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Automated Sales &amp; Lead Funnel Dashboard
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A Google Sheets tool that turns a raw CSV export of leads into a validated,
        ready-to-present sales dashboard — built so a sales or CS team can drop in
        their own data without touching a formula.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📊 Project Summary
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>
          Paste or import a CSV export into the Raw Upload tab — required fields
          (lead_id, created_date, stage) are clearly documented, with optional
          fields for closed_date, owner, and amount.
        </li>
        <li>
          <span className="font-semibold">Validate Input Data</span> runs an
          automated check before anything touches the dashboard, flagging missing or
          malformed columns instead of letting bad data break the report.
        </li>
        <li>
          <span className="font-semibold">Refresh Dashboard</span> calculates leads
          created, qualified leads, conversion rate, win/loss counts, win rate, and
          average deal value, then rebuilds the stage distribution, leads-by-week,
          win/loss, and owner performance charts.
        </li>
        <li>
          Designed for repeatable use — a sales lead can re-run this every week with
          a fresh export and get a consistent, accurate dashboard every time.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        🧰 Tools Used
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Google Apps Script (custom menu, validation logic)</li>
        <li>Google Sheets (data import, charts, KPI calculations)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📷 Setup, Validation &amp; Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <a href="/images/automation/sales-funnel-dashboard/Setup_Screen.png" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/automation/sales-funnel-dashboard/Setup_Screen.png"
            alt="Setup tab explaining how to import data and required columns"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a href="/images/automation/sales-funnel-dashboard/Data_Validation.png" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/automation/sales-funnel-dashboard/Data_Validation.png"
            alt="Validation tab confirming required and optional columns were found"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <a href="/images/automation/sales-funnel-dashboard/Demo_Raw_Data.png" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/automation/sales-funnel-dashboard/Demo_Raw_Data.png"
            alt="Sample raw lead data ready for import"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a href="/images/automation/sales-funnel-dashboard/Updated_Dashboard.png" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/automation/sales-funnel-dashboard/Updated_Dashboard.png"
            alt="Finished sales and lead funnel dashboard with KPIs and charts"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
  );
}
