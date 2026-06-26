"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TrackifyProjectPage() {
  const galleryImages = [
    {
      file: "Trackify_Start.png",
      desc: "Start page – users can enter the app or login.",
    },
    {
      file: "Trackify_Register.png",
      desc: "Registration screen – enter info manually or use Google/Apple sign-in.",
    },
    {
      file: "Trackify_Home.png",
      desc: "Homepage – access students, data, templates, or visualizations.",
    },
    {
      file: "Trackify_Add.png",
      desc: "Add a student – manually or via Clever/Google Classroom with photo upload.",
    },
    {
      file: "Trackify_New.png",
      desc: "Create a new IEP goal – add mastery, method, and save as a template.",
    },
    {
      file: "Trackify_Roster.png",
      desc: "Roster view – select a student to view or enter progress data.",
    },
    {
      file: "Trackify_Visualization.png",
      desc: "Goal tracking view – includes photo uploads for work samples.",
    },
    {
      file: "Trackify_Graph.png",
      desc: "Data visualization – table, bar chart, pie chart, or line graph.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = galleryImages[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <>
      <main className="min-h-screen text-white pt-28 p-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold mb-10 text-center text-gray-300">Trackify: Smart Data Tracking for Special Education</h1>

          {/* Overview */}
          <section>
            <p className="text-lg leading-relaxed">
              Trackify is the ultimate app for special education professionals,
              streamlining IEP data tracking to simplify goal creation, monitor
              progress, and collect meaningful student data. This capstone
              project was born out of a real-world need for educators to have
              better tools to manage and visualize data. I designed the UI in
              Figma, compiled user flows and research in Miro, and conducted
              multiple rounds of user testing and iteration over a 3-week
              sprint.
            </p>
          </section>

          {/* Design Style & Approach */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Design Style & Approach
            </h2>
            <p className="text-base leading-relaxed">
              Trackify’s interface uses clean lines, soft gradients, and
              consistent iconography to support clarity and focus for educators
              working in time-sensitive environments. The color palette is
              intentionally calm and friendly, with a layout optimized for
              mobile use and data entry. All screens were created to maintain
              accessibility and allow users to easily move between tasks like
              adding students, entering goals, and visualizing data in different
              formats.
            </p>
          </section>

          {/* Tools Used */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Tools Used</h2>
            <ul className="list-disc list-inside text-base">
              <li>Figma – for designing the UI and interactive prototype</li>
              <li>
                Miro – for compiling research, field interviews, and mapping
                user flows
              </li>
            </ul>
          </section>

          {/* Design Process */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Design Process</h2>
            <p className="text-base leading-relaxed">
              This was a capstone and passion project developed over 3 weeks:
            </p>
            <ul className="list-disc list-inside text-base mt-2">
              <li>
                <strong>Week 1:</strong> Conducted field and market research,
                mapped key features and flows
              </li>
              <li>
                <strong>Week 2:</strong> Designed wireframes and full mockups in
                Figma
              </li>
              <li>
                <strong>Week 3:</strong> Completed 2 rounds of user testing,
                gathered feedback, and iterated on core UI components
              </li>
            </ul>
          </section>

          {/* Download Design File */}
          <section className="mt-12">
            <div className="max-w-4xl mx-auto text-white">
              <h2 className="text-2xl font-semibold mb-4">
                Download Figma Board
              </h2>
              <p className="text-lg mb-6 max-w-2xl">
                Want to take a closer look at the design structure? You can
                download the full version of the Figma board here:
              </p>
              <a
                href="/files/Trackify_Designs.png"
                download
                className="inline-block bg-gray-700 text-white font-semibold px-6 py-3 rounded hover:bg-gray-600 transition"
              >
                Download Trackify_Designs.png
              </a>
            </div>
          </section>

          {/* Gallery Carousel */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Design Gallery
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full max-w-md">
                <Image
                  src={`/images/design3/${currentImage.file}`}
                  alt={`Trackify screen: ${currentImage.desc}`}
                  width={600}
                  height={400}
                  className="rounded-lg border border-gray-700 w-full h-auto object-contain"
                />
              </div>
              <p className="text-sm text-gray-300 italic text-center">
                {currentImage.desc}
              </p>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
                >
                  ← Previous
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
                >
                  Next →
                </button>
              </div>
            </div>
          </section>

          {/* Interactive Prototype */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Interactive Prototype
            </h2>

            <div className="text-center mb-6">
              <Link
                href="https://www.figma.com/proto/nYpd84aTSmySb9nsorL97L/Capstone--1---Trackify?page-id=255%3A261&node-id=255-262&p=f&viewport=366%2C119%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=255%3A262"
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
                src="https://embed.figma.com/proto/nYpd84aTSmySb9nsorL97L/Capstone--1---Trackify?page-id=255%3A261&node-id=255-262&p=f&viewport=366%2C119%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=255%3A262&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
