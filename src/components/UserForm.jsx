// src/components/UserForm.jsx
import React from 'react';

const UserForm = ({ form, onChange, onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <input
      name="name"
      value={form.name}
      onChange={onChange}
      placeholder="Name"
      required
    />
    {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}

    <input
      name="email"
      value={form.email}
      onChange={onChange}
      placeholder="Email"
      required
    />
    {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}

    <button type="submit">Submit</button>
  </form>
);

export default UserForm;