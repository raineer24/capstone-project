import React from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { complexUserSchema } from "../utils/validation";
import { useFormReducer } from "../hooks/useFormReducer";
import { toast } from "react-toastify";

const ComplexUserForm = ({ onSubmit, initialValues }) => {
  const { state, updateField } = useFormReducer(initialValues || undefined);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(complexUserSchema),
    mode: "onBlur",
    defaultValues: initialValues || undefined,
  });

  const submitHandler = (data) => {
    try {
      // Validate again just in case
      complexUserSchema.parse(state);
      onSubmit(data);
      toast.success("User saved successfully");
    } catch (error) {
      toast.error("Validation failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
      {/* Personal Info */}
      <div className="border p-4 rounded space-y-4">
        <h3 className="font-bold">Personal Info</h3>
        <div>
          <label>Name:</label>
          <input
            value={state.personalInfo.name}
            onChange={(e) =>
              updateField("personalInfo", "name", e.target.value)
            }
            className="w-full border p-2"
          />
          {errors?.personalInfo?.name && (
            <p className="text-red-500">{errors.personalInfo.name.message}</p>
          )}
        </div>

        <div>
          <label>Email:</label>
          <input
            value={state.personalInfo.email}
            onChange={(e) =>
              updateField("personalInfo", "email", e.target.value)
            }
            className="w-full border p-2"
          />
          {errors?.personalInfo?.email && (
            <p className="text-red-500">{errors.personalInfo.name.email}</p>
          )}
        </div>
      </div>
      {/* Role Info */}
      <div className="border p-4 rounded space-y-4">
        <h3 className="font-bold">Role Info</h3>

        <div>
          <label>Role:</label>
          <input
            value={state.roleDetails.role}
            onChange={(e) => updateField("roleDetails", "role", e.target.value)}
            className="w-full border p-2"
          />
          {errors?.roleDetails?.role && (
            <p className="text-red-500">{errors.roleDetails.role.message}</p>
          )}
        </div>

        <div>
          <label>Permissions:</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {['read','write', 'delete'].map((perm) =>(
            <label key={perm} className="inline-flex items-center" >
              <input
                type="checkbox"
                checked={state.roleDetails.permissions.includes(perm)}
                onChange={() => {
                  const updated = state.roleDetails.permissions.includes(perm)
                    ? state.roleDetails.permissions.filter((p) => p !== perm)
                    : [...state.roleDetails.permissions, perm];
                  updateField("roleDetails", "permissions", updated);
                }}
                className="mr-2"
              />
              {perm}
            </label>
            ))}
          </div>

          {errors?.roleDetails?.permissions && (
            <p className="text-red-500">{errors.roleDetails.permissions.message}</p>
          )}
        </div>
      </div>

      {/* ADDRESS */}
      <div className="border p-4 rounded space-y-4">
        <h3 className="font-bold">Address</h3>
        <div>
          <label>Street:</label>
          <input
            value={state.address.street}
            onChange={(e) => updateField("address", "street", e.target.value)}
            className="w-full border p-2"
          />
          {errors?.address?.street && (
            <p className="text-red-500">{errors.address.street.message}</p>
          )}
        </div>

        <div>
          <label>City:</label>
          <input
            value={state.address.city}
            onChange={(e) => updateField("address", "city", e.target.value)}
            className="w-full border p-2"
          />
          {errors?.address?.city && (
            <p className="text-red-500">{errors.address.city.message}</p>
          )}
        </div>

        <div>
          <label>Country:</label>
          <input
            value={state.address.country}
            onChange={(e) => updateField("address", "country", e.target.value)}
            className="w-full border p-2"
          />
          {errors?.address?.country && (
            <p className="text-red-500">{errors.address.country.message}</p>
          )}
        </div>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rouded">Submit</button>
    </form>
  );
};

export default React.memo(ComplexUserForm);
