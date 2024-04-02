"use client";

import Header from "@/components/Header";
import { customAxios } from "@/libs/axios";
import { useRouter } from "next/navigation";

import { Fragment, useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const tokenUpdate = async () => {
    const aToken = localStorage.getItem("UAT");
    const rToken = localStorage.getItem("URT");

    if (!(aToken && rToken)) return;

    try {
      const response = await customAxios
        .getInstance()
        .get("/auth/token/verify");
      router.push("widget");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    tokenUpdate();
  }, []);
  return (
    <Fragment>
      <Header />
      <main>랜딩 페이지</main>
    </Fragment>
  );
}
