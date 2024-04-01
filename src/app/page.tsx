"use client";

import Header from "@/components/Header";
import { customAxios } from "@/libs/axios";
import { Fragment, useEffect } from "react";

export default function Home() {
  const tokenUpdate = async () => {
    try {
      const response = await customAxios
        .getInstance()
        .get("/auth/token/verify");
      console.log(response.data);
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
