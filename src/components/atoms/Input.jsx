const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  hasError = false,
  disabled = false,
}) => {
  const baseStyle = "w-full px-3 py-2 border-rounded ";

  const errorStyle = hasError
    ? "border-red-500 focus:ring-red-200"
    : "border-gray-300 focus:ring-blue-200";

  const className = `${baseStyle} ${errorStyle}`;

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
     {...props}
    />
  );
};

export default Input;
