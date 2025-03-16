import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import fillingCupAnimation from "../assets/fillingcup.json"; // adjust path if needed

const FillingCupAnimation = () => {
  const lottieRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  // Track current playback direction: "forward" or "backward"
  const [direction, setDirection] = useState("forward");

  // When the component comes into view, start the animation (from 0 to 120)
  useEffect(() => {
    if (inView && lottieRef.current) {
      setDirection("forward");
      lottieRef.current.playSegments([1, 120], false);
    }
  }, [inView]);

  // onComplete callback toggles the direction and plays the appropriate segment
  const handleComplete = () => {
    if (direction === "forward") {
      setDirection("backward");
      lottieRef.current.playSegments([120, 1], false);
    } else {
      setDirection("forward");
      lottieRef.current.playSegments([1, 120], false);
    }
  };

  return (
    <div ref={ref} className="w-full flex justify-center my-1">
      <div className="w-36 h-36">
        <Lottie
          lottieRef={lottieRef}
          animationData={fillingCupAnimation}
          loop={false}      // We control looping via onComplete
          autoplay={false}  // Start manually once in view
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
};

export default FillingCupAnimation;
