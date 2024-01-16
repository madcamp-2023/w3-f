"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Apply from "./apply/page";
import History from "./history/page";
import Notice from "./post/page";

export default function Outlet() {
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = 3;

  useEffect(() => {
    const handleWheel = (e: any) => {
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
  }, [pageIndex, totalPages]);

  return (
    <Container>
      <FullPage>
        <Apply />
      </FullPage>
      <FullPage>
        <History />
      </FullPage>
      <FullPage>
        <Notice />
      </FullPage>
    </Container>
  );
}

const FullPage = styled.div`
  height: 90vh;
  width: 100%;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* scroll-snap-align: start; */
`;

const Container = styled.div`
  height: 300vh;
  /* scroll-snap-type: y mandatory; */
  /* overflow-y: scroll; */
`;
