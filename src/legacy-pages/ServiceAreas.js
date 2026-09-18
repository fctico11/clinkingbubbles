// src/pages/ServiceAreas.js
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

const faqItems = [
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Union County, NJ and serve throughout New Jersey and New York — private homes, backyards, and venues alike.",
  },
  {
    question: "I don't see my town listed — do you still serve it?",
    answer:
      "Most likely, yes. Reach out with your town and event date and we'll confirm coverage and availability.",
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
  name: "Clinking Bubbles Service Areas",
  description:
    "Private and mobile bartending service areas across New Jersey and New York, including Union County and surrounding towns.",
  provider: { "@id": "https://www.clinkingbubbles.com/#business" },
  areaServed: [
    { "@type": "State", name: "New Jersey" },
    { "@type": "State", name: "New York" },
  ],
};

const ServiceAreas = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <Helmet>
        <title>Service Areas | Clinking Bubbles Private Bartending</title>
        <meta
          name="description"
          content="Where Clinking Bubbles brings private bartending: Union County, NJ and surrounding towns, plus coverage across New Jersey and New York."
        />
        <meta
          name="keywords"
          content="bartending service areas NJ, private bartending New Jersey, Union County bartender, mobile bar service area, event bartending near me"
        />
        <link rel="canonical" href="https://www.clinkingbubbles.com/service-areas" />

        <meta property="og:title" content="Service Areas | Clinking Bubbles Private Bartending" />
        <meta
          property="og:description"
          content="Where Clinking Bubbles brings private bartending: Union County, NJ and surrounding towns, plus coverage across New Jersey and New York."
        />
        <meta property="og:url" content="https://www.clinkingbubbles.com/service-areas" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo-v1-1200.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Clinking Bubbles service areas across NJ & NY." />

        <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <section className="relative w-full h-[60vh] sm:h-[700px] bg-black overflow-hidden">
        <img
          src="/images/hero.webp"
          alt="Clinking Bubbles private bar setup"
          width="1792"
          height="1024"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-28 sm:pt-48">
          <div data-aos="fade-up">
            <h1 className="clinking-font drop-shadow-[0_0_2px_black] text-4xl sm:text-6xl font-bold text-white text-center">
              WHERE WE BARTEND
            </h1>
          </div>
          <div
            className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 mt-6 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="bubbles-font drop-shadow-[0_0_2px_black] text-md sm:text-2xl text-white">
              Private bar service throughout New Jersey and New York —
              explore coverage by county and town below.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white text-black px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12" data-aos="fade-up">
            <p className="bubbles-font text-lg sm:text-xl text-black">
              Clinking Bubbles is based in Union County, NJ and brings a full
              private bar setup — bartenders, cocktail menu, and all the bar
              supplies — to events across New Jersey and New York. Explore
              our coverage below, or reach out and we'll confirm your
              event's location.
            </p>
          </section>

          <section className="mb-12">
            <div className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6" data-aos="fade-up">
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">NEW JERSEY</h2>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Link
                to="/union-county-bartending"
                className="block bg-[rgba(250,248,243,0.6)] border border-[#d9c7b2] rounded-lg p-6 hover:bg-yellow-500 hover:text-black transition"
              >
                <h3 className="clinking-font text-xl font-bold mb-1">Union County</h3>
                <p className="bubbles-font text-base">
                  Our home county — full coverage across Union County, NJ.
                </p>
              </Link>
              <Link
                to="/saddle-river-bartending"
                className="block bg-[rgba(250,248,243,0.6)] border border-[#d9c7b2] rounded-lg p-6 hover:bg-yellow-500 hover:text-black transition"
              >
                <h3 className="clinking-font text-xl font-bold mb-1">Saddle River</h3>
                <p className="bubbles-font text-base">
                  Private bar service for Saddle River's homes and estates.
                </p>
              </Link>
            </div>
          </section>

          <section className="mb-12" data-aos="fade-up">
            <div className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6">
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">NEW YORK</h2>
            </div>
            <p className="bubbles-font text-lg text-gray-800 max-w-3xl">
              We're also glad to travel into New York for the right event —
              reach out with your location and we'll confirm the details.
            </p>
          </section>

          <section className="mb-12">
            <div className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6" data-aos="fade-up">
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">SERVICE AREA FAQ</h2>
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
            heading="Ready to Plan Your Event?"
            crossLinksLabel="Planning a different kind of event?"
            crossLinks={eventTypeLinks}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceAreas;
