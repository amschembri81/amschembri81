/*******************************************************
 * CUSTOM KPI DASHBOARD & EXECUTIVE REPORTING SYSTEM
 *
 * Tabs created/used:
 * 🟡 Setup
 * 🔵 Raw Data
 * 🟠 Clean Data
 * 🟢 Executive Dashboard
 * 🟢 Team Metrics
 * 🟣 Config
 *******************************************************/

const CONFIG = {
  setupSheetName: "Setup",
  rawDataSheetName: "Raw Data",
  cleanDataSheetName: "Clean Data",
  dashboardSheetName: "Executive Dashboard",
  teamMetricsSheetName: "Team Metrics",
  configSheetName: "Config",

  columns: {
    submittedDate: "Submitted Date",
    respondedDate: "Responded To",
    resolvedDate: "Resolved Date",
    owner: "Owner",
    status: "Status",
    account: "Account",
    priority: "Priority"
  }
};

/**
 * Setup function
 */

function setupInstructionsSheet_(ss) {
  let sheet = ss.getSheetByName(CONFIG.setupSheetName);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.setupSheetName);
  }

  sheet.clear();

  const values = [
    ["KPI Dashboard Setup Instructions"],
    [""],
    ["Step 1"],
    ["Paste or import your client/source data into the Raw Data tab."],
    [""],
    ["Step 2"],
    ["Make sure the Raw Data tab includes these headers:"],
    ["Submitted Date, Responded To, Resolved Date, Owner, Status, Account, Priority"],
    [""],
    ["Step 3"],
    ["Go to Extensions → Apps Script."],
    [""],
    ["Step 4"],
    ["Run the function named buildKPIDashboard."],
    [""],
    ["Step 5"],
    ["Review the Executive Dashboard and Team Metrics tabs."]
  ];

  sheet.getRange(1, 1, values.length, 1).setValues(values);

  sheet.getRange("A1")
    .setFontSize(18)
    .setFontWeight("bold")
    .setBackground("#1f4e78")
    .setFontColor("#ffffff")
    .setHorizontalAlignment("center");

  sheet.getRange("A3:A17")
    .setFontSize(12)
    .setWrap(true);

  sheet.setColumnWidth(1, 700);
  sheet.setFrozenRows(1);

  return sheet;
}

/**
 * Main function to run.
 */
function buildKPIDashboard() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  SpreadsheetApp.getUi().alert(
    "Building Dashboard",
    "The KPI Dashboard is now running. Make sure your data is in the Raw Data tab.",
    SpreadsheetApp.getUi().ButtonSet.OK
  );

  setupInstructionsSheet_(ss);

  const configSheet = setupConfig_(ss);
  const settings = getConfigSettings_(configSheet);

  const rawSheet = setupRawDataSheet_(ss);
  const rawRows = getRawData_(rawSheet);

  const cleanRows = cleanData_(rawRows, settings);

  const cleanSheet = resetSheet_(ss, CONFIG.cleanDataSheetName);
  const dashboardSheet = resetSheet_(ss, CONFIG.dashboardSheetName);
  const teamSheet = resetSheet_(ss, CONFIG.teamMetricsSheetName);

  buildCleanDataSheet_(cleanSheet, cleanRows);
  buildTeamMetrics_(teamSheet, cleanRows);
  buildExecutiveDashboard_(dashboardSheet, cleanRows, teamSheet);


  applyGlobalFormatting_(ss);

  SpreadsheetApp.flush();
}

/*******************************************************
 * TAB SETUP
 *******************************************************/

function setupRawDataSheet_(ss) {
  let sheet = ss.getSheetByName(CONFIG.rawDataSheetName);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.rawDataSheetName);
    sheet.getRange(1, 1, 1, 7).setValues([[
      "Submitted Date",
      "Responded To",
      "Resolved Date",
      "Owner",
      "Status",
      "Account",
      "Priority"
    ]]);

    styleHeader_(sheet.getRange(1, 1, 1, 7));
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, 7);
  }

  return sheet;
}

