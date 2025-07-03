import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import { Helmet } from 'react-helmet-async';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "🍹 Our Services",
      items: [
        {
          question: "What is included in the quote?",
          answer: "We provide certified bartenders, all necessary bar tools and equipment, a bar supplies package (mixers, garnishes, disposable cups, straws, napkins, and ice) and optional add-ons like a portable bar rental or hydration station. You supply the alcohol, we handle the rest!"
        },
        {
          question: "What kind of events do you service?",
          answer: "Whether it’s an elegant wedding, a lively birthday bash, a corporate mixer, or a cozy backyard get togethers, we tailor our bartending services to fit your vision. From engagement parties to holiday gatherings and everything in between—if there’s a reason to toast, we’re there to shake, stir, and serve."
        },
        {
          question: "What drinks can you serve? Do you offer non-alcoholic options?",
          answer: "We serve classic cocktails, signature drinks, beer, wine, and beautiful mocktails for non-drinking guests."
        },
        {
          question: "Can you help us create a custom cocktail menu?",
          answer: "Absolutely! We love creating menus tailored to your event’s theme and preferences."
        },
        {
          question: "Do you provide the bar, glassware, and other supplies?",
          answer: "We can provide a portable bar and bar supplies as part of your package. Disposable cups come standard but we can recommend rental partners for glassware."
        },
        {
          question: "Do your bartenders check IDs and serve responsibly?",
          answer: "Yes. Our bartenders are certified and trained in responsible service. We check IDs and reserve the right to refuse service to underage or visibly intoxicated guests."
        },
        {
          question: "Can you serve at any type of venue?",
          answer: "Yes! We can set up indoors or outdoors, even without a built-in bar. For outdoor events, we recommend a covered area."
        },
        {
          question: "Can you do events without bringing your portable bar?",
          answer: "Certainly! If your venue or home already has a built-in bar, you’re welcome to hire us for bartending service only. We can also provide our full bar supplies package: mixers, garnishes, ice, napkins, straws, and more depending on your needs. It’s all about creating the perfect setup for your event."
        },
      ]
    },
    {
      title: "📅 Booking & Planning",
      items: [
        {
          question: "What do I need to book with you?",
          answer: "A signed agreement and 20% deposit are required to secure your date."
        },
        {
          question: "How far in advance should I book?",
          answer: "No matter when you contact us (even last minute), we’ll do everything we can to accommodate your event and provide an unforgettable experience. We suggest booking 2-3 months ahead for bigger celebrations, especially for peak seasons."
        },
        {
          question: "How will I know how much alcohol to purchase?",
          answer: "We’ll give you a detailed shopping list based on guest count, preferences, and menu selection."
        },
        {
          question: "How much does alcohol usually cost?",
          answer: (
            <span>
              It depends on your guest count, how many hours we’re serving, and whether your crowd tends to be light or heavy drinkers. To help you estimate, we’ve created an easy-to-use tool. Check out our{' '}
              <Link to="/alcohol-calculator" className="text-yellow-500 underline hover:text-yellow-600">Alcohol Calculator</Link>.
            </span>
          )
        },
        {
          question: "Do you offer consultations or tastings?",
          answer: "We’re happy to consult and help you design your perfect drink menu."
        },
        {
          question: "How many bartenders will we need?",
          answer: "We recommend one bartender per 50 guests, but this can vary depending on your event style."
        },
        {
          question: "What areas do you serve? Do you charge travel fees?",
          answer: "We’re based in Union County, NJ and serve surrounding areas. Travel fees may apply for events outside our standard radius (25 miles)."
        },
        {
          question: "Can you accommodate special requests or themes?",
          answer: "Absolutely! We love working with clients to create unique experiences, from themed cocktails, custom garnishes, and stylish decorations."
        },
        {
          question: "How long is the hire period? Is there a minimum?",
          answer: "We have a 4-hour minimum hire period to ensure quality service for your event. There is no maximum, we're happy to serve for as long as your celebration lasts!"
        }
      ]
    },
    {
      title: "🛠 Logistics",
      items: [
        {
          question: "How much space does the bar setup require?",
          answer: "We need at least a 6x6 ft flat, accessible area for setup."
        },
        {
          question: "How long do you need for setup and breakdown?",
          answer: "Setup requires about 1 hour. Breakdown takes 30–45 minutes."
        },
        {
          question: "What happens if it rains or there’s bad weather?",
          answer: "We’ll try to reschedule if notified 48+ hours in advance. If not, our standard cancellation policy applies. We recommend having a backup indoor location."
        },
      ]
    },
    {
      title: "💳 Payments & Policies",
      items: [
        {
          question: "What’s your payment and cancellation policy?",
          answer: "A 20% deposit is due at booking. The balance is due 14 days before your event. Cancellations more than 30 days out get a refund minus deposit; within 30 days, 50% of the total is due."
        },
        {
          question: "Are you insured?",
          answer: "Yes. We carry general and liquor liability insurance for your peace of mind."
        },
      ]
    }
  ];

  return (
    <div>
      <Helmet>
        <title>FAQs – Clinking Bubbles Bartending</title>
        <meta name="description" content="Find answers to all your questions about Clinking Bubbles private bartending services in NJ & NY." />
        <meta name="keywords" content="bartending FAQ, Clinking Bubbles questions, private bartenders NJ, event bartending answers" />
        <link rel="canonical" href="https://www.clinkingbubbles.com/faq" />

        <meta property="og:title" content="FAQs – Clinking Bubbles Bartending" />
        <meta property="og:description" content="Answers to all your questions about hiring Clinking Bubbles for your event." />
        <meta property="og:url" content="https://www.clinkingbubbles.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[700px]">
        <img
          src="/images/faqPic.webp"
          alt="Frequently Asked Questions"
          width="1080"
          height="1400"
          className="absolute inset-0 w-full h-full object-cover object-[center_80%] sm:object-[center_70%]"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-28 sm:pt-48">
          <div data-aos="fade-up">
            <h1 className="clinking-font drop-shadow-[0_0_2px_black] text-4xl sm:text-6xl font-bold text-white text-center">
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </div>

          <div className="mt-6 sm:mt-10"></div>

          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            <p className="bubbles-font drop-shadow-[0_0_2px_black] text-md sm:text-2xl text-white drop-shadow-sm">
              Your most asked questions, answered. From services to policies, find all the details you need for a seamless and unforgettable experience with Clinking Bubbles.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-10">
              <h2 className="clinking-font text-3xl sm:text-4xl font-bold mb-6 px-3 py-2 inline-block rounded-md bg-[#ebe6d6] text-[#493423]" data-aos="fade-up">
                {category.title}
              </h2>
              {category.items.map((faq, index) => (
                <div key={index} className="mb-4 border-b border-gray-400" data-aos="fade-up" data-aos-delay={(index + 1) * 50}>
                  <button
                    onClick={() => toggleAccordion(`${catIndex}-${index}`)}
                    className="w-full text-left flex justify-between items-center py-4 bubbles-font text-xl sm:text-2xl font-medium text-gray-800 hover:text-yellow-500 transition"
                  >
                    {faq.question}
                    <span>{activeIndex === `${catIndex}-${index}` ? "–" : "+"}</span>
                  </button>
                  {activeIndex === `${catIndex}-${index}` && (
                    <div className="pb-4 text-gray-700 bubbles-font text-lg sm:text-xl">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
          <div className="text-center mt-10">
            <Link to="/contact">
              <button className="bubbles-font text-lg bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
                Get a Quote Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faq;