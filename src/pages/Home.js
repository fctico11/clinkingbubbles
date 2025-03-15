import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ChampagneClink from "../components/ChampagneClink";

const Home = () => {
  const [showHome, setShowHome] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="relative">
      {/* Render homepage in the background */}
      <div className={`homepage-content ${animationComplete ? "fade-in" : "hidden"}`}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Services />
        <Footer />
      </div>

      {/* Champagne animation overlay */}
      {!showHome && (
        <ChampagneClink
          onAnimationEnd={() => {
            setShowHome(true);
            setTimeout(() => setAnimationComplete(true), 500); // Delay showing homepage slightly for smoother transition
          }}
        />
      )}
    </div>
  );
};

export default Home;

