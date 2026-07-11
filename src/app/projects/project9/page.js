export const metadata = {
  title: "Pathlight Onboarding Assistant",
  description:
    "A grounded AI chatbot for a fictional K-12 platform that answers navigation questions with the exact click path, cited to the source guide entry.",
  openGraph: {
    title: "Pathlight Onboarding Assistant | Amanda Morrison",
    description:
      "A grounded AI chatbot for a fictional K-12 platform that answers navigation questions with the exact click path, cited to the source guide entry.",
  },
};

export default function Project9() {
  return (
    <div className="pt-32 p-8 max-w-4xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
        Pathlight Onboarding Assistant
      </h1>

      <p className="text-lg mb-6 text-gray-300 text-center">
        A grounded AI chatbot that helps educators navigate a K-12 learning
        platform — ask a question in plain English, get back the exact click
        path, cited to the source doc it came from. Built to pair my
        instructional design background with applied AI engineering.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📊 Summary</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>
          Wrote an original quick-start guide for a fictional K-12 platform
          (&quot;Pathlight&quot;) — 16 Q&amp;A entries across 6 sections: course
          catalog, enrollment, gradebook, assignments, accounts, and messaging.
        </li>
        <li>
          Built a retrieval step that scores guide entries against the incoming
          question and passes the top matches to Claude as context — no
          vector database needed at this scale.
        </li>
        <li>
          Constrained the assistant with a grounded system prompt: answer only
          from retrieved guide content, cite the source section on every
          response, and explicitly say &quot;I don&apos;t know&quot; rather
          than guess when a question falls outside the guide.
        </li>
        <li>
          Shipped a lightweight Flask API and a single-file chat UI — no
          build step required to run it locally.
        </li>
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">🧰 Tools Used</h2>
      <ul className="list-disc list-inside mb-6 text-gray-300">
        <li>Flask (Python)</li>
        <li>Anthropic Claude API</li>
        <li>Keyword-overlap retrieval (custom, no vector DB)</li>
        <li>Vanilla HTML/CSS/JS frontend</li>
      </ul>

      {/* Live demo */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">💬 Live Demo</h2>
      <p className="text-gray-300 mb-4">
        Three real exchanges from the working app, unedited.
      </p>

      <div className="bg-gray-900 border border-gray-700 rounded-lg p-5 mb-10">
        <div className="flex flex-col gap-4">
          <div className="self-start max-w-[85%] bg-gray-800 text-gray-200 text-sm rounded-lg rounded-bl-sm px-4 py-3">
            Hi! I&apos;m the Pathlight onboarding assistant. Ask me something
            like &quot;how do I find high school math courses?&quot;
          </div>

          <div className="self-end max-w-[85%] bg-teal-700 text-white text-sm rounded-lg rounded-br-sm px-4 py-3">
            How do I find high school math courses?
          </div>
          <div className="self-start max-w-[85%] bg-gray-800 text-gray-200 text-sm rounded-lg rounded-bl-sm px-4 py-3">
            From the main dashboard, click <strong>Course Catalog</strong> in
            the left sidebar. Use the <strong>Grade Band</strong> filter and
            select &quot;9–12,&quot; then use the <strong>Subject</strong>{" "}
            filter and select &quot;Mathematics.&quot; Results update
            automatically and can be sorted by course name, teacher, or period.
            <span className="block mt-2 text-xs text-gray-500">
              Source: Course Catalog &gt; Filtering
            </span>
          </div>

          <div className="text-center text-xs text-gray-500 uppercase tracking-wide">
            — new question —
          </div>

          <div className="self-end max-w-[85%] bg-teal-700 text-white text-sm rounded-lg rounded-br-sm px-4 py-3">
            How do I reset a student&apos;s password?
          </div>
          <div className="self-start max-w-[85%] bg-gray-800 text-gray-200 text-sm rounded-lg rounded-bl-sm px-4 py-3">
            Go to <strong>Students</strong>, open the student&apos;s profile,
            click <strong>Account</strong>, then{" "}
            <strong>Reset Password</strong>. A temporary password is generated
            and can be printed or sent to the student&apos;s guardian email.
            <span className="block mt-2 text-xs text-gray-500">
              Source: Section 5: Accounts &amp; Access
            </span>
          </div>

          <div className="text-center text-xs text-gray-500 uppercase tracking-wide">
            — new question —
          </div>

          <div className="self-end max-w-[85%] bg-teal-700 text-white text-sm rounded-lg rounded-br-sm px-4 py-3">
            How do I message a teacher?
          </div>
          <div className="self-start max-w-[85%] bg-gray-800 text-gray-200 text-sm rounded-lg rounded-bl-sm px-4 py-3">
            Click the <strong>Messages</strong> icon in the top navigation
            bar, then <strong>New Message</strong>, and search for the teacher
            by name. The message will be private between you and that teacher.
            <span className="block mt-2 text-xs text-gray-500">
              Source: Section 6: Messaging &amp; Communication
            </span>
          </div>
        </div>
      </div>

      {/* Source code */}
      <h2 className="text-2xl font-semibold mt-10 mb-2 text-gray-300">📁 Source Code</h2>
      <p className="text-gray-300 mb-4">
        View the full source, including the knowledge base, retrieval logic,
        and grounded prompt design, on GitHub.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-24">
        <a
          href="https://github.com/amschembri81/Pathlight-Onboarding-Assistant"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline text-center pt-3 md:pt-0"
        >
          View on GitHub
        </a>
      </div>

      <p className="text-xs text-gray-500 text-center -mt-20 mb-16">
        Pathlight is a fictional platform built for this portfolio piece — all
        product names, screens, and guide content are original and not derived
        from any employer&apos;s proprietary documentation.
      </p>
    </div>
  );
}
