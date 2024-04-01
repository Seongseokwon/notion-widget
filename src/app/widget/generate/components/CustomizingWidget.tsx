interface CustomizingWidgetProps {
  setStep: () => void;
}

const CustomizingWidget = ({ setStep }: CustomizingWidgetProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold">위젯 설정하기</h2>

      <section className="mt-8">
        <h3 className="mb-5 text-2xl font-semibold">시계</h3>

        <div>
          <aside>설정 항목</aside>

          <main>설정된 위젯 미리보기</main>
        </div>
      </section>

      <button type="button" onClick={setStep}>
        위젯 선택하기
      </button>
    </div>
  );
};

export default CustomizingWidget;
