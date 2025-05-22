import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { complexUserSchema } from '../utils/validation';
import { useFormReducer } from '../hooks/useFormReducer';
import { toast } from 'react-toastify';

export const ComplexUserForm = React.memo(({ onSubmit, initialValues }) => {
  // Setup react-hook-form
  const methods = useForm({
    resolver: zodResolver(complexUserSchema),
    defaultValues: initialValues || {
      personalInfo: { name: '', email: '' },
      roleDetails: { role: '', permissions: [] },
      address: { street: '', city: '', country: '' }
    }
  });

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset
  } = methods;

  // Setup reducer
  const { state, updateField } = useFormReducer(initialValues);

  // Reset form when initialValues change (Edit User)
  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  // Watch all form values and sync them into reducer
  const formValues = watch();

  useEffect(() => {
    updateField('personalInfo', 'name', formValues.personalInfo?.name || '');
    updateField('personalInfo', 'email', formValues.personalInfo?.email || '');
    updateField('roleDetails', 'role', formValues.roleDetails?.role || '');
    updateField('roleDetails', 'permissions', formValues.roleDetails?.permissions || []);
    updateField('address', 'street', formValues.address?.street || '');
    updateField('address', 'city', formValues.address?.city || '');
    updateField('address', 'country', formValues.address?.country || '');
  }, [formValues, updateField]);

  // Submit handler
  const submitHandler = (data) => {
    try {
      complexUserSchema.parse(data);
      onSubmit(data);
      toast.success('User saved successfully!');
    } catch (err) {
      toast.error('Validation failed');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
        {/* Personal Info */}
        <div className="border p-4 rounded space-y-4">
          <h3 className="font-bold">Personal Info</h3>
          <div>
            <label>Name:</label>
            <input
              {...register("personalInfo.name")}
              placeholder="Name"
              className="w-full border p-2"
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              {...register("personalInfo.email")}
              placeholder="Email"
              className="w-full border p-2"
            />
          </div>
        </div>

        {/* Role Info */}
        <div className="border p-4 rounded space-y-4">
          <h3 className="font-bold">Role Info</h3>
          <div>
            <label>Role:</label>
            <input
              {...register("roleDetails.role")}
              placeholder="Role"
              className="w-full border p-2"
            />
          </div>

          <div>
            <label>Permissions:</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {['read', 'write', 'delete'].map((perm) => (
                <label key={perm} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={perm}
                    checked={state.roleDetails.permissions.includes(perm)}
                    onChange={(e) => {
                      const updated = e.target.checked
                        ? [...state.roleDetails.permissions, perm]
                        : state.roleDetails.permissions.filter(p => p !== perm);
                      setValue('roleDetails.permissions', updated, { shouldValidate: true });
                      updateField('roleDetails', 'permissions', updated);
                    }}
                    className="mr-2"
                  />
                  {perm}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Address Info */}
        <div className="border p-4 rounded space-y-4">
          <h3 className="font-bold">Address</h3>
          <div>
            <label>Street:</label>
            <input
              {...register("address.street")}
              placeholder="Street"
              className="w-full border p-2"
            />
          </div>
          <div>
            <label>City:</label>
            <input
              {...register("address.city")}
              placeholder="City"
              className="w-full border p-2"
            />
          </div>
          <div>
            <label>Country:</label>
            <input
              {...register("address.country")}
              placeholder="Country"
              className="w-full border p-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </FormProvider>
  );
});