// src/components/HeroSection.js
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import heroDesktop from "../assets/images/hero.webp";
import heroMobile from "../assets/images/hero-mobile.webp";

const HeroSection = () => {
  // Decide if we're on mobile or desktop
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Start with a placeholder (no background image) so text can render immediately
  const [bgImage, setBgImage] = useState("none");

  useEffect(() => {
    // Pick the correct hero image based on viewport
    const chosenImage = isMobile ? heroMobile : heroDesktop;

    // Defer loading the background image until after text is painted
    const img = new Image();
    img.src = chosenImage;
    img.onload = () => {
      setBgImage(`url(${chosenImage})`);
    };
  }, [isMobile]);

  return (
    <>
      {/* Preload whichever image is needed for the current viewport */}
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={isMobile ? heroMobile : heroDesktop}
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
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="clinking-font drop-shadow-[0_0_2px_black] text-4xl md:text-6xl font-bold mb-4">
            Elevate Your Experience
          </h1>
          <div className="flex flex-col items-center text-center">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl px-4 py-2 inline-block">
              <h2 className="bubbles-font drop-shadow-[0_0_2px_black] text-2xl md:text-2xl">
                NJ Private Bartending Services that Dazzle and Delight.
              </h2>
            </div>
            <div className="mt-6 sm:mt-3">
              <Link to="/contact">
                <button className="bubbles-font text-lg bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;