import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logos/transparent-v2.webp"; // smaller file size 
import { Helmet } from 'react-helmet-async';


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <Helmet>
        <title>Meet Clinking Bubbles: NJ's Private Bartending Specialists</title>
        {console.log("Helmet mounted for About")}
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
      </Helmet>
      {/* Navbar remains outside the animated container */}
      <Navbar />

      {/* Wrap only the animated content */}
      <div data-aos="fade-up">
        {/* Logo Section with colored background */}
        <section className="bg-[#EBE6D6] pt-20 pb-4" style={{ minHeight: "250px" }}>
          <div className="max-w-xs mx-auto">
            <img
              src={logo}
              alt="Clinking Bubbles Logo"
              className="mx-auto"
              width="300"
              height="300"
              loading="eager"
              decoding="sync"
            />
          </div>
        </section>

        {/* About Text Section */}
        <section className="py-16 px-6 sm:px-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="clinking-font text-4xl font-bold">
              About Clinking Bubbles
            </h1>
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

        {/* Buttons Section */}
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
      </div>

      {/* Footer remains unchanged */}
      <Footer />
    </div>
  );
};

export default About;
