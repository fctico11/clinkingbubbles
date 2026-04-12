import React, { useEffect, useState, useRef } from "react";
import { FaStar } from "react-icons/fa";

const useCountUp = (end, duration = 2000, startAnimating = false, decimals = 0) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    if (!startAnimating) return;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      // easeOutQuad for a snappier finish instead of long tail
      const easeOut = percentage * (2 - percentage);
      
      setCount(end * easeOut);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startAnimating]);

  return count.toFixed(decimals);
};

const SocialProofSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ratingCount = useCountUp(5.0, 1000, inView, 1);
  const cocktailsCount = useCountUp(1000, 1300, inView, 0);
  const licensedCount = useCountUp(100, 1600, inView, 0);

  const stats = [
    {
      value: ratingCount,
      suffix: <FaStar className="text-yellow-500 ml-1 pb-1 inline" />,
      label: "GOOGLE RATING",
    },
    {
      value: cocktailsCount,
      suffix: "+",
      label: "COCKTAILS POURED",
    },
    {
      value: licensedCount,
      suffix: "%",
      label: "LICENSED AND INSURED",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-6 md:py-10 px-2 md:px-4"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div 
                className="clinking-font text-2xl sm:text-3xl md:text-5xl font-bold mb-1 md:mb-2 uppercase flex items-center justify-center whitespace-nowrap" 
                style={{ color: "#493423" }}
              >
                {item.value}{item.suffix}
              </div>
              <span 
                className="bubbles-font text-[0.65rem] sm:text-xs md:text-xl uppercase tracking-wider leading-tight px-1" 
                style={{ color: "#493423" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
