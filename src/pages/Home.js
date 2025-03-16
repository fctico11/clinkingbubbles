import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FillingCupAnimation from "../components/FillingCupAnimation";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ChampagneClink from "../components/ChampagneClink";

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
      <section className="py-12 text-center">
        <Link to="/booking-process">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition">
            Learn more about the Booking process
          </button>
        </Link>
      </section>
      <Footer />

      {/* Overlay animation on top of homepage */}
      {showAnimation && <ChampagneClink onAnimationEnd={() => setShowAnimation(false)} />}
    </div>
  );
};

export default Home;


