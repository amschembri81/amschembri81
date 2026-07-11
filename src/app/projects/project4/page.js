import Image from "next/image";

export const metadata = {
  title: "Live Data Stream Dashboard",
  description:
    "A real-time dashboard built with FastAPI, WebSockets, and Chart.js that streams live clickstream and purchase activity, with CSV export and GitHub-integrated source.",
  openGraph: {
    title: "Live Data Stream Dashboard | Amanda Morrison",
    description:
      "A real-time dashboard built with FastAPI, WebSockets, and Chart.js that streams live clickstream and purchase activity, with CSV export and GitHub-integrated source.",
  },
};

export default function Project4() {
  return (
    <div className="pt-32 p-8 max-w-4xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Real-Time Clickstream Dashboard
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A real-time dashboard built with FastAPI, WebSockets, and Chart.js.
        Includes interactive charts, clickstream logs, exportable CSV, and
        GitHub integration.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📊 Summary</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Streamed historical clickstream from CSV via FastAPI + WebSockets.</li>
        <li>Rendered live purchase and event charts using Chart.js in React.</li>
        <li>Provides CSV export and JSON log listing from live feed.</li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">🧰 Tools Used</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>FastAPI, Pandas, Uvicorn</li>
        <li>React, Chart.js</li>
        <li>CSV export functionality</li>
      </ul>

      {/* Screenshots */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📷 Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <a
          href="/images/project4/Outcome_Distribution.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/project4/Outcome_Distribution.png"
            alt="Outcome Distribution"
            width={2756}
            height={1638}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/project4/Realtime_Product_Price.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/project4/Realtime_Product_Price.png"
            alt="Real-Time Product Price"
            width={2740}
            height={1520}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/project4/Live_Purchase_Amount.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/project4/Live_Purchase_Amount.png"
            alt="Live Purchase Amount"
            width={2766}
            height={1510}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/project4/Live_Clickstream_Data.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/project4/Live_Clickstream_Data.png"
            alt="Live Clickstream Data"
            width={2732}
            height={1396}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      {/* CSV Export + GitHub */}
      <h2 className="text-2xl font-semibold mt-10 mb-2 text-gray-300">📁 CSV Export & GitHub</h2>
      <p className="text-gray-300 mb-4">
        Download the cleaned clickstream dataset or view the source code on
        GitHub.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-24">
        <a
          href="/assets/cleaned_clickstream.csv"
          className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition text-center"
          download
        >
          Export CSV
        </a>
        <a
          href="https://github.com/amschembri81/live_data_stream"
          target="_blank"
          className="text-blue-400 underline text-center pt-3 md:pt-0"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}