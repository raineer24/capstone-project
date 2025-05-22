import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorageCrud from '../hooks/useLocalStorageCrud';
import UserForm from '../components/UserForm';
import { toast } from 'react-toastify';

const CreateUser = (data) => {
  const navigate = useNavigate();
  const { createItem } = useLocalStorageCrud();

  const handleCreate = (data) => {
    createItem(data);
    navigate('/')
  };

  return (
    <div className='max-md mx-auto mt-8'>
      <h2 className='text-2xl mb-4'>Create User</h2>
      <UserForm onSubmit={handleCreate}/>
    </div>
  );
};

export default CreateUser;
