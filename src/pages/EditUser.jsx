// src/pages/EditUser.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import UserForm from "../components/UserForm";
import useLocalStorageCrud from "../hooks/useLocalStorageCrud";
import { userSchema } from "../utils/validation";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getItemById, updateItem } = useLocalStorageCrud();
  const user = getItemById(id);

  if (!user) {
    toast.error("User not found!");
    navigate("/");
  }

  const handleUpdate = (data) => {
    console.log("Form Data:", data);
    updateItem({
      id,
      name: data.name,
      email: data.email,
      role: data.role,
    });
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-2xl">Edit User</h1>
      <UserForm onSubmit={handleUpdate} defaultValues={user} />
    </div>
  );
};

export default EditUser;
