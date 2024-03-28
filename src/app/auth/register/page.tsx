"use client";

import axios from "axios";
import Link from "next/link";
import { FormEvent, useCallback, useState } from "react";

interface UserRegisterPageProps {}

const UserRegisterPage = ({}: UserRegisterPageProps) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    nickname: "",
    password: "",
  });

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {
        ...userInfo,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = useCallback((e: any) => {
    const {
      target: { value, name },
    } = e;
    console.log(name);
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <main className="flex flex-col gap-1 items-center justify-center w-full h-full">
      <h2 className="text-center font-semibold text-3xl">회원가입</h2>
      <form
        onSubmit={handleSignup}
        className="
        flex flex-col gap-3 p-8 w-1/2 h-1/2 overflow-y-auto max-w-screen-sm min-w-fit min-h-fit border border-gray-200 rounded-lg shadow-lg"
      >
        <div className="flex flex-col gap-1 flex-none h-16">
          <label htmlFor="email">이메일</label>
          <input
            onChange={handleChange}
            value={userInfo.email}
            className="border border-gray-200 py-1 rounded-lg px-1"
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1 flex-none h-16">
          <label htmlFor="nickname">닉네임</label>
          <input
            onChange={handleChange}
            value={userInfo.nickname}
            className="border border-gray-200 py-1 rounded-lg px-1"
            id="nickname"
            name="nickname"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 flex-none h-16">
          <label htmlFor="password">비밀번호</label>
          <input
            onChange={handleChange}
            value={userInfo.password}
            className="border border-gray-200 py-1 rounded-lg px-1"
            id="password"
            name="password"
            type="password"
            autoComplete={"cc-name webauthn"}
          />
        </div>
        <div className="flex flex-col mt-5 justify-center flex-1">
          <button
            className="p-2 border border-gray-200 rounded-lg hover:bg-green-400 hover:text-white"
            type="submit"
          >
            회원가입
          </button>
        </div>
        <div className="flex gap-2 flex-1">
          <p className="text-sm text-gray-400">이미 계정이 있으신가요 ?</p>
          <Link
            className="text-sm text-gray-300 transition hover:text-gray-900"
            href="/auth/login"
          >
            로그인
          </Link>
        </div>
      </form>
    </main>
  );
};

export default UserRegisterPage;
