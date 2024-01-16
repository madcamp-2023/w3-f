"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Login from "./Login";
import Signup from "./Signup";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button className="mr-4 font-bold" onClick={onClick}>
      {children}
    </button>
  );
};

export default function Header() {
  const router = useRouter();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const openSignupModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 flex justify-between text-xl p-4 md:text-2xl  z-10 bg-backGray"
      style={{ height: "10vh" }}
    >
      <div onClick={() => router.push("/")} className="">
        <div className="border-black border-8 font-black text-4xl">
          ㅁㅇㅋㅍ
        </div>
      </div>
      <menu className="flex flex-row">
        <nav className="hidden md:flex">
          <Button onClick={() => router.push("/FAQ")}>FAQ</Button>
          <Button onClick={() => router.push("/notice")}>게시판</Button>
          <button
            onClick={() => router.push("/apply/detail")}
            className="mr-4 border border-black rounded-2xl bg-black text-white p-2 pl-4 pr-4"
          >
            지원하기
          </button>
        </nav>
        <Login
          isModalOpen={isLoginModalOpen}
          setIsModalOpen={setIsLoginModalOpen}
          openSignupModal={openSignupModal}
        />
        <Signup
          isModalOpen={isSignupModalOpen}
          setIsModalOpen={setIsSignupModalOpen}
          openLoginModal={openLoginModal}
        />
      </menu>
    </header>
  );
}
