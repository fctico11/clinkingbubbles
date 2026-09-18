// src/pages/WeddingBartending.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import PageCTA from "../components/PageCTA";

const serviceAreaLinks = [
  { name: "Union County", to: "/union-county-bartending" },
  { name: "Summit", to: "/summit-bartending" },
  { name: "Westfield", to: "/westfield-bartending" },
  { name: "Berkeley Heights", to: "/berkeley-heights-bartending" },
  { name: "Cranford", to: "/cranford-bartending" },
  { name: "Scotch Plains", to: "/scotch-plains-bartending" },
  { name: "Saddle River", to: "/saddle-river-bartending" },
];

const faqItems = [
  {
    question: "How far in advance should we book a wedding bartender?",
    answer:
      "Most couples book 6–12 months out, especially for peak wedding season (May–October). We're happy to check availability for closer dates too — just reach out.",
  },
  {
    question: "Do you provide the alcohol for our wedding?",
    answer:
      "Clinking Bubbles operates as a dry-hire service, so you or your venue supply the alcohol. We'll walk you through a shopping list during your consultation so you know exactly what to buy.",
  },
  {
    question: "Can you serve at any wedding venue?",
    answer:
      "Yes — barns, private estates, backyards, tents, hotel ballrooms, and everywhere in between. We set up indoors or outdoors, with or without a built-in bar.",
  },
  {
    question: "Can you do a champagne toast in addition to the reception bar?",
    answer:
      "Absolutely. Champagne and sparkling toast service can be added to any package, timed to your ceremony or reception schedule.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wedding Bartending",
  name: "Wedding Bartending Service",
  description:
    "Private wedding bartending for cocktail hours and receptions across New Jersey and New York, including custom cocktail menus, certified bartenders, and full bar setup.",
  provider: { "@id": "https://www.clinkingbubbles.com/#business" },
  areaServed: [
    { "@type": "State", name: "New Jersey" },
    { "@type": "State", name: "New York" },
  ],
};

const WeddingBartending = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <Helmet>
        <title>Wedding Bartending in NJ & NY | Clinking Bubbles</title>
        <meta
          name="description"
          content="Private wedding bartending across NJ & NY. Custom cocktail menus, certified bartenders, and full bar setup for your cocktail hour and reception."
        />
        <meta
          name="keywords"
          content="wedding bartending NJ, wedding bartending NY, wedding bar service, private wedding bartenders, cocktail hour bar, reception bartender"
        />
        <link rel="canonical" href="https://www.clinkingbubbles.com/wedding-bartending" />

        <meta property="og:title" content="Wedding Bartending in NJ & NY | Clinking Bubbles" />
        <meta
          property="og:description"
          content="Private wedding bartending across NJ & NY. Custom cocktail menus, certified bartenders, and full bar setup for your cocktail hour and reception."
        />
        <meta property="og:url" content="https://www.clinkingbubbles.com/wedding-bartending" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo-v1-1200.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Private wedding bartending service in NJ & NY." />

        <link rel="preload" as="image" href="/images/ariparty.webp" type="image/webp" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[700px] bg-black overflow-hidden">
        <img
          src="/images/ariparty.webp"
          alt="Decorated wedding bar with floral accents"
          width="6000"
          height="4000"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-28 sm:pt-48">
          <div data-aos="fade-up">
            <h1 className="clinking-font drop-shadow-[0_0_2px_black] text-4xl sm:text-6xl font-bold text-white text-center">
              WEDDING BARTENDING
            </h1>
          </div>
          <div
            className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 mt-6 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="bubbles-font drop-shadow-[0_0_2px_black] text-md sm:text-2xl text-white">
              Private bar service for weddings across NJ & NY — signature
              cocktails, professional bartenders, and a bar experience built
              around your day.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white text-black px-4 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <section className="mb-12" data-aos="fade-up">
            <p className="bubbles-font text-lg sm:text-xl text-black">
              Your wedding bar sets the tone for cocktail hour and carries the
              celebration through the reception. We design a custom cocktail
              menu around your story, staff it with certified bartenders, and
              handle setup so you and your guests can just enjoy the day.
            </p>
          </section>

          {/* What's Included */}
          <section className="mb-12">
            <div
              className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6"
              data-aos="fade-up"
            >
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">
                BUILT FOR YOUR WEDDING DAY
              </h2>
            </div>
            <ul
              className="list-disc pl-5 bubbles-font text-lg space-y-3 text-gray-800 max-w-3xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li>Custom cocktail menu designed around your colors, story, or favorite flavors</li>
              <li>Dedicated bar service for cocktail hour and reception</li>
              <li>Champagne & sparkling toast service</li>
              <li>Beer, wine, and mocktails so every guest is covered</li>
              <li>Certified, professional bartenders who keep the line moving and the vibe easy</li>
              <li>Setup at any venue — barns, private estates, backyards, tents, or ballrooms</li>
            </ul>
          </section>

          {/* Add-ons + packages link */}
          <section className="mb-12" data-aos="fade-up">
            <div className="bg-[rgba(250,248,243,0.6)] border border-[#d9c7b2] p-6 sm:p-10 rounded-lg shadow-sm">
              <h3 className="clinking-font text-2xl font-bold mb-3">
                Packages & Add-Ons
              </h3>
              <p className="bubbles-font text-lg text-gray-800 mb-4">
                From our Essentials package to the Full Experience, plus
                add-ons like our 6 ft. wooden bar and hydration station — see
                everything included and pick what fits your reception.
              </p>
              <Link to="/packages">
                <button className="bubbles-font text-lg bg-[#493423] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                  View Packages & Pricing Tiers
                </button>
              </Link>
            </div>
          </section>

          {/* Service area */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="clinking-font text-2xl sm:text-3xl font-bold mb-4">
              Serving Weddings Across NJ & NY
            </h2>
            <p className="bubbles-font text-lg text-gray-800">
              We bring wedding bar service throughout New Jersey and New
              York — from private estates in{" "}
              <Link to="/saddle-river-bartending" className="text-[#8a5c08] underline hover:text-yellow-600">
                Saddle River, NJ
              </Link>{" "}
              to venues across the tri-state area.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <div
              className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6"
              data-aos="fade-up"
            >
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">
                WEDDING BAR FAQ
              </h2>
            </div>
            <div className="space-y-6 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
              {faqItems.map((item) => (
                <div key={item.question} className="border-b pb-4">
                  <h3 className="bubbles-font text-lg font-semibold">{item.question}</h3>
                  <p className="bubbles-font text-base text-gray-700 mt-2">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <PageCTA
            heading="Ready to Plan Your Wedding?"
            crossLinksLabel="Also serving:"
            crossLinks={serviceAreaLinks}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WeddingBartending;
