import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import champagneAnimation from "../assets/champagne.json"; // Ensure the correct file format
import "./ChampagneClink.css";

const ChampagneClink = ({ onAnimationEnd }) => {
  const [isFading, setIsFading] = useState(false); // Controls the fade effect
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasPlayed = localStorage.getItem("champagneClinkPlayed");

    if (!hasPlayed) {
      localStorage.setItem("champagneClinkPlayed", "true");
      setIsVisible(true);
    } else {
      setIsVisible(false);
      onAnimationEnd(); // Immediately show home page
    }
  }, [onAnimationEnd]);

  const handleAnimationComplete = () => {
    setIsFading(true); // Start fading out
    setTimeout(() => {
      setIsVisible(false);
      onAnimationEnd(); // Show homepage when fade completes
    }, 1500); // 1.5s fade-out transition
  };

  if (!isVisible) return null; // Hide animation when done

  return (
    <div className={`champagne-overlay ${isFading ? "fade-out" : ""}`}>
      <Lottie
        animationData={champagneAnimation}
        loop={false}
        speed={0.5} // Slow down animation
        onComplete={handleAnimationComplete}
        className="champagne-lottie"
      />
    </div>
  );
};

export default ChampagneClink;

