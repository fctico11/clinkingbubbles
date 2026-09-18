// src/pages/CranfordBartending.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

// Prototype: "cocktail menu / ticket" style for location & service pages —
// deliberately different structure from Home (dotted-leader line items,
// framed inset photo instead of full-bleed hero, flat brass instead of
// gradient gold) while keeping the same fonts and brand palette family.
// If approved, PageCTA/NearbyTownsStrip get folded into this look and
// this rolls out to the other town/event pages.

const eventTypeLinks = [
  { name: "Wedding Bartending", to: "/wedding-bartending" },
  { name: "Birthday Party Bartending", to: "/birthday-party-bartending" },
  { name: "Corporate Event Bartending", to: "/corporate-event-bartending" },
];

const nearbyTowns = [
  { name: "Garwood" },
  { name: "Westfield", to: "/westfield-bartending" },
  { name: "Springfield Township" },
  { name: "Kenilworth" },
  { name: "Roselle" },
  { name: "Roselle Park" },
  { name: "Linden" },
  { name: "Winfield Township" },
  { name: "Clark" },
];

const menuLines = [
  { label: "Full Bar Setup", detail: "private homes & backyards, in or out" },
  { label: "Custom Cocktail Menus", detail: "tailored to your event & guest list" },
  { label: "Certified Bartenders", detail: "professional, attentive service" },
  { label: "Beer, Wine & Mocktails", detail: "for every guest" },
  { label: "Portable Bar & Add-Ons", detail: "hydration station, tabling" },
];

