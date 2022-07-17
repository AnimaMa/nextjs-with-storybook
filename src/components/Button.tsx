import React from "react";

export interface ButtonProps {
  label: string;
  size: "sm" | "md" | "lg";
  bgColor: string;
}

export const ButtonSpace = (size: string) => {
  if (size === "sm") {
    return "4px";
  } else if (size === "md") {
    return "8px";
  } else if (size === "lg") {
    return "16px";
  }
};
export const Button = (props: ButtonProps) => {
  const { label, bgColor, size } = props;
  const style = {
    backgroundColor: bgColor,
    border: "none",
    padding: ButtonSpace(size),
  };

  return (
    <>
      <button style={style}>{label}</button>
    </>
  );
};

export default Button;
