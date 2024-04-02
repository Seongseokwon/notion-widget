"use client";
import clsx from "clsx";

interface WidgetPreviewBoxProps {
  isLoading: boolean;
  selectItem: (item?: any) => void;
  isSelected?: boolean;
  widget: Record<string, any>;
}

const WidgetPreviewBox = ({
  isSelected,
  isLoading,
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
        rounded-md
        cursor-pointer
        overflow-x-clip
        transition
    `,
        isSelected ? "border-2 border-green-400" : "border border-gray-100 ",
        isLoading ? "animate-pulse bg-gray-200" : ""
      )}
      onClick={() => selectItem(widget)}
    >
      {isLoading ? "" : widget.id}
    </div>
  );
};

export default WidgetPreviewBox;
