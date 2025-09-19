// src/components/HeroSection.js
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import heroDesktop from "../assets/images/hero.webp";
import heroMobile from "../assets/images/hero-mobile.webp";

const HeroSection = () => {
  return (
    <>
      <Helmet>
        {/* Preload both versions based on screen size */}
        <link
          rel="preload"
          as="image"
          href={heroDesktop}
          media="(min-width: 768px)"
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href={heroMobile}
          media="(max-width: 767px)"
          fetchpriority="high"
        />
      </Helmet>

      <section className="relative text-white text-center py-32 px-4 overflow-hidden">
        {/* Responsive hero image with fetchpriority */}
        <picture>
          <source
            srcSet={heroMobile}
            media="(max-width: 767px)"
            fetchpriority="high"
          />
          <img
            src={heroDesktop}
            fetchpriority="high"
            alt="Elevate your experience - Clinking Bubbles NJ"
            className="absolute inset-0 w-full h-full object-cover z-0"
            width="1920"
            height="1080"
          />
        </picture>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Hero content */}
        <div className="relative z-20 max-w-3xl mx-auto">
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