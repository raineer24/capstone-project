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
  const { items, updateItem } = useLocalStorageCrud("users");
  const user = items.find((u) => u.id === id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user,
    resolver: zodResolver(userSchema),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const result = userSchema.safeParse(form);
  //   if (!result.success) {
  //     const fieldErrors = {};
  //     result.error.errors.forEach((err) => {
  //       fieldErrors[err.path[0]] = err.message;
  //     });
  //     setErrors(fieldErrors);
  //     return;
  //   }

  //   update(id, form);
  //   toast.success('User updated');
  //   navigate('/');
  // };

  const onSubmit = (data) => {
    updateItem(id, data);
    navigate("/");
  };

  if (!user) return <p>User not found</p>;

return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register('email')} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Update User</button>
    </form>
  );
};

export default EditUser;
