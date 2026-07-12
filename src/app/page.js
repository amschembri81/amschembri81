import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-36 pb-20 text-white"
    >
      <Image
        src="/assets/Headshot3.png"
        alt="Amanda Morrison"
        width={140}
        height={140}
        priority
        className="w-[140px] h-[140px] rounded-full object-cover mb-6 shadow-lg"
      />

      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
        Hi, I&apos;m Amanda Morrison{" "}
        <span role="img" aria-label="waving hand">
          👋🏻
        </span>
      </h1>

      <p className="text-lg md:text-xl text-center text-gray-300 max-w-2xl mb-10">
        Former K-12 educator turned SaaS implementation manager — I help complex
        organizations adopt technology that actually works for them, and I use AI
        daily to do it better.
      </p>

      <div className="flex flex-wrap items-center justify-center divide-x divide-white/10 mb-10">
        <div className="px-6 text-center">
          <p className="text-2xl font-bold text-white">15</p>
          <p className="text-sm text-gray-400">Years in EdTech</p>
        </div>
        <div className="px-6 text-center">
          <p className="text-2xl font-bold text-white">2</p>
          <p className="text-sm text-gray-400">Master&apos;s Degrees</p>
        </div>
        <div className="px-6 text-center">
          <p className="text-2xl font-bold text-white">10+</p>
          <p className="text-sm text-gray-400">Technical Projects</p>
        </div>
        <div className="px-6 text-center">
          <p className="text-2xl font-bold text-white">MO</p>
          <p className="text-sm text-gray-400">Springfield &middot; Remote</p>
        </div>
      </div>

      <div className="max-w-3xl space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
        <p>
          I spent 15 years as a K-12 educator — teaching, coaching, and wrangling data
          in school districts across Illinois and Missouri — before making the pivot
          into SaaS implementation and customer success. Turns out, helping a room
          full of skeptical third graders genuinely care about reading comprehension
          is surprisingly good training for enterprise software adoption. Who knew.
        </p>
        <p>
          Now I own end-to-end implementation for some of the largest and most
          complex accounts in EdTech. I build playbooks from scratch, automate things
          that should not still be manual, and use AI tools daily as actual working
          partners rather than novelties. I hold two master&apos;s degrees, a Scrum
          Master certification, a Full Stack Web Development certificate, and a
          UI/UX design credential — which is either evidence of genuine intellectual
          curiosity or a complete inability to stop learning. Probably both.
        </p>
        <p>
          I&apos;m based in Springfield, MO, fully remote, and currently open to
          implementation manager, customer success, and technical account management
          roles where the work is complex, the ownership is real, and building
          something from scratch is a feature rather than a bug.
        </p>
      </div>

      <div className="max-w-4xl w-full mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-200 mb-6">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/projects/automation/implementation-tracker"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              Implementation Tracker
            </h3>
            <p className="text-sm text-gray-300">
              A full-stack project management tool for implementation
              managers — projects, milestones, and risks, with an
              auto-computed health score and PDF status reports. React,
              FastAPI, SQLite.
            </p>
          </Link>

          <Link
            href="/projects/project8"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              PyIndex — AI-Powered Search
            </h3>
            <p className="text-sm text-gray-300">
              A Glean-style enterprise search demo built with FastAPI and
              React — TF-IDF search over real documentation, with
              Claude-generated, cited answers.
            </p>
          </Link>

          <Link
            href="/projects/customer-health-dashboard"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              Customer Health Dashboard
            </h3>
            <p className="text-sm text-gray-300">
              A SQL-driven account health scoring engine — window functions
              and CTEs over login, adoption, and support data — surfaced
              through Streamlit and a live HTML dashboard.
            </p>
          </Link>
        </div>
        <div className="text-center mt-6">
          <Link
            href="/projects"
            className="text-blue-400 underline hover:text-blue-300 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-12">
        <Link
          href="/resume"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          View My Resume
        </Link>
        <Link
          href="/skills"
          className="border border-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          See My Skills
        </Link>
        <Link
          href="/contact"
          className="border border-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Get in Touch
        </Link>
      </div>
    </main>
  );
}
