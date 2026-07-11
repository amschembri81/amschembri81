export const metadata = {
  title: "PyIndex — AI-Powered Enterprise Search",
  description:
    "A Glean-style enterprise search demo built with FastAPI and React — ingests real PyPI documentation, indexes it with TF-IDF, and generates Claude-powered cited answers.",
  openGraph: {
    title: "PyIndex — AI-Powered Enterprise Search | Amanda Morrison",
    description:
      "A Glean-style enterprise search demo built with FastAPI and React — ingests real PyPI documentation, indexes it with TF-IDF, and generates Claude-powered cited answers.",
  },
};

export default function Project8() {
  return (
    <div className="pt-32 p-8 max-w-4xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        PyIndex — AI-Powered Enterprise Search
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        An enterprise search demo: real documentation ingested from
        a public API, indexed for search, and answered with Claude-generated,
        cited responses — built with FastAPI, React, and the Anthropic API.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📊 Summary</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>
          Built a FastAPI backend that ingests real package documentation from
          the public PyPI JSON API for 25 popular Python libraries.
        </li>
        <li>
          Indexed the content with a TF-IDF search index (scikit-learn) for
          fast, ranked keyword search over the corpus.
        </li>
        <li>
          Integrated the Anthropic Claude API to generate grounded, cited
          answers from the top retrieved passages — mirroring how enterprise
          search tools like Glean surface AI answers on top of raw results.
        </li>
        <li>
          Built a React (Vite) frontend with a search bar, an &quot;AI
          Answer&quot; panel with inline citation chips linking back to
          sources, and a ranked list of raw search results.
        </li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">🧰 Tools Used</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>FastAPI, scikit-learn, Python</li>
        <li>Anthropic Claude API</li>
        <li>React, Vite</li>
        <li>PyPI JSON API (public data source)</li>
      </ul>

      {/* GitHub */}
      <h2 className="text-2xl font-semibold mt-10 mb-2 text-gray-300">📁 Source Code</h2>
      <p className="text-gray-300 mb-4">
        View the full source, including the ingestion pipeline, search index,
        and Claude-powered answer generation, on GitHub.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-24">
        <a
          href="https://github.com/amschembri81/pyindex-search"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline text-center pt-3 md:pt-0"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
