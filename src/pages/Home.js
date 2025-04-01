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
import { Helmet } from 'react-helmet';


// Lazy load the FillingCupAnimation so it's not in the initial bundle
const FillingCupAnimation = React.lazy(() => import("../components/FillingCupAnimation"));

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <div className="relative">
      <Helmet>
        <title>Clinking Bubbles: Premium Event Bartending Services in NJ</title>
        <meta name="description" content="Celebrate in style with luxury bartending services for private events in NJ & NY. Signature cocktails, pro staff, and seamless vibes." />
        <meta name="keywords" content="private bartending, event bartenders, NJ bartenders, NY bartenders, luxury bartending, mobile bar service, cocktail catering, party bartenders" />
        <link rel="canonical" href="https://www.clinkingbubbles.com/" />

        <meta property="og:title" content="Clinking Bubbles: Premium Event Bartending Services in NJ" />
        <meta property="og:description" content="Celebrate in style with luxury bartending services for private events in NJ & NY. Signature cocktails, pro staff, and seamless vibes." />
        <meta property="og:url" content="https://www.clinkingbubbles.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/mainlogo.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Celebrate in style with luxury bartending services for private events in NJ & NY." />
      </Helmet>

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
            <button className="bubbles-font text-lg bg-[#493423] hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition">
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
      {showAnimation && <ChampagneClink onAnimationEnd={() => setShowAnimation(false)} />}
    </div>
  );
};


export default Home;


