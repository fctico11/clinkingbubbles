// src/pages/BirthdayPartyBartending.js
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
    question: "What ages of birthday parties do you bartend?",
    answer:
      "We bartend 21+ celebrations — milestone birthdays, adult backyard parties, and everything in between. All guests are carded, and we serve responsibly.",
  },
  {
    question: "Can you set up at a rented venue or backyard?",
    answer:
      "Yes — we bring a portable bar or work with one already on-site, indoors or outdoors.",
  },
  {
    question: "Do you provide the alcohol?",
    answer:
      "We're a dry-hire service, so you supply the alcohol — we'll walk you through a shopping list during your consultation.",
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
  serviceType: "Birthday Party Bartending",
  name: "Birthday Party Bartending",
  description:
    "Private bartending for milestone birthdays and backyard celebrations across New Jersey and New York, including custom cocktail menus and certified bartenders.",
  provider: { "@id": "https://www.clinkingbubbles.com/#business" },
  areaServed: [
    { "@type": "State", name: "New Jersey" },
    { "@type": "State", name: "New York" },
  ],
};

const BirthdayPartyBartending = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <Helmet>
        <title>Birthday Party Bartending in NJ & NY | Clinking Bubbles</title>
        <meta
          name="description"
          content="Private bartending for birthday parties across NJ & NY. Custom cocktail menus, certified bartenders, and full bar setup for milestone birthdays."
        />
        <meta
          name="keywords"
          content="birthday party bartender NJ, milestone birthday bartending, private party bartender, backyard birthday bar, event bartending NJ NY"
        />
        <link rel="canonical" href="https://www.clinkingbubbles.com/birthday-party-bartending" />

        <meta property="og:title" content="Birthday Party Bartending in NJ & NY | Clinking Bubbles" />
        <meta
          property="og:description"
          content="Private bartending for birthday parties across NJ & NY. Custom cocktail menus, certified bartenders, and full bar setup for milestone birthdays."
        />
        <meta property="og:url" content="https://www.clinkingbubbles.com/birthday-party-bartending" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo-v1-1200.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Private bartending for birthday parties in NJ & NY." />

        <link rel="preload" as="image" href="/images/herocar2.webp" type="image/webp" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <section className="relative w-full h-[60vh] sm:h-[700px] bg-black overflow-hidden">
        <img
          src="/images/herocar2.webp"
          alt="Clinking Bubbles bar setup at a private birthday party"
          width="1920"
          height="2880"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-28 sm:pt-48">
          <div data-aos="fade-up">
            <h1 className="clinking-font drop-shadow-[0_0_2px_black] text-4xl sm:text-6xl font-bold text-white text-center">
              BIRTHDAY PARTY BARTENDING
            </h1>
          </div>
          <div
            className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 mt-6 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="bubbles-font drop-shadow-[0_0_2px_black] text-md sm:text-2xl text-white">
              Private bar service for milestone birthdays across NJ & NY —
              signature cocktails, professional bartenders, and a bar built
              around the celebration.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white text-black px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12" data-aos="fade-up">
            <p className="bubbles-font text-lg sm:text-xl text-black">
              Milestone birthdays deserve more than a cooler of beer. We
              bring a full bar setup — bartenders, a custom cocktail menu,
              and all the bar supplies — to backyard birthdays, milestone
              celebrations, and everything in between.
            </p>
          </section>

          <section className="mb-12">
            <div className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6" data-aos="fade-up">
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">
                BUILT FOR YOUR BIRTHDAY CELEBRATION
              </h2>
            </div>
            <ul
              className="list-disc pl-5 bubbles-font text-lg space-y-3 text-gray-800 max-w-3xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li>Custom cocktail menu built around the birthday person's favorites</li>
              <li>Full bar setup at homes, backyards, and rented venues</li>
              <li>Certified bartenders trained in professional, attentive service</li>
              <li>Beer, wine, and mocktails for every guest</li>
              <li>Optional portable bar, hydration station, and tabling add-ons</li>
            </ul>
          </section>

          <section className="mb-12" data-aos="fade-up">
            <div className="bg-[rgba(250,248,243,0.6)] border border-[#d9c7b2] p-6 sm:p-10 rounded-lg shadow-sm">
              <h3 className="clinking-font text-2xl font-bold mb-3">Every Milestone, Covered</h3>
              <p className="bubbles-font text-lg text-gray-800 mb-4">
                From 21st and 30th birthdays to 50th and beyond, plus
                smaller backyard get-togethers — see our full package
                details or reach out to talk through your event.
              </p>
              <Link to="/packages">
                <button className="bubbles-font text-lg bg-[#493423] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                  View Packages & Pricing Tiers
                </button>
              </Link>
            </div>
          </section>

          <section className="mb-12" data-aos="fade-up">
            <h2 className="clinking-font text-2xl sm:text-3xl font-bold mb-4">Serving Birthdays Across NJ & NY</h2>
            <p className="bubbles-font text-lg text-gray-800">
              We bring birthday bar service throughout New Jersey and New
              York. See our full{" "}
              <Link to="/service-areas" className="text-[#8a5c08] underline hover:text-yellow-600">
                service areas
              </Link>{" "}
              or reach out with your event's location.
            </p>
          </section>

          <section className="mb-12">
            <div className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6" data-aos="fade-up">
              <h2 className="clinking-font text-2xl sm:text-3xl font-bold">BIRTHDAY BAR FAQ</h2>
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
            heading="Ready to Plan Your Birthday Celebration?"
            crossLinksLabel="Also serving:"
            crossLinks={serviceAreaLinks}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BirthdayPartyBartending;
