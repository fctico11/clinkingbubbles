import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef(null);
  const [direction, setDirection] = useState("forward");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    import("../assets/optimizedcup.json").then((data) => {
      setAnimationData(data.default);
    });
  }, []);

  // Play segments depending on scroll direction - Logic from FillingCupAnimation
  useEffect(() => {
    if (inView && lottieRef.current) {
      if (direction === "forward") {
        lottieRef.current.playSegments([120, 1], false);
      } else {
        lottieRef.current.playSegments([1, 120], false);
      }
    }
  }, [inView, direction]);

  const handleComplete = () => {
    setDirection((prev) => (prev === "forward" ? "backward" : "forward"));
  };

  return (
    <section className="bg-white text-black py-16 px-6 lg:px-20 pb-8">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="clinking-font text-3xl font-bold mb-6 leading-tight">
          Sip, Smile, and Relax
        </h2>

        {/* Intro Text */}
        <p className="bubbles-font text-lg md:text-xl leading-relaxed text-gray-800 mb-8">
          Luxury mobile bartending for weddings, private parties, and unforgettable celebrations across NJ.
        </p>

        {/* Bullets & Animation Row */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 items-center mb-8">

          {/* Left Column: Bullet Points */}
          <ul className="space-y-3 w-fit mx-auto md:ml-auto md:mr-0">
            {[
              "Crafted Cocktails",
              "Professional Bartenders",
              "Elegant Bar Setups"
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 text-lg md:text-2xl bubbles-font font-medium">
                {/* Gold Checkmark SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#E3A008" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Right Column: Lottie Animation - Sized Down & Next to Bullets */}
          <div className="flex justify-center md:justify-start" ref={ref}>
            {animationData && (
              <div className="w-32 h-32 md:w-56 md:h-56">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={animationData}
                  loop={false}
                  autoplay={false}
                  onComplete={handleComplete}
                  className="w-full h-full"
                />
              </div>
            )}
          </div>

        </div>

        {/* Closing Text */}
        <p className="bubbles-font text-lg md:text-xl leading-relaxed text-gray-800">
          Thoughtfully executed so your celebration feels effortless. Relax knowing every detail is already taken care of.
        </p>

      </div>
    </section>
  );
};

export default AboutSection;
