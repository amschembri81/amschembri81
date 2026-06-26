export default function WorkflowAutomation() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Workflow Automation &amp; Task Tracker
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A self-contained Google Sheets system that tracks tasks, owners, priorities,
        and due dates, then automatically rolls everything up into a live dashboard —
        with scheduled refreshes and automatic archiving so the active tracker never
        gets cluttered.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📊 Project Summary
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>
          Custom <span className="italic">Workflow Automation</span> menu added to
          Google Sheets via Apps Script, with one-click actions for the full task
          lifecycle.
        </li>
        <li>
          <span className="font-semibold">Start / Reset Tracker</span> builds all
          tabs, formatting, dropdowns, dashboard, and archive from scratch.
        </li>
        <li>
          <span className="font-semibold">Update Tracker &amp; Dashboard</span>{" "}
          auto-fills task IDs, refreshes formatting, and recalculates every dashboard
          metric and chart.
        </li>
        <li>
          Dashboard surfaces tasks by status, priority, and owner, plus overdue
          tasks and completion rate — at a glance, no manual tallying.
        </li>
        <li>
          <span className="font-semibold">Archive Completed Tasks</span> moves
          finished work out of the active tracker automatically, and a daily
          scheduled trigger can keep the whole system refreshed without anyone
          opening the file.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        🧰 Tools Used
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Google Apps Script (custom menus, time-based triggers)</li>
        <li>Google Sheets (data validation, conditional formatting, charts)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📷 Dashboard &amp; Tracker
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <a href="/images/automation/workflow-automation/Dashboard-1.png" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/automation/workflow-automation/Dashboard-1.png"
            alt="Workflow Automation dashboard showing tasks by status, priority, and owner"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a href="/images/automation/workflow-automation/Task_Tracker-01.png" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/automation/workflow-automation/Task_Tracker-01.png"
            alt="Task Tracker tab with task IDs, owners, priorities, and due dates"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📁 Files
      </h2>
      <p className="text-gray-300 mb-4">
        Download the setup guide, dashboard reference, and task tracker reference.
      </p>
      <div className="flex flex-wrap gap-4 mb-10">
        <a
          href="/files/automation/Workflow_Automation_Setup.pdf"
          download
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          Download Setup Guide (.pdf)
        </a>
        <a
          href="/files/automation/Workflow_Automation_Dashboard.pdf"
          download
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          Download Dashboard (.pdf)
        </a>
        <a
          href="/files/automation/Workflow_Automation_Task_Tracker.pdf"
          download
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          Download Task Tracker (.pdf)
        </a>
      </div>
    </div>
  );
}
