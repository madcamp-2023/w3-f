"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Header from "@/components/Header";
import Introduce from "@/components/Introduce";
import Madcamp from "@/components/Madcamp";
import Apply from "../apply/page";
import History from "../history/page";

export default function HomePage() {
  const [isIntroduceVisible, setIsIntroduceVisible] = useState(false);
  const [animationState, setAnimationState] = useState("");

  const [scrollPosition, setScrollPosition] = useState(0);

  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = 3;

  const handleMenu = () => {
    // if (isIntroduceVisible) {
    //   setAnimationState("sliding-out");
    //   setTimeout(() => {
    //     setIsIntroduceVisible(false);
    //   }, 2000); // 애니메이션 시간과 일치
    // } else {
    //   setIsIntroduceVisible(true);
    //   setAnimationState("sliding-in");
    // }

    setIsIntroduceVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY < 0 && pageIndex > 0) {
        setPageIndex(pageIndex - 1);
      } else if (e.deltaY > 0 && pageIndex < totalPages - 1) {
        setPageIndex(pageIndex + 1);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [pageIndex]);

  return (
    <main>
      <Header handleMenu={handleMenu} />
      {/* <div>{isIntroduceVisible ? <Introduce /> : <Madcamp />}</div> */}

      {
        <div>
          {isIntroduceVisible ? (
            <Introduce />
          ) : (
            <div className="" style={{ height: "300vh" }}>
              <section
                id="0"
                className="w-full flex justify-center items-center"
                style={{ height: "90vh" }}
              >
                <Madcamp />
              </section>
              <section
                id="1"
                className="w-full flex justify-center items-center"
                style={{ height: "90vh" }}
              >
                <Apply />
              </section>
              <section
                id="2"
                className="w-full flex justify-center items-center"
                style={{ height: "90vh" }}
              >
                <History />
              </section>
            </div>
          )}
        </div>
      }
    </main>
  );
}
