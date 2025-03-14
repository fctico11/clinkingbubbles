// src/components/HeroSection.js
import React from "react";
import heroImage from "../assets/images/hero.png"; // Import image

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-32 px-4 text-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Elevate Your Experience</h1>
        <p className="text-xl md:text-2xl mb-8">
          Luxury bartending services that dazzle and delight.
        </p>
        <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

