// src/pages/ServicesPage.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const eventCategories = [
  {
    category: "Weddings & Celebrations",
    events: [
      {
        title: "Wedding Bartending",
        desc: "Signature cocktails and full bar service for your cocktail hour and reception.",
        to: "/wedding-bartending",
      },
    ],
  },
  {
    category: "Private Events",
    events: [
      {
        title: "Birthday Party Bartending",
        desc: "Full bar service for milestone birthdays and backyard celebrations.",
        to: "/birthday-party-bartending",
      },
    ],
  },
  {
    category: "Corporate & Brand",
    events: [
      {
        title: "Corporate Event Bartending",
        desc: "Polished bar service for offices, holiday parties, and client events.",
        to: "/corporate-event-bartending",
      },
    ],
  },
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Private Bartending Services: NJ Weddings, Parties & More</title>
        <meta
          name="description"
          content="Explore our private bartending services for weddings, birthdays, and special events. Serving NJ & NY with style, heart, and crafted cocktails."
        />
        <meta
          name="keywords"
          content="bartending services, private bartending NJ, private bartending NY, wedding bartending, party bartenders NJ, wedding bartenders NY, event bar services"
        />
        <link rel="canonical" href="https://www.clinkingbubbles.com/services" />
        <meta
          property="og:title"
          content="Private Bartending Services: NJ Weddings, Parties & More"
        />
        <meta
          property="og:description"
          content="Explore our private bartending services for weddings, birthdays, and special events. Serving NJ & NY with style, heart, and crafted cocktails."
        />
        <meta
          property="og:url"
          content="https://www.clinkingbubbles.com/services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.clinkingbubbles.com/assets/mainlogo-v1-1200.png"
        />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="Explore premium bartending services for NJ & NY."
        />
        <link
          rel="preload"
          as="image"
          href="/images/whatwebring3.webp"
          type="image/webp"
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[700px]">
        <img
          src="/images/whatwebring3.webp"
          alt="Clinking Bubbles bar service at a private event"
          width="2560"
          height="3840"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-28 sm:pt-48">
          <div data-aos="fade-up">
            <h1 className="clinking-font drop-shadow-[0_0_2px_black] text-4xl sm:text-6xl font-bold text-white text-center">
              OUR SERVICES
            </h1>
          </div>

          <div className="mt-6 sm:mt-10"></div>

          <div
            className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="bubbles-font drop-shadow-[0_0_2px_black] text-md sm:text-2xl text-white drop-shadow-sm">
              However you're celebrating, we bring a tailored bar experience
              built around your event. Explore by event type below, or head
              straight to our packages and pricing.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white text-black px-4 py-10">
        <div className="max-w-6xl mx-auto">
          {/* EXPLORE BY EVENT TYPE */}
          <div
            className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6"
            data-aos="fade-up"
          >
            <h2 className="clinking-font text-2xl sm:text-3xl font-bold">
              EXPLORE BY EVENT
            </h2>
          </div>
          <div className="mb-12">
            {eventCategories.map((cat) => (
              <div key={cat.category} className="mb-8" data-aos="fade-up">
                <h3 className="bubbles-font text-sm uppercase tracking-wide text-gray-500 mb-3">
                  {cat.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
                  {cat.events.map((event) => (
                    <Link
                      key={event.to}
                      to={event.to}
                      className="block bg-[rgba(250,248,243,0.6)] border border-[#d9c7b2] rounded-lg p-6 text-[#493423] hover:bg-yellow-500 hover:text-black transition"
                    >
                      <h4 className="clinking-font text-lg font-bold mb-1">{event.title}</h4>
                      <p className="bubbles-font text-sm">{event.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* PACKAGES CALLOUT */}
          <div
            className="bg-[rgba(250,248,243,0.6)] border border-[#d9c7b2] p-6 sm:p-10 rounded-lg shadow-sm max-w-4xl mb-12"
            data-aos="fade-up"
          >
            <h3 className="clinking-font text-2xl font-bold mb-3">
              Ready to See Pricing?
            </h3>
            <p className="bubbles-font text-lg text-gray-800 mb-4">
              From The Essentials to The Full Experience, plus add-ons like
              our 6 ft. wooden bar and hydration station — view every
              package and what's included.
            </p>
            <Link to="/packages">
              <button className="bubbles-font text-lg bg-[#493423] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                View Packages & Pricing Tiers
              </button>
            </Link>
          </div>

          <div className="mt-7 space-y-4" data-aos="fade-up">
            <div className="text-center">
              <Link to="/booking-process">
                <button className="bubbles-font text-lg bg-[#493423] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                  Learn More About The Booking Process
                </button>
              </Link>
            </div>
            <div className="text-center">
              <Link to="/contact">
                <button className="bubbles-font text-lg bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
                  Get a Quote!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicesPage;
