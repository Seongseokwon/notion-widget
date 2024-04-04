"use client";

import Container from "@/components/Container";
import Header from "@/components/Header";
import { customAxios } from "@/libs/axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface WidgetPageProps {}

const WidgetPage = ({}: WidgetPageProps) => {
  const router = useRouter();

  const createWidget = () => {
    router.push("/widget/generate");
  };

  const getMyWidget = async () => {
    const response = await customAxios.get("/widget");
    console.log(response);
  };

  useEffect(() => {
    getMyWidget();
  }, []);
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Container>
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
    </div>
  );
};

export default WidgetPage;
