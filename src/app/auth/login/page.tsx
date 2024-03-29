"use client";

import Link from "next/link";
import { FormEvent } from "react";

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex flex-col gap-3 items-center justify-center w-full h-full">
      <h2 className="text-center font-semibold text-3xl">로그인</h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-3 p-8 w-1/2 max-w-screen-sm border border-gray-200 rounded-lg shadow-lg"
      >
        <div className="flex flex-col gap-2 flex-none h-20">
          <label htmlFor="email">이메일</label>
          <input
            className="border border-gray-200 py-2 rounded-lg px-1"
            id="email"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2 flex-none h-20">
          <label htmlFor="password">비밀번호</label>
          <input
            className="border border-gray-200 py-2 rounded-lg px-1"
            id="password"
            type="password"
            autoComplete={"current-password"}
          />
        </div>
        <div className="flex flex-col gap-2 justify-center flex-1">
          <button
            className="p-2 border border-gray-200 rounded-lg hover:bg-green-400 hover:text-white"
            type="submit"
          >
            로그인
          </button>
        </div>
        <div className="flex gap-3 flex-1">
          <p className="text-sm text-gray-400">계정이 없으신가요 ?</p>
          <Link
            className="text-sm text-gray-300 transition hover:text-gray-900"
            href="/auth/register"
          >
            회원가입
          </Link>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
