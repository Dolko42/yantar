import React, { ChangeEvent } from "react";

type InputProps = {
  placeholder?: string;
  height?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  height,
  value,
  onChange,
}) => {
  const textareaStyle: React.CSSProperties = {
    height: height,
    resize: "none",
  };

  return (
    <textarea
      placeholder={placeholder}
      style={textareaStyle}
      className={`bg-white border-b-2 w-full border-skin-base text-skin-base p-2 focus:border-skin-base outline-none`}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
