import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logos/transparent.PNG"; // Adjust the path if needed

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between relative">
      <Navbar />

      {/* Logo Section with colored background and reduced bottom spacing */}
      <section className="bg-[#EBE6D6] pt-20 pb-4">
        <div className="max-w-xs mx-auto">
          <img src={logo} alt="Clinking Bubbles Logo" className="mx-auto" />
        </div>
      </section>

      {/* Hero Text Section (white background) */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="clinking-font text-4xl font-bold mb-6" data-aos="fade-up">
            About Clinking Bubbles
          </h1>
          <p
            className="bubbles-font text-xl text-black mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At Clinking Bubbles, we believe every celebration deserves a touch of magic.
            We transform ordinary events into unforgettable experiences with our premium beverage services and innovative cocktails.
          </p>
          <p
            className="bubbles-font text-lg text-black mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Founded by industry professionals, our passion for perfection and creativity drives us to tailor our services to your unique vision.
            Whether you're hosting an intimate gathering or a grand celebration, we ensure every detail sparkles.
          </p>
          <p
            className="bubbles-font text-lg text-black"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            With exceptional service, a curated drink selection, and a commitment to excellence, Clinking Bubbles creates moments that last a lifetime.
          </p>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="clinking-font text-3xl font-bold mb-4">Our Vision &amp; Values</h2>
          <p className="bubbles-font text-lg text-black mb-4">
            Our mission is simple: to create an unparalleled bar experience that brings people together.
            We pride ourselves on creativity, reliability, and personalized service.
          </p>
          <p className="bubbles-font text-lg text-black">
            At Clinking Bubbles, we don’t just serve drinks; we craft memorable experiences that elevate every celebration.
            Let us help you create moments that sparkle and leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4" data-aos="zoom-in">
          <Link to="/booking-process">
            <button className="bubbles-font text-lg bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Learn More About The Booking Process
            </button>
          </Link>
          <Link to="/contact">
            <button className="bubbles-font text-lg bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600 transition">
              Get a Quote
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;


