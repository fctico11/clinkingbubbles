import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';

// Lazy load components
const AboutSection = React.lazy(() => import("../components/AboutSection"));
const Services = React.lazy(() => import("../components/Services"));
const WhatWeBring = React.lazy(() => import("../components/WhatWeBring"));
const CredentialSection = React.lazy(() => import("../components/CredentialSection"));
const FillingCupAnimation = React.lazy(() => import("../components/FillingCupAnimation"));

const Home = () => {

  return (
    <div className="relative">
      <Helmet>
        <title>Clinking Bubbles | Private Event Bartending in NJ & NY</title>
        {console.log("Helmet mounted for Home")}
        <meta name="description" content="Private bartending services for weddings, parties, and special events. Signature cocktails, professional bartenders, and unforgettable moments." />
        <meta name="keywords" content="private bartending, wedding bartenders NJ, party bartenders NY, mobile bar, cocktail catering, bartending services" />
        <link rel="canonical" href="https://www.clinkingbubbles.com/" />


        <meta property="og:type" content="website" />
        <meta property="og:title" content="Clinking Bubbles | Private Event Bartending in NJ & NY" />
        <meta property="og:description" content="Private bartending services for weddings, parties, and special events. Signature cocktails, professional bartenders, and unforgettable moments." />
        <meta property="og:url" content="https://www.clinkingbubbles.com/" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clinking Bubbles | Private Event Bartending in NJ & NY" />
        <meta name="twitter:description" content="Private bartending services for weddings, parties, and special events. Signature cocktails, professional bartenders, and unforgettable moments." />
        <meta name="twitter:image" content="https://www.clinkingbubbles.com/assets/mainlogo.png" />
        <meta name="twitter:image:alt" content="Private event bartending for weddings and parties in NJ & NY." />

        <link rel="preload" href="/assets/champagne.json" as="fetch" type="application/json" crossorigin="anonymous" />
      </Helmet>

      <Navbar />
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <AboutSection />
        <FillingCupAnimation />
        <Services />
        <WhatWeBring />
        <CredentialSection />
      </Suspense>
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
    </div>
  );
};


export default Home;


