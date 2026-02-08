import React, { InputHTMLAttributes, ReactNode } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  onIconClick?: () => void;
  wrapperClassName?: string;
}

export default function InputField({
  icon,
  onIconClick,
  wrapperClassName = "",
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <div className={`relative flex items-center ${wrapperClassName}`}>
      <input
        className={`w-full bg-gray-900 border border-gray-800 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block p-2.5 pr-10 transition-colors ${className}`}
        {...props}
      />
      {icon && (
        <div
          className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
            onIconClick ? "cursor-pointer" : ""
          }`}
          onClick={onIconClick}
        >
          {icon}
        </div>
      )}
    </div>
  );
}
