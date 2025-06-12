// src/components/atoms/Input.tsx
import { ChangeEvent } from "react";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  name?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  hasError?: boolean;
}

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  hasError = false,
  id,
  disabled = false,
  className = "",
}: InputProps) => {
  const baseStyle =
    "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors";
  const errorStyle = hasError
    ? "border-red-500 focus:ring-red-200 text-red-900"
    : "border-gray-300 focus:ring-blue-200 focus:border-blue-500";

  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed bg-gray-50"
    : "";
  const inputClassName = `${baseStyle} ${errorStyle} ${disabledStyle} ${className}`;

  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      className={inputClassName}
      disabled={disabled}
     
    />
  );
};

export default Input;
