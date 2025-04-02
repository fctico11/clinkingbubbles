// src/pages/ServicesPage.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';

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
      <meta name="description" content="Explore our private bartending services for weddings, birthdays, and special events. Serving NJ & NY with style, heart, and crafted cocktails." />
      <meta name="keywords" content="bartending services, private bartending NJ, private bartending NY, cocktail packages, event bartending, party bartenders NJ, wedding bartenders NY, event bar services" />
      <link rel="canonical" href="https://www.clinkingbubbles.com/services" />

      <meta property="og:title" content="Private Bartending Services: NJ Weddings, Parties & More" />
      <meta property="og:description" content="Explore our private bartending services for weddings, birthdays, and special events. Serving NJ & NY with style, heart, and crafted cocktails." />
      <meta property="og:url" content="https://www.clinkingbubbles.com/services" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/mainlogo.png" />
      <meta property="og:site_name" content="Clinking Bubbles" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content="Explore premium bartending services for NJ & NY." />
    </Helmet>
      <Navbar />

      {/* Full-Width Section for Title & Intro */}
      <div className="bg-[#EBE6D6] w-full pt-20 pb-8 px-4 mt-5">
        <div className="max-w-6xl mx-auto">
          <h1
            className="clinking-font text-4xl font-bold mb-6 text-center"
            data-aos="fade-up"
          >
            OUR SERVICES
          </h1>
          <p
            className="bubbles-font text-lg max-w-3xl mx-auto text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We believe every celebration should be a work of art. From chic gatherings to
            all-out bashes, our packages are designed to pamper your guests and let you
            sip, smile, and truly relax. Below, you’ll find our essential inclusions and
            an array of stylish add-ons to elevate your event to pure luxury.
          </p>
        </div>
      </div>

      {/* Main Content (White Background) */}
      <div className="bg-white text-black px-4 py-10">
        <div className="max-w-6xl mx-auto">
          {/* BASIC PACKAGE */}
          <h2
            className="clinking-font text-3xl font-bold mb-6"
            data-aos="fade-up"
          >
            BASIC PACKAGE INCLUDES
          </h2>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Left Column */}
            <div className="space-y-6">
              <div data-aos="fade-up">
                <h3 className="bubbles-font text-lg font-semibold">
                  Full Consultation <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  We’ll collaborate closely with you to design the perfect bar experience,
                  from specialty cocktails to bar styling details—making sure
                  everything feels distinctly “you.”
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <h3 className="bubbles-font text-lg font-semibold">
                  Bartenders Kit <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  Shakers, stirrers, jiggers, muddlers, and more. Our expert bartenders come
                  fully equipped so that every pour is as precise as it is delightful.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="bubbles-font text-lg font-semibold">
                  Ice Tubs &amp; Coolers <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  Keep beverages frosty and fresh all event long. We’ll supply enough ice tubs
                  and coolers to handle your thirstiest crowd.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="bubbles-font text-lg font-semibold">
                  Bar Goods <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  Napkins, straws, cups, and those little finishing touches that make each
                  sip feel extra special—yes, we’ve got it all.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="bubbles-font text-lg font-semibold">
                  Insurance <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  We carry comprehensive general liability and liquor liability insurance,
                  giving you total peace of mind. COIs are available upon request.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div data-aos="fade-up">
                <h3 className="bubbles-font text-lg font-semibold">
                  Menu Design <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  From elegant signage to custom cocktail menus, we’ll handle the design
                  details so you can show off your curated beverage lineup in style.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <h3 className="bubbles-font text-lg font-semibold">
                  Garnishes <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  From classic citrus twists to artisanal floral elements, we ensure each
                  cocktail looks as impressive as it tastes.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="bubbles-font text-lg font-semibold">
                  Mixers <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  House-made simple syrups, premium juices, and an array of specialty mixers—
                  consider your bar menu upgraded.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="bubbles-font text-lg font-semibold">
                  Drinkware <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  Disposable cups come standard; however, if you’d like to level up to real
                  glassware or a unique theme, we can arrange an upgrade.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="bubbles-font text-lg font-semibold">
                  Ice Delivery <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  No need to run last-minute ice errands! We’ll ensure you’re fully stocked for
                  the duration of your event.
                </p>
              </div>
            </div>
          </div>

          {/* ACCESSORIES / ADD-ONS */}
          <h2
            className="clinking-font text-3xl font-bold mb-6"
            data-aos="fade-up"
          >
            ACCESSORIES
          </h2>
          <p
            className="bubbles-font text-lg mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Elevate your bar setup with these additional items. Perfect for those who crave
            a more immersive, high-end experience.
          </p>

          <div className="space-y-6">
            <div data-aos="fade-up" className="border-b pb-3">
              <h3 className="bubbles-font text-lg font-semibold">
                6 ft. Solid Black Bar{" "}
                <span className="text-gray-500">...Inquire</span>
              </h3>
              <p className="bubbles-font text-lg text-gray-600 mt-2">
                A sleek, modern look that blends effortlessly into any décor, perfect for upscale events.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="border-b pb-3">
              <h3 className="bubbles-font text-lg font-semibold">
                Hydration Package <span className="text-gray-500">...Inquire</span>
              </h3>
              <p className="bubbles-font text-lg text-gray-600 mt-2">
                Stay refreshed with infused water dispensers, iced teas, or lemonade—perfect for hot days or all-ages events.
                This non-alcoholic option keeps guests cool and hydrated while adding a touch of elegance and flavor to your drink station.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="border-b pb-3">
              <h3 className="bubbles-font text-lg font-semibold">
                6 ft. Folding Tables <span className="text-gray-500">...Inquire</span>
              </h3>
              <p className="bubbles-font text-lg text-gray-600 mt-2">
                Whether you need extra space for drinks, food, decor, or gifts, these sturdy and sleek tables offer both functionality and convenience. 
                Easy to set up and break down, they're ideaal for all types of gatherings.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="border-b pb-3">
              <h3 className="bubbles-font text-lg font-semibold">
                Popcorn Machine{" "}
                <span className="text-gray-500">...Inquire</span>
              </h3>
              <p className="bubbles-font text-lg text-gray-600 mt-2">
                Freshly popped, buttery popcorn is the perfect snack to complement your drinks and elevate the party vibe.
                Great for any kind of event - because who doesn't love popcorn with their cocktails?
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="border-b pb-3">
              <h3 className="bubbles-font text-lg font-semibold">
                Sony GTK-XB60 Speakers {" "}
                <span className="text-gray-500">...Inquire</span>
              </h3>
              <p className="bubbles-font text-lg text-gray-600 mt-2">
                Turn up the energy with our Sony GTK-XB60 speakers! These powerful, portable speakers deliver deep bass and vibrant sound, perfect for keeping the party going. 
                With built-in lighting effects and Bluetooth connectivity, they're a must have for any lively event.
              </p>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="mt-7 space-y-4" data-aos="fade-up">
            {/* Learn More About The Booking Process Button */}
            <div className="text-center">
              <Link to="/booking-process">
                <button className="bubbles-font text-lg bg-[#493423] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                  Learn More About The Booking Process
                </button>
              </Link>
            </div>
            {/* Get a Quote Button */}
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
