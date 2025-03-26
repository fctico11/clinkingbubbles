// src/pages/Home.js
import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ChampagneClink from "../components/ChampagneClink";
import CredentialSection from "../components/CredentialSection";
import WhatWeBring from "../components/WhatWeBring";

// Lazy load the FillingCupAnimation so it's not in the initial bundle
const FillingCupAnimation = React.lazy(() => import("../components/FillingCupAnimation"));

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <div className="relative">
      {/* Homepage is visible from the start */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<div style={{ textAlign: "center", marginTop: "2rem" }}>Loading animation...</div>}>
        <FillingCupAnimation />
      </Suspense>
      <Services />
      <WhatWeBring />
      <CredentialSection />
      <section className="py-12 text-center">
        <div className="flex flex-col items-center space-y-4">
          <Link to="/booking-process">
            <button className="bubbles-font text-lg bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition">
              Learn more about the Booking process
            </button>
          </Link>
          <Link to="/contact">
            <button className="bubbles-font text-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition">
              Get a Quote
            </button>
          </Link>
        </div>
      </section>
      <Footer />
      {/* Overlay animation on top of homepage remains unchanged */}
      {showAnimation && <ChampagneClink onAnimationEnd={() => setShowAnimation(false)} />}
    </div>
  );
};

export default Home;


