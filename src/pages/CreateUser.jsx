// src/pages/CreateUser.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserForm from '../components/UserForm';
import useLocalStorageCrud from '../hooks/useLocalStorageCrud';
import { userSchema } from '../utils/validation';

const CreateUser = () => {
  const { create } = useLocalStorageCrud('users');
  const [form, setForm] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = userSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    create(form);
    toast.success('User created');
    navigate('/');
  };

  return <UserForm form={form} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />;
};

export default CreateUser;