import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import fillingCupAnimation from "../assets/fillingcup.json"; // Adjust path if needed

const FillingCupAnimation = () => {
  const lottieRef = useRef(null);

  // State booleans to track initial play and ping-pong loop
  const [initialPlayed, setInitialPlayed] = useState(false);
  const [pingPongStarted, setPingPongStarted] = useState(false);

  // Intersection Observer: triggers each time the component is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // We'll manually guard so we only do the initial segment once
    threshold: 0.5,     // Adjust how much is visible before triggering
  });

  // When the animation completes any segment, check what to do next
  const handleComplete = () => {
    // If we've just finished the 0→120 segment and haven't started ping-pong:
    if (!pingPongStarted && lottieRef.current) {
      // Start ping-pong loop: frames [40→120, 120→40], looping infinitely
      lottieRef.current.playSegments([[40, 120], [120, 40]], true);
      setPingPongStarted(true);
      setInitialPlayed(true);
    }
    // Otherwise, do nothing (ping-pong continues)
  };

  // On scroll into view:
  useEffect(() => {
    if (inView && lottieRef.current && !initialPlayed) {
      // If we haven't done the initial 0→120 run yet, do it now
      lottieRef.current.playSegments([0, 120], false);
    }
    // If we've already done initialPlayed, it stays in ping-pong
    // even if user scrolls out and back in.
  }, [inView, initialPlayed]);

  return (
    <div ref={ref} className="w-full flex justify-center my-0">
      <div className="w-40 h-40">
        <Lottie
          lottieRef={lottieRef}
          animationData={fillingCupAnimation}
          loop={false}       // We'll manually handle looping logic
          autoplay={false}   // Don't start until inView
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
};

export default FillingCupAnimation;
