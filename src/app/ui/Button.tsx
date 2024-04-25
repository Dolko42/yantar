"use client";
import React from "react";

type ButtonProps = {
  text: string;
  bg?: string;
  color?: string;
  width?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  bg = "bg-skin-fill",
  color = "text-white",
  width,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${bg} ${color} w-full text-lg md:w-auto py-3 px-12 font-medium rounded-md 3xl:text-xl`}
    >
      {text}
    </button>
  );
};
export default Button;
