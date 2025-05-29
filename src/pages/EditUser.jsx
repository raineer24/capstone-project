import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ComplexUserForm } from '../components/ComplexUserForm';
import { useLocalStorageCrud } from '../hooks/useLocalStorageCrud';
//import TestError from '../components/TestError';


export const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getItemById, updateItem } = useLocalStorageCrud();

  // Get user data from localStorage
  const user = getItemById(id);

  if (!user) {
    // Handle "User not found"
    return (
      <div className="text-red-500 text-center p-4">
        User not found!
      </div>
    );
  }

  // Transform flat object (if needed) into nested format
  const initialValues = {
    personalInfo: {
      name: user.personalInfo?.name || user.name || '',
      email: user.personalInfo?.email || user.email || ''
    },
    roleDetails: {
      role: user.roleDetails?.role || user.role || '',
      permissions: user.roleDetails?.permissions || user.permissions || []
    },
    address: {
      street: user.address?.street || user.street || '',
      city: user.address?.city || user.city || '',
      country: user.address?.country || user.country || ''
    }
  };

  const handleUpdate = (formData) => {
    // Update user with full nested structure
    updateItem({ ...formData, id });
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>
 
      <ComplexUserForm onSubmit={handleUpdate} initialValues={initialValues} />
    </div>
  );
};
export default EditUser;
