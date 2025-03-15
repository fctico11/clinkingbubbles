import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ChampagneClink from "../components/ChampagneClink";

const Home = () => {
  const [showHome, setShowHome] = useState(false);

  return (
    <div className={`home-container ${showHome ? "show-home" : "hidden-home"}`}>
      {!showHome && <ChampagneClink onAnimationEnd={() => setShowHome(true)} />}
      {showHome && (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <Services />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