function setupConfig_(ss) {
  let sheet = ss.getSheetByName(CONFIG.configSheetName);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.configSheetName);
  }

  sheet.clear();

  const values = [
    ["Setting", "Value", "Description"],
    ["SLA Hours", 24, "Target response time in hours"],
    ["High Priority SLA Hours", 12, "Optional stricter SLA for high-priority items"],
    ["Dashboard Title", "Custom KPI Dashboard & Executive Reporting", "Main dashboard title"],
    ["Client Name", "Demo Client", "Used for portfolio/demo labeling"]
  ];

  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
  styleHeader_(sheet.getRange(1, 1, 1, 3));
  sheet.getRange(1, 1, 1, 3)
    .setHorizontalAlignment("center");

  sheet.getRange(2, 1, values.length - 1, 3)
    .setHorizontalAlignment("left");
  sheet.autoResizeColumns(1, 3);

  return sheet;
}

function getConfigSettings_(sheet) {
  const values = sheet.getDataRange().getValues();
  const settings = {};

  values.slice(1).forEach(row => {
    settings[row[0]] = row[1];
  });

  return {
    slaHours: Number(settings["SLA Hours"]) || 24,
    dashboardTitle: settings["Dashboard Title"] || "Custom KPI Dashboard & Executive Reporting",
    clientName: settings["Client Name"] || "Demo Client"
  };
}

function resetSheet_(ss, sheetName) {
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  sheet.clear();

  const charts = sheet.getCharts();
  charts.forEach(chart => {
    sheet.removeChart(chart);
  });

  return sheet;
}

/*******************************************************
 * DATA PROCESSING
 *******************************************************/

function getRawData_(sheet) {
  const values = sheet.getDataRange().getValues();

  if (values.length < 2) return [];

  const headers = values.shift();

  return values
    .filter(row => row.some(cell => cell !== ""))
    .map(row => {
      const obj = {};
      headers.forEach((header, i) => {
        obj[header] = row[i];
      });
      return obj;
    });
}

function cleanData_(rows, settings) {
  return rows.map(row => {
    const submitted = toDate_(row[CONFIG.columns.submittedDate]);
    const responded = toDate_(row[CONFIG.columns.respondedDate]);
    const resolved = toDate_(row[CONFIG.columns.resolvedDate]);

    const responseHours = submitted && responded
      ? hoursBetween_(submitted, responded)
      : null;

    const resolutionHours = submitted && resolved
      ? hoursBetween_(submitted, resolved)
      : null;

    return {
      submitted,
      responded,
      resolved,
      owner: row[CONFIG.columns.owner] || "Unassigned",
      status: row[CONFIG.columns.status] || "Unknown",
      account: row[CONFIG.columns.account] || "Unknown",
      priority: row[CONFIG.columns.priority] || "Unknown",
      responseHours,
      resolutionHours,
      metSLA: responseHours !== null && responseHours <= settings.slaHours
    };
  });
}

function buildCleanDataSheet_(sheet, rows) {
  const output = [[
    "Submitted Date",
    "Responded To",
    "Resolved Date",
    "Owner",
    "Status",
    "Account",
    "Priority",
    "Response Hours",
    "Resolution Hours",
    "Met SLA"
  ]];

  rows.forEach(row => {
    output.push([
      row.submitted,
      row.responded,
      row.resolved,
      row.owner,
      row.status,
      row.account,
      row.priority,
      round_(row.responseHours),
      round_(row.resolutionHours),
      row.metSLA ? "Yes" : "No"
    ]);
  });

  sheet.getRange(1, 1, output.length, output[0].length).setValues(output);
  styleHeader_(sheet.getRange(1, 1, 1, output[0].length));
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, output[0].length);
}

/*******************************************************
 * TEAM METRICS
 *******************************************************/

