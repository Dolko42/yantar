"use client";
import React from "react";

type ButtonProps = {
  text: string;
  bg?: string;
  color?: string;
  width?: string;
  hover?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  bg = "bg-skin-base",
  color = "text-white",
  width,
  hover,
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
      className={`${bg} ${color} ${width} w-full text-md md:w-auto py-4 px-20 font-medium rounded-md 3xl:text-lg ${hover} transition-colors`}
    >
      {text}
    </button>
  );
};
export default Button;
