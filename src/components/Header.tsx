"use client";

import { Button } from "@/components/button/Button";
import madcamp from "/public/madcamp.png";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function Header() {
  const onClick = () => {
    console.log(1);
  };

  return (
    <FixedHeader>
      <Image src={madcamp} alt="" width={100} height={100} />
      <div>
        <Button label="1" onClick={onClick} />
        <Button label="1" onClick={onClick} />
        <Button label="1" onClick={onClick} />
        <Button label="1" onClick={onClick} />
      </div>
    </FixedHeader>
  );
}

const FixedHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 10vh;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
`;
