// src/pages/UnionCountyBartending.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import PageCTA from "../components/PageCTA";

const eventTypeLinks = [
  { name: "Wedding Bartending", to: "/wedding-bartending" },
  { name: "Birthday Party Bartending", to: "/birthday-party-bartending" },
  { name: "Corporate Event Bartending", to: "/corporate-event-bartending" },
];

const featuredTowns = [
  { name: "Summit", to: "/summit-bartending" },
  { name: "Westfield", to: "/westfield-bartending" },
  { name: "Berkeley Heights", to: "/berkeley-heights-bartending" },
  { name: "Cranford", to: "/cranford-bartending" },
  { name: "Scotch Plains", to: "/scotch-plains-bartending" },
];

const otherTowns = [
  "Clark",
  "Elizabeth",
  "Fanwood",
  "Garwood",
  "Hillside",
  "Kenilworth",
  "Linden",
  "Mountainside",
  "New Providence",
  "Plainfield",
  "Rahway",
  "Roselle",
  "Roselle Park",
  "Springfield",
  "Union Township",
  "Winfield",
];

const faqItems = [
  {
    question: "What towns in Union County do you serve?",
    answer:
      "All of them. We're based in Mountainside, with dedicated coverage in Summit, Westfield, Berkeley Heights, Cranford, and Scotch Plains, plus every other Union County town — Clark, Elizabeth, Fanwood, Garwood, Hillside, Kenilworth, Linden, New Providence, Plainfield, Rahway, Roselle, Roselle Park, Springfield, Union Township, and Winfield.",
  },
  {
    question: "Is there a travel fee for events in Union County?",
    answer:
      "Union County is our home base, so most local events fall within our standard service area. Reach out with your town and event details and we'll confirm.",
  },
  {
    question: "Do you serve outside Union County too?",
    answer:
      "Yes — we also serve throughout New Jersey and New York. Union County is simply where we're based, so it's the area we know best.",
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
  name: "Private Bartending in Union County, NJ",
  description:
    "Private and mobile bartending for weddings, parties, and private events across Union County, NJ, with custom cocktail menus and certified bartenders.",
  provider: { "@id": "https://www.clinkingbubbles.com/#business" },
  areaServed: { "@type": "AdministrativeArea", name: "Union County, NJ" },
};

const UnionCountyBartending = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <Helmet>
        <title>Union County, NJ Private Bartending | Clinking Bubbles</title>
        <meta
          name="description"
          content="Private bartending across Union County, NJ — Westfield, Summit, Cranford, Scotch Plains, Berkeley Heights, and every town in between. Custom cocktail menus and certified bartenders."
        />
        <meta
          name="keywords"
          content="Union County NJ bartender, private bartending Union County, mobile bar Union County NJ, Mountainside NJ bartender, event bartending Union County"
        />
        <link rel="canonical" href="https://www.clinkingbubbles.com/union-county-bartending" />

        <meta property="og:title" content="Union County, NJ Private Bartending | Clinking Bubbles" />
        <meta
          property="og:description"
          content="Private bartending across Union County, NJ — Westfield, Summit, Cranford, Scotch Plains, Berkeley Heights, and every town in between."
        />
        <meta property="og:url" content="https://www.clinkingbubbles.com/union-county-bartending" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo-v1-1200.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Private bartending service across Union County, NJ." />

        <link rel="preload" as="image" href="/images/aboutpage-v2.webp" type="image/webp" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <section className="relative w-full h-[60vh] sm:h-[700px] bg-black overflow-hidden">
        <img
          src="/images/aboutpage-v2.webp"
          alt="Clinking Bubbles bartenders serving a private event"
          width="3840"
          height="2560"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-28 sm:pt-48">
          <div data-aos="fade-up">
            <h1 className="clinking-font drop-shadow-[0_0_2px_black] text-4xl sm:text-6xl font-bold text-white text-center">
              UNION COUNTY, NJ
            </h1>
          </div>
          <div
            className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 mt-6 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="bubbles-font drop-shadow-[0_0_2px_black] text-md sm:text-2xl text-white">
              Private bartending across our home county — signature
              cocktails, professional service, and a bar built around your
              event, wherever in Union County it's happening.
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
            / Union County
          </p>
          <section className="mb-12" data-aos="fade-up">
            <p className="bubbles-font text-lg sm:text-xl text-black">
              Clinking Bubbles is based right here in Union County, so it's
              the area we know best. From Westfield to Elizabeth, Summit to
              Rahway, we bring a full private bar setup — bartenders,
              cocktail menu, and all the bar supplies — to homes and venues
              across the county.
            </p>
          </section>

          <section className="mb-12">
            <div className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6" data-aos="fade-up">
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">
                EXPLORE OUR UNION COUNTY COVERAGE
              </h2>
            </div>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {featuredTowns.map((town) => (
                <Link
                  key={town.to}
                  to={town.to}
                  className="bubbles-font text-lg text-center bg-[rgba(250,248,243,0.6)] border border-[#d9c7b2] rounded-lg py-4 px-2 text-[#493423] hover:bg-yellow-500 hover:text-black transition"
                >
                  {town.name}
                </Link>
              ))}
            </div>
            <p
              className="bubbles-font text-lg text-gray-800 max-w-3xl"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              We also regularly bartend events in {otherTowns.slice(0, -1).join(", ")}, and{" "}
              {otherTowns[otherTowns.length - 1]} — reach out with your town and we'll confirm the details.
            </p>
          </section>

          <section className="mb-12">
            <div className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6" data-aos="fade-up">
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">
                WHY A UNION COUNTY-BASED BAR SERVICE
              </h2>
            </div>
            <ul
              className="list-disc pl-5 bubbles-font text-lg space-y-3 text-gray-800 max-w-3xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li>Local, based right in Mountainside — no long-distance guesswork</li>
              <li>Full bar setup at private homes, backyards, and venues countywide</li>
              <li>Custom cocktail menus tailored to your event and guest list</li>
              <li>Certified bartenders trained in professional, attentive service</li>
              <li>Beer, wine, and mocktails for every guest</li>
            </ul>
          </section>

          <section className="mb-12" data-aos="fade-up">
            <div className="bg-[rgba(250,248,243,0.6)] border border-[#d9c7b2] p-6 sm:p-10 rounded-lg shadow-sm">
              <h3 className="clinking-font text-2xl font-bold mb-3">Events We Bartend Across Union County</h3>
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

          <section className="mb-12">
            <div className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6" data-aos="fade-up">
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">UNION COUNTY BAR SERVICE FAQ</h2>
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
            heading="Ready to Plan Your Event in Union County?"
            crossLinksLabel="Planning a different kind of event?"
            crossLinks={eventTypeLinks}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UnionCountyBartending;
