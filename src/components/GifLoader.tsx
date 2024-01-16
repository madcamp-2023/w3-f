"use client";

import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

interface GifLoaderProps {
  animationData: any;
  width: number;
  height: number;
}

const Gifloader = ({
  animationData,
  width,
  height,
}: {
  animationData: any;
  width: number;
  height: number;
}) => {
  const animationContainer = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: animationData,
      });
      anim.setSpeed(0.5); // Set the speed to 0.5x

      anim.addEventListener("DOMLoaded", () => {
        setIsLoading(false); // Hide loading screen once animation is loaded
      });

      return () => anim.destroy(); // Optional clean up for unmounting
    }
  }, []);

  return (
    <>
      {isLoading && <div className="bg-red-900">Loading Animation...</div>}
      <div ref={animationContainer} style={{ width: width, height: height }} />
    </>
  );
};

export default Gifloader;
