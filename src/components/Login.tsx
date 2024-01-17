"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { URL } from "@/utils/constants";
import InputForm from "./InputForm";
import LoginModal from "./LoginModal";
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/recoil";
import { MdHotelClass } from "react-icons/md";

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

  const [user, setUser] = useRecoilState(userState);

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    //TODO : user 없을 때, alert
    getUser({ userId, password }).then((response) => {
      setUser({ id: response?.id, name: response?.name });
    });

    setUserId("");
    setPassword("");
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsModalOpen(false);
  };

  const handleWithdrawal = async () => {
    setUser(null);
    setIsModalOpen(false);

    await axios.delete(URL + "/user", {
      params: {
        userId: user?.id,
      },
    });
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
            {user ? (
              <>
                <h1 className="text-2xl p-4 font-bold">정보</h1>

                <div className="flex flex-row justify-center items-center w-60 bg-lightGray rounded-md p-2 m-2">
                  <MdHotelClass size={30} />
                  <div className="w-full bg-lightGray rounded-md ml-2 font-bold text-red-500">
                    {user.id === "admin" ? "관리자" : "몰디"}
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center w-60 bg-lightGray rounded-md p-2 m-2">
                  <IoMdPerson size={30} />
                  <div className="w-full bg-lightGray rounded-md ml-2 ">
                    {user.name}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-60 bg-black text-white p-2 m-2 rounded-md"
                  onClick={handleLogout}
                >
                  로그아웃
                </button>
                <button
                  type="submit"
                  className="w-60 bg-black text-white p-2 m-2 rounded-md"
                  onClick={handleWithdrawal}
                >
                  회원탈퇴
                </button>
                <button className="mt-auto hover:font-bold text-sm"></button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </LoginModal>
      <button onClick={openModal} className=" justify-center items-center flex">
        <IoMdPerson size={30} />
      </button>
    </>
  );
}
