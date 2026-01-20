import React, { useEffect, useState } from "react";
import champagneAnimation from "../assets/champagne.json"; // Ensure correct file format
import "./ChampagneClink.css";

const ChampagneClink = ({ onAnimationEnd }) => {
  const [isFading, setIsFading] = useState(false); // Controls fade effect
  const [isVisible, setIsVisible] = useState(true);
  const [LottieComponent, setLottieComponent] = useState(null);

  // Lazy load Lottie library
  useEffect(() => {
    import("lottie-react").then((module) => {
      setLottieComponent(() => module.default);
    });
  }, []);

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
    }, 500); // ⏳ Increase wait time after animation finishes
  };

  if (!isVisible) return null; // Hide animation when done

  return (
    <div className={`champagne-overlay ${isFading ? "fade-out" : ""}`}>
      {LottieComponent && (
        <LottieComponent
          animationData={champagneAnimation}
          loop={false}
          speed={0.05} // ⏳ Slow animation significantly (5% of normal speed)
          onComplete={handleAnimationComplete}
          className="champagne-lottie"
          style={{ width: "100vw", height: "100vh" }}
        />
      )}
    </div>
  );
};

export default ChampagneClink;

