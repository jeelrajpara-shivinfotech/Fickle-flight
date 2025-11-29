import React, { type ReactNode } from "react";

type BaseButtonProps = {
  text?: ReactNode;
  textColor?: string;
  bgColor?: string;
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  borderRadius?: string;
};

const BaseButton: React.FC<BaseButtonProps> = ({
  text,
  textColor,
  bgColor,
  width,
  onClick,
  disabled = false,
  borderRadius = "rounded-sm",  
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
        ${borderRadius}
        py-3
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
