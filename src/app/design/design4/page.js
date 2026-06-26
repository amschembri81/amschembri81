"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NestaraProjectPage() {
  const galleryImages = [
    { file: "Nestara_Home.png", desc: "Home page for Nestara to create an account or login." },
    { file: "Agent_Finder.png", desc: "Find recommended real estate agents in your area." },
    { file: "Home_Search.png", desc: "Map view of home search by zip code." },
    { file: "View_Home.png", desc: "View of a home that is already off the market." },
    { file: "View_Appointments.png", desc: "List of homes you're planning to tour with your agent." },
    { file: "Home_Expanded_View.png", desc: "Detailed view of a home including mortgage estimates." },
    { file: "Home_History.png", desc: "Historical and neighborhood info about the property." },
    { file: "Nestimate.png", desc: "Estimated value and chart history of the property." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = galleryImages[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <main className="min-h-screen text-white pt-28 p-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-center">Nestara</h1>

          {/* Overview */}
          <section>
            <p className="text-lg leading-relaxed">
              Nestara is a real estate app that allows users to search for homes, connect with realtors,
              schedule appointments, save favorite homes, calculate costs, and access educational resources
              about buying a home. It was a collaborative project among 6 designers and several developers.
              I was one of the designers and worked extensively on the realtor information, saved properties,
              and appointment screens.
            </p>
          </section>

          {/* Design Style & Approach */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Design Style & Approach</h2>
            <p className="text-base leading-relaxed">
              Nestara features a clean and modern interface tailored for mobile devices. The design combines
              sleek navigation, clear iconography, and a vibrant color palette to make home browsing intuitive.
              Visual hierarchy was used to prioritize key tasks like booking tours, viewing agent info, and
              tracking favorite homes. Each screen supports a step-by-step decision-making experience for first-time
              buyers and seasoned homeowners alike.
            </p>
          </section>

          {/* Tools Used */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Tools Used</h2>
            <ul className="list-disc list-inside text-base">
              <li>Figma – for UI design and interactive prototyping</li>
            </ul>
          </section>

          {/* Design Process */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Design Process</h2>
            <p className="text-base leading-relaxed">
              Our team followed a full-cycle design process:
            </p>
            <ul className="list-disc list-inside text-base mt-2">
              <li>User research to uncover pain points in real estate apps</li>
              <li>Wireframes and low-fidelity mockups for layout planning</li>
              <li>High-fidelity mockups in Figma</li>
              <li>Multiple rounds of user testing and design revisions</li>
              <li>Final interactive prototype and usability validation</li>
            </ul>
          </section>

          {/* Gallery Carousel */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">Design Gallery</h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full max-w-md">
                <Image
                  src={`/images/design4/${currentImage.file}`}
                  alt={`Nestara screen: ${currentImage.desc}`}
                  width={600}
                  height={400}
                  className="rounded-lg border border-gray-700 w-full h-auto object-contain"
                />
              </div>
              <p className="text-sm text-gray-300 italic text-center">{currentImage.desc}</p>
              <div className="flex gap-4 mt-2">
                <button onClick={handlePrev} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
                  ← Previous
                </button>
                <button onClick={handleNext} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
                  Next →
                </button>
              </div>
            </div>
          </section>

          {/* Interactive Prototype */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">Interactive Prototype</h2>
            <div className="text-center mb-6">
              <Link
                href="https://www.figma.com/proto/5T22TXHcswDVITs7Bs2Iny/Nestara?page-id=7%3A2&node-id=446-4997&p=f&viewport=479%2C1442%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=446%3A4997&show-proto-sidebar=1"
                target="_blank"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition"
              >
                View Interactive Figma Prototype
              </Link>
            </div>

            <div className="flex justify-center">
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800"
                height="450"
                src="https://embed.figma.com/proto/5T22TXHcswDVITs7Bs2Iny/Nestara?page-id=7%3A2&node-id=446-4997&p=f&viewport=479%2C1442%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=446%3A4997&show-proto-sidebar=1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}