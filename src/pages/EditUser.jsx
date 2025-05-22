// src/pages/EditUser.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import{ ComplexUserForm }from "../components/ComplexUserForm";
import useLocalStorageCrud from "../hooks/useLocalStorageCrud";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getItemById, updateItem } = useLocalStorageCrud();
  const user = getItemById(id);

  //const user = getItemById(id);

// Convert flat object to nested structure
const initialValues = {
  personalInfo: {
    name: user.name,
    email: user.email
  },
  roleDetails: {
    role: user.role || '',
    permissions: user.permissions || []
  },
  address: {
    street: user.street || '',
    city: user.city || '',
    country: user.country || ''
  }
};
  if (!user) {
    toast.error("User not found!");
    navigate("/");
  }

  const handleUpdate = (data) => {
    updateItem({
      ...data,
      id,
    });
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>
      <ComplexUserForm onSubmit={handleUpdate} initialValues={initialValues} />
    </div>
  );
};

export default EditUser;
