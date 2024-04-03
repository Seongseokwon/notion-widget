import { useEffect, useState } from "react";
import WidgetPreviewBox from "../../components/WidgetPreviewBox";
import { useRouter } from "next/navigation";

import WidgetLoading from "./WidgetLoading";
import { customAxios } from "@/libs/axios";
import { Widget } from "@prisma/client";
import { useWidgetStore } from "@/store/widgetStore";

interface SelectWidgetProps {
  setStep: () => void;
}

const SelectWidget = ({ setStep }: SelectWidgetProps) => {
  const router = useRouter();
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { widget: selectItem, selectWidget } = useWidgetStore();

  const getWidgetList = async () => {
    try {
      const response = await customAxios.getInstance().get("/widgetObject");
      setWidgets(() => response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getWidgetList();
  }, []);

  const handleSelect = (item: Widget) => {
    if (isLoading) return;
    selectWidget(item);
  };

  const handleNextStep = () => {
    if (!selectItem) return;
    setStep();
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {isLoading ? (
          <WidgetLoading widgetType="시계" />
        ) : (
          <section className="mt-8">
            <h3 className="mb-5 text-2xl font-semibold">시계</h3>
            <div
              className="flex flex-wrap gap-3 p-2
        "
            >
              {widgets?.map((widget) => (
                <WidgetPreviewBox
                  isLoading={false}
                  key={widget.id}
                  widget={widget}
                  isSelected={widget.id === selectItem?.id}
                  selectItem={handleSelect}
                />
              ))}
            </div>
          </section>
        )}
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
