"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Madcamp from "../Madcamp";
import { pageState } from "@/recoil/recoil";
import CampIntroductionPage from "@/app/camp-introduction/page";
import ManagementIntroductionPage from "@/app/management-introduction/page";
import MadcampLifePage from "@/app/madcamp-life/page";
import ApplyPage from "@/app/apply/page";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

const pages = [
  "Madcamp",
  "CampIntroduction",
  "ManagementIntroduction",
  "MadcampLife",
  "Apply",
];

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
    if (overlayClass !== "") {
      setVisibleComponent(pages[pageIndex]);
      // setTimeout(() => {
      //   setOverlayClass("");
      // }, animationDuration);
      // setTimeout(() => {
      //   setVisibleComponent(pages[pageIndex]);
      // }, 900);
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
      case "CampIntroduction":
        return <CampIntroductionPage />;
      case "ManagementIntroduction":
        return <ManagementIntroductionPage />;
      case "MadcampLife":
        return <MadcampLifePage />;
      case "Apply":
        return <ApplyPage />;
      default:
        return <Madcamp />;
    }
  };

  const handleDot = (page: string, index: number) => {
    setPageIndex(index);
  };

  useEffect(() => {
    setVisibleComponent(pages[pageIndex]);
  }, [pageIndex]);

  return (
    <div className={`relative top-0 left-0 right-0 bottom-0`}>
      {renderComponent()}
      {/* <div
        className={`absolute top-0 left-0 right-0 bottom-0  ${overlayClass}`}
        style={{
          zIndex: 10,
          width: "100vw",
          height: "100vh",
          backgroundColor: overlayClass ? "black" : "transparent",
          display: overlayClass ? "block" : "none",
          overflow: "hidden",
        }}
      ></div> */}
      <div className="fixed bottom-40 right-20  h-40">
        <div className="flex flex-col">
          {pages.map((page, index) => {
            return (
              <div className="" key={index}>
                {page === visibleComponent ? (
                  <GoDotFill size={30} />
                ) : (
                  <GoDot size={30} onClick={() => handleDot(page, index)} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
