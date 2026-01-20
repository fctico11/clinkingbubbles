// src/components/HeroSection.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoLarge from "../assets/logos/whiteTransparentLogo-large.webp";
import logoSmall from "../assets/logos/whiteTransparentLogo-small.webp";

// Carousel images
const images = [
  "/images/herocar1.webp",
  "/images/herocar2.webp",
  "/images/herocar3.webp",
  "/images/herocar4.webp",
  "/images/herocar5.webp",
  "/images/herocar6.webp",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white text-center h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => {
          const imgName = img.split('/').pop().replace('.webp', '');
          return (
            <picture key={index}>
              <source
                type="image/webp"
                media="(max-width: 768px)"
                srcSet={`/images/mobile/${imgName}-mobile.webp`}
              />
              <img
                src={img}
                alt={`Hero Slide ${index + 1}`}
                fetchPriority={index === 3 ? "high" : "low"}
                loading={index === 3 ? "eager" : "lazy"}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
              />
            </picture>
          );
        })}
      </div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <img
          srcSet={`${logoSmall} 400w, ${logoLarge} 1024w`}
          sizes="(max-width: 768px) 208px, 384px"
          src={logoLarge}
          alt="Clinking Bubbles Logo"
          fetchPriority="high"
          loading="eager"
          className="w-52 md:w-96 mb-4 md:mb-6 drop-shadow-[0_0_2px_black]"
        />

        <h1 className="clinking-font drop-shadow-[0_0_2px_black] text-3xl md:text-6xl font-bold mb-4 md:whitespace-nowrap">
          NJ Private Bartending
        </h1>
        <div className="flex flex-col items-center text-center">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl px-4 py-2 inline-block">
            <h2 className="bubbles-font drop-shadow-[0_0_2px_black] text-2xl md:text-2xl">
              Elevate Your Experience
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
  );
};

export default HeroSection;