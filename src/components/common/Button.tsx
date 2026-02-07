import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  href?: string;
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  icon,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 text-sm font-semibold rounded transition-all duration-200 flex items-center gap-2 cursor-pointer";

  const variantStyles = {
    primary:
      "bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
    secondary:
      "bg-gray-600/80 text-white hover:bg-gray-500 backdrop-blur-sm font-semibold hover:scale-105 active:scale-95",
    ghost: "bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {icon && icon}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {icon && icon}
      {children}
    </button>
  );
}
