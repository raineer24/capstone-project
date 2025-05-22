import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../utils/validation";
import * as z from 'zod'
import { toast } from 'react-toastify'

const UserForm = React.memo(({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(userSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("name")} />
      {errors.name && (
        <small style={{ color: "red" }}>{errors.name.message}</small>
      )}

      <input placeholder="Email" {...register("email")} />
      {errors.email && <small style={{ color: "red" }}>{errors.email.message}</small>}

      <button type="submit">Submit</button>
    </form>
  );
});

export default UserForm;
