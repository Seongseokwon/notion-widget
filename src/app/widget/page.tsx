"use client";

import { customAxios } from "@/libs/axios";

interface WidgetPageProps {}

const WidgetPage = ({}: WidgetPageProps) => {
  const handleTest = async () => {
    try {
      const response = await customAxios.getInstance().get("/test");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      WidgetPage
      <button
        className="border border-gray-200 p-2"
        type="button"
        onClick={handleTest}
      >
        API 테스트 버튼
      </button>
    </div>
  );
};

export default WidgetPage;
