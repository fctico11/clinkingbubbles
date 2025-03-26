// src/components/HeroSection.js
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Import images from src/assets/images
import heroDesktop from "../assets/images/hero.webp";
import heroMobile from "../assets/images/hero-mobile.webp";

const HeroSection = () => {
  const [bgImage, setBgImage] = useState(heroDesktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage(heroMobile);
      } else {
        setBgImage(heroDesktop);
      }
    };

    // Set the initial image based on current viewport
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={bgImage} />
      </Helmet>
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-32 px-4 text-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="clinking-font text-4xl md:text-6xl font-bold mb-4">
            Elevate Your Experience
          </h1>
          <p className="bubbles-font text-2xl md:text-2xl mb-8">
            Private bartending services that dazzle and delight.
          </p>
          <Link to="/contact">
            <button className="bubbles-font text-lg bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
              Book Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
