import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import champagneAnimation from "../assets/champagne.json"; // Ensure correct file format
import "./ChampagneClink.css";

const ChampagneClink = ({ onAnimationEnd }) => {
  const [isFading, setIsFading] = useState(false); // Controls fade effect
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsFading(true); // Start fading out
      setTimeout(() => {
        setIsVisible(false);
        onAnimationEnd(); // Show homepage when fade completes
      }, 1000); // ⏳ Reduce fade-out time to 1.2s for a quicker transition
    }, 500); // ⏳ Reduce wait time after animation finishes
  };

  if (!isVisible) return null; // Hide animation when done

  return (
    <div className={`champagne-overlay ${isFading ? "fade-out" : ""}`}>
      <Lottie
        animationData={champagneAnimation}
        loop={false}
        speed={0.2} // ⏳ Slow animation significantly (40% of normal speed)
        onComplete={handleAnimationComplete}
        className="champagne-lottie"
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
};

export default ChampagneClink;

