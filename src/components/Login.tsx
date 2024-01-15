"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { MADCAMP, URL } from "@/utils/constants";
import InputForm from "./InputForm";
import LoginModal from "./LoginModal";
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { MdOutlinePermIdentity } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

interface LoginProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  openSignupModal: () => void;
}

export default function Login({
  isModalOpen,
  setIsModalOpen,
  openSignupModal,
}: LoginProps) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    //TODO : TEST GEt USER (Login)
    // try {
    //   await axios
    //     .get(URL + "/user", {
    //       email: email,
    //       password: password,
    //     })
    //     .then((response) => console.log(response.data));
    // } catch (e: any) {
    //   console.log(e);
    // }

    setId("");
    setName("");
    setCode("");
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
          <img src={MADCAMP} alt="1" className="w-1/2 rounded-3xl" />

          <div className="flex flex-col justify-center items-center p-4  w-1/2">
            <div className="flex w-full justify-end items-center">
              <button onClick={closeModal}>
                <IoIosCloseCircle size={30} />
              </button>
            </div>
            <h1 className="text-2xl p-4 font-bold">User Login</h1>

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
                value={id}
                onChange={setId}
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
      <button onClick={openModal}>버튼</button>
    </>
  );
}
