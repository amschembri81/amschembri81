export default function Project2() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Amazon Review Dashboard: SQL + Python Data Pipeline
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        This project demonstrates how to build a data pipeline and interactive
        dashboard by combining SQL for data extraction, Python for
        transformation and sentiment analysis, and Streamlit for visualization.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📊 Project Summary
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Used SQL queries to extract customer product reviews and export them into CSV.</li>
        <li>Cleaned and transformed raw review data using Python and Pandas.</li>
        <li>Performed sentiment analysis and created derived features.</li>
        <li>Built a Streamlit dashboard with custom filters and 4 visualizations to explore insights.</li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        🧰 Tools Used
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>PostgreSQL, SQLAlchemy</li>
        <li>Pandas, NumPy, matplotlib</li>
        <li>Streamlit for interactive dashboard</li>
      </ul>

      {/* Screenshots */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📷 Dashboard Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <a
          href="/images/project2/amazon_reviews_dashboard_filters.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project2/amazon_reviews_dashboard_filters.png"
            alt="Streamlit dashboard sidebar filters"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/project2/amazon_reviews_score_sentiment.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project2/amazon_reviews_score_sentiment.png"
            alt="Score distribution and sentiment visualizations"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="mt-4">
        <a
          href="/images/project2/amazon_reviews_monthly_trends.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/project2/amazon_reviews_monthly_trends.png"
            alt="Monthly review count and average score trend"
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      {/* Dataset Download */}
      <div className="bg-gray-900 rounded-lg p-6 mt-10 mb-10 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-300">
          📁 Download the Dataset
        </h2>
        <p className="text-gray-300 mb-4">
          Explore the original CSV dataset used to build the dashboard.
        </p>
        <a
          href="/assets/Reviews.csv"
          target="_blank"
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
          download
        >
          Download Reviews.csv
        </a>
      </div>

      {/* GitHub Link */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📂 GitHub Repository
      </h2>
      <p>
        <a
          href="https://github.com/amschembri81/amazon_review_dashboard"
          target="_blank"
          className="text-blue-500 underline"
        >
          View Project on GitHub
        </a>
      </p>
    </div>
  );
}