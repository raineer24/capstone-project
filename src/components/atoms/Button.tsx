// src/components/atoms/Button.jsx
import {ReactNode, MouseEvent} from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({ 
  children, 
  type = 'button', 
  onClick, 
  variant = 'primary',
  disabled = false,
  className = ''
}: ButtonProps) => {
  const baseStyle = "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500"
  };
  
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const classes = `${baseStyle} ${variants[variant]} ${disabledStyle} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;