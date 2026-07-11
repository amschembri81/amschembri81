import Image from "next/image";

export const metadata = {
  title: "Spreadsheet Rescue & Optimization",
  description:
    "A safety-first Google Sheets add-on that audits a messy spreadsheet, generates a plain-language health report, and backs up the file before any cleanup runs.",
  openGraph: {
    title: "Spreadsheet Rescue & Optimization | Amanda Morrison",
    description:
      "A safety-first Google Sheets add-on that audits a messy spreadsheet, generates a plain-language health report, and backs up the file before any cleanup runs.",
  },
};

export default function SpreadsheetRescue() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Spreadsheet Rescue &amp; Optimization
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A safety-first Google Sheets add-on that audits a messy spreadsheet and
        reports exactly what&apos;s wrong with it — without deleting or changing a
        single cell until you say so.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📊 Project Summary
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>
          <span className="font-semibold">Run Spreadsheet Audit</span> scans every
          sheet and generates a Rescue Report tab — rows, columns, blank rows,
          formula cells, and a plain-language status (Healthy, Needs Redesign, Large
          Dataset) for each tab. No data is touched during the audit.
        </li>
        <li>
          <span className="font-semibold">Backup Created</span> automatically saves
          a timestamped backup copy before any cleanup action runs, so changes are
          always reversible.
        </li>
        <li>
          <span className="font-semibold">Clean Blank Rows</span> removes completely
          empty rows from data tabs on command, with a confirmation step before
          anything is deleted.
        </li>
        <li>
          Built this after one too many client spreadsheets arrived in rough shape —
          the goal was a tool that diagnoses problems clearly enough that a
          non-technical user could understand what needed fixing and why.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        🧰 Tools Used
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Google Apps Script (custom menu, dialogs, backup logic)</li>
        <li>Google Sheets (data auditing, reporting)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📷 Audit, Backup &amp; Cleanup
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <a href="/images/automation/spreadsheet-rescue/Run_Audit.png" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/automation/spreadsheet-rescue/Run_Audit.png"
            alt="Run Spreadsheet Audit confirmation dialog"
            width={806}
            height={358}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a href="/images/automation/spreadsheet-rescue/Spreadsheet_Audit_Report.png" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/automation/spreadsheet-rescue/Spreadsheet_Audit_Report.png"
            alt="Rescue Report showing rows, columns, blank rows, and status per sheet"
            width={944}
            height={246}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <a href="/images/automation/spreadsheet-rescue/Backup_Created.png" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/automation/spreadsheet-rescue/Backup_Created.png"
            alt="Backup Created confirmation before running cleanup"
            width={720}
            height={398}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a href="/images/automation/spreadsheet-rescue/Clean_Blank_Rows.png" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/automation/spreadsheet-rescue/Clean_Blank_Rows.png"
            alt="Clean Blank Rows confirmation dialog"
            width={888}
            height={464}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📁 Files
      </h2>
      <p className="text-gray-300 mb-4">
        Download the demo dataset used to test the audit and cleanup tools.
      </p>
      <a
        href="/files/automation/Spreadsheet_Rescue_Demo_Data.xlsx"
        download
        className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition mb-10"
      >
        Download Demo Data (.xlsx)
      </a>
    </div>
  );
}