const faqItems = [
  {
    question: "Do you travel to Cranford, NJ?",
    answer:
      "Yes — Cranford is part of our Union County home base, and we're glad to bring our full bar setup to homes and private venues there.",
  },
  {
    question: "Can you bartend at a riverside or backyard event in Cranford?",
    answer:
      "Absolutely — indoors, outdoors, riverside, or in a backyard, we bring a portable bar or work with one already on-site.",
  },
  {
    question: "What events do you bartend in Cranford?",
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
  name: "Private Bartending in Cranford, NJ",
  description:
    "Private and mobile bartending for weddings, parties, and private events in Cranford, NJ, with custom cocktail menus and certified bartenders.",
  provider: { "@id": "https://www.clinkingbubbles.com/#business" },
  areaServed: {
    "@type": "City",
    name: "Cranford",
    containedInPlace: [
      { "@type": "AdministrativeArea", name: "Union County" },
      { "@type": "State", name: "New Jersey" },
    ],
  },
};

const CranfordBartending = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <div className="bg-[#F6EFE1] min-h-screen flex flex-col relative">
      <Helmet>
        <title>Cranford, NJ Private Bartending | Clinking Bubbles</title>
        <meta
          name="description"
          content="Private bartending in Cranford, NJ for weddings, parties, and private events. Custom cocktail menus, certified bartenders, and full bar setup."
        />
        <meta
          name="keywords"
          content="Cranford NJ bartender, private bartending Cranford NJ, mobile bar Cranford NJ, Union County bartender, event bartending Cranford"
        />
        <link rel="canonical" href="https://www.clinkingbubbles.com/cranford-bartending" />

        <meta property="og:title" content="Cranford, NJ Private Bartending | Clinking Bubbles" />
        <meta
          property="og:description"
          content="Private bartending in Cranford, NJ for weddings, parties, and private events. Custom cocktail menus, certified bartenders, and full bar setup."
        />
        <meta property="og:url" content="https://www.clinkingbubbles.com/cranford-bartending" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo-v1-1200.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Private bartending service in Cranford, NJ." />

        <link rel="preload" as="image" href="/images/car1.webp" type="image/webp" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero — ticket header instead of full-bleed photo */}
      <section className="relative w-full px-4 pt-28 pb-14 sm:pt-40 sm:pb-20">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-[1.3fr_1fr] gap-10 sm:gap-16 items-center">
          <div data-aos="fade-up">
            <span className="bubbles-font inline-block bg-[#493423] text-[#FFFDF8] text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-sm mb-5">
              Union County &middot; NJ
            </span>
            <h1 className="clinking-font text-5xl sm:text-6xl text-[#2B2016] leading-[0.95]">
              Cranford
            </h1>
            <div className="w-16 h-[3px] bg-[#B5892C] my-5"></div>
            <p className="bubbles-font text-lg sm:text-xl text-[#2B2016]/80 max-w-md">
              Private bartending for Cranford's homes and celebrations —
              signature cocktails, professional service, and a bar built
              around your event.
            </p>
          </div>

          <div
            className="flex justify-center sm:justify-end"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-[#FFFDF8] p-3 border border-[#B5892C]/40 shadow-[0_10px_30px_rgba(43,32,22,0.18)] rounded-sm">
              <img
                src="/images/car1.webp"
                alt="Clinking Bubbles signature cocktail at a private event"
                width="2561"
                height="3840"
                className="w-full max-w-[220px] sm:max-w-xs object-cover rounded-sm"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="text-[#2B2016] px-4 pb-10">
        <div className="max-w-4xl mx-auto">
          <p className="bubbles-font text-sm text-[#2B2016]/60 mb-10" data-aos="fade-up">
            <Link to="/service-areas" className="text-[#B5892C] underline hover:text-[#493423]">
              Service Areas
            </Link>{" "}
            /{" "}
            <Link to="/union-county-bartending" className="text-[#B5892C] underline hover:text-[#493423]">
              Union County
            </Link>{" "}
            / Cranford
          </p>

          <section className="mb-14" data-aos="fade-up">
            <p className="bubbles-font text-lg sm:text-xl text-[#2B2016]">
              Cranford's downtown sits right along the Rahway River — a
              detail locals are proud enough of to call it the "Venice of
              New Jersey." Between the riverside parks, walkable downtown,
              and classic Union County homes, it's a town built for a good
              celebration, and we're glad to bring the bar to it.
            </p>
          </section>

          {/* Menu-line section */}
          <section className="mb-14" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-7">
              <span className="clinking-font text-2xl sm:text-3xl text-[#2B2016]">
                Private Bar Service for Cranford
              </span>
            </div>
            <ul className="space-y-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
              {menuLines.map((item) => (
                <li key={item.label} className="flex items-baseline gap-2">
                  <span className="bubbles-font text-lg text-[#2B2016] whitespace-nowrap">
                    {item.label}
                  </span>
                  <span
                    className="flex-1 border-b border-dotted border-[#B5892C] translate-y-[-4px]"
                    aria-hidden="true"
                  ></span>
                  <span className="bubbles-font text-lg text-[#2B2016]/70 whitespace-nowrap text-right">
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14" data-aos="fade-up">
            <div className="bg-[#FFFDF8] border border-[#B5892C]/40 p-6 sm:p-10 rounded-sm">
              <h3 className="clinking-font text-2xl text-[#2B2016] mb-3">Events We Bartend in Cranford</h3>
              <p className="bubbles-font text-lg text-[#2B2016]/80 mb-6">
                From{" "}
                <Link to="/wedding-bartending" className="text-[#B5892C] underline hover:text-[#493423]">
                  weddings
                </Link>{" "}
                and engagement parties to milestone birthdays, holiday
                gatherings, and private corporate events — see our full
                package details or reach out to talk through your event.
              </p>
              <Link to="/packages">
                <button
                  className="bubbles-font text-lg text-black font-semibold px-6 py-3 rounded-full transition transform hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #e6c34d 0%, #c9952e 50%, #e6c34d 100%)",
                    backgroundSize: "200% 200%",
                    boxShadow: "0 4px 15px rgba(201, 149, 46, 0.3)",
                  }}
                >
                  View Packages &amp; Pricing Tiers
                </button>
              </Link>
            </div>
          </section>

          <section className="mb-14 border-l-2 border-[#493423] pl-5" data-aos="fade-up">
            <h2 className="clinking-font text-2xl sm:text-3xl text-[#2B2016] mb-3">Serving Cranford &amp; Union County</h2>
            <p className="bubbles-font text-lg text-[#2B2016]/80">
              Cranford is part of our home turf — Clinking Bubbles is based
              right in Union County, and we cover the whole county from
              Cranford to{" "}
              <Link to="/union-county-bartending" className="text-[#B5892C] underline hover:text-[#493423]">
                every town in between
              </Link>
              .
            </p>
          </section>

          {/* Nearby towns — ticket strip */}
          <section className="mb-14 pt-6 border-t border-[#B5892C]/40" data-aos="fade-up">
            <span className="bubbles-font block text-xs tracking-[0.2em] uppercase text-[#493423] mb-3">
              Nearby Towns
            </span>
            <p className="bubbles-font text-lg text-[#2B2016]/80 max-w-3xl">
              Cranford borders{" "}
              {nearbyTowns.map((town, i) => (
                <React.Fragment key={town.name}>
                  {town.to ? (
                    <Link to={town.to} className="text-[#B5892C] underline hover:text-[#493423]">
                      {town.name}
                    </Link>
                  ) : (
                    <span>{town.name}</span>
                  )}
                  {i < nearbyTowns.length - 2
                    ? ", "
                    : i === nearbyTowns.length - 2
                    ? ", and "
                    : "."}
                </React.Fragment>
              ))}
            </p>
          </section>

          {/* FAQ — menu entries */}
          <section className="mb-14">
            <span
              className="bubbles-font inline-block bg-[#493423] text-[#FFFDF8] text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-sm mb-7"
              data-aos="fade-up"
            >
              Cranford Bar Service FAQ
            </span>
            <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="100">
              {faqItems.map((item) => (
                <div key={item.question} className="border-t border-[#B5892C]/40 py-5">
                  <h3 className="clinking-font text-lg text-[#2B2016]">{item.question}</h3>
                  <p className="bubbles-font text-base text-[#2B2016]/70 mt-2">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA — ticket stub with watermarked glasses decal */}
          <section
            className="relative overflow-hidden py-16 px-6 text-center rounded-sm mb-12 bg-[#FFFDF8] border border-[#B5892C]/40"
            data-aos="fade-up"
          >
            <img
              src="/images/logos/glasses-icon-grey.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-none sm:w-[115%] sm:max-w-none opacity-[0.07]"
            />

            <div className="relative z-10">
              <h2 className="clinking-font text-3xl md:text-5xl mb-4 text-[#2B2016]">
                Ready to Plan Your Event in Cranford?
              </h2>
              <div className="w-16 h-[3px] bg-[#B5892C] mx-auto mb-6"></div>
              <p className="bubbles-font text-lg md:text-xl mb-8 max-w-xl mx-auto text-[#2B2016]/80">
                Get a personalized, no-obligation quote tailored to your unique
                vision. Our passionate team is ready to bring your dream event
                to life and will be in touch within 24 hours.
              </p>

              <Link to="/contact">
                <button
                  className="bubbles-font text-lg md:text-xl text-black font-semibold px-10 py-4 rounded-full transition transform hover:-translate-y-1 hover:shadow-xl inline-flex items-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #e6c34d 0%, #c9952e 50%, #e6c34d 100%)",
                    backgroundSize: "200% 200%",
                    boxShadow: "0 4px 15px rgba(201, 149, 46, 0.3)",
                  }}
                >
                  Request Your Free Quote
                  <span className="page-cta-arrow" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </Link>

              <p className="bubbles-font text-sm text-[#2B2016]/60 mt-8">
                Planning a different kind of event?{" "}
                {eventTypeLinks.map((item, i) => (
                  <React.Fragment key={item.to}>
                    <Link to={item.to} className="text-[#B5892C] underline hover:text-[#493423]">
                      {item.name}
                    </Link>
                    {i < eventTypeLinks.length - 1 && (
                      <span className="mx-2 text-[#2B2016]/30">&middot;</span>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CranfordBartending;
