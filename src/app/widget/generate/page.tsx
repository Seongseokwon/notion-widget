"use client";

import { Fragment, useState } from "react";
import SelectWidget from "./components/SelectWidget";

interface WidgetGeneratePageProps {}

const WidgetGeneratePage = ({}: WidgetGeneratePageProps) => {
  const [step, setStep] = useState("");

  return (
    <Fragment>
      <SelectWidget />
    </Fragment>
  );
};

export default WidgetGeneratePage;
