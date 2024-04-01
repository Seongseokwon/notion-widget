import Container from "@/components/Container";
import { ReactNode } from "react";

interface WidgetLayoutProps {
  children: ReactNode;
}

const WidgetLayout = ({ children }: WidgetLayoutProps) => {
  return <>{children}</>;
};

export default WidgetLayout;
