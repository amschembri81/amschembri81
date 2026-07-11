import Image from "next/image";

export const metadata = {
  title: "Customer Churn Explainability Dashboard",
  description:
    "An interactive Streamlit dashboard using SHAP to interpret XGBoost churn predictions, with summary, scatter, waterfall, and decision plots.",
  openGraph: {
    title: "Customer Churn Explainability Dashboard | Amanda Morrison",
    description:
      "An interactive Streamlit dashboard using SHAP to interpret XGBoost churn predictions, with summary, scatter, waterfall, and decision plots.",
  },
};

export default function Project6() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Customer Churn Explainability Dashboard
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        This interactive Streamlit dashboard uses SHAP (SHapley Additive
        exPlanations) to interpret and explain machine learning predictions for
        customer churn. Built using Python, XGBoost, SHAP, and Streamlit, this
        tool allows users to upload data, generate model performance metrics,
        and visualize SHAP explanations through multiple plot types.
      </p>

      {/* Dashboard Image */}
      <div className="mb-10">
        <Image
          src="/images/project6/Dashboard.png"
          alt="Customer Churn Dashboard"
          width={1000}
          height={600}
          className="rounded shadow-md w-full"
        />
      </div>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">🔍 Features</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Upload custom CSV datasets</li>
        <li>Train XGBoost model and view accuracy & AUC</li>
        <li>SHAP Force, Summary, Scatter, Waterfall, and Decision plots</li>
        <li>Interactive SHAP scatter by selected feature</li>
        <li>Export all visuals to PDF</li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📂 Tools & Tech</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Python (XGBoost, SHAP, Pandas, Matplotlib)</li>
        <li>Streamlit for interactive web app</li>
        <li>Plotly for interactive visualizations</li>
        <li>Jupyter Notebook for model development</li>
      </ul>

      {/* Screenshots */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📸 Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <Image
          src="/images/project6/SHAP_Summary_Plot.png"
          alt="SHAP Summary"
          width={600}
          height={400}
          className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
        />
        <Image
          src="/images/project6/SHAP_Scatter_Monthly.png"
          alt="SHAP Scatter"
          width={600}
          height={400}
          className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
        />
        <Image
          src="/images/project6/Interactive_SHAP.png"
          alt="Interactive SHAP"
          width={600}
          height={400}
          className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
        />
        <Image
          src="/images/project6/SHAP_Waterfall.png"
          alt="SHAP Waterfall"
          width={600}
          height={400}
          className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
        />
        <Image
          src="/images/project6/SHAP_Decision.png"
          alt="SHAP Decision"
          width={600}
          height={400}
          className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* GitHub Link */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📂 GitHub Repository</h2>
      <p>
        <a
          href="https://github.com/amschembri81/Customer-Churn-Explainability-Dashboard"
          target="_blank"
          className="text-blue-500 underline"
        >
          View Project on GitHub
        </a>
      </p>
    </div>
  );
}