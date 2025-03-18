// src/pages/BookingProcess.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BookingProcess = () => {
  return (
    <div>
      <Navbar />
      <section className="py-12 px-4 bg-[#EBE6D6] mt-5">
        <h1 className="clinking-font text-3xl font-bold text-center mb-5 mt-10">Booking Process</h1>
        <p className="max-w-3xl mx-auto text-center mb-0">
          Our booking process is as smooth as a perfectly shaken cocktail. From your initial inquiry to final confirmation, we’ll guide you through every step. Discover how simple it is to secure your next unforgettable event!
        </p>
      </section>

      <section className="py-12 px-4">
        {/* Step 1 */}
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="clinking-font text-2xl font-bold mb-4">Step 1 – Inquire</h2>
          <p className="text-lg">
            Click the “Get a Quote” button in the menu or at the bottom of this page, then fill out our inquiry form. Our team will carefully review your selections and get back to you within 48 hours.
          </p>
        </div>
        {/* Step 2 */}
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="clinking-font text-2xl font-bold mb-4">Step 2 – Discuss Logistics & Choose Your Cocktails</h2>
          <p className="text-lg">
            A team member will reach out via your preferred method (call, text, or email) to clarify any logistics and answer your questions. Based on your preferences, we’ll present a curated list of cocktail options or help you design custom cocktails for your event. We will then send you a detailed quote.
          </p>
        </div>
        {/* Step 3 */}
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="clinking-font text-2xl font-bold mb-4">Step 3 – Pay and Sign</h2>
          <p className="text-lg">
            Once you approve our proposal, we’ll set up payment plans and email you a contract and invoice to secure your booking. A 20% deposit is required to reserve your event date—no date will be finalized until this deposit is received. The remaining balance will be due 7 days before your event.
          </p>
        </div>
        {/* Step 4 */}
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="clinking-font text-2xl font-bold mb-4">Step 4 – Purchase the Alcohol</h2>
          <p className="text-lg">
            Using our detailed shopping list, purchase the alcohol and have it ready for our team on the day of your event.
          </p>
        </div>
        {/* Step 5 */}
        <div className="max-w-3xl mx-auto mb-4">
          <h2 className="clinking-font text-2xl font-bold mb-4">Step 5 – Party Time!</h2>
          <p className="text-lg">
            On the day of your event, our team will deliver exceptional service—so all you need to do is sit back, relax, and enjoy your celebration.
          </p>
          {/* "Get a Quote!" Button directly below last step */}
          <div className="mt-4 text-center">
            <Link to="/contact">
              <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
                Get a Quote!
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingProcess;
