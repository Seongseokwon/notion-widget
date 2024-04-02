"use client";

import { useState } from "react";
import SelectWidget from "./components/SelectWidget";
import CustomizingWidget from "./components/CustomizingWidget";
import { customAxios } from "@/libs/axios";

interface WidgetGeneratePageProps {}

const WidgetGeneratePage = ({}: WidgetGeneratePageProps) => {
  const [step, setStep] = useState("select");
  const generateWidget = () => {};

  const sampleWidgetGenerate = async () => {
    try {
      await customAxios.getInstance().post("/widget", {
        type: "clock",
        name: "digital-clock",
        attributes: {
          setting: {},
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
        <SelectWidget setStep={() => setStep((prev) => "customize")} />
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
