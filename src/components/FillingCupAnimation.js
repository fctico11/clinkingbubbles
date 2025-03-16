import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import fillingCupAnimation from "../assets/fillingcup.json"; // Adjust path if needed

const FillingCupAnimation = () => {
  const lottieRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [initialPlayed, setInitialPlayed] = useState(false);

  // When component first comes into view, play frames 0 to 120 once
  useEffect(() => {
    if (inView && lottieRef.current && !initialPlayed) {
      lottieRef.current.playSegments([0, 120], false);
    }
  }, [inView, initialPlayed]);

  // onComplete callback: once initial play finishes, start looping 0–120 indefinitely
  const handleComplete = () => {
    if (!initialPlayed) {
      setInitialPlayed(true);
      lottieRef.current.playSegments([0, 120], true);
    }
  };

  return (
    <div ref={ref} className="w-full flex justify-center my-1">
      <div className="w-48 h-48"> {/* Increased size for a larger animation */}
        <Lottie
          lottieRef={lottieRef}
          animationData={fillingCupAnimation}
          loop={false}      // We control looping via playSegments
          autoplay={false}  // We start manually when in view
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
};

export default FillingCupAnimation;
