"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { URL } from "@/utils/constants";
import InputForm from "./InputForm";
import LoginModal from "./LoginModal";

import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import { MdOutlinePermIdentity } from "react-icons/md";

interface SignupProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  openLoginModal: () => void;
}

async function postUser({
  name,
  userId,
  password,
  code,
}: {
  name: string;
  userId: string;
  password: string;
  code: string;
}) {
  try {
    await axios.post(URL + "/user", {
      name: name,
      userId: userId,
      password: password,
      code: code,
    });
  } catch (e: any) {
    console.log(e);
  }
}

export default function Signup({
  isModalOpen,
  setIsModalOpen,
  openLoginModal,
}: SignupProps) {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    postUser({ name, userId, password, code });
    setName("");
    setUserId("");
    setPassword("");
    setCode("");

    openLoginModal();
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
        <div className="flex flex-row h-full  ">
          <div className="flex flex-col justify-center items-center p-4 w-full">
            <div className="flex w-full justify-end items-center">
              <button onClick={closeModal}>
                <IoIosCloseCircle size={30} />
              </button>
            </div>
            <h1 className="text-2xl p-4 font-bold">User Signup</h1>

            <form onSubmit={handleSubmit}>
              <InputForm
                icon={<MdOutlinePermIdentity />}
                text="Name"
                type="text"
                id="name"
                value={name}
                onChange={setName}
              />
              <InputForm
                icon={<IoMdPerson />}
                text="ID"
                type="id"
                id="id"
                value={userId}
                onChange={setUserId}
              />
              <InputForm
                icon={<MdOutlinePassword />}
                text="password"
                type="password"
                id="password"
                value={password}
                onChange={setPassword}
              />
              <InputForm
                icon={<FaLock />}
                text="Verification code"
                type="text"
                id="code"
                value={code}
                onChange={setCode}
              />

              <button
                type="submit"
                className="w-60 bg-black text-white p-2 m-2 rounded-md"
              >
                회원가입
              </button>
            </form>
            <button
              className="mt-auto hover:font-bold text-sm"
              onClick={openLoginModal}
            >
              Already have an account? Login here
            </button>
          </div>
        </div>
      </LoginModal>
    </>
  );
}
