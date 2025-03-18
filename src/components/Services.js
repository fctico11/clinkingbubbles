import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { useSwipeable } from "react-swipeable";
import "./Services.css";

const servicesData = [
  {
    title: "Private Parties",
    description: "Personalized bartending services for an intimate, memorable event.",
  },
  {
    title: "Corporate Events",
    description: "Elevate your corporate gatherings with tailored cocktail experiences.",
  },
  {
    title: "Weddings",
    description: "Add a touch of luxury to your special day with bespoke cocktail menus.",
  },
  {
    title: "Birthday Parties",
    description: "Celebrate in style with custom cocktails and dedicated bartenders.",
  },
  {
    title: "Graduation Parties",
    description: "Make the milestone unforgettable with our signature drinks.",
  },
  {
    title: "Anniversaries",
    description: "Toast to lasting love with a refined cocktail experience.",
  },
  // Add more services if desired
];

// Helper to wrap an index around the array length
function wrapIndex(i, length) {
  return (i + length) % length;
}

const MAX_VISIBILITY = 2;

function Services() {
  // Active (center) card index
  const [active, setActive] = useState(2);

  const handlePrev = () => {
    if (active > 0) setActive((prev) => wrapIndex(prev - 1, servicesData.length));
  };

  const handleNext = () => {
    if (active < servicesData.length - 1) setActive((prev) => wrapIndex(prev + 1, servicesData.length));
  };

  // Setup swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
  });

  return (
    <section className="py-10 px-4 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="services-3d-wrapper">
        {/* 3D Carousel with swipe support */}
        <div className="carousel" {...swipeHandlers}>
          {servicesData.map((service, i) => {
            const offset = active - i;
            const absOffset = Math.abs(offset);
            if (absOffset > MAX_VISIBILITY) return null;
            return (
              <div
                key={i}
                className="card-container"
                style={{
                  "--active": i === active ? 1 : 0,
                  "--offset": offset,
                  "--abs-offset": absOffset,
                  "--direction": Math.sign(offset),
                  pointerEvents: active === i ? "auto" : "none",
                }}
              >
                <div className="card">
                  <div className="card-content">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation: Arrows and Dots */}
        <div className="carousel-nav">
          <button className="nav-btn" onClick={handlePrev} disabled={active <= 0}>
            <TiChevronLeftOutline />
          </button>
          <div className="dots">
            {servicesData.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === active ? "active-dot" : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <button
            className="nav-btn"
            onClick={handleNext}
            disabled={active >= servicesData.length - 1}
          >
            <TiChevronRightOutline />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;


