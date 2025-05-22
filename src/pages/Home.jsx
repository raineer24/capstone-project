import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorageCrud from "../hooks/useLocalStorageCrud";
import { toast } from "react-toastify";

const Home = () => {
  const { items, deleteItem } = useLocalStorageCrud();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteItem(id);
    }
  };

  const userList = useMemo(
    () =>
      items.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
          <button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      )),
    [items]
  );

  return (
    <div className="max-w-4xl mx-auto mt-8">
       <h1 className="text-3xl mb-4">User Dashboard</h1>
      <Link to="/create" className="bg-green-500 text-white px-4 mb-4 inline-block">Add New User</Link>
      <ul>{userList}</ul>
      <table className="w-ful border-collapse mt-4">
        <thead>
          <tr>
            <th className="border p-2">Id</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user) => (
               <tr key={user.id}>
            <td className="border p-2">{user.id}</td>
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2">{user.role}</td>
            <td className="border text-center space-x-2">
              <Link to={`/edit/${user.id}`} className="text-blue-500">Edit</Link>
              <button onClick={() => handleDelete(user.id)} className="text-red-500">Delete</button>
            </td>
          </tr>
            ))}
         
        </tbody>
      </table>
    </div>
  );
};

export default Home;
