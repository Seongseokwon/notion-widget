import clsx from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  const classNames = clsx(
    `
    p-8 flex h-full
  `,
    className
  );
  return <main className={classNames}>{children}</main>;
};

export default Container;
