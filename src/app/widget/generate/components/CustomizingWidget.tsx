interface CustomizingWidgetProps {
  setStep: () => void;
  generateFn: () => void;
}

const CustomizingWidget = ({ setStep, generateFn }: CustomizingWidgetProps) => {
  return (
    <div className="flex flex-col h-full">
      <section className="flex-1">
        <h3 className="mb-5 text-2xl font-semibold">시계</h3>

        <div className="h-full flex gap-3">
          <aside className="flex-initial w-1/5 border border-gray-300">
            설정 항목
          </aside>

          <main className="flex-1">설정된 위젯 미리보기</main>
        </div>
      </section>

      <section className="flex-initial h-1/6 flex gap-3 items-center justify-center">
        <button
          type="button"
          className="text-white border bg-gray-500 border-gray-500 w-36 py-2 rounded-lg transition hover:bg-gray-700 hover:border-gray-700"
          onClick={setStep}
        >
          위젯 선택하기
        </button>
        <button
          type="button"
          className="text-white border bg-green-400 border-green-400 w-36 py-2 rounded-lg transition hover:bg-green-600 hover:border-green-600 "
          onClick={generateFn}
        >
          위젯 생성하기
        </button>
      </section>
    </div>
  );
};

export default CustomizingWidget;
