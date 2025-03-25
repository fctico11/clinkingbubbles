import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FillingCupAnimation from "../components/FillingCupAnimation";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ChampagneClink from "../components/ChampagneClink";
import CredentialSection from "../components/CredentialSection";
import WhatWeBring from "../components/WhatWeBring";

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <div className="relative">
      {/* Homepage is visible from the start */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FillingCupAnimation />
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

      {/* Overlay animation on top of homepage */}
      {showAnimation && <ChampagneClink onAnimationEnd={() => setShowAnimation(false)} />}
    </div>
  );
};

export default Home;


