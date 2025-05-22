import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorageCrud from '../hooks/useLocalStorageCrud';
import { toast } from 'react-toastify';

const Home = () => {
  const { items, deleteItem } = useLocalStorageCrud('users');
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteItem(id);
    toast.success('User deleted');
  };

  const userList = useMemo(() => (
    items.map(user => (
      <li key={user.id}>
        {user.name} - {user.email}
        <button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
        <button onClick={() => handleDelete(user.id)}>Delete</button>
      </li>
    ))
  ), [items]);

  return (
    
    <div>
      <div className="p-6 bg-green-500 text-white">Tailwind Works!</div>
      <h2>User List</h2>
      <Link to="/create">Add New User</Link>
      <ul>{userList}</ul>
    </div>
  );
};

export default Home;
