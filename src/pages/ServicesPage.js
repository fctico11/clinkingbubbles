import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

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
            We believe every celebration should be a work of art. From chic soirées to
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
                  Full Consultation{" "}
                  <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  We’ll collaborate closely with you to design the perfect bar experience,
                  from specialty cocktails to glassware recommendations—making sure
                  everything feels distinctly “you.”
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <h3 className="bubbles-font text-lg font-semibold">
                  Bartenders Kit{" "}
                  <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  Shakers, stirrers, jiggers, muddlers, and more. Our expert bartenders come
                  fully equipped so that every pour is as precise as it is delightful.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="bubbles-font text-lg font-semibold">
                  Ice Tubs &amp; Coolers{" "}
                  <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  Keep beverages frosty and fresh all event long. We’ll supply enough ice tubs
                  and coolers to handle your thirstiest crowd.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="bubbles-font text-lg font-semibold">
                  Bar Goods{" "}
                  <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  Napkins, straws, garnishes, and those little finishing touches that make each
                  sip feel extra special—yes, we’ve got it all.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="bubbles-font text-lg font-semibold">
                  Insurance{" "}
                  <span className="text-gray-500">...Included</span>
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
                  Menu Design{" "}
                  <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  From elegant signage to custom cocktail menus, we’ll handle the design
                  details so you can show off your curated beverage lineup in style.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <h3 className="bubbles-font text-lg font-semibold">
                  Garnishes{" "}
                  <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  From classic citrus twists to artisanal floral elements, we ensure each
                  cocktail looks as impressive as it tastes.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="bubbles-font text-lg font-semibold">
                  Mixers{" "}
                  <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  House-made simple syrups, premium juices, and an array of specialty mixers—
                  consider your drink repertoire upgraded.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="bubbles-font text-lg font-semibold">
                  Drinkware{" "}
                  <span className="text-gray-500">...Included</span>
                </h3>
                <p className="bubbles-font text-lg">
                  Disposable cups come standard; however, if you’d like to level up to real
                  glassware or a unique theme, we can arrange an upgrade.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="bubbles-font text-lg font-semibold">
                  Ice Delivery{" "}
                  <span className="text-gray-500">...Included</span>
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
            <div
              className="flex justify-between items-center border-b pb-3"
              data-aos="fade-up"
            >
              <p className="bubbles-font text-lg font-semibold">
                5 ft. Solid Black Bar / Solid White Bar
              </p>
              <p className="bubbles-font text-lg text-gray-500">...Inquire</p>
            </div>
            <div
              className="flex justify-between items-center border-b pb-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="bubbles-font text-lg font-semibold">
                5 ft. Faux Wooden / Tuxedo Bar
              </p>
              <p className="bubbles-font text-lg text-gray-500">...Inquire</p>
            </div>
            <div
              className="flex justify-between items-center border-b pb-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="bubbles-font text-lg font-semibold">
                6 ft. Industrial Chic Wooden Bar
              </p>
              <p className="bubbles-font text-lg text-gray-500">...Inquire</p>
            </div>
            <div
              className="flex justify-between items-center border-b pb-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="bubbles-font text-lg font-semibold">
                Gatsby / Emerson Back Bars
              </p>
              <p className="bubbles-font text-lg text-gray-500">...Inquire</p>
            </div>
            <div
              className="flex justify-between items-center border-b pb-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="bubbles-font text-lg font-semibold">Jockey Box</p>
              <p className="bubbles-font text-lg text-gray-500">...Inquire</p>
            </div>
            <div
              className="flex justify-between items-center border-b pb-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p className="bubbles-font text-lg font-semibold">
                Hydration Package
              </p>
              <p className="bubbles-font text-lg text-gray-500">...Inquire</p>
            </div>
          </div>

          {/* "Get a Quote!" Button */}
          <div
            className="mt-7 text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Link to="/contact">
              <button className="bubbles-font text-lg bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">
                Get a Quote!
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicesPage;

