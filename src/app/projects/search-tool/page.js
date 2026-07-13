import Image from "next/image";

export const metadata = {
  title: "Personal Knowledge Base Search",
  description:
    "A search tool over a Wikipedia-derived corpus that ranks results with two different relevance strategies — TF-IDF keyword matching and LSA semantic matching — built with FastAPI and Streamlit. No LLM involved.",
  openGraph: {
    title: "Personal Knowledge Base Search | Amanda Morrison",
    description:
      "A search tool over a Wikipedia-derived corpus that ranks results with two different relevance strategies — TF-IDF keyword matching and LSA semantic matching — built with FastAPI and Streamlit. No LLM involved.",
  },
};

export default function SearchTool() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Personal Knowledge Base Search
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A search tool built to demonstrate relevance ranking from first
        principles — no LLM in the loop. It indexes real Wikipedia articles
        via the MediaWiki API and lets you compare two ranking strategies
        side by side: TF-IDF keyword matching against LSA semantic/concept
        matching.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📊 Project Summary
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>
          Ingests a topically diverse corpus of real Wikipedia articles —
          science, technology, history, arts, geography — via the MediaWiki
          API, then builds two independent search indexes over it.
        </li>
        <li>
          <strong>TF-IDF</strong> index: a sparse, keyword-weighted vector per
          document (scikit-learn <code>TfidfVectorizer</code>), ranked by
          cosine similarity to the query — rewards exact vocabulary overlap.
        </li>
        <li>
          <strong>LSA</strong> index: the same TF-IDF matrix projected into a
          lower-dimensional topic space with <code>TruncatedSVD</code>, so
          documents can match a query on shared concept even without shared
          exact wording.
        </li>
        <li>
          FastAPI backend exposes <code>GET /search?q=...&amp;method=tfidf|semantic</code>,
          plus <code>/stats</code> and interactive Swagger docs at{" "}
          <code>/docs</code>.
        </li>
        <li>
          Streamlit frontend with a &quot;Compare both&quot; view that runs
          the same query through both rankers at once, so the difference in
          results is visible directly, not just described.
        </li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        🧰 Tools Used
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Python, FastAPI, Uvicorn — backend API</li>
        <li>scikit-learn — TF-IDF vectorization, TruncatedSVD (LSA), cosine similarity</li>
        <li>Streamlit — frontend</li>
        <li>Wikipedia (MediaWiki) API — data source</li>
      </ul>

      {/* Screenshots */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📷 Screenshots
      </h2>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <a
          href="/images/searchtool/searchtool5.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/searchtool/searchtool5.png"
            alt="Personal Knowledge Base Search landing view with index stats in the sidebar"
            width={3354}
            height={1684}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <a
          href="/images/searchtool/searchtool4.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/searchtool/searchtool4.png"
            alt="Compare both view for the query 'digital money without banks' showing TF-IDF and semantic LSA results side by side"
            width={2516}
            height={1678}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <a
          href="/images/searchtool/searchtool3.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/searchtool/searchtool3.png"
            alt="Compare both view for the query 'computers that beat humans at games' showing TF-IDF and semantic LSA results side by side"
            width={3048}
            height={1782}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <a
          href="/images/searchtool/searchtool1.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/searchtool/searchtool1.png"
            alt="Semantic (LSA) only results for the query 'brain and behavior'"
            width={2538}
            height={1756}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/searchtool/searchtool2.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/searchtool/searchtool2.png"
            alt="TF-IDF only results for the query 'world power rivalry after world war 2'"
            width={2592}
            height={1770}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      {/* How the ranking works */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        ⚙️ How the Ranking Works
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>
          <strong>TF-IDF</strong>: each document and query becomes a sparse
          vector weighted by term frequency and inverse document frequency;
          relevance is the cosine similarity between them. Rewards exact
          vocabulary overlap.
        </li>
        <li>
          <strong>LSA</strong>: the TF-IDF matrix is projected into a
          lower-dimensional topic space with <code>TruncatedSVD</code>.
          Cosine similarity in that reduced space captures documents that are
          conceptually related even when they don&apos;t share exact terms —
          e.g. a query for &quot;digital money without banks&quot; surfacing
          an article about decentralized currency without either phrase
          appearing verbatim.
        </li>
      </ul>

      {/* GitHub Link */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📂 GitHub Repository
      </h2>
      <p>
        <a
          href="https://github.com/amschembri81/Search-Tool"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Project on GitHub
        </a>
      </p>
    </div>
  );
}
