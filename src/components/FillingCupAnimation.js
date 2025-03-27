import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import fillingCupAnimation from "../assets/optimizedcup.json"; // Adjust path if needed

const FillingCupAnimation = () => {
  const lottieRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  // "forward" means play frames 0→120, "backward" means play frames 120→0.
  const [direction, setDirection] = useState("forward");

  // When the component is in view and direction changes, play the appropriate segment.
  useEffect(() => {
    if (inView && lottieRef.current) {
      if (direction === "forward") {
        lottieRef.current.playSegments([120, 1], false);
      } else {
        lottieRef.current.playSegments([1, 120], false);
      }
    }
  }, [inView, direction]);

  // onComplete callback toggles the direction so the segment replays.
  const handleComplete = () => {
    setDirection((prev) => (prev === "forward" ? "backward" : "forward"));
  };

  return (
    <div ref={ref} className="w-full flex justify-center ">
      <div className="w-48 h-48">
        <Lottie
          lottieRef={lottieRef}
          animationData={fillingCupAnimation}
          loop={false}      // Looping is controlled via onComplete and state
          autoplay={false}  // We'll trigger playback when in view
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
};

export default FillingCupAnimation;




