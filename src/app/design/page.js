import Link from "next/link";

export default function DesignProjectsOverview() {
  return (
    <>
      <main className="min-h-screen text-white pt-28 p-6">
        <h1 className="text-3xl font-bold mb-2 text-center">UI/UX Design Projects</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
          Case studies from my UI/UX design certification — user research, wireframing, and prototyping
          work that informs how I think about adoption and user experience in the platforms I implement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Project 1: GalleryPal */}
          <Link
            href="/design/design1"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">GalleryPal</h2>
            <p>
              A mobile app prototype that enhances museum visits by offering audio insights,
              artwork scanning, maps, and personalized curation—designed in Figma with a
              user-centered experience in mind.
            </p>
          </Link>

          {/* Project 2: Luxe Cosmetics */}
          <Link
            href="/design/design2"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">Luxe Cosmetics</h2>
            <p>
              A complete e-commerce checkout flow built for a cosmetics brand, featuring a
              clean design, Stripe integration, and a fully responsive UI—designed and
              developed as contract work using Figma and JavaScript.
            </p>
          </Link>

          {/* Project 3: Trackify */}
          <Link
            href="/design/design3"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">Trackify</h2>
            <p>
              A data tracking app for special education professionals, designed to simplify
              IEP goal creation and visualization. Built with accessibility in mind and
              designed in Figma with user research, testing, and iteration over a 3-week sprint.
            </p>
          </Link>

          {/* Project 4: Nestara */}
          <Link
            href="/design/design4"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">Nestara</h2>
            <p>
              A mobile real estate app designed to help users browse homes, find a realtor,
              book appointments, save favorite listings, and learn about financing. Built as
              a collaborative group project, I contributed heavily to the agent finder, 
              saved homes, and appointments screens. Designed using Figma with full user 
              research, mockups, and multiple testing rounds.
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}