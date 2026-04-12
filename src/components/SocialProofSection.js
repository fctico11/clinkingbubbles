import React, { useEffect, useState, useRef } from "react";

const highlights = [
  { icon: "⭐", label: "5-Star Rated", sublabel: "on Google" },
  { icon: "📋", label: "Fully Licensed", sublabel: "& Insured" },
  { icon: "🍸", label: "Custom Menus", sublabel: "for every event" },
  { icon: "🤝", label: "Personal Touch", sublabel: "from start to finish" },
];

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

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 px-4"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              <span className="text-4xl md:text-5xl mb-2 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <span className="clinking-font text-lg md:text-xl font-bold text-black mb-0.5">
                {item.label}
              </span>
              <span className="bubbles-font text-sm md:text-base text-gray-600">
                {item.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
