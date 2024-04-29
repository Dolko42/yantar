import React from "react";

type InputProps = {
  placeholder?: string;
  height?: string;
};

const Input: React.FC<InputProps> = ({ placeholder, height }) => {
  const textareaStyle: React.CSSProperties = {
    height: height,
    resize: "none",
  };
  return (
    <textarea
      placeholder={placeholder}
      style={textareaStyle}
      className={`bg-white border-b-2 w-full border-skin-base text-skin-base p-2 focus:border-skin-base outline-none`}
    />
  );
};
export default Input;
