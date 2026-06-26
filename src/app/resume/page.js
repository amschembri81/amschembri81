export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white py-12 px-6 pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-200">
          Resume
        </h1>
        <p className="text-lg text-gray-300 mb-10 text-center">
          20+ years of combined experience spanning SaaS implementation, enterprise
          account management, and K-12 public sector leadership.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="/assets/Amanda_Morrison_Resume.pdf"
            download="Amanda_Morrison_Resume.pdf"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg"
          >
            Download Resume (PDF)
          </a>
        </div>

        <section className="space-y-10 text-gray-300">
          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3 border-b border-zinc-700 pb-2">
              Professional Summary
            </h2>
            <p className="leading-relaxed">
              Implementation Manager and Customer Success professional with 20+ years
              of combined experience spanning SaaS implementation, enterprise account
              management, and K-12 public sector leadership. Own the full customer
              lifecycle end-to-end — from kickoff and configuration through adoption,
              renewal, and expansion — for complex, high-stakes accounts including the
              NYC Department of Education (~1,500 schools). I build scalable
              playbooks, onboarding frameworks, and process automations from scratch
              in fast-moving environments, and I&apos;m technically fluent across SQL,
              Python, JavaScript, Google Apps Script, and BI tools. I&apos;m an
              AI-native daily user of Claude, ChatGPT, Copilot, and Glean.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3 border-b border-zinc-700 pb-2">
              Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-100">
                  Strategic Technical Onboarding Specialist — Amplify
                </h3>
                <p className="text-sm text-gray-400 mb-2">June 2023 – Present</p>
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
                  <li>
                    Own the full implementation and customer success lifecycle for NYC
                    Department of Education (~1,500 schools), serving as the single
                    point of contact from onboarding through renewal readiness.
                  </li>
                  <li>
                    Designed and deployed a Google Apps Script automation that reduced
                    a 3–4 person, multi-day workflow to 15–30 minutes with 100%
                    accuracy and built-in audit validation.
                  </li>
                  <li>
                    Use Claude, ChatGPT, and Copilot daily to investigate data
                    discrepancies, draft client communications, and build solutions
                    faster.
                  </li>
                  <li>
                    Previously managed 15+ concurrent SMB &amp; Mid-Market accounts,
                    building implementation playbooks and training frameworks from
                    scratch.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-100">
                  Technical Consultant — AMSchembri Designs (Freelance)
                </h3>
                <p className="text-sm text-gray-400 mb-2">June 2014 – June 2025</p>
                <p className="text-sm leading-relaxed">
                  Managed the full client lifecycle as an independent consultant for
                  11 years, delivering implementation, onboarding, training, and
                  custom automation for education and nonprofit clients.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-100">
                  K-12 Educator, Reading Specialist &amp; Instructional Coach
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Various Districts (IL &amp; MO) — Aug 2007 – June 2023
                </p>
                <p className="text-sm leading-relaxed">
                  15 years inside K-12 school districts as a classroom teacher,
                  Reading Specialist, and instructional coach — leading district-wide
                  professional development for 75+ educators annually and developing
                  firsthand expertise in how public sector organizations adopt new
                  technology.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3 border-b border-zinc-700 pb-2">
              Education &amp; Certifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
              <li>M.S., Integrative Leadership — Drury University</li>
              <li>M.S., Reading Specialist — University of St. Francis</li>
              <li>B. Education — Missouri State University</li>
              <li>Professional Scrum Master — Six Sigma Global Institute</li>
              <li>Full Stack Web Development — Nucamp Coding Bootcamp</li>
              <li>UI/UX Design Certification — Springboard</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
