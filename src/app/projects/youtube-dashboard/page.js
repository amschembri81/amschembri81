import Image from "next/image";

export const metadata = {
  title: "Creator Analytics Dashboard",
  description:
    "A Streamlit dashboard that pulls public YouTube channel data via the YouTube Data API v3 and visualizes creator performance side by side — subscriber comparisons, upload frequency, engagement rate, and top-performing videos.",
  openGraph: {
    title: "Creator Analytics Dashboard | Amanda Morrison",
    description:
      "A Streamlit dashboard that pulls public YouTube channel data via the YouTube Data API v3 and visualizes creator performance side by side — subscriber comparisons, upload frequency, engagement rate, and top-performing videos.",
  },
};

export default function YoutubeDashboard() {
  return (
    <div className="pt-32 p-8 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Creator Analytics Dashboard
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A Streamlit dashboard that pulls public YouTube channel data via the
        YouTube Data API v3 and visualizes creator performance side by side —
        enter up to four channel handles and compare subscribers, views,
        upload cadence, and engagement in one view.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📊 Project Summary
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>
          Pulls live channel and video stats for up to four YouTube channels
          at once via the YouTube Data API v3 — just a handle or channel ID
          and an API key.
        </li>
        <li>
          Channel overview cards surface subscribers, total views, video
          count, and country for each channel at a glance.
        </li>
        <li>
          Subscriber comparison bar chart and a views-per-video scatter plot
          plot channel size against video-level performance over time.
        </li>
        <li>
          Weekly upload frequency chart tracks publishing cadence per channel,
          alongside average engagement rate and average views per video.
        </li>
        <li>
          Top 5 performing videos table per channel, ranked by views with
          likes, comments, and engagement rate.
        </li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        🧰 Tools Used
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Python, Streamlit — interactive dashboard app</li>
        <li>YouTube Data API v3 — live channel and video data</li>
        <li>Pandas — data wrangling and aggregation</li>
        <li>Plotly — charts and visualizations</li>
      </ul>

      {/* Screenshots */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📷 Dashboard Screenshots
      </h2>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <a
          href="/images/youtube/youtube5.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/youtube/youtube5.png"
            alt="Creator Analytics Dashboard channel overview comparing Marques Brownlee, Linus Tech Tips, Fireship, and TED-Ed"
            width={3210}
            height={1764}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <a
          href="/images/youtube/youtube4.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/youtube/youtube4.png"
            alt="Subscriber comparison bar chart across channels"
            width={2716}
            height={1262}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/youtube/youtube1.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/youtube/youtube1.png"
            alt="Views per video scatter plot over time, sized by view count"
            width={2708}
            height={1040}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <a
          href="/images/youtube/youtube3.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/youtube/youtube3.png"
            alt="Upload frequency and average engagement rate charts"
            width={2750}
            height={1792}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="/images/youtube/youtube2.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/youtube/youtube2.png"
            alt="Top performing videos table broken down by channel"
            width={2738}
            height={1778}
            className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>

      {/* GitHub Link */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">
        📂 GitHub Repository
      </h2>
      <p>
        <a
          href="https://github.com/amschembri81/Youtube-Dashboard"
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
