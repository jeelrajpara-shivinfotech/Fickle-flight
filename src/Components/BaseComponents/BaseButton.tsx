import React from "react";

type BaseButtonProps = {
  text?: string;
  textColor?: string;
  bgColor?: string;
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const BaseButton: React.FC<BaseButtonProps> = ({
  text,
  textColor,
  bgColor,
  width,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${width}
        ${bgColor}
        ${textColor}
        py-3 
        rounded-sm
        font-medium 
        transition 
        duration-200
        disabled:opacity-50 
        disabled:cursor-not-allowed
        cursor-pointer
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default BaseButton;
