const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const baseStyle = "px-4 py-2 rounded font-medium transition-colors";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  const className = `${baseStyle} ${variants[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return <button 
  type={type}
  className={className}
  onClick={onClick}
  disabled={disabled}
  >{children}</button>;
};

export default Button;
