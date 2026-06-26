export default function Project5() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Task Tracker: Google Sheets + React + TailwindCSS
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A full-stack productivity tool built with React that connects to Google
        Sheets. It lets users submit, filter, and view tasks—designed for
        streamlined task management and visual tracking of progress.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📊 Project Summary</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Built a task management UI with React and TailwindCSS.</li>
        <li>Connected to Google Sheets using the Google Sheets API.</li>
        <li>Enabled task submission, status filtering, and live updates in the spreadsheet.</li>
        <li>Used conditional UI elements and status colors to enhance task visibility.</li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">🧰 Tools Used</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>React, TailwindCSS, Google Sheets API</li>
        <li>JavaScript, HTML, JSX</li>
      </ul>

      {/* Screenshots */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📷 App Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <a
          href="/images/project5/Submit_A_Task.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project5/Submit_A_Task.png"
            alt="Submit a Task"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/project5/Submitted_Tasks.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project5/Submitted_Tasks.png"
            alt="Submitted Tasks Table"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="mt-4">
        <a
          href="/images/project5/Task_Tracker_Spreadsheet.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project5/Task_Tracker_Spreadsheet.png"
            alt="Connected Google Sheet"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      {/* GitHub Link */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📂 GitHub Repository</h2>
      <p>
        <a
          href="https://github.com/amschembri81/task_tracker"
          target="_blank"
          className="text-blue-500 underline"
        >
          View Project on GitHub
        </a>
      </p>
    </div>
  );
}