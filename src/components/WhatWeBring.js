import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhatWeBring.css";

const cards = [
  {
    title: "Full Consultation",
    desc: "Tailored advice to craft a bar experience that reflects your unique style.",
    img: "/images/whatwebring1.webp",
    alt: "Cocktail consultation with garnishes",
  },
  {
    title: "Bar Goods",
    desc: "From napkins and straws to cups and finishing touches, we provide the little details that make a big impact.",
    img: "/images/whatwebring2.webp",
    alt: "Premium bar goods and cocktail supplies",
  },
  {
    title: "Ice & Coolers",
    desc: "Keep your drinks frosty all event long with our ice and premium coolers.",
    img: "/images/whatwebring4.webp",
    alt: "Champagne bottles chilling in ice cooler",
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const WhatWeBring = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="wwb-section">
      <div className="wwb-container">
        <h2 className="clinking-font wwb-title" data-aos="fade-up">
          What We Bring
        </h2>
        <div className="wwb-accent" data-aos="fade-up" data-aos-delay="50"></div>
        <p
          className="bubbles-font wwb-intro"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our expertise goes beyond the basics. Here's a sneak peek at the extra
          touches we provide to add magic to your event.
        </p>

        <div className="wwb-cards" data-aos="fade-up" data-aos-delay="200">
          {cards.map((card, i) => (
            <div className="wwb-card" key={i}>
              <img
                className="wwb-card-img"
                src={card.img}
                alt={card.alt}
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="wwb-card-body">
                <h3 className="bubbles-font wwb-card-title">{card.title}</h3>
                <p className="bubbles-font wwb-card-desc">{card.desc}</p>
                <Link to="/services" className="bubbles-font wwb-card-link">
                  Learn More <ArrowIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p
          className="bubbles-font wwb-cta-text"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Explore everything <em>thoughtfully curated</em> for your event.
        </p>
        <div data-aos="zoom-in" data-aos-delay="350">
          <Link to="/services">
            <button className="bubbles-font wwb-cta-btn">
              View Complete Package Details <ArrowIcon />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBring;
