export const metadata = {
  title: "About | Amanda Morrison",
  description:
    "From K-12 classrooms to enterprise SaaS implementation — how 15 years of teaching became the best training I never planned for.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white py-12 px-6 pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-100">
          About Me
        </h1>

        <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
          <p>
            I didn&apos;t plan to end up in SaaS implementation. For 15 years I was a
            classroom teacher, Reading Specialist, Special Education Teacher, and instructional
            coach in public school districts across Illinois and Missouri — which is its own kind 
            of high-stakes, high-complexity, multi-stakeholder environment, even if no
            one outside education tends to think of it that way.
          </p>
          <p>
            What people don&apos;t see from the outside: teaching is implementation
            work. Every school year I was either rolling out new curricula, new assessment
            systems, or new ed-tech platforms to staff who had not asked for them and
            were not always thrilled to get them. I was often times the person translating
            district mandates into something a room full of skeptical adults — and an
            even more skeptical room of eight-year-olds — would actually use. At one point, 
            I led professional development for 75+ educators a year, which is essentially
            change management with a bell schedule.
          </p>
          <p>
            Somewhere around 2014, I started doing freelance design, data analysis, and
            technical consulting on the side — building out automations, dashboards, 
            and websites for businesses and nonprofit clients who needed things done 
            that their existing tools couldn&apos;t handle. For over a decade I was 
            doing both: teaching by day, building spreadsheets and building tools by night,
            without really thinking of it as a &ldquo;pivot&rdquo; in progress. It was
            just two halves of the same instinct — see a broken process, go fix it.
          </p>
          <p>
            In 2023 that side work became the main job. I moved into implementation
            and customer success full-time, eventually taking ownership of one of
            the largest and most complex accounts in EdTech. The skills transferred 
            almost entirely intact: reading a room, building a playbook from nothing,
            staying calm when a process goes sideways, and explaining a confusing
            system clearly enough that a busy, skeptical adult will actually adopt
            it.
          </p>
          <p>
            These days I spend my time owning the full implementation lifecycle for
            complex accounts, building automations that quietly save people hours of
            manual work, and using AI tools like Claude, ChatGPT, and Copilot as
            actual daily working partners rather than novelties. I&apos;m still the
            person who would rather build the fix than complain about the problem —
            I just have better tools for it now.
          </p>
        </div>
      </div>
    </main>
  );
}
