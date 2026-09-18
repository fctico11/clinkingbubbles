// src/pages/SaddleRiverBartending.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import NearbyTownsStrip from "../components/NearbyTownsStrip";
import PageCTA from "../components/PageCTA";

const eventTypeLinks = [
  { name: "Wedding Bartending", to: "/wedding-bartending" },
  { name: "Birthday Party Bartending", to: "/birthday-party-bartending" },
  { name: "Corporate Event Bartending", to: "/corporate-event-bartending" },
];

const nearbyTowns = [
  { name: "Allendale" },
  { name: "Hillsdale" },
  { name: "Ho-Ho-Kus" },
  { name: "Ramsey" },
  { name: "Upper Saddle River" },
  { name: "Waldwick" },
  { name: "Washington Township" },
  { name: "Woodcliff Lake" },
];

const faqItems = [
  {
    question: "Do you travel to Saddle River, NJ?",
    answer:
      "Yes — Saddle River is part of our New Jersey service area, and we're happy to bring our full bar setup to private homes and estates there.",
  },
  {
    question: "Can you set up a private bar at a home without a built-in bar?",
    answer:
      "Definitely. We can bring a portable bar or work with a bar you already have on-site — indoors or outdoors — and tailor the setup to your space.",
  },
  {
    question: "What events do you bartend in Saddle River?",
    answer:
      "Weddings, engagement parties, milestone birthdays, holiday gatherings, and private corporate events — if there's a reason to celebrate, we're glad to be there.",
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
  serviceType: "Private Bartending",
  name: "Private Bartending in Saddle River, NJ",
  description:
    "Private and mobile bartending for weddings, parties, and private events in Saddle River, NJ, with custom cocktail menus and certified bartenders.",
  provider: { "@id": "https://www.clinkingbubbles.com/#business" },
  areaServed: {
    "@type": "City",
    name: "Saddle River",
    containedInPlace: { "@type": "State", name: "New Jersey" },
  },
};

const SaddleRiverBartending = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <Helmet>
        <title>Saddle River, NJ Private Bartending | Clinking Bubbles</title>
        <meta
          name="description"
          content="Private bartending in Saddle River, NJ for weddings, parties, and private events. Custom cocktail menus, certified bartenders, and full bar setup."
        />
        <meta
          name="keywords"
          content="Saddle River NJ bartender, private bartending Saddle River, mobile bar Saddle River NJ, Bergen County bartender, event bartending Saddle River"
        />
        <link rel="canonical" href="https://www.clinkingbubbles.com/saddle-river-bartending" />

        <meta property="og:title" content="Saddle River, NJ Private Bartending | Clinking Bubbles" />
        <meta
          property="og:description"
          content="Private bartending in Saddle River, NJ for weddings, parties, and private events. Custom cocktail menus, certified bartenders, and full bar setup."
        />
        <meta property="og:url" content="https://www.clinkingbubbles.com/saddle-river-bartending" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo-v1-1200.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Private bartending service in Saddle River, NJ." />

        <link rel="preload" as="image" href="/images/bar1.webp" type="image/webp" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[700px] bg-black overflow-hidden">
        <img
          src="/images/bar1.webp"
          alt="Clinking Bubbles wooden bar setup at a private event"
          width="2560"
          height="3840"
          className="absolute inset-0 w-full h-full object-cover object-[center_90%] sm:object-[center_65%]"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-28 sm:pt-48">
          <div data-aos="fade-up">
            <h1 className="clinking-font drop-shadow-[0_0_2px_black] text-4xl sm:text-6xl font-bold text-white text-center">
              SADDLE RIVER, NJ
            </h1>
          </div>
          <div
            className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 mt-6 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="bubbles-font drop-shadow-[0_0_2px_black] text-md sm:text-2xl text-white">
              Private bartending for Saddle River's homes and estates —
              signature cocktails, professional service, and a bar built
              around your event.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white text-black px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="bubbles-font text-sm text-gray-600 mb-4" data-aos="fade-up">
            <Link to="/service-areas" className="text-[#8a5c08] underline hover:text-yellow-600">
              Service Areas
            </Link>{" "}
            / Saddle River
          </p>
          {/* Intro */}
          <section className="mb-12" data-aos="fade-up">
            <p className="bubbles-font text-lg sm:text-xl text-black">
              Saddle River is one of Bergen County's quietest, most
              exclusive addresses — a borough of private estates and
              low-density residential streets rather than public event
              venues. That makes it a natural fit for our private bar
              service: we bring the bar, the bartenders, and the cocktail
              menu to your home, and handle setup and cleanup so nothing
              disrupts your property.
            </p>
          </section>

          {/* Why Clinking Bubbles */}
          <section className="mb-12">
            <div
              className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6"
              data-aos="fade-up"
            >
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">
                PRIVATE BAR SERVICE FOR SADDLE RIVER
              </h2>
            </div>
            <ul
              className="list-disc pl-5 bubbles-font text-lg space-y-3 text-gray-800 max-w-3xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li>Full bar setup at private homes and estates, indoors or outdoors</li>
              <li>Custom cocktail menus tailored to your event and guest list</li>
              <li>Certified bartenders trained in discreet, professional service</li>
              <li>Beer, wine, and mocktails for every guest</li>
              <li>Optional portable bar, hydration station, and tabling add-ons</li>
            </ul>
          </section>

          {/* Event types */}
          <section className="mb-12" data-aos="fade-up">
            <div className="bg-[rgba(250,248,243,0.6)] border border-[#d9c7b2] p-6 sm:p-10 rounded-lg shadow-sm">
              <h3 className="clinking-font text-2xl font-bold mb-3">
                Events We Bartend in Saddle River
              </h3>
              <p className="bubbles-font text-lg text-gray-800 mb-4">
                From{" "}
                <Link to="/wedding-bartending" className="text-[#8a5c08] underline hover:text-yellow-600">
                  weddings
                </Link>{" "}
                and engagement parties to milestone birthdays, holiday
                gatherings, and private corporate events — see our full
                package details or reach out to talk through your event.
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
              Serving Saddle River & Beyond
            </h2>
            <p className="bubbles-font text-lg text-gray-800">
              We serve Saddle River as part of our broader Bergen County
              and New Jersey & New York coverage, operating as a dry-hire
              bartending service — you supply the alcohol, we bring
              everything else.
            </p>
          </section>

          <NearbyTownsStrip
            intro="Saddle River borders"
            towns={nearbyTowns}
          />

          {/* FAQ */}
          <section className="mb-12">
            <div
              className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6"
              data-aos="fade-up"
            >
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">
                SADDLE RIVER BAR SERVICE FAQ
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
            heading="Ready to Plan Your Event in Saddle River?"
            crossLinksLabel="Planning a different kind of event?"
            crossLinks={eventTypeLinks}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SaddleRiverBartending;
