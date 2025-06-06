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
}) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        hasError={!!error}
      />
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
};

export default FormGroup;