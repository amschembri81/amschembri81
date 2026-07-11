import TableauViz from "./TableauViz";

export const metadata = {
  title: "SuperStore Sales Dashboard",
  description:
    "An interactive Tableau dashboard analyzing SuperStore sales data — profit trends, regional performance, and product category effectiveness.",
  openGraph: {
    title: "SuperStore Sales Dashboard | Amanda Morrison",
    description:
      "An interactive Tableau dashboard analyzing SuperStore sales data — profit trends, regional performance, and product category effectiveness.",
  },
};

export default function Project7() {
  return <TableauViz />;
}
