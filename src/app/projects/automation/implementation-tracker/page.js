import Image from "next/image";

export const metadata = {
  title: "Implementation Tracker",
  description:
    "A full-stack project management tool built for implementation managers — create projects, track milestones, log risks, and auto-generate status reports with a computed health score. React, FastAPI, SQLite.",
  openGraph: {
    title: "Implementation Tracker | Amanda Morrison",
    description:
      "A full-stack project management tool built for implementation managers — create projects, track milestones, log risks, and auto-generate status reports with a computed health score. React, FastAPI, SQLite.",
  },
};

export default function ImplementationTracker() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Implementation Tracker
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A full-stack project management tool built specifically for
        implementation managers — create projects, track milestones, log
        risks, and get an auto-generated status report with a computed
        health score, instead of piecing that together by hand every week.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📊 Project Summary
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>
          Designed the data model around how implementation work actually
          gets tracked: projects with a client, status, and target dates;
          milestones with an owner, due date, and status; risks with
          severity, likelihood, mitigation plan, and owner.
        </li>
        <li>
          Built a project health engine that flags overdue milestones and
          open risks by severity, then rolls everything up into a
          green/yellow/red status — the same judgment call an implementation
          manager makes in a status meeting, encoded as logic.
        </li>
        <li>
          Every project gets an auto-generated status report: completion
          percentage, overdue and upcoming milestones, and open risk counts
          by severity — viewable in-app or exported as a formatted PDF for
          stakeholder updates.
        </li>
        <li>
          Full CRUD across projects, milestones, and risks through a REST
          API, with a dashboard, tabbed project detail view, and modal forms
          on the frontend.
        </li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        🧰 Tools Used
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>FastAPI, SQLAlchemy, SQLite — REST API and data layer</li>
        <li>ReportLab — server-generated PDF status reports</li>
        <li>React, Vite, React Router — frontend</li>
        <li>Pydantic — request/response validation</li>
      </ul>

      {/* Screenshots */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📷 Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <a
          href="/images/automation/implementation-tracker/Projects_Dashboard.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/automation/implementation-tracker/Projects_Dashboard.png"
            alt="Implementation Tracker dashboard showing a project card with client and status"
            width={2372}
            height={1012}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/automation/implementation-tracker/New_Project_Modal.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/automation/implementation-tracker/New_Project_Modal.png"
            alt="New Project modal with client, status, dates, and description fields"
            width={2164}
            height={1248}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="grid grid-cols-1 mb-10">
        <a
          href="/images/automation/implementation-tracker/Status_Report.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/automation/implementation-tracker/Status_Report.png"
            alt="Auto-generated status report showing health, completion, overdue milestones, and open risks by severity"
            width={2342}
            height={1214}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      {/* Source */}
      <h2 className="text-2xl font-semibold mt-10 mb-2 text-gray-300">
        📁 Source Code
      </h2>
      <p className="text-gray-300 mb-4">
        View the full source, including the FastAPI backend, the health
        scoring and report logic, and the React frontend, on GitHub.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-24">
        <a
          href="https://github.com/amschembri81/Implementation-Tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline text-center pt-3 md:pt-0"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
