"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    src: "/images/design1/Choose_A_Museum.png",
    alt: "Choose Museum screen",
    title: "Choose a Museum",
    description:
      "Enter a zip code to find nearby museums, or access saved and recent visits from previous explorations.",
  },
  {
    src: "/images/design1/Museum_Page.png",
    alt: "Museum home screen",
    title: "Museum Home Page",
    description:
      "Welcome screen for each museum—featuring key details, address, and entry point to maps, saved art, and shopping.",
  },
  {
    src: "/images/design1/Art_Page.png",
    alt: "Art details screen",
    title: "Artwork Scan Result",
    description:
      "After scanning an artwork, users can listen to audio content: About the Art, the Artist, their voice, and fun facts.",
  },
  {
    src: "/images/design1/Museum_Map.png",
    alt: "Museum map screen",
    title: "Interactive Museum Map",
    description:
      "Explore floor-by-floor maps with a visual layout of key exhibits and must-see locations inside the museum.",
  },
];

export default function Design1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = galleryItems.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const { src, alt, title, description } = galleryItems[currentIndex];

  return (
    <main className="min-h-screen text-white px-4 pt-32 pb-16">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-300">
        GalleryPal: A Museum Companion App
      </h1>

      {/* Overview */}
      <section className="max-w-5xl mx-auto mb-12 text-left">
        <p className="text-lg text-gray-300 mb-4">
          GalleryPal is a mobile app prototype that enhances your museum experience with personalized 
          curation, audio insights, and real-time artwork recognition. Designed in Figma, this app 
          bridges art and technology, making cultural discovery intuitive and engaging.
        </p>
        <p className="text-lg text-gray-300">
          Key features include searching for museums by zip code, scanning artworks for artist info, 
          listening to artist commentary, navigating museum maps, and shopping exclusive merchandise 
          in the in-app store.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-3xl mx-auto text-center bg-gray-900 rounded-lg p-6 shadow-lg">
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={300}
            height={600}
            className="mx-auto rounded-lg max-h-[600px] object-contain"
          />

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 text-3xl text-white hover:text-teal-400"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 text-3xl text-white hover:text-teal-400"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>

        {/* Caption */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-200 mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>

        {/* Slide Counter */}
        <p className="mt-4 text-sm text-gray-500">
          {currentIndex + 1} of {total}
        </p>
      </section>

      {/* Design Style & Approach */}
      <section className="max-w-4xl mx-auto mt-16 text-left">
        <h2 className="text-3xl font-bold text-gray-300 mb-6">Design Style &amp; Approach</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
          <li>
            <strong>Clean & calming aesthetic:</strong> Inspired by museum environments, the interface embraces whitespace and
            clarity to guide focus without overwhelming the user.
          </li>
          <li>
            <strong>Soft, natural color palette:</strong> Neutral backgrounds and gentle tones evoke a quiet, gallery-like ambiance
            where artwork and content remain the focal point.
          </li>
          <li>
            <strong>Touch-friendly UX:</strong> Large buttons and intuitive navigation icons make the app highly accessible on mobile,
            promoting ease of use and clarity for all age groups.
          </li>
          <li>
            <strong>Clear visual hierarchy:</strong> Headings, labels, and content are well-structured with size and spacing that help users
            orient quickly and act confidently.
          </li>
          <li>
            <strong>Balanced layout with space to breathe:</strong> Each screen is intentionally spaced to support readability and visual flow,
            ensuring the design feels refined and relaxed.
          </li>
          <li>
            <strong>Emotionally resonant interaction:</strong> The app design invites curiosity and calm exploration, aligning with the
            emotional tone of visiting a real museum.
          </li>
        </ul>
      </section>

      {/* Tools Used */}
      <section className="max-w-4xl mx-auto mt-16 text-left">
        <h2 className="text-3xl font-bold text-gray-300 mb-6">Tools Used</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
          <li>
            <strong>Figma:</strong> For wireframing, prototyping, and creating the interactive app design.
          </li>
          <li>
            <strong>Adobe (Photoshop & Illustrator):</strong> For image editing and graphic asset preparation.
          </li>
        </ul>
      </section>

      {/* Design Process */}
      <section className="max-w-4xl mx-auto mt-16 text-left">
        <h2 className="text-3xl font-bold text-gray-300 mb-6">Design Process</h2>
        <p className="text-lg text-gray-300 mb-4">
          This project was completed during a focused weeklong design sprint. The timeline followed a
          structured and agile-inspired process to keep momentum and creativity aligned:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
          <li><strong>Days 1–2:</strong> Conducted user research and competitive analysis to understand gaps in the museum app space.</li>
          <li><strong>Days 3–4:</strong> Created low- and mid-fidelity wireframes in Figma, testing layout concepts and interaction flows.</li>
          <li><strong>Days 5–7:</strong> Built out the high-fidelity prototype, complete with visual design, navigation, and animations.</li>
        </ul>
      </section>

      {/* Downloadable PDF */}
      <section className="max-w-4xl mx-auto mt-16 text-left">
        <h2 className="text-3xl font-bold text-gray-300 mb-6">Download Figma Board</h2>
        <p className="text-lg text-gray-300 mb-4">
          Want to take a closer look at the design structure? You can download the full PDF version of the Figma board here:
        </p>
        <a
          href="/files/GalleryPal_Figma_Board.pdf"
          download
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
        >
          Download GalleryPal_Figma_Board.pdf
        </a>
      </section>

      {/* Embedded Figma Preview */}
      <section className="max-w-6xl mx-auto mt-16 text-left">
        <h2 className="text-3xl font-bold text-gray-300 mb-6">Live Figma Preview</h2>
        <p className="text-lg text-gray-300 mb-4">
          You can explore the interactive prototype directly within this page using the embedded Figma viewer:
        </p>
        <div className="overflow-hidden rounded-lg shadow-lg border border-gray-700 mb-6">
          <iframe
            style={{ width: "100%", height: "450px", border: "0" }}
            src="https://embed.figma.com/proto/FammcPpq4AY9t7CmqfAIET/Gallery-Pal?page-id=0%3A1&node-id=19-1281&p=f&viewport=-337%2C-158%2C0.59&scaling=scale-down&content-scaling=fixed&embed-host=share"
            allowFullScreen
          />
        </div>

        <div className="text-left">
          <a
            href="https://www.figma.com/proto/FammcPpq4AY9t7CmqfAIET/Gallery-Pal?page-id=0%3A1&node-id=19-1281&p=f&viewport=-23%2C273%2C0.12&t=jOULaUUxekcUqL73-1&scaling=scale-down&content-scaling=fixed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
          >
            Open Prototype in Figma
          </a>
        </div>
      </section>
    </main>
  );
}