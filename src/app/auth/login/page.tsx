"use client";

import { customAxios } from "@/libs/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await customAxios.getInstance().post("/auth/login", {
        ...userInfo,
      });

      if (response.status === 200) {
        customAxios.setAuthorization(response.headers["access-token"]);
        localStorage.setItem("UAT", response.headers["access-token"]);
        localStorage.setItem("URT", response.headers["refresh-token"]);
        router.push("/widget");
      }
    } catch (err: any) {
      console.log(err.name);
    }
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
            name="email"
            onChange={handleChange}
            value={userInfo.email}
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col gap-2 flex-none h-20">
          <label htmlFor="password">비밀번호</label>
          <input
            className="border border-gray-200 py-2 rounded-lg px-1"
            id="password"
            type="password"
            name="password"
            autoComplete={"current-password"}
            onChange={handleChange}
            value={userInfo.password}
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