function buildTeamMetrics_(sheet, rows) {
  const grouped = {};

  rows.forEach(row => {
    if (!grouped[row.owner]) grouped[row.owner] = [];
    grouped[row.owner].push(row);
  });

  const output = [[
    "Owner",
    "Total Cases",
    "Responded To",
    "Resolved",
    "SLA %",
    "Avg Response Hours",
    "Typical Response Hours",
    "Avg Resolution Hours",
    "Open Cases",
    "Resolved Cases"
  ]];

  Object.keys(grouped).forEach(owner => {
    const ownerRows = grouped[owner];

    const total = ownerRows.length;

    const responded = ownerRows.filter(r =>
      r.responded
    ).length;

    const resolved = ownerRows.filter(r =>
      r.resolved
    ).length;

    const metSLA = ownerRows.filter(r =>
      r.metSLA
    ).length;

    const openCases = ownerRows.filter(r =>
      String(r.status).toLowerCase() !== "resolved"
    ).length;

    const resolvedCases = ownerRows.filter(r =>
      String(r.status).toLowerCase() === "resolved"
    ).length;

    output.push([
      owner,
      total,
      responded,
      resolved,
      responded ? metSLA / responded : 0,
      round_(average_(ownerRows.map(r => r.responseHours))),
      round_(median_(ownerRows.map(r => r.responseHours))),
      round_(average_(ownerRows.map(r => r.resolutionHours))),
      openCases,
      resolvedCases
    ]);
  });

  sheet.getRange(1, 1, output.length, output[0].length).setValues(output);
  styleHeader_(sheet.getRange(1, 1, 1, output[0].length));

  if (output.length > 1) {
    sheet.getRange(2, 5, output.length - 1, 1).setNumberFormat("0%");
  }

  sheet.getRange(1, 1, 1, output[0].length).setWrap(true);
  sheet.getDataRange().setHorizontalAlignment("center");

  sheet.setFrozenRows(1);

  sheet.setColumnWidths(1, output[0].length, 150);

  addTeamMetricsCharts_(sheet);
}

/*******************************************************
 * EXECUTIVE DASHBOARD
 *******************************************************/

function buildExecutiveDashboard_(sheet, rows, teamSheet) {
  const totalCases = rows.length;
  const respondedCases = rows.filter(r => r.responded).length;
  const resolvedCases = rows.filter(r => r.resolved).length;
  const openCases = rows.filter(r => String(r.status).toLowerCase() !== "resolved").length;
  const slaMet = rows.filter(r => r.metSLA).length;

  const avgResponse = average_(rows.map(r => r.responseHours));
  const medianResponse = median_(rows.map(r => r.responseHours));
  const avgResolution = average_(rows.map(r => r.resolutionHours));
  const slaPercent = respondedCases ? slaMet / respondedCases : 0;

  sheet.setColumnWidths(1, 12, 120);
  sheet.setRowHeights(1, 60, 28);

  sheet.getRange("A1:L1").merge();
  sheet.getRange("A1").setValue("Custom KPI Dashboard & Executive Reporting");
  sheet.getRange("A1")
    .setFontSize(20)
    .setFontWeight("bold")
    .setHorizontalAlignment("center")
    .setBackground("#1f4e78")
    .setFontColor("#ffffff");

  const kpis = [
    ["Total Cases", totalCases],
    ["Responded To", respondedCases],
    ["Resolved", resolvedCases],
    ["Open / In Progress", openCases],
    ["SLA %", slaPercent],
    ["Avg Response Hours", round_(avgResponse)],
    ["Typical Response Hours", round_(medianResponse)],
    ["Avg Resolution Hours", round_(avgResolution)]
  ];

  let startCol = 1;
  let startRow = 3;

  kpis.forEach((kpi, index) => {
    const row = startRow + Math.floor(index / 4) * 4;
    const col = startCol + (index % 4) * 3;

    const box = sheet.getRange(row, col, 3, 2);
    box.merge();
    box.setValue(`${kpi[0]}\n${kpi[0].includes("%") ? formatPercent_(kpi[1]) : kpi[1]}`);
    box.setFontWeight("bold");
    box.setFontSize(13);
    box.setHorizontalAlignment("center");
    box.setVerticalAlignment("middle");
    box.setWrap(true);
    box.setBackground("#eaf3f8");
    box.setBorder(true, true, true, true, false, false);
  });

  buildStatusSummary_(sheet, rows, 13, 1);
  buildPrioritySummary_(sheet, rows, 13, 5);
  buildAccountSummary_(sheet, rows, 13, 9);

  addDashboardCharts_(sheet, teamSheet);
}

