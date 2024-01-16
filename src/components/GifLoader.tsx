"use client";

import React, { useEffect, useRef } from "react";
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

      return () => anim.destroy(); // Optional clean up for unmounting
    }
  }, []);

  return (
    <div ref={animationContainer} style={{ width: width, height: height }} />
  );
};

export default Gifloader;
