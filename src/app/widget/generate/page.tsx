"use client";
import { customAxios } from "@/libs/axios";
import { Widget } from "@prisma/client";
import { useEffect, useState } from "react";
import WidgetPreviewBox from "../components/WidgetPreviewBox";
import { useWidgetStore } from "@/store/widgetStore";
import { useRouter } from "next/navigation";

interface WidgetGeneratePageProps {}

const WidgetGeneratePage = ({}: WidgetGeneratePageProps) => {
  const router = useRouter();
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const {
    widget: selectItem,
    selectWidget,
    setConfigTargetWidget,
  } = useWidgetStore();
  const getWidgetList = async () => {
    try {
      const response = await customAxios.getInstance().get("widgetObject");
      setWidgets(() => response.data ?? []);
    } catch (err) {
      console.log(err);
    }
  };

  const generateWidget = async () => {
    if (!selectItem) return;

    try {
      const response = await customAxios.getInstance().post("/widget", {
        ...selectItem,
      });
      setConfigTargetWidget(response.data);
      router.replace(`/widget/configure/${response.data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWidgetList();
  }, []);
  return (
    <div className="flex flex-col h-full">
      <section className="flex-1">
        {widgets?.map((widget) => (
          <WidgetPreviewBox
            isLoading={false}
            key={widget.id}
            widget={widget}
            isSelected={widget.id === selectItem?.id}
            selectItem={() => selectWidget(widget)}
          />
        ))}
      </section>

      <section className="flex-initial h-32 flex items-center justify-center gap-3">
        <button
          className="border border-gray-200 bg-gray-200 px-5 py-2 rounded-lg"
          type="button"
          onClick={() => router.back()}
        >
          돌아가기
        </button>
        <button
          className="border border-gray-200 bg-gray-200 px-5 py-2 rounded-lg"
          type="button"
          onClick={generateWidget}
        >
          생성하기
        </button>
      </section>
    </div>
  );
};

export default WidgetGeneratePage;
