import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorageCrud from '../hooks/useLocalStorageCrud';
import UserForm from '../components/UserForm';
import { toast } from 'react-toastify';

const CreateUser = () => {
  const navigate = useNavigate();
  const { addItem } = useLocalStorageCrud('users');

  const handleSubmit = (data) => {
    addItem(data);
    toast.success('User created!');
    navigate('/');
  };

  return (
    <div>
      <h2>Create User</h2>
      <UserForm defaultValues={{ name: '', email: '' }} onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateUser;
