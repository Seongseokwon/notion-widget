"use client";

import { Fragment, useEffect, useState } from "react";
import SelectWidget from "./components/SelectWidget";
import CustomizingWidget from "./components/CustomizingWidget";
import { customAxios } from "@/libs/axios";
import { Widget } from "@prisma/client";

interface WidgetGeneratePageProps {}

const WidgetGeneratePage = ({}: WidgetGeneratePageProps) => {
  const [step, setStep] = useState("select");
  const [widgets, setWidgets] = useState<Widget[] | []>([]);

  const getWidgetObjects = async () => {
    try {
      const response = await customAxios.getInstance().get("/widgetObject");
      setWidgets(() => response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getWidgetObjects();
  }, []);
  // 갖고 있는 Widget 목록을 조회 한후에 SelectWidget으로 뿌려 주는게 좋을듯 ?
  const generateWidget = () => {
    console.log("Request generated widget");
  };

  const sampleWidgetGenerate = async () => {
    try {
      await customAxios.getInstance().post("/widget", {
        type: "clock",
        name: "digital-clock",
        attributes: {
          styles: {},
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {step === "select" ? (
        <SelectWidget
          widgets={widgets}
          setStep={() => setStep((prev) => "customize")}
        />
      ) : (
        <CustomizingWidget
          setStep={() => setStep(() => "select")}
          generateFn={generateWidget}
        />
      )}

      {/* <button
        onClick={sampleWidgetGenerate}
        type="button"
        className="border border-gray-200 lounded-lg"
      >
        샘플 위젯등록
      </button> */}
    </div>
  );
};

export default WidgetGeneratePage;
