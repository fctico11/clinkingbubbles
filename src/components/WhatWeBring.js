import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeBring = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="clinking-font text-3xl font-bold mb-6" data-aos="fade-up">
          What We Bring
        </h2>
        <p
          className="bubbles-font text-lg mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our expertise goes beyond the basics. Here’s a sneak peek at the extra touches we provide to add magic to your event.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="p-4 border rounded-lg">
            <h3 className="bubbles-font text-xl font-semibold mb-2">
              Full Consultation
            </h3>
            <p className="bubbles-font text-lg text-gray-600">
              Tailored advice to craft a bar experience that reflects your unique style.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="bubbles-font text-xl font-semibold mb-2">
              Bar Goods
            </h3>
            <p className="bubbles-font text-lg text-gray-600">
            Napkins, straws, cups, and those little finishing touches that make each
            sip feel extra special - yes, we’ve got it all.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="bubbles-font text-xl font-semibold mb-2">
              Ice &amp; Coolers
            </h3>
            <p className="bubbles-font text-lg text-gray-600">
              Keep your drinks frosty all event long with our ice and premium coolers.
            </p>
          </div>
        </div>
        <div className="mt-8" data-aos="zoom-in" data-aos-delay="300">
          <Link to="/services">
            <button className="bubbles-font text-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition">
              View Complete Package Details
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBring;
