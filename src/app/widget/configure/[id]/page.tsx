"use client";
import { customAxios } from "@/libs/axios";
import { useWidgetStore } from "@/store/widgetStore";
import { useEffect } from "react";

interface WidgetConfigurePageProps {
  params: {
    id: string;
  };
}

const WidgetConfigurePage = ({ params: { id } }: WidgetConfigurePageProps) => {
  const { configTargetWidget } = useWidgetStore();
  const getWidgetConfigure = async () => {
    try {
      const response = await customAxios.get(`/widget?id=${id}`);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWidgetConfigure();
  }, []);
  return <div>WidgetConfigurePage / {id}</div>;
};

export default WidgetConfigurePage;
