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
        </div>

        {/* Data & ML Projects */}
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-200">
          Data &amp; ML Projects
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-6">
          Earlier projects built to sharpen my SQL, Python, and machine learning skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

          {/* Project 2 */}
          <Link
            href="/projects/project2"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              SQL + Python Data Pipeline
            </h3>
            <p>
              Extracted customer sales data using SQL, cleaned and analyzed it
              with Python (Pandas), and visualized trends using matplotlib and
              seaborn to uncover key business insights.
            </p>
          </Link>

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

          {/* Project 5 */}
          <Link
            href="/projects/project5"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Task Tracker with Google Sheets
            </h3>
            <p>
              A lightweight task management tool built in React using TailwindCSS and connected to Google Sheets for persistent data storage. Includes dynamic filtering by task status, real-time submission form, and spreadsheet sync for tracking due dates and priorities.
            </p>
          </Link>

          {/* Project 6 */}
          <Link
            href="/projects/project6"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Customer Churn Prediction Model
            </h3>
            <p>
              Developed a machine learning model to predict customer churn, using scikit-learn for model training and evaluation. Features include data preprocessing, feature engineering, and a comparative analysis of different classification algorithms (e.g., Logistic Regression, Gradient Boosting) to identify the most impactful predictors of churn.
            </p>
          </Link>

          {/* Project 7 */}
          <Link
            href="/projects/project7"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              SuperStore Sales Dashboard
            </h3>
            <p>
              An interactive Tableau dashboard built from real-world SuperStore data — a multi-level
              analysis of profit trends, regional sales performance, and product category effectiveness.
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
