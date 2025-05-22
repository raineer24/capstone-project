import React from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorageCrud from "../hooks/useLocalStorageCrud";
import  ComplexUserForm  from "../components/ComplexUserForm";

const CreateUser = () => {
  const navigate = useNavigate();
  const { createItem } = useLocalStorageCrud();

  const handleCreate = (data) => {
    console.log(data, "data!");
    createItem(data);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <ComplexUserForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateUser;
