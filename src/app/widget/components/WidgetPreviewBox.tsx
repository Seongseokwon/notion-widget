"use client";
import clsx from "clsx";

interface WidgetPreviewBoxProps {
  selectItem: (item: any) => void;
  isSelected: boolean;
  widget: Record<string, any>;
}

const WidgetPreviewBox = ({
  isSelected,
  widget,
  selectItem,
}: WidgetPreviewBoxProps) => {
  return (
    <div
      role="presentation"
      className={clsx(
        `
        w-52
        h-52
        shadow-lg
        p-3
        cursor-pointer
        overflow-x-clip
        transition
    `,
        isSelected
          ? "border-2 border-green-400 rounded-md"
          : "border border-gray-100 "
      )}
      onClick={() => selectItem(widget)}
    >
      {widget.id}
    </div>
  );
};

export default WidgetPreviewBox;
