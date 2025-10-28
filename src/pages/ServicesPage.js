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
        <meta
          name="description"
          content="Explore our private bartending services for weddings, birthdays, and special events. Serving NJ & NY with style, heart, and crafted cocktails."
        />
        <meta
          name="keywords"
          content="bartending services, private bartending NJ, private bartending NY, cocktail packages, event bartending, party bartenders NJ, wedding bartenders NY, event bar services"
        />
        <link rel="canonical" href="https://www.clinkingbubbles.com/services" />
        <meta
          property="og:title"
          content="Private Bartending Services: NJ Weddings, Parties & More"
        />
        <meta
          property="og:description"
          content="Explore our private bartending services for weddings, birthdays, and special events. Serving NJ & NY with style, heart, and crafted cocktails."
        />
        <meta
          property="og:url"
          content="https://www.clinkingbubbles.com/services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.clinkingbubbles.com/assets/mainlogo.png"
        />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="Explore premium bartending services for NJ & NY."
        />
        <link
          rel="preload"
          as="image"
          href="/images/servicespic.webp"
          type="image/webp"
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[700px]">
        <img
          src="/images/servicespic.webp"
          alt="Clinking Bubbles Services"
          width="1080"
          height="1400"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-28 sm:pt-48">
          <div data-aos="fade-up">
            <h1 className="clinking-font drop-shadow-[0_0_2px_black] text-4xl sm:text-6xl font-bold text-white text-center">
              OUR SERVICES
            </h1>
          </div>

          <div className="mt-6 sm:mt-10"></div>

          <div
            className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="bubbles-font drop-shadow-[0_0_2px_black] text-md sm:text-2xl text-white drop-shadow-sm">
              We believe every celebration should be a work of art. From chic
              gatherings to all-out bashes, our packages are designed to pamper
              your guests and let you sip, smile, and truly relax. Below,
              you’ll find our essential inclusions and an array of stylish
              add-ons to add a layer of pure luxury to your event.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white text-black px-4 py-10">
        <div className="max-w-6xl mx-auto">
          {/* SIGNATURE SERVICE TIERS */}
          <div
            className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6"
            data-aos="fade-up"
          >
            <h2 className="clinking-font text-2xl sm:text-3xl font-bold">
              OUR SIGNATURE SERVICE
            </h2>
          </div>

          <div
  className="bubbles-font text-lg sm:text-xl mb-10 text-left max-w-4xl"
  data-aos="fade-up"
  data-aos-delay="100"
>
  <p className="ml-1 sm:ml-[0.3rem]">*Please keep in mind Clinking Bubbles operates as a dry-hire service. None of these packages include alcohol.*</p>
  <p className="mt-2 ml-1 sm:ml-[0.3rem]">*4 hour service minimum. Bartenders and bar rentals priced separately.*</p>
