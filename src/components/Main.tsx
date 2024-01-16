"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Madcamp from "./Madcamp";
import Review from "./Review";
import Introduce from "./Introduce";
import { pageState } from "@/recoil/recoil";
import CampIntroductionPage from "@/app/camp-introduction/page";
import ManagementIntroductionPage from "@/app/management-introduction/page";
import MadcampLifePage from "@/app/madcamp-life/page";
import ApplyPage from "@/app/apply/page";

const pages = ["Madcamp", "Review", "Introduce"];

export default function Main() {
  const [visibleComponent, setVisibleComponent] = useState("Madcamp");
  const [overlayClass, setOverlayClass] = useState("");

  const [pageIndex, setPageIndex] = useRecoilState(pageState);
  const totalPages = pages.length;
  const animationDuration = 2000; // Duration of the animation in milliseconds

  useEffect(() => {
    const handleWheel = (e: any) => {
      if (overlayClass !== "") return;

      if (e.deltaY < 0 && pageIndex > 0) {
        setPageIndex(pageIndex - 1);
        setOverlayClass("slide-up");
      } else if (e.deltaY > 0 && pageIndex < totalPages - 1) {
        setPageIndex(pageIndex + 1);
        setOverlayClass("slide-down");
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [pageIndex, overlayClass]);

  useEffect(() => {
    setVisibleComponent(pages[pageIndex]);

    if (overlayClass !== "") {
      setTimeout(() => {
        setOverlayClass("");
      }, animationDuration);
    }
  }, [pageIndex, overlayClass]);

  useEffect(() => {
    if (overlayClass !== "") {
      // Disable scrolling
      document.body.style.overflow = "hidden";

      // Wait for the animation to complete, then reset the overlay class
      const timer = setTimeout(() => {
        setOverlayClass("");
        // Re-enable scrolling
        document.body.style.overflow = "";
      }, animationDuration);

      return () => {
        clearTimeout(timer);
        // Ensure scrolling is re-enabled if the component unmounts
        document.body.style.overflow = "";
      };
    }
  }, [overlayClass, animationDuration]);

  const renderComponent = () => {
    switch (visibleComponent) {
      case "Madcamp":
        return <Madcamp />;
      case "Review":
        return <Review />;
      case "Introduce":
        return <Introduce />;
      default:
        return <Madcamp />;
    }
  };

  return (
    // <div className={`relative top-0 left-0 right-0 bottom-0`}>
    //   {renderComponent()}
    //   <div
    //     className={`absolute top-0 left-0 right-0 bottom-0  ${overlayClass}`}
    //     style={{
    //       zIndex: 10,
    //       width: "100vw",
    //       height: "100vh",
    //       backgroundColor: overlayClass ? "black" : "transparent",
    //       display: overlayClass ? "block" : "none",
    //       overflow: "hidden",
    //     }}
    //   ></div>
    // </div>
    <div>
      <Madcamp />
      {/* <CampIntroductionPage /> */}
      {/* <ManagementIntroductionPage /> */}
      {/* <MadcampLifePage /> */}
      {/* <ApplyPage /> */}
    </div>
  );
}
