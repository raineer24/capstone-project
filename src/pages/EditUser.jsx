import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import UserForm from "../components/organisms/UserForm";

export const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Simulate fetching user data - replace with real API call later
    const mockUser = { name: "John Doe", email: "john15@gmail.com" };
    setFormData(mockUser);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.email = "Name is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Please enter a valid email";
    }

    return newErrors;
  };

  const handleSubmit = (data) => {
    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate API call - replace this with real API call later
    console.log("Updating user:", data);

    // Redirect to home page
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <PageLayout title="Update User">
      <div className="bg-white rounded-lg shadow p-6">
        <UserForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          errors={errors}
          submitText="Update User"
          showCancel={true}
          onCancel={handleCancel}
        />
      </div>
    </PageLayout>
  );
};

export default EditUser;
