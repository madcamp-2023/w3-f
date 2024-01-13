"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Isometrizer from "@/utils/isometrizer";

export default function HomePage() {
  const isometrizerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@mojs/core").then((mojs) => {
        // Use mojs here
        if (
          isometrizerRef.current &&
          !isometrizerRef.current.isometrizerInstance
        ) {
          // Initialize Isometrizer
          const isometrizer = new Isometrizer(isometrizerRef.current, {
            spacing: 50,
            orientation: Isometrizer.ISO_HORIZONTAL | Isometrizer.ISO_RIGHT,
          });

          // Define the controls
          const controls = {
            rotateAll: new mojs.Tween({
              duration: 2000,
              // easing: mojs.easing.quart.inout,
              onUpdate: function (progress) {
                isometrizer.progress({
                  normal: progress,
                  side: progress,
                });
              },
            }),

            rotateChildH: new mojs.Tween({
              duration: 1000,
              // easing: mojs.easing.quart.inout,
              onUpdate: function (progress) {
                isometrizer.progress({
                  childNormal: progress,
                });
              },
            }),

            float: new mojs.Tween({
              duration: 1000,
              // easing: mojs.easing.quart.inout,
              onUpdate: function (progress) {
                isometrizer.progress({
                  float: progress,
                });
              },
            }),
          };

          // Define and play the timeline
          const timeline = new mojs.Timeline()
            .add(controls.rotateAll)
            .append(controls.float)
            .append(controls.rotateChildH);

          timeline.play();
          // Delay visibility of the image
          setTimeout(() => {
            setIsVisible(true); // Set container to be visible after 1 second
          }, 1000);

          isometrizerRef.current.isometrizerInstance = isometrizer;
        }
      });
    }
  }, []);

  return (
    <section className="iso-map-wrapper">
      <div id="isometrizer" ref={isometrizerRef}>
        <div
          className="map-wrapper"
          iso-side-background="#000"
          iso-top-background="#F1EEE5"
        >
          <div className="map-image">
            <img
              src={
                "https://github.com/madcamp-2023/w3-f/assets/99087502/a7dfc0d8-a7f8-4dac-84da-ec181132e740"
              }
              alt="Madcamp"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const MapImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
