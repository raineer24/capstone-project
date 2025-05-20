// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorageCrud from '../hooks/useLocalStorageCrud';
import { toast } from 'react-toastify';

const Home = () => {
  const { items: users, remove } = useLocalStorageCrud('users');

  const handleDelete = (id) => {
    remove(id);
    toast.success('User deleted');
  };

  return (
    <div>
      <h2>Users</h2>
      <Link to="/create">
        <button>Create New User</button>
      </Link>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '1rem' }}>
            <div>{user.name} ({user.email})</div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link to={`/edit/${user.id}`}><button>Edit</button></Link>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;