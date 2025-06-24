import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <Helmet>
        <title>Meet Clinking Bubbles: NJ's Private Bartending Specialists</title>
        <meta name="description" content="Discover the story behind Clinking Bubbles — a passionate duo bringing joy, professionalism, and cocktails to events across NJ & NY." />
        <meta name="keywords" content="about clinking bubbles, private bartenders NJ, private bartenders NY, bartending story, bartender duo, NJ events, NY events" />
        <link rel="canonical" href="https://www.clinkingbubbles.com/about" />

        <meta property="og:title" content="Meet Clinking Bubbles: NJ's Private Bartending Specialists" />
        <meta property="og:description" content="Discover the story behind Clinking Bubbles — a passionate duo bringing joy, professionalism, and cocktails to events across NJ & NY." />
        <meta property="og:url" content="https://www.clinkingbubbles.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Discover the story behind Clinking Bubbles." />

        {/* Preload images */}
        <link rel="preload" as="image" href="/images/aboutpage-v3.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/whiteTransparentLogo.webp" type="image/webp" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[700px] bg-black overflow-hidden">
        <img
          src="/images/aboutpage-v3.webp"
          alt="Clinking Bubbles Founders"
          width="1080"
          height="1400"
          onLoad={() => setHeroLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${heroLoaded ? "opacity-100" : "opacity-0"}`}
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Logo */}
        <div className="absolute top-[80px] left-4 sm:top-[100px] sm:left-12">
          <img
            src="/images/whiteTransparentLogo-v1.webp"
            alt="Clinking Bubbles Logo"
            width="160"
            height="160"
            onLoad={() => setLogoLoaded(true)}
            className={`w-[90px] sm:w-[160px] h-auto transition-opacity duration-700 ease-out ${logoLoaded ? "opacity-100" : "opacity-0"}`}
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center px-4">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl px-4 py-2 inline-block">
            <h1 className="clinking-font text-3xl sm:text-5xl text-white font-bold drop-shadow-lg whitespace-nowrap">
              About Clinking Bubbles
            </h1>
          </div>
        </div>
      </section>

      {/* About Text */}
      <section className="pt-8 pb-4 px-6 sm:px-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="bubbles-font text-lg sm:text-xl text-black">
            Clinking Bubbles was born from a simple idea: that great drinks and great energy
            can turn a gathering into something unforgettable.
          </p>
          <p className="bubbles-font text-lg sm:text-xl text-black">
            Mel has spent over seven years in the hospitality industry, crafting cocktails and
            connections behind the bar. After a few private bartending gigs, she realized how
            special it felt to create something more personal—something beyond a standard bar
            experience. Around the same time, she and Francisco started dreaming big together.
            With his background in business, and her passion for hospitality, the idea
            clicked: why not build a mobile bartending service that brings warmth, intention, and
            a little sparkle to private events?
          </p>
          <p className="bubbles-font text-lg sm:text-xl text-black">
            We’re both proud Costa Ricans, and we carry that <em>pura vida</em> spirit into
            everything we do—joyful, welcoming, and always with heart. Our goal is to bring a warm,
            friendly, and detail-oriented touch to your special occasions. Whether it's a wedding,
            birthday, or backyard celebration, we aim to elevate your experience with thoughtfully
            curated drinks and a vibe that feels just right.
          </p>
          <p className="bubbles-font text-lg sm:text-xl text-black">
            At Clinking Bubbles, we don’t just pour drinks. We pour care, creativity, and personality
            into every cocktail—so you and your guests can focus on what really matters:{" "}
            <strong>making memories</strong>.
          </p>
        </div>
      </section>

      {/* Buttons */}
      <section className="py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
          <Link to="/services">
            <button className="bubbles-font text-lg bg-[#EBE6D6] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition">
              See Our Services
            </button>
          </Link>
          <Link to="/booking-process">
            <button className="bubbles-font text-lg bg-[#493423] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Learn More About The Booking Process
            </button>
          </Link>
          <Link to="/contact">
            <button className="bubbles-font text-lg bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
              Get a Quote
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;