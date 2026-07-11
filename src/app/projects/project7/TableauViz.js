"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function TableauViz() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    const vizContainer = document.getElementById("tableauViz");
    if (vizContainer) {
      vizContainer.appendChild(script);
    }
  }, []);

  return (
    <>
      <main className="min-h-screen text-white px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-300">
          SuperStore Sales Dashboard
        </h1>

        {/* Description */}
        <section className="max-w-5xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-300">
            This interactive Tableau dashboard showcases my ability to transform raw sales data into clear,
            actionable insights. Using real-world SuperStore data, I conducted a multi-level analysis of profit
            trends, regional sales performance, and product category effectiveness. This project highlights my
            proficiency in data cleaning, visual analytics, and UX-focused dashboard design—essential skills I use
            to help stakeholders quickly understand performance and make informed decisions.
          </p>
        </section>

        {/* Dashboard + Dataset */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Dashboard */}
          <div
            className="tableauPlaceholder"
            id="tableauViz"
            style={{ position: "relative", width: "100%", height: "700px" }}
          >
            <noscript>
              <a href="https://public.tableau.com/views/SuperStoreSalesPerformance-AS/SuperStoreSalesPerformanceDashboard">
                <Image
                  alt="Superstore Dashboard"
                  src="https://public.tableau.com/static/images/Su/SuperStoreSalesPerformance-AS/SuperStoreSalesPerformanceDashboard/1_rss.png"
                  width={1200}
                  height={800}
                  style={{ border: "none", width: "100%", height: "auto" }}
                />
              </a>
            </noscript>
            <object
              className="tableauViz"
              style={{
                width: "100%",
                height: "700px",
                display: "block",
                border: "none",
              }}
            >
              <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
              <param name="embed_code_version" value="3" />
              <param name="site_root" value="" />
              <param
                name="name"
                value="SuperStoreSalesPerformance-AS/SuperStoreSalesPerformanceDashboard"
              />
              <param name="tabs" value="yes" />
              <param name="toolbar" value="yes" />
              <param
                name="static_image"
                value="https://public.tableau.com/static/images/Su/SuperStoreSalesPerformance-AS/SuperStoreSalesPerformanceDashboard/1.png"
              />
              <param name="animate_transition" value="yes" />
              <param name="display_static_image" value="yes" />
              <param name="display_spinner" value="yes" />
              <param name="display_overlay" value="yes" />
              <param name="display_count" value="yes" />
              <param name="language" value="en-US" />
            </object>
          </div>

          {/* CSV Download */}
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col justify-center items-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-300 text-center">
              📁 Download the Dataset
            </h2>
            <p className="text-gray-300 mb-6 text-center">
              Explore the original CSV dataset used to build the dashboard. You can open it in Excel, Power BI, or any data tool of your choice.
            </p>
            <a
              href="/assets/SuperStore_Sales_Data.csv"
              download
              className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
            >
              Download SuperStore_Sales_Data.csv
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
