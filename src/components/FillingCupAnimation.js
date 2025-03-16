import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import fillingCupAnimation from "../assets/fillingcup.json"; 
const FillingCupAnimation = () => {
  // Create a ref for the Lottie instance
  const lottieRef = useRef();
  // Set up the Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: false, // We want to trigger every time it comes into view
    threshold: 0.5,     // Adjust threshold as needed (50% visible)
  });

  useEffect(() => {
    if (inView && lottieRef.current) {
      // Play from frame 40 to 120 in a loop.
      // The second argument 'true' indicates that the segment should loop.
      lottieRef.current.playSegments([40, 120], true);
    }
    // No else; if out of view we let it continue playing in the background.
  }, [inView]);

  return (
    <div ref={ref} className="w-full flex justify-center my-12">
      <div className="w-64 h-64">
        <Lottie
          lottieRef={lottieRef}
          animationData={fillingCupAnimation}
          loop={false}    // We control looping manually with playSegments
          autoplay={false} // Do not auto-play; wait for scroll in view
        />
      </div>
    </div>
  );
};

export default FillingCupAnimation;
