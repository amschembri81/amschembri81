export default function Project3() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Term Deposit Subscription Predictor: SMOTE + Random Forest + Streamlit
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A full-stack machine learning project that predicts whether customers
        will subscribe to a term deposit based on banking campaign data. Built
        with Python, Random Forests, SMOTE, and deployed in an interactive
        Streamlit app.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📊 Project Summary
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Cleaned and encoded banking campaign data with over 40k records.</li>
        <li>Trained a Random Forest classifier and improved results with SMOTE balancing.</li>
        <li>Visualized top predictors, evaluation metrics, and customer segments.</li>
        <li>Deployed an interactive Streamlit app with navigation and batch prediction.</li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        🧰 Tools Used
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Pandas, NumPy, Matplotlib, Seaborn</li>
        <li>Scikit-learn (train/test split, classification, SMOTE)</li>
        <li>Streamlit for dashboard deployment</li>
      </ul>

      {/* Screenshots */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📷 Dashboard Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <a
          href="/images/project3/Model_Evaluation_Metrics.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project3/Model_Evaluation_Metrics.png"
            alt="Model Evaluation Metrics"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/project3/Top_Important_Features.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project3/Top_Important_Features.png"
            alt="Top Important Features"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <a
          href="/images/project3/Segment_Analysis.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project3/Segment_Analysis.png"
            alt="Segment Analysis"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/project3/Batch_CSV_Prediction.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project3/Batch_CSV_Prediction.png"
            alt="Batch CSV Prediction"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      {/* Notebook Download */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📓 Jupyter Notebook
      </h2>
      <p className="text-gray-300 mb-4">
        Download the notebook used for modeling, EDA, and Streamlit setup.
      </p>
      <a
        href="/assets/Untitled.ipynb"
        target="_blank"
        className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition mb-10"
        download
      >
        Download Notebook (.ipynb)
      </a>

      {/* GitHub Link */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📂 GitHub Repository
      </h2>
      <p>
        <a
          href="https://github.com/amschembri81/term_deposit_sub_predictor"
          target="_blank"
          className="text-blue-500 underline"
        >
          View Project on GitHub
        </a>
      </p>
    </div>
  );
}