
// src/components/molecules/FormGroup.jsx
import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';


const FormGroup = ({
    label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder,
  required = false,
  error 

}) => (
  <div className="mb-4">
    <Label htmlFor={name} required={required}>
      {label}
    </Label>
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      hasError={!!error}
    />
    {error && (
      <span className="text-red-500 text-sm mt-1 block">{error}</span>
    )}
  </div>
);

export default FormGroup;