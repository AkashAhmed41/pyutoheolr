import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 text-sm font-semibold rounded transition-all duration-200 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-xl",
    secondary:
      "bg-gray-600/80 text-white hover:bg-gray-500 backdrop-blur-sm font-semibold hover:ring-1 hover:ring-white/50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
}
