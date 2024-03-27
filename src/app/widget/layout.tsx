import Container from "@/components/Container";
import { ReactNode } from "react";

interface WidgetLayoutProps {
  children: ReactNode;
}

const WidgetLayout = ({ children }: WidgetLayoutProps) => {
  return <Container>{children}</Container>;
};

export default WidgetLayout;
