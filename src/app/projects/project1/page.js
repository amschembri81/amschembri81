export default function Project1() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Clinical Text Extractor: GPT‑4 Powered Streamlit Dashboard
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        This app demonstrates how to extract structured information from
        unstructured clinical notes using OpenAI{"'"}s GPT‑4 model. It enables both
        CSV-based batch extraction and manual input, while storing results in a
        SQLite database and providing rich visualizations.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📊 Project Summary</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Uploads CSVs of clinical notes and extracts diagnoses, medications, and follow-up plans using GPT‑4.</li>
        <li>Includes manual input for one-off extraction scenarios.</li>
        <li>Logs extractions in a SQLite database for traceability and historical review.</li>
        <li>Visualizes key extraction metrics and audit summaries in real-time.</li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">🧰 Tools Used</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Streamlit for UI and dashboard interactivity</li>
        <li>OpenAI API (GPT‑4) for clinical note parsing</li>
        <li>SQLite for structured logging and persistence</li>
        <li>Plotly Express for dynamic visualizations</li>
        <li>Pandas for data preprocessing</li>
      </ul>

      {/* Screenshots */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📷 Dashboard Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <a
          href="/images/project1/Upload_Extract.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project1/Upload_Extract.png"
            alt="Upload and Extract view"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/project1/Manual_Input.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project1/Manual_Input.png"
            alt="Manual Input view"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      {/* GitHub Link */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📂 GitHub Repository</h2>
      <p>
        <a
          href="https://github.com/amschembri81/Clinical-Text-Extractor"
          target="_blank"
          className="text-blue-500 underline"
        >
          View Clinical Text Extractor on GitHub
        </a>
      </p>
    </div>
  );
}