"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { MADCAMP, URL } from "@/utils/constants";
import InputForm from "./InputForm";
import LoginModal from "./LoginModal";
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";

interface LoginProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  openSignupModal: () => void;
}

async function getUser({
  userId,
  password,
}: {
  userId: string;
  password: string;
}) {
  try {
    const response = await axios
      .get(URL + "/user", {
        params: { userId, password },
      })
      .then((response) => response.data);

    return response;
  } catch (e: any) {
    console.log(e);
  }
}

export default function Login({
  isModalOpen,
  setIsModalOpen,
  openSignupModal,
}: LoginProps) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    //TODO : TEST GET USER (Login)
    getUser({ userId, password });
    setUserId("");
    setPassword("");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className="flex flex-row h-full ">
          <div className="flex flex-col justify-center items-center p-4 w-full">
            <div className="flex w-full justify-end items-center">
              <button onClick={closeModal}>
                <IoIosCloseCircle size={30} />
              </button>
            </div>
            <h1 className="text-2xl p-4 font-bold">User Login</h1>

            <form onSubmit={handleSubmit}>
              <InputForm
                icon={<IoMdPerson />}
                text="ID"
                type="id"
                id="id"
                value={userId}
                onChange={setUserId}
              />
              <InputForm
                icon={<FaLock />}
                text="password"
                type="password"
                id="password"
                value={password}
                onChange={setPassword}
              />
              <button
                type="submit"
                className="w-60 bg-black text-white p-2 m-2 rounded-md"
              >
                로그인
              </button>
            </form>
            <button
              className="mt-auto hover:font-bold text-sm"
              onClick={openSignupModal}
            >
              Create Your Account
            </button>
          </div>
        </div>
      </LoginModal>
      <button onClick={openModal}>
        <IoPersonCircle size={30} />
      </button>
    </>
  );
}
