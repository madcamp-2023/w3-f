"use client";

import React, { useState } from "react";
import Header from "./Header";
import Introduce from "./Introduce";
import Main from "./Main";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isIntroduceVisible, setIsIntroduceVisible] = useState(false);
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [animationState, setAnimationState] = useState("");

  const handleMenu = () => {
    if (isIntroduceVisible) {
      setAnimationState("sliding-out");

      //   setTimeout(() => {
      //     setIsMainVisible(true);
      //   }, 1000);

      setTimeout(() => {
        setIsIntroduceVisible(false);
      }, 2000);
    } else {
      setAnimationState("sliding-in");
      setIsIntroduceVisible(true);
      setIsMainVisible(false);
    }
  };

  return (
    <main>
      <Header />
      <div>
        {isIntroduceVisible && (
          <div
            className={`
          absolute top-0 left-0 right-0 bottom-0 ${animationState}`}
          >
            <Introduce />
          </div>
        )}

        {!isIntroduceVisible && (
          <div style={{ paddingTop: "10vh" }}>{children}</div>
        )}
      </div>
    </main>
  );
}
