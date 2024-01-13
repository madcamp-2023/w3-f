"use client";

import React, { useState } from "react";
import axios from "axios";
import { URL } from "@/utils/constants";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    //TODO : TEST POST USER (Signup)
    // try {
    //   await axios
    //     .post(URL + "/user", {
    //       name: name,
    //       email: email,
    //       password: password,
    //       code: code,
    //     })
    //     .then((response) => console.log(response.data));
    // } catch (e: any) {
    //   console.log(e);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">이름:</label>
        <input
          type="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPasswrod(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="code">코드:</label>
        <input
          type="code"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <button type="submit">가입하기</button>
    </form>
  );
}
