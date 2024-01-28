import React, { FC } from "react";

interface TestProps {
  children: React.ReactNode;
}

export const Test: FC<TestProps> = ({ children }) => {
  return <div>{children}</div>;
};
