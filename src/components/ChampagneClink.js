import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import champagneAnimation from "../assets/champagne.json"; // Ensure correct file extension
import "./ChampagneClink.css";

const ChampagneClink = ({ onAnimationEnd }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasPlayed = localStorage.getItem("champagneClinkPlayed");

    if (!hasPlayed) {
      localStorage.setItem("champagneClinkPlayed", "true");
      setIsVisible(true);
    } else {
      setIsVisible(false); // Skip animation if already played
      onAnimationEnd(); // Show home page immediately
    }
  }, [onAnimationEnd]);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsVisible(false);
      onAnimationEnd(); // Show homepage when animation finishes
    }, 2000); // ⏳ Increase delay before fading out (was 1000ms)
  };

  if (!isVisible) return null; // Hide animation after playing

  return (
    <div className={`champagne-animation-overlay ${!isVisible ? "fade-out" : ""}`}>
      <Lottie
        animationData={champagneAnimation}
        loop={false}
        speed={0.5} // ⏳ Slow down animation (default speed is 1)
        onComplete={handleAnimationComplete}
        className="champagne-lottie"
      />
    </div>
  );
};

export default ChampagneClink;

