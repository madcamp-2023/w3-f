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
    <button className="mr-4" onClick={onClick}>
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
    <header className="fixed top-0 left-0 right-0 flex justify-between text-xl pl-12 pr-12 pb-8 pt-8 md:text-2xl bg-white z-10">
      <div onClick={() => router.push("/")} className="">
        ㅁㅇㅋㅍ
      </div>
      <menu className="flex flex-row">
        <nav className="hidden md:flex">
          <Button onClick={() => router.push("/introduce")}>소개</Button>
          <Button onClick={() => router.push("/apply")}>지원하기</Button>
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
