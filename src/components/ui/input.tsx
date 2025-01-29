// components/ui/input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`px-3 py-2 w-full border border-lavender-400 rounded-lg outline-none focus:ring-2 focus:ring-lavender-600 focus:border-lavender-600 transition duration-300 bg-lavender-50 text-lavender-900 placeholder-lavender-400 ${className || ""}`}
      {...props}
    />
  );
};
