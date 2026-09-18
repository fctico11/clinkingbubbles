// src/pages/SummitBartending.js
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
  { name: "New Providence" },
  { name: "Berkeley Heights", to: "/berkeley-heights-bartending" },
  { name: "Mountainside" },
  { name: "Springfield Township" },
  { name: "Millburn" },
  { name: "Chatham" },
];

const faqItems = [
  {
    question: "Do you travel to Summit, NJ?",
    answer:
      "Yes — Summit is part of our Union County home base, and we're glad to bring our full bar setup to homes, gardens, and private venues there.",
  },
  {
    question: "Can you bartend at garden or estate-style ceremonies?",
    answer:
      "We can typically set up at public and private garden venues alike — just confirm your venue's outside-vendor policy, and we'll coordinate the rest.",
  },
  {
    question: "What events do you bartend in Summit?",
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
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Private Bartending",
  name: "Private Bartending in Summit, NJ",
  description:
    "Private and mobile bartending for weddings, parties, and private events in Summit, NJ, with custom cocktail menus and certified bartenders.",
  provider: { "@id": "https://www.clinkingbubbles.com/#business" },
  areaServed: {
    "@type": "City",
    name: "Summit",
    containedInPlace: [
      { "@type": "AdministrativeArea", name: "Union County" },
      { "@type": "State", name: "New Jersey" },
    ],
  },
};

const SummitBartending = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <Helmet>
        <title>Summit, NJ Private Bartending | Clinking Bubbles</title>
        <meta
          name="description"
          content="Private bartending in Summit, NJ for weddings, parties, and private events. Custom cocktail menus, certified bartenders, and full bar setup."
        />
        <meta
          name="keywords"
          content="Summit NJ bartender, private bartending Summit NJ, mobile bar Summit NJ, Union County bartender, event bartending Summit"
        />
        <link rel="canonical" href="https://www.clinkingbubbles.com/summit-bartending" />

        <meta property="og:title" content="Summit, NJ Private Bartending | Clinking Bubbles" />
        <meta
          property="og:description"
          content="Private bartending in Summit, NJ for weddings, parties, and private events. Custom cocktail menus, certified bartenders, and full bar setup."
        />
        <meta property="og:url" content="https://www.clinkingbubbles.com/summit-bartending" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo-v1-1200.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Private bartending service in Summit, NJ." />

        <link rel="preload" as="image" href="/images/bar2.webp" type="image/webp" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <section className="relative w-full h-[60vh] sm:h-[700px] bg-black overflow-hidden">
        <img
          src="/images/bar2.webp"
          alt="Clinking Bubbles wooden bar setup at a private event"
          width="2561"
          height="3840"
          className="absolute inset-0 w-full h-full object-cover object-center sm:object-[center_30%]"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-28 sm:pt-48">
          <div data-aos="fade-up">
            <h1 className="clinking-font drop-shadow-[0_0_2px_black] text-4xl sm:text-6xl font-bold text-white text-center">
              SUMMIT, NJ
            </h1>
          </div>
          <div
            className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 mt-6 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="bubbles-font drop-shadow-[0_0_2px_black] text-md sm:text-2xl text-white">
              Private bartending for Summit's homes, gardens, and estate-style
              venues — signature cocktails, professional service, and a bar
              built around your event.
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
            /{" "}
            <Link to="/union-county-bartending" className="text-[#8a5c08] underline hover:text-yellow-600">
              Union County
            </Link>{" "}
            / Summit
          </p>
          <section className="mb-12" data-aos="fade-up">
            <p className="bubbles-font text-lg sm:text-xl text-black">
              Summit is one of Union County's most established communities —
              a walkable downtown, a direct train line into Manhattan, and
              grand historic homes make it equally suited to garden-estate
              ceremonies and private backyard celebrations. We bring our full
              bar setup wherever your Summit event calls for it.
            </p>
          </section>

          <section className="mb-12">
            <div className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6" data-aos="fade-up">
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">
                PRIVATE BAR SERVICE FOR SUMMIT
              </h2>
            </div>
            <ul
              className="list-disc pl-5 bubbles-font text-lg space-y-3 text-gray-800 max-w-3xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li>Full bar setup at private homes, gardens, and estate-style properties</li>
              <li>Custom cocktail menus tailored to your event and guest list</li>
              <li>Certified bartenders trained in professional, attentive service</li>
              <li>Beer, wine, and mocktails for every guest</li>
              <li>Optional portable bar, hydration station, and tabling add-ons</li>
            </ul>
          </section>

          <section className="mb-12" data-aos="fade-up">
            <div className="bg-[rgba(250,248,243,0.6)] border border-[#d9c7b2] p-6 sm:p-10 rounded-lg shadow-sm">
              <h3 className="clinking-font text-2xl font-bold mb-3">Events We Bartend in Summit</h3>
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

          <section className="mb-12" data-aos="fade-up">
            <h2 className="clinking-font text-2xl sm:text-3xl font-bold mb-4">Serving Summit & Union County</h2>
            <p className="bubbles-font text-lg text-gray-800">
              Summit is part of our home turf — Clinking Bubbles is based
              right in Union County, and we cover the whole county from
              Summit to{" "}
              <Link to="/union-county-bartending" className="text-[#8a5c08] underline hover:text-yellow-600">
                every town in between
              </Link>
              .
            </p>
          </section>

          <NearbyTownsStrip
            intro="Summit borders"
            towns={nearbyTowns}
          />

          <section className="mb-12">
            <div className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6" data-aos="fade-up">
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">SUMMIT BAR SERVICE FAQ</h2>
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

          <PageCTA
            heading="Ready to Plan Your Event in Summit?"
            crossLinksLabel="Planning a different kind of event?"
            crossLinks={eventTypeLinks}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SummitBartending;
