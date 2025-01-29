// components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium text-gray-100 bg-lavender-600 hover:bg-lavender-700 transition duration-300 shadow-md shadow-lavender-300 ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
