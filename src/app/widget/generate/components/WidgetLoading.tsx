import WidgetPreviewBox from "../../components/WidgetPreviewBox";

interface WidgetLoadingProps {
  widgetType: string;
}

const WidgetLoading = ({ widgetType }: WidgetLoadingProps) => {
  return (
    <section className="mt-8">
      <h3 className="mb-5 text-2xl font-semibold">{widgetType}</h3>
      <div
        className="flex flex-wrap gap-3 p-2
        "
      >
        <WidgetPreviewBox
          isLoading
          widget={{}}
          isSelected={false}
          selectItem={() => {}}
        />
        <WidgetPreviewBox
          isLoading
          widget={{}}
          isSelected={false}
          selectItem={() => {}}
        />
        <WidgetPreviewBox
          isLoading
          widget={{}}
          isSelected={false}
          selectItem={() => {}}
        />
        <WidgetPreviewBox
          isLoading
          widget={{}}
          isSelected={false}
          selectItem={() => {}}
        />
      </div>
    </section>
  );
};

export default WidgetLoading;
