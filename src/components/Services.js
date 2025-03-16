// src/components/Services.js
import React from "react";

const Services = () => {
  return (
    <section className="py-10 px-4 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4">Private Parties</h3>
          <p>Personalized bartending services for an intimate, memorable event.</p>
        </div>
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4">Corporate Events</h3>
          <p>Elevate your corporate gatherings with tailored cocktail experiences.</p>
        </div>
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4">Weddings</h3>
          <p>Add a touch of luxury to your special day with bespoke cocktail menus.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
