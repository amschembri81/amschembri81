import Link from "next/link";

export const metadata = {
  title: "Projects",
  description:
    "Automation tools, dashboards, and ML applications built with Google Apps Script, SQL, Python, and modern web tools.",
};

export default function ProjectsOverview() {
  return (
    <>
      <main className="min-h-screen text-white pt-28 p-6">
        <h1 className="text-3xl font-bold mb-2 text-center">Applied Data &amp; Technical Projects</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Independent projects built to keep my technical skills sharp alongside my implementation and
          customer success work — automation tools, dashboards, and ML applications built with
          Google Apps Script, SQL, Python, and modern web tools.
        </p>

        {/* Automation & Implementation Projects */}
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-200">
          Automation &amp; Implementation Projects
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-6">
          Built directly out of the implementation and customer success work I do every day — automating
          the manual reporting and cleanup tasks that shouldn&apos;t still be manual.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <Link
            href="/projects/automation/kpi-command-center"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              KPI Command Center
            </h3>
            <p>
              A Google Apps Script KPI dashboard and reporting system that turns raw support case data into
              an executive dashboard and team performance view — SLA tracking, response/resolution metrics,
              and auto-generated charts, built entirely in Google Sheets.
            </p>
          </Link>

          <Link
            href="/projects/automation/workflow-automation"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Workflow Automation &amp; Task Tracker
            </h3>
            <p>
              A Google Sheets task tracker with a custom menu for one-click updates, automatic dashboard
              refreshes, completed-task archiving, and scheduled daily refresh triggers via Apps Script.
            </p>
          </Link>

          <Link
            href="/projects/automation/sales-funnel-dashboard"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Sales &amp; Lead Funnel Dashboard
            </h3>
            <p>
              A Google Sheets tool that validates a raw CSV lead export before building the dashboard —
              conversion rate, win/loss, deal value, and owner performance, refreshed automatically.
            </p>
          </Link>

          <Link
            href="/projects/automation/spreadsheet-rescue"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Spreadsheet Rescue &amp; Optimization
            </h3>
            <p>
              A safety-first Apps Script add-on that audits a messy spreadsheet, generates a plain-language
              health report, and backs up the file automatically before any cleanup runs.
            </p>
          </Link>

          <Link
            href="/projects/automation/implementation-tracker"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Implementation Tracker
            </h3>
            <p>
              A full-stack project management tool for implementation managers — track projects,
              milestones, and risks, with an auto-computed health score and status reports exportable
              as PDF. Built with React, FastAPI, and SQLite.
            </p>
          </Link>
        </div>

        {/* Applied AI Projects */}
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-200">
          Applied AI Projects
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-6">
          LLM-powered tools — retrieval, grounded generation, and cited answers built on
          the Claude API.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {/* Project 8 */}
          <Link
            href="/projects/project8"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              PyIndex — AI-Powered Enterprise Search
            </h3>
            <p>
              A Glean-style enterprise search demo built with FastAPI and React — ingests real
              documentation from the PyPI API, indexes it with TF-IDF search, and generates
              Claude-powered, cited answers on top of the raw results.
            </p>
          </Link>

          {/* Project 9 */}
          <Link
            href="/projects/project9"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Pathlight Onboarding Assistant
            </h3>
            <p>
              A grounded AI chatbot for a fictional K-12 platform — ask a navigation
              question in plain English and get back the exact click path, cited to
              the source guide entry. Built with Flask, Claude, and a custom
              retrieval layer to pair instructional design with applied AI engineering.
            </p>
          </Link>

          {/* Project 1 */}
          <Link
            href="/projects/project1"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Clinical Text Extractor
            </h3>
            <p>
              A Streamlit dashboard that transforms unstructured clinical notes into structured, analyzable data - highlighting my skills in API integration, LLM-powered extraction, SQLite logging, and interactive visualizations to help users identify diagnoses, prescriptions, and follow-up plans with clarity and ease.</p>
          </Link>
        </div>

        {/* Data & Machine Learning */}
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-200">
          Data &amp; Machine Learning
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-6">
          Earlier projects built to sharpen my SQL, Python, and machine learning skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Project 3 */}
          <Link
            href="/projects/project3"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Term Deposit Subscription Predictor
            </h3>
            <p>
              Built a full-stack machine learning app using Random Forest and SMOTE to predict whether a banking customer will subscribe to a term deposit. Includes interactive dashboards for model evaluation, batch prediction, and customer segmentation via Streamlit.
            </p>
          </Link>

          {/* Project 6 */}
          <Link
            href="/projects/project6"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Customer Churn Explainability Dashboard
            </h3>
            <p>
              An interactive Streamlit dashboard that uses SHAP (SHapley Additive exPlanations) to
              interpret an XGBoost churn model — upload a dataset, train the model, and explore
              predictions through summary, scatter, waterfall, and decision plots.
            </p>
          </Link>

          {/* Customer Health Dashboard */}
          <Link
            href="/projects/customer-health-dashboard"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Customer Health Dashboard
            </h3>
            <p>
              Built a SQL-driven account health scoring engine — window functions and CTEs over
              synthetic login, feature-adoption, and support-ticket data — to produce a 0–100 health
              score and risk tier per account. Surfaced through both a Streamlit app and a
              zero-install HTML dashboard with a live, filterable demo.
            </p>
          </Link>

          {/* Project 4 */}
          <Link
            href="/projects/project4"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Live Data Stream Dashboard
            </h3>
            <p>
              A real-time dashboard built with FastAPI, WebSockets, and React that streams live clickstream data and purchase activity. Includes dynamic Chart.js visualizations, CSV export, and logs live product interactions. Built for performance monitoring and behavioral analysis.
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
