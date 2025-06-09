// src/components/atoms/Input.jsx
import React from 'react';

const Input = ({ 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder,
  hasError = false,
  id,
  ...props 
}) => {
  const baseStyle = "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors";
  const errorStyle = hasError 
    ? "border-red-500 focus:ring-red-200 text-red-900" 
    : "border-gray-300 focus:ring-blue-200 focus:border-blue-500";
  
  const className = `${baseStyle} ${errorStyle}`;

  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value || ''}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};

export default Input;