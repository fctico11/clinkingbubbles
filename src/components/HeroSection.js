// src/components/HeroSection.js
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Import images from src/assets/images
import heroDesktop from "../assets/images/hero.webp";
import heroMobile from "../assets/images/hero-mobile.webp";

const HeroSection = () => {
  // Start with no background image, just a placeholder color
  const [bgImage, setBgImage] = useState("none");

  useEffect(() => {
    // Decide which image to load based on viewport width
    const chosenImage = window.innerWidth < 768 ? heroMobile : heroDesktop;

    // Preload the chosen image
    const img = new Image();
    img.src = chosenImage;
    img.onload = () => {
      // Once loaded, set the background image
      setBgImage(`url(${chosenImage})`);
    };
  }, []);

  return (
    <>
      {/* Preload whichever image is likely needed for the current viewport */}
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={window.innerWidth < 768 ? heroMobile : heroDesktop}
        />
      </Helmet>

      <section
        className="relative text-white py-32 px-4 text-center"
        style={{
          backgroundColor: "#000", // placeholder color
          backgroundImage: bgImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for Better Text Readability */}
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
