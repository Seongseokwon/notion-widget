"use client";

import { Fragment, useState } from "react";
import SelectWidget from "./components/SelectWidget";
import CustomizingWidget from "./components/CustomizingWidget";

interface WidgetGeneratePageProps {}

const WidgetGeneratePage = ({}: WidgetGeneratePageProps) => {
  const [step, setStep] = useState("select");

  // 갖고 있는 Widget 목록을 조회 한후에 SelectWidget으로 뿌려 주는게 좋을듯 ?

  return (
    <Fragment>
      {step === "select" ? (
        <SelectWidget setStep={() => setStep((prev) => "customize")} />
      ) : (
        <CustomizingWidget setStep={() => setStep((prev) => "select")} />
      )}
    </Fragment>
  );
};

export default WidgetGeneratePage;
