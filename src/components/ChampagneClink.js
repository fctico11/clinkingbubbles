import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import champagneAnimation from "../assets/champagne.json"; // Ensure correct file format
import "./ChampagneClink.css";

const ChampagneClink = ({ onAnimationEnd }) => {
  const [isFading, setIsFading] = useState(false); // Controls fade effect
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasPlayed = localStorage.getItem("champagneClinkPlayed");

    if (!hasPlayed) {
      localStorage.setItem("champagneClinkPlayed", "true");
      setIsVisible(true);
    } else {
      setIsVisible(false);
      onAnimationEnd(); // Immediately show homepage
    }
  }, [onAnimationEnd]);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsFading(true); // Start fading out after 1-second delay
      setTimeout(() => {
        setIsVisible(false);
        onAnimationEnd(); // Show homepage when fade completes
      }, 1500); // 1.5s fade-out transition
    }, 1000); // ⏳ 1-second delay after animation completes
  };

  if (!isVisible) return null; // Hide animation when done

  return (
    <div className={`champagne-overlay ${isFading ? "fade-out" : ""}`}>
      <Lottie
        animationData={champagneAnimation}
        loop={false}
        speed={0.75} // ⏳ Slows animation down (default is 1)
        onComplete={handleAnimationComplete}
        className="champagne-lottie"
      />
    </div>
  );
};

export default ChampagneClink;
