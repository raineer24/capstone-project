import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../utils/validation";
import * as z from "zod";
import { toast } from "react-toastify";

const UserForm = React.memo(({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(userSchema),
  });

  const submitHandler = (data) => {
    console.log('data', data)
    onSubmit(data);
  };

  return (
    
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
      <div>
        <label>Name:</label>
        <input
          placeholder="Name"
          {...register("name")}
          className="border w-full p-2"
        />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label >Email</label>
        <input
          placeholder="Email"
          {...register("email")}
          className="border w-full p-2"
        />
        {errors.email && (
          <small style={{ color: "red" }}>{errors.email.message}</small>
        )}
      </div>

      <div>
        <label>Role</label>
        <input
          placeholder="Role"
          {...register("role")}
          className="border w-full p-2"
        />
        {errors.role && (
          <small style={{ color: "red" }}>{errors.role.message}</small>
        )}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
    
  );
});

export default UserForm;
