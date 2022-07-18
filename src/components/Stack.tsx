import React from "react";

export interface StackProps {
  direction?: string;
  spacing?: number;
  children: React.ReactNode;
  wrap?: boolean;
}

export const Stack = (props: StackProps) => {
  const { direction = "row", spacing = "2", wrap = "false", children } = props;
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  };

  return <div style={style}>{children}</div>;
};

export default Stack;
