import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { useSwipeable } from "react-swipeable";
import "./Services.css";

// import icons
import ringsIcon from "../assets/icons/rings2.webp";
import privateIcon from "../assets/icons/no-entry.webp";
import corporateIcon from "../assets/icons/handshake.webp";
import birthdayIcon from "../assets/icons/birthday-cake.png";
import graduationIcon from "../assets/icons/graduate.png";
import anniversaryIcon from "../assets/icons/anniversary.png";
import champagneIcon from "../assets/icons/champagne.png";

const servicesData = [
  {
    title: "Private Parties",
    description: "Personalized bartending services for an intimate, memorable event",
    icon: privateIcon,
  },
  {
    title: "Corporate Events",
    description: "Elevate your corporate gatherings with tailored cocktail experiences",
    icon: corporateIcon,
  },
  {
    title: "Weddings",
    description: "Add a touch of luxury to your special day with bespoke cocktail menus",
    icon: ringsIcon,
  },
  {
    title: "Birthday Parties",
    description: "Celebrate in style with custom cocktails and dedicated bartenders",
    icon: birthdayIcon,
  },
  {
    title: "Graduation Parties",
    description: "Make the milestone unforgettable with our signature drinks",
    icon: graduationIcon,
  },
  {
    title: "Anniversaries",
    description: "Toast to lasting love with a refined cocktail experience",
    icon: anniversaryIcon,
  },
  {
    title: "So Much More...",
    description: "No matter the occasion, our team is dedicated to tailoring an experience that exceeds expectations every time",
    icon: champagneIcon,
  },
];

// Helper to wrap an index around the array length
function wrapIndex(i, length) {
  return (i + length) % length;
}

const MAX_VISIBILITY = 2;

function Services() {
  const [active, setActive] = useState(0);

  const handlePrev = () => {
    if (active > 0) {
      setActive((prev) => wrapIndex(prev - 1, servicesData.length));
    }
  };

  const handleNext = () => {
    if (active < servicesData.length - 1) {
      setActive((prev) => wrapIndex(prev + 1, servicesData.length));
    }
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
  });

  return (
    <section className="py-10 px-4 bg-white text-black">
      <h2 className="clinking-font text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="services-3d-wrapper">
        <div className="carousel-viewport">
          {/* The actual carousel is centered by left: 50%; transform: translateX(-50%) */}
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
                      <img
                        src={service.icon}
                        alt={`${service.title} icon`}
                        className="card-icon"
                      />
                      <h2 className="bubbles-font">{service.title}</h2>
                      <p className="bubbles-font">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation: Arrows and Dots */}
        <div className="carousel-nav">
          <button className="nav-btn" onClick={handlePrev} disabled={active <= 0} aria-label="Left navigation arrow">
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
          <button className="nav-btn" onClick={handleNext} disabled={active >= servicesData.length - 1} aria-label="Right navigation arrow">
            <TiChevronRightOutline />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