function buildStatusSummary_(sheet, rows, startRow, startCol) {
  const summary = countBy_(rows, "status");
  const output = [["Status", "Count"], ...summary];

  sheet.getRange(startRow, startCol, output.length, 2).setValues(output);
  styleHeader_(sheet.getRange(startRow, startCol, 1, 2));
}

function buildPrioritySummary_(sheet, rows, startRow, startCol) {
  const summary = countBy_(rows, "priority");
  const output = [["Priority", "Count"], ...summary];

  sheet.getRange(startRow, startCol, output.length, 2).setValues(output);
  styleHeader_(sheet.getRange(startRow, startCol, 1, 2));
}

function buildAccountSummary_(sheet, rows, startRow, startCol) {
  const summary = countBy_(rows, "account");

  // Header row
  sheet.getRange(startRow, 9, 1, 2).merge();
  sheet.getRange(startRow, 9)
    .setValue("Account");

  sheet.getRange(startRow, 11)
    .setValue("Count");

  styleHeader_(sheet.getRange(startRow, 9, 1, 3));

  // Data rows
  summary.forEach((row, i) => {
    const r = startRow + 1 + i;

    // Merge I + J for account name
    sheet.getRange(r, 9, 1, 2).merge();
    sheet.getRange(r, 9)
      .setValue(row[0]);

    // Count goes in K
    sheet.getRange(r, 11)
      .setValue(row[1]);
  });

  // Formatting
  sheet.getRange(startRow, 9, summary.length + 1, 3)
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle");

  sheet.autoResizeColumns(9, 3);

  // Add extra width to merged account area
  sheet.setColumnWidth(9, 180);
  sheet.setColumnWidth(10, 180);
}

function addDashboardCharts_(dashboardSheet, teamSheet) {
  const lastTeamRow = teamSheet.getLastRow();

  if (lastTeamRow < 2) return;

  const statusChart = dashboardSheet.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(dashboardSheet.getRange("A13:B20"))
    .setPosition(24, 1, 0, 0)
    .setOption("title", "Cases by Status")
    .setOption("width", 420)
    .setOption("height", 280)
    .build();

  const priorityChart = dashboardSheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(dashboardSheet.getRange("E13:F20"))
    .setPosition(24, 5, 0, 0)
    .setOption("title", "Cases by Priority")
    .setOption("width", 420)
    .setOption("height", 280)
    .setOption("legend", { position: "none" })
    .build();

  const teamVolumeChart = dashboardSheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(teamSheet.getRange(1, 1, lastTeamRow, 2))
    .setPosition(37, 1, 0, 0)
    .setOption("title", "Total Cases by Owner")
    .setOption("width", 520)
    .setOption("height", 320)
    .setOption("legend", { position: "none" })
    .build();

  const responseChart = dashboardSheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(teamSheet.getRange(1, 1, lastTeamRow, 1))
    .addRange(teamSheet.getRange(1, 6, lastTeamRow, 2))
    .setPosition(37, 6, 0, 0)
    .setOption("title", "Avg vs Typical Response Hours")
    .setOption("width", 520)
    .setOption("height", 320)
    .build();

  dashboardSheet.insertChart(statusChart);
  dashboardSheet.insertChart(priorityChart);
  dashboardSheet.insertChart(teamVolumeChart);
  dashboardSheet.insertChart(responseChart);
}

