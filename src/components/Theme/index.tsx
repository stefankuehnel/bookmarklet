import styles from "./Theme.module.css" with { type: "text" };

import type React from "react";

export type ThemeProps = {
  children?: React.ReactNode;
};

export const Theme = ({ children }: ThemeProps) => {
  return (
    <>
      <style>{styles}</style>
      {children}
    </>
  );
};
