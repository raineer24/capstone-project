// src/pages/EditUser.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserForm from '../components/UserForm';
import useLocalStorageCrud from '../hooks/useLocalStorageCrud';
import { userSchema } from '../utils/validation';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items: users, update } = useLocalStorageCrud('users');
  const [form, setForm] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const existing = users.find((u) => u.id === id);
    if (existing) {
      setForm({ name: existing.name, email: existing.email });
    } else {
      toast.error('User not found');
      navigate('/');
    }
  }, [id, users, navigate]);

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

    update(id, form);
    toast.success('User updated');
    navigate('/');
  };

  return <UserForm form={form} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />;
};

export default EditUser;