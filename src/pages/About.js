// src/pages/About.js
import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="py-20 px-4 bg-white text-black">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Welcome to Bartending Co.—where luxury meets impeccable service. Our experienced team brings creativity, elegance, and sophistication to every event, ensuring an unforgettable experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