/*******************************************************
 * HELPERS
 *******************************************************/

function styleHeader_(range) {
  range
    .setFontWeight("bold")
    .setBackground("#1f4e78")
    .setFontColor("#ffffff")
    .setHorizontalAlignment("center");
}

function countBy_(rows, field) {
  const counts = {};

  rows.forEach(row => {
    const key = row[field] || "Unknown";
    counts[key] = (counts[key] || 0) + 1;
  });

  return Object.keys(counts)
    .sort()
    .map(key => [key, counts[key]]);
}

function toDate_(value) {
  if (!value) return null;

  if (Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value)) {
    return value;
  }

  const parsed = new Date(value);
  return isNaN(parsed) ? null : parsed;
}

function hoursBetween_(start, end) {
  return (end - start) / (1000 * 60 * 60);
}

function average_(values) {
  const nums = values.filter(v => typeof v === "number" && !isNaN(v));
  if (!nums.length) return 0;

  return nums.reduce((sum, v) => sum + v, 0) / nums.length;
}

function median_(values) {
  const nums = values
    .filter(v => typeof v === "number" && !isNaN(v))
    .sort((a, b) => a - b);

  if (!nums.length) return 0;

  const mid = Math.floor(nums.length / 2);

  return nums.length % 2
    ? nums[mid]
    : (nums[mid - 1] + nums[mid]) / 2;
}

function round_(value) {
  if (value === null || value === undefined || isNaN(value)) return "";
  return Math.round(value * 100) / 100;
}

function formatPercent_(value) {
  return `${Math.round(value * 100)}%`;
}

function applyGlobalFormatting_(ss) {
  ss.getSheets().forEach(sheet => {
    sheet.getDataRange()
      .setFontFamily("Calibri")
      .setFontSize(12);
  });
}

/*******************************************************
 * TEAM METRICS VISUALIZATIONS
 *******************************************************/

function addTeamMetricsCharts_(sheet) {
  const lastRow = sheet.getLastRow();

  if (lastRow < 2) return;

  const charts = sheet.getCharts();
  charts.forEach(chart => sheet.removeChart(chart));

  const casesByRepChart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange(1, 1, lastRow, 2)) // Owner + Total Cases
    .setPosition(14, 2, 0, 0)
    .setOption("title", "Cases by Rep")
    .setOption("width", 520)
    .setOption("height", 320)
    .setOption("legend", { position: "none" })
    .build();

  const slaChart = sheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(sheet.getRange(1, 1, lastRow, 1)) // Owner
    .addRange(sheet.getRange(1, 5, lastRow, 1)) // SLA %
    .setPosition(14, 7, 0, 0)
    .setOption("title", "SLA % by Rep")
    .setOption("width", 520)
    .setOption("height", 320)
    .setOption("legend", { position: "none" })
    .setOption("vAxis", { format: "percent" })
    .build();

  const responseChart = sheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(sheet.getRange(1, 1, lastRow, 1)) // Owner
    .addRange(sheet.getRange(1, 6, lastRow, 2)) // Avg + Typical Response
    .setPosition(32, 2, 0, 0)
    .setOption("title", "Avg vs Typical Response Hours")
    .setOption("width", 520)
    .setOption("height", 320)
    .build();

  const openResolvedChart = sheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(sheet.getRange(1, 1, lastRow, 1)) // Owner
    .addRange(sheet.getRange(1, 9, lastRow, 2)) // Open + Resolved
    .setPosition(32, 7, 0, 0)
    .setOption("title", "Open vs Resolved Cases")
    .setOption("width", 520)
    .setOption("height", 320)
    .setOption("isStacked", true)
    .build();

  sheet.insertChart(casesByRepChart);
  sheet.insertChart(slaChart);
  sheet.insertChart(responseChart);
  sheet.insertChart(openResolvedChart);
}
