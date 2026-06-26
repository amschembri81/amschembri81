"use client";

import Image from "next/image";

export default function Design2() {
  return (
    <main className="min-h-screen text-white px-4 pt-32 pb-16">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-300">
        Luxe Cosmetics: E-Commerce Checkout Experience
      </h1>

      {/* Overview */}
      <section className="max-w-5xl mx-auto mb-12 text-left">
        <p className="text-lg text-gray-300 mb-4">
          Luxe Cosmetics is a custom e-commerce experience designed to make the beauty shopping process
          smooth, branded, and conversion-friendly. This was a contract project developed over several
          weeks in close collaboration with the client.
        </p>
        <p className="text-lg text-gray-300">
          I led the end-to-end design using Figma, and also handled the development and backend integration
          with Stripe for secure online transactions. The project includes a full product flow, shopping cart,
          checkout, and payment experience.
        </p>
      </section>

      {/* Screenshots */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Shopping Cart */}
        <div className="bg-gray-900 rounded-lg p-4 shadow-lg text-center">
          <Image
            src="/images/design2/Luxe_Shopping_Cart.png"
            alt="Luxe Cosmetics Shopping Cart"
            width={600}
            height={600}
            className="rounded-lg mx-auto w-full h-auto"
          />
          <h3 className="text-xl font-semibold text-gray-300 mt-4 mb-2">
            Shopping Cart UI
          </h3>
          <p className="text-gray-400">
            A clean and visually branded cart view showing selected products, quantities, pricing, and subtotal details.
          </p>
        </div>

        {/* Checkout Page */}
        <div className="bg-gray-900 rounded-lg p-4 shadow-lg text-center">
          <Image
            src="/images/design2/Luxe_Cosmetics.png"
            alt="Luxe Cosmetics Checkout Page"
            width={600}
            height={600}
            className="rounded-lg mx-auto w-full h-auto"
          />
          <h3 className="text-xl font-semibold text-gray-300 mt-4 mb-2">
            Checkout & Payment
          </h3>
          <p className="text-gray-400">
            The checkout page includes Apple Pay, PayPal, card inputs, shipping fields, and Stripe integration to complete secure transactions.
          </p>
        </div>
      </section>

      {/* Tools Used */}
      <section className="max-w-4xl mx-auto mt-16 text-left">
        <h2 className="text-3xl font-bold text-gray-300 mb-6">Tools Used</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
          <li><strong>Figma:</strong> For designing the UI and prototype flows collaboratively with the client.</li>
          <li><strong>Stripe:</strong> For integrating secure payment processing on the frontend and backend.</li>
          <li><strong>HTML/CSS/JavaScript:</strong> To build and style the live checkout experience.</li>
        </ul>
      </section>

      {/* Project Scope */}
      <section className="max-w-4xl mx-auto mt-16 text-left">
        <h2 className="text-3xl font-bold text-gray-300 mb-6">Project Scope</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
          <li>Worked as a contract UX/UI designer and frontend developer.</li>
          <li>Created high-fidelity designs with responsive behavior.</li>
          <li>Implemented full Stripe integration for cart + checkout flows.</li>
          <li>Collaborated closely with the business owner to meet branding and performance goals.</li>
        </ul>
      </section>
    </main>
  );
}