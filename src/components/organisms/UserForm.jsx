// src/components/organisms/UserForm.jsx
import React from 'react';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';

const UserForm = ({ 
  formData, 
  onChange, 
  onSubmit, 
  errors = {},
  submitText = 'Submit',
  showCancel = false,
  onCancel
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormGroup
          label="Name"
          name="name"
          value={formData.name || ''}
          onChange={onChange}
          placeholder="Enter your name"
          required
          error={errors.name}
        />
        
        <FormGroup
          label="Email"
          name="email"
          type="email"
          value={formData.email || ''}
          onChange={onChange}
          placeholder="Enter your email"
          required
          error={errors.email}
        />
        
        <div className="flex gap-3 pt-4">
          <Button type="submit">
            {submitText}
          </Button>
          
          {showCancel && (
            <Button 
              type="button" 
              variant="secondary" 
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;