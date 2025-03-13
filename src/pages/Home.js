// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
    </div>
  );
};

export default Home;
