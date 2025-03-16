import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import fillingCupAnimation from "../assets/fillingcup.json"; // adjust path if needed

const FillingCupAnimation = () => {
  const lottieRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView && lottieRef.current) {
      const instance = lottieRef.current.getLottie
        ? lottieRef.current.getLottie()
        : lottieRef.current;
      let currentDir = 1; // start forward
      // Function to play the segment based on the current direction
      const playLoop = () => {
        if (currentDir === 1) {
          instance.setDirection(1);
          instance.playSegments([2, 120], false);
        } else {
          instance.setDirection(-1);
          instance.playSegments([120, 2], false);
        }
        currentDir *= -1;
      };
      // Start the loop immediately
      playLoop();
      // Set an interval to repeat every 4 seconds (adjust if necessary)
      const intervalId = setInterval(playLoop, 4000);
      return () => clearInterval(intervalId);
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full flex justify-center my-1">
      <div className="w-36 h-36">
        <Lottie
          lottieRef={lottieRef}
          animationData={fillingCupAnimation}
          loop={false}      // Looping is controlled by our setInterval
          autoplay={false}  // Start manually once in view
        />
      </div>
    </div>
  );
};

export default FillingCupAnimation;