</div>

          {[
            {
              title: "THE FULL EXPERIENCE",
              price: "$$$",
              items: [
                "Disposable cups, lightly personalized agave straws, beverage napkins",
                "Three signature cocktails or mocktail of your choice",
                "Fresh mixers and garnishes for specialty cocktails",
                "Bar supplies",
                "Basic mixers: Coca-cola, Club soda, Tonic water, Cranberry juice, etc.",
                "Custom framed bar menu display",
                "Ice for serving and chilling beverages",
                "Consultation on alcohol purchase/shopping list",
                "Beer, wine & champagne service",
              ],
            },
            {
              title: "THE CUSTOM BLEND",
              price: "$$",
              items: [
                "Disposable cups, lightly personalized agave straws & beverage napkins",
                "Two signature cocktails or mocktail of your choice",
                "Fresh mixers and garnishes for specialty cocktails",
                "Bar supplies",
                "Basic mixers: Coca-cola, Club soda, Tonic water, Cranberry juice, etc.",
                "Custom framed bar menu display",
                "Ice for serving and chilling beverages",
                "Consultation on alcohol purchase/shopping list",
                "Beer, wine & champagne service",
              ],
            },
            {
              title: "THE ESSENTIALS",
              price: "$",
              items: [
                "Disposable cups, agave straws, beverage napkins",
                "Basic mixers: Coca-cola, Club soda, Tonic water, Cranberry juice, etc.",
                "Basic garnishes: lime & lemon wedges",
                "Bar supplies",
                "Mixers provided allow for popular classics such as: Jack & Coke, Tequila Soda, Vodka Cranberry, and more",
                "Custom framed bar menu display",
                "Ice for serving and chilling beverages",
                "Consultation on alcohol purchase/shopping list",
                "Beer, wine & champagne service",
              ],
            },
          ].map((pkg, i) => (
            <div
              key={pkg.title}
              className="bg-[rgba(250,248,243,0.6)] border border-[#d9c7b2] p-6 sm:p-10 rounded-lg shadow-sm max-w-5xl mx-auto mb-10 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <h3 className="clinking-font text-2xl sm:text-3xl font-bold mb-4 text-center">
                {pkg.title}{" "}
                <span className="text-[#493423] font-normal">{pkg.price}</span>
              </h3>
              <ul className="list-disc pl-5 bubbles-font text-base sm:text-lg space-y-2 text-gray-800">
                {pkg.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* ACCESSORIES (unchanged) */}
          <div
            className="inline-block bg-[#ebe6d6] px-3 py-2 rounded-md mb-6"
            data-aos="fade-up"
          >
            <h2 className="clinking-font text-2xl sm:text-3xl font-bold">
              ACCESSORIES
            </h2>
          </div>

          <p
            className="bubbles-font text-lg sm:text-xl mb-8 text-left max-w-4xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Perfect your bar setup with these additional items. Ideal for those who crave a more immersive, high-end experience.
          </p>

          <div data-aos="fade-up" className="border-b pb-6">
            <h3 className="bubbles-font text-lg font-semibold mb-2">
              6 ft. Solid Wooden Bar{" "}
              <span className="text-gray-500">...Inquire</span>
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
                    className: "object-[center_90%] sm:object-[center_65%]",
                    text: "Our signature solid wood bar with sleek finishes and customizable decor, captured in its full charm at night.",
                  },
                  {
                    src: "/images/bar2.webp",
                    alt: "Wooden Bar 2",
                    className: "object-center sm:object-[center_30%]",
                    text: "Seen here during the day, a closer look at the premium craftsmanship and attention to detail that sets our bar apart.",
                  },
                  {
                    src: "/images/ariparty.webp",
                    alt: "Wooden Bar Decorated",
                    className: "object-center sm:object-[center_30%]",
                    text: "An example of how we tailor every detail ~ from florals to flair ~ to match your party’s personality and vibe.",
                  },
                  {
                    src: "/images/bar3.webp",
                    alt: "Wooden Bar 3",
                    className: "object-center",
                    text: "Stylish from every angle and an elegant look for any event.",
                  },
                ].map(({ src, alt, text, className }, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative">
                      <img
                        src={src}
                        alt={alt}
                        className={`w-full h-[350px] sm:h-[500px] object-cover ${className} rounded-md`}
                      />
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 backdrop-blur-sm bg-white/10 text-white rounded-b-md text-center">
                        <p className="bubbles-font drop-shadow-[0_0_2px_black] text-sm sm:text-base">
                          {text}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex items-center justify-center gap-4 mt-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#f5f0e6] text-orange-400 text-xl sm:text-2xl"
                >
                  <TiChevronLeftOutline />
                </button>
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                        activeIndex === i
                          ? "bg-orange-400"
                          : "bg-gray-400"
                      }`}
                    ></span>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#f5f0e6] text-orange-500 text-xl sm:text-2xl"
                >
                  <TiChevronRightOutline />
                </button>
              </div>
            </div>
          </div>

          {/* Additional Accessories */}
          {[
            [
              "Hydration Package",
              "Stay refreshed with infused water dispensers, iced teas, or lemonade—perfect for hot days or all-ages events.",
            ],
            [
              "6 ft. Folding Tables",
              "Whether you need extra space for drinks, food, decor, or gifts, these sturdy and sleek tables offer both functionality and convenience.",
            ],
            [
              "Popcorn Machine",
              "Freshly popped, buttery popcorn is the perfect snack to complement your drinks and raise the party vibe.",
            ],
            [
              "Sony GTK-XB60 Speakers",
              "Turn up the energy with our Sony GTK-XB60 speakers! These powerful, portable speakers deliver deep bass and vibrant sound.",
            ],
          ].map(([title, desc], i) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="border-b pb-3"
            >
              <h3 className="bubbles-font text-lg font-semibold">
                {title} <span className="text-gray-500">...Inquire</span>
              </h3>
              <p className="bubbles-font text-lg text-gray-600 mt-2">
                {desc}
              </p>
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