// src/pages/ServicesPage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

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
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Explore premium bartending services for NJ & NY." />
        <link rel="preload" as="image" href="/images/servicespic.webp" type="image/webp" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[700px]">
        <img src="/images/servicespic.webp" alt="Clinking Bubbles Services" width="1080" height="1400" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" decoding="sync" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-28 sm:pt-48">
          <div data-aos="fade-up">
            <h1 className="clinking-font text-4xl sm:text-6xl font-bold text-white text-center">
              OUR SERVICES
            </h1>
          </div>

          <div className="mt-6 sm:mt-10"></div>

          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            <p className="bubbles-font text-md sm:text-2xl text-white drop-shadow-sm">
              We believe every celebration should be a work of art. From chic gatherings to all-out bashes, our packages are designed to pamper your guests and let you sip, smile, and truly relax. Below, you’ll find our essential inclusions and an array of stylish add-ons to elevate your event to pure luxury.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white text-black px-4 py-10">
        <div className="max-w-6xl mx-auto">
          {/* BASIC PACKAGE */}
          <div className="inline-block bg-[#f5f0e6] px-3 py-2 rounded-md mb-6" data-aos="fade-up">
            <h2 className="clinking-font text-2xl sm:text-3xl font-bold">BASIC PACKAGE INCLUDES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-6">
              {[
                ["Full Consultation", "We’ll collaborate closely with you to design the perfect bar experience, from specialty cocktails to bar styling details—making sure everything feels distinctly “you.”"],
                ["Bartenders Kit", "Shakers, stirrers, jiggers, muddlers, and more. Our expert bartenders come fully equipped so that every pour is as precise as it is delightful."],
                ["Ice Tubs & Coolers", "Keep beverages frosty and fresh all event long. We’ll supply enough ice tubs and coolers to handle your thirstiest crowd."],
                ["Bar Goods", "Napkins, straws, cups, and those little finishing touches that make each sip feel extra special—yes, we’ve got it all."],
                ["Insurance", "We carry comprehensive general liability and liquor liability insurance, giving you total peace of mind. COIs are available upon request."]
              ].map(([title, desc], i) => (
                <div data-aos="fade-up" data-aos-delay={i * 100} key={title}>
                  <h3 className="bubbles-font text-lg font-semibold">
                    {title} <span className="text-gray-500">...Included</span>
                  </h3>
                  <p className="bubbles-font text-lg">{desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                ["Menu Design", "From elegant signage to custom cocktail menus, we’ll handle the design details so you can show off your curated beverage lineup in style."],
                ["Garnishes", "From classic citrus twists to artisanal floral elements, we ensure each cocktail looks as impressive as it tastes."],
                ["Mixers", "House-made simple syrups, premium juices, and an array of specialty mixers—consider your bar menu upgraded."],
                ["Drinkware", "Disposable cups come standard; however, if you’d like to level up to real glassware or a unique theme, we can arrange an upgrade."],
                ["Ice Delivery", "No need to run last-minute ice errands! We’ll ensure you’re fully stocked for the duration of your event."]
              ].map(([title, desc], i) => (
                <div data-aos="fade-up" data-aos-delay={i * 100} key={title}>
                  <h3 className="bubbles-font text-lg font-semibold">
                    {title} <span className="text-gray-500">...Included</span>
                  </h3>
                  <p className="bubbles-font text-lg">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACCESSORIES */}
          <div className="inline-block bg-[#f5f0e6] px-3 py-2 rounded-md mb-6" data-aos="fade-up">
            <h2 className="clinking-font text-2xl sm:text-3xl font-bold">ACCESSORIES</h2>
          </div>

          <p className="bubbles-font text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            Elevate your bar setup with these additional items. Perfect for those who crave a more immersive, high-end experience.
          </p>

          <div data-aos="fade-up" className="border-b pb-6">
            <h3 className="bubbles-font text-lg font-semibold mb-2">
              6 ft. Solid Wooden Bar <span className="text-gray-500">...Inquire</span>
            </h3>
            <div className="mb-4">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                  setSwiperInstance(swiper);
                  setActiveIndex(swiper.activeIndex);
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {[
                  {
                    src: "/images/bar1.webp",
                    alt: "Wooden Bar 1",
                    text: "Our signature solid wood bar with sleek finishes and customizable decor, captured in its full charm at night."
                  },
                  {
                    src: "/images/bar2.webp",
                    alt: "Wooden Bar 2",
                    text: "Seen here during the day, a closer look at the premium craftsmanship and attention to detail that sets our bar apart."
                  },
                  {
                    src: "/images/bar3.webp",
                    alt: "Wooden Bar 3",
                    text: "Stylish from every angle and an elegant look for any event."
                  }
                ].map(({ src, alt, text }, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative">
                      <img src={src} alt={alt} className="w-full h-[350px] sm:h-[500px] object-cover rounded-md" />
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 backdrop-blur-sm bg-white/10 text-white rounded-b-md text-center">
                        <p className="bubbles-font text-sm sm:text-base">{text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex items-center justify-center gap-4 mt-3">
                <button onClick={handlePrev} aria-label="Previous" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#f5f0e6] text-orange-400 text-xl sm:text-2xl">
                  <TiChevronLeftOutline />
                </button>
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${activeIndex === i ? "bg-orange-400" : "bg-gray-400"}`}></span>
                  ))}
                </div>
                <button onClick={handleNext} aria-label="Next" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#f5f0e6] text-orange-500 text-xl sm:text-2xl">
                  <TiChevronRightOutline />
                </button>
              </div>
            </div>
          </div>

          {[
            ["Hydration Package", "Stay refreshed with infused water dispensers, iced teas, or lemonade—perfect for hot days or all-ages events..."],
            ["6 ft. Folding Tables", "Whether you need extra space for drinks, food, decor, or gifts, these sturdy and sleek tables offer both functionality and convenience..."],
            ["Popcorn Machine", "Freshly popped, buttery popcorn is the perfect snack to complement your drinks and elevate the party vibe..."],
            ["Sony GTK-XB60 Speakers", "Turn up the energy with our Sony GTK-XB60 speakers! These powerful, portable speakers deliver deep bass and vibrant sound..."]
          ].map(([title, desc], i) => (
            <div key={title} data-aos="fade-up" data-aos-delay={i * 100} className="border-b pb-3">
              <h3 className="bubbles-font text-lg font-semibold">
                {title} <span className="text-gray-500">...Inquire</span>
              </h3>
              <p className="bubbles-font text-lg text-gray-600 mt-2">{desc}</p>
            </div>
          ))}

          <div className="mt-7 space-y-4" data-aos="fade-up">
            <div className="text-center">
              <Link to="/booking-process">
                <button className="bubbles-font text-lg bg-[#493423] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                  Learn More About The Booking Process
                </button>
              </Link>
            </div>
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