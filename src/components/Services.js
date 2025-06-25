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
    image: "/images/car2.webp",
    backgroundPosition: "center"
  },
  {
    title: "Corporate Events",
    description: "Elevate your corporate gatherings with tailored cocktail experiences",
    icon: corporateIcon,
    image: "/images/car1.webp",
    backgroundPosition: "center"
  },
  {
    title: "Weddings",
    description: "Add a touch of luxury to your special day with bespoke cocktail menus",
    icon: ringsIcon,
    image: "/images/car3.webp",
    backgroundPosition: "center"
  },
  {
    title: "Birthday Parties",
    description: "Celebrate in style with custom cocktails and dedicated bartenders",
    icon: birthdayIcon,
    image: "/images/car4.webp",
    backgroundPosition: "center"
  },
  {
    title: "Graduation Parties",
    description: "Make the milestone unforgettable with our signature drinks",
    icon: graduationIcon,
    image: "/images/car5.webp",
    backgroundPosition: "center"
  },
  {
    title: "Anniversaries",
    description: "Toast to lasting love with a refined cocktail experience",
    icon: anniversaryIcon,
    image: "/images/car6.webp",
    backgroundPosition: "center"
  },
  {
    title: "So Much More...",
    description: "No matter the occasion, our team is dedicated to tailoring an experience that exceeds expectations every time",
    icon: champagneIcon,
    image: "/images/car7.webp",
    backgroundPosition: "center"
  },
];

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
                  <div
                    className="card"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: service.backgroundPosition,
                    }}
                  >
                    <div className="card-content flex flex-col items-center justify-center gap-3">
                      <div className="glassbox rounded-xl px-2 py-1 w-fit h-fit flex items-center justify-center">
                        <img
                          src={service.icon}
                          alt={`${service.title} icon`}
                          className="card-icon w-10 h-10 invert"
                        />
                      </div>

                      <div className="glassbox px-5 py-2 rounded-xl">
                        <h2 className="bubbles-font text-white text-lg sm:text-xl font-semibold text-center">
                          {service.title}
                        </h2>
                      </div>

                      <div className="glassbox px-5 py-2 rounded-xl w-[90%] min-h-[3.5rem] flex items-center justify-center">
                        <p className="bubbles-font text-white text-sm sm:text-base text-center leading-snug">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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