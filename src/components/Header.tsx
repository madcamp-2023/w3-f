"use client";

import React, { useEffect, useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import axios from "axios";
import { URL } from "@/utils/constants";
import { useRouter } from "next/navigation";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button className="mr-4" onClick={onClick}>
      {children}
    </button>
  );
};

export default function Header({ handleMenu }: { handleMenu: () => void }) {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between text-xl ml-12 mr-12 mb-8 mt-8 md:text-2xl bg-white z-10">
      <div onClick={() => router.push("/")} className="">
        ㅁㅇㅋㅍ
      </div>
      <menu className="flex flex-row">
        <nav className="hidden md:flex">
          <Button onClick={() => router.push("/notice")}>게시판</Button>
          <Button onClick={() => router.push("/review")}>후기</Button>
          <Button onClick={() => router.push("/apply")}>지원하기</Button>
        </nav>
        <button onClick={handleMenu}>
          <FiAlignRight size={30} />
        </button>
      </menu>
    </header>
  );
}
