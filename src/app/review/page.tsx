"use client";

import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { useState } from "react";

export default function Review() {
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
    <>
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
    </>
  );
}
