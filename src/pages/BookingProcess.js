import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 1. Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

import { Helmet } from 'react-helmet-async';

const BookingProcess = () => {
  // 2. Initialize AOS once when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration in ms
      offset: 100,    // offset (in px) from the original trigger point
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>How to Book Clinking Bubbles: Private Bartenders in NJ</title>
        {console.log("Helmet mounted for Book")}
        <meta name="description" content="From inquiry to celebration, our booking process is simple and smooth. Learn how to reserve Clinking Bubbles for your upcoming event." />
        <meta name="keywords" content="book bartenders NJ, book bartenders NY, event bartending process, private event booking, NJ party bartenders, booking bartenders, cocktail service booking" />
        <link rel="canonical" href="https://www.clinkingbubbles.com/booking-process" />

        <meta property="og:title" content="How to Book Clinking Bubbles: Private Bartenders in NJ" />
        <meta property="og:description" content="From inquiry to celebration, our booking process is simple and smooth. Learn how to reserve Clinking Bubbles for your upcoming event." />
        <meta property="og:url" content="https://www.clinkingbubbles.com/booking-process" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Easily book private bartenders for NJ & NY events." />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[700px]">
        <img
          src="/images/booking-v1.webp"
          alt="Booking Process"
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
              BOOKING PROCESS
            </h1>
          </div>

          <div className="mt-6 sm:mt-10"></div>

          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            <p className="bubbles-font drop-shadow-[0_0_2px_black] text-md sm:text-2xl text-white drop-shadow-sm">
              Our booking process is as smooth as a perfectly shaken cocktail. From your initial inquiry 
              to final confirmation, we’ll guide you through every step. Discover how simple it is to 
              secure your next unforgettable event!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        {/* Step 1 */}
        <div className="max-w-3xl mx-auto mb-8" data-aos="fade-up">
          <h2 className="clinking-font text-2xl font-bold mb-4">Step 1 – Inquire</h2>
          <p className="bubbles-font text-lg">
            Click the “Get a Quote” button in the menu or at the bottom of this page, then fill out 
            our inquiry form. Our team will carefully review your event details and send a personalized quote within 24 hours.
          </p>
        </div>

        {/* Step 2 */}
        <div className="max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
          <h2 className="clinking-font text-2xl font-bold mb-4">
            Step 2 – Review &amp; Reserve
          </h2>
          <p className="bubbles-font text-lg">
            Once you've reviewed your custom quote and are ready to move forward, we'll send over a contract and invoice.
            A 20% deposit secures your date (30% for weddings) - no booking is finalized until this is received.
          </p>
        </div>

        {/* Step 3 */}
        <div className="max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
          <h2 className="clinking-font text-2xl font-bold mb-4">Step 3 – Plan the details</h2>
          <p className="bubbles-font text-lg">
            With your date secured, we'll work with you to fine-tune the details. 
            From bar logistics to cocktail selections, our team will help craft a bar experience that's tailored perfectly to your celebration.
          </p>
        </div>

        {/* Step 4 */}
        <div className="max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="300">
          <h2 className="clinking-font text-2xl font-bold mb-4">Step 4 – Purchase the Alcohol</h2>
          <p className="bubbles-font text-lg">
            We’ll provide a detailed shopping list so you know exactly what to buy. Have everything ready for our team on the day of your event, and we’ll take it from there.
          </p>
        </div>

        {/* Step 5 */}
        <div className="max-w-3xl mx-auto mb-4" data-aos="fade-up" data-aos-delay="400">
          <h2 className="clinking-font text-2xl font-bold mb-4">Step 5 – Party Time!</h2>
          <p className="bubbles-font text-lg">
            On the day of your event, our team will deliver exceptional service—so all you need to do 
            is sit back, relax, and enjoy your celebration.
          </p>
          {/* "Get a Quote!" Button directly below last step */}
          <div className="mt-7 text-center">
            <Link to="/contact">
              <button className="bubbles-font text-lg bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
                Get a Quote!
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingProcess;
