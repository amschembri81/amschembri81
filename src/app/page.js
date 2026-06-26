import Link from "next/link";

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-36 pb-20 text-white"
    >
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
