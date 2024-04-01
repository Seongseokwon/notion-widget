import { useState } from "react";
import WidgetPreviewBox from "../../components/WidgetPreviewBox";
import { useRouter } from "next/navigation";
import { Widget } from "@prisma/client";

interface SelectWidgetProps {
  setStep: () => void;
  widgets: Widget[];
}

const SelectWidget = ({ widgets, setStep }: SelectWidgetProps) => {
  const router = useRouter();
  const [selectItem, setSelectItem] = useState<
    Record<string, any> | undefined
  >();

  const handleSelect = (item: any) => {
    setSelectItem(item);
  };

  const handleNextStep = () => {
    if (!selectItem) {
      console.log("위젯을 선택하세요");
      return;
    }
    setStep();
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <section className="mt-8">
          <h3 className="mb-5 text-2xl font-semibold">시계</h3>
          <div
            className="flex flex-wrap gap-3 p-2
        "
          >
            {widgets.map((widget) => (
              <WidgetPreviewBox
                key={widget.id}
                widget={widget}
                isSelected={widget.id === selectItem?.id}
                selectItem={handleSelect}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="flex gap-3 pb-5 items-center justify-center">
        <button
          className="text-white border bg-gray-500 border-gray-500 w-36 py-2 rounded-lg transition hover:bg-gray-700 hover:border-gray-700"
          type="button"
          onClick={() => router.push("/widget")}
        >
          돌아가기
        </button>
        <button
          className="text-white border bg-green-400 border-green-400 w-36 py-2 rounded-lg transition hover:bg-green-600 hover:border-green-600"
          type="button"
          onClick={handleNextStep}
        >
          위젯 설정하기
        </button>
      </div>
    </div>
  );
};

export default SelectWidget;
