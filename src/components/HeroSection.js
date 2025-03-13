// src/components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Elevate Your Experience</h1>
      <p className="text-xl md:text-2xl mb-8">Luxury bartending services that dazzle and delight.</p>
      <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600">
        Book Now
      </button>
    </section>
  );
};

export default HeroSection;
