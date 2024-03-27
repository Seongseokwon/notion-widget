import { Fragment } from "react";
import WidgetPreviewBox from "../../components/WidgetPreviewBox";

interface SelectWidgetProps {}

const SelectWidget = ({}: SelectWidgetProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold">위젯 선택하기</h2>

      <section className="mt-8">
        <h3 className="mb-5 text-2xl font-semibold">시계</h3>
        <div
          className="flex flex-wrap gap-3
        "
        >
          <WidgetPreviewBox />
          <WidgetPreviewBox />
          <WidgetPreviewBox />
          <WidgetPreviewBox />
          <WidgetPreviewBox />
          <WidgetPreviewBox />
        </div>
      </section>
    </div>
  );
};

export default SelectWidget;
