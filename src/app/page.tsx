"use client";

import Container from "@/components/Container";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function Home() {
  const router = useRouter();

  const createWidget = () => {
    router.push("/widget/generate");
  };
  return (
    <Container className="gap-3">
      <aside className="px-3 py-5 flex flex-col items-start flex-initial w-60 border border-gray-400">
        <button
          type="button"
          onClick={createWidget}
          className="px-8 py-3 transition border border-gray-200 rounded-lg shadow-lg hover:bg-gray-300"
        >
          위젯 생성
        </button>
      </aside>
      <section className="px-8 py-3 flex flex-col flex-1 border border-gray-300">
        생성된 위젯
      </section>
    </Container>
  );
}
