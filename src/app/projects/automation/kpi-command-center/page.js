import Image from "next/image";

export const metadata = {
  title: "KPI Command Center",
  description:
    "A Google Apps Script–powered KPI dashboard that turns raw support case data into an executive dashboard and team performance view.",
  openGraph: {
    title: "KPI Command Center | Amanda Morrison",
    description:
      "A Google Apps Script–powered KPI dashboard that turns raw support case data into an executive dashboard and team performance view.",
  },
};

export default function KPICommandCenter() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        KPI Command Center
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A Google Apps Script–powered KPI dashboard and reporting system that turns raw
        support case data into an executive dashboard and team performance view —
        built to replace the kind of manual SLA reporting I used to do by hand.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📊 Project Summary
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>
          Built entirely in Google Sheets + Apps Script — no external tools or
          licenses required, so any team can drop it in and run it.
        </li>
        <li>
          One function call (<code>buildKPIDashboard()</code>) takes raw case data
          through a Setup → Raw Data → Clean Data pipeline and outputs a finished
          Executive Dashboard and Team Metrics view.
        </li>
        <li>
          Auto-calculates SLA %, average and typical response/resolution hours, and
          case volume by status, priority, and account.
        </li>
        <li>
          Team Metrics tab breaks performance down by rep — cases handled, SLA %, and
          response time comparisons — for 1:1s and team reviews.
        </li>
        <li>
          Config tab keeps SLA thresholds and business rules editable without
          touching the underlying script.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        🧰 Tools Used
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Google Apps Script (JavaScript)</li>
        <li>Google Sheets (formulas, charts, conditional formatting)</li>
        <li>Data cleaning &amp; transformation logic</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📷 Dashboard Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <a href="/images/automation/kpi-command-center/Executive_Dashboard.png" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/automation/kpi-command-center/Executive_Dashboard.png"
            alt="Executive Dashboard showing total cases, SLA %, and response/resolution metrics"
            width={2042}
            height={1516}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a href="/images/automation/kpi-command-center/Dashboard_Visuals.png" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/automation/kpi-command-center/Dashboard_Visuals.png"
            alt="Charts by status, priority, and account"
            width={1584}
            height={1034}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <a href="/images/automation/kpi-command-center/Team_Metrics.png" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/automation/kpi-command-center/Team_Metrics.png"
            alt="Team Metrics dashboard broken down by rep"
            width={2008}
            height={1514}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a href="/images/automation/kpi-command-center/Setup_Tab.png" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/automation/kpi-command-center/Setup_Tab.png"
            alt="Setup tab used to run the dashboard build"
            width={1194}
            height={1800}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📁 Files
      </h2>
      <p className="text-gray-300 mb-4">
        Download the Apps Script source, the setup guide, or the sample dataset used
        to build the dashboard above.
      </p>
      <div className="flex flex-wrap gap-4 mb-10">
        <a
          href="/files/automation/KPI_Command_Center.gs"
          download
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          Download Apps Script (.gs)
        </a>
        <a
          href="/files/automation/KPI_Command_Center_Setup_Guide.txt"
          download
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          Download Setup Guide
        </a>
        <a
          href="/files/automation/KPI_Sample_Data.csv"
          download
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          Download Sample Data (.csv)
        </a>
      </div>
    </div>
  );
}
