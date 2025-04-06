import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FillingCupAnimation = () => {
  const [LottieComponent, setLottieComponent] = useState(null);
  const lottieRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [direction, setDirection] = useState("forward");

  // Dynamically load Lottie only when this component mounts
  useEffect(() => {
    import("lottie-react").then((mod) => {
      setLottieComponent(() => mod.default);
    });
  }, []);

  // Play segments depending on scroll direction
  useEffect(() => {
    if (inView && lottieRef.current) {
      if (direction === "forward") {
        lottieRef.current.playSegments([120, 1], false);
      } else {
        lottieRef.current.playSegments([1, 120], false);
      }
    }
  }, [inView, direction]);

  const handleComplete = () => {
    setDirection((prev) => (prev === "forward" ? "backward" : "forward"));
  };

  // Wait until Lottie is loaded
  if (!LottieComponent) return null;

  return (
    <div ref={ref} className="w-full flex justify-center">
      <div className="w-48 h-48">
        <LottieComponent
          lottieRef={lottieRef}
          animationData={require("../assets/optimizedcup.json")}
          loop={false}
          autoplay={false}
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
};

export default FillingCupAnimation;
