const BASE_URL = "https://www.amanda-morrison.com";

const staticRoutes = [
  "",
  "/about",
  "/projects",
  "/projects/automation/kpi-command-center",
  "/projects/automation/workflow-automation",
  "/projects/automation/sales-funnel-dashboard",
  "/projects/automation/spreadsheet-rescue",
  "/projects/customer-health-dashboard",
  "/projects/project1",
  "/projects/project3",
  "/projects/project4",
  "/projects/project6",
  "/projects/project8",
  "/projects/project9",
  "/skills",
  "/contact",
  "/resume",
];

export default function sitemap() {
  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7,
  }));
}
