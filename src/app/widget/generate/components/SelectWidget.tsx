import { useState } from "react";
import WidgetPreviewBox from "../../components/WidgetPreviewBox";

interface SelectWidgetProps {
  setStep: () => void;
}

const SelectWidget = ({ setStep }: SelectWidgetProps) => {
  const [selectItem, setSelectItem] = useState("");

  const handleSelect = (item: any) => {
    setSelectItem(item);
  };
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold">위젯 선택하기</h2>

      <section className="mt-8">
        <h3 className="mb-5 text-2xl font-semibold">시계</h3>
        <div
          className="flex flex-wrap gap-3 p-2
        "
        >
          <WidgetPreviewBox />
        </div>
      </section>

      <button type="button" onClick={setStep}>
        위젯 설정하기
      </button>
    </div>
  );
};

export default SelectWidget;
