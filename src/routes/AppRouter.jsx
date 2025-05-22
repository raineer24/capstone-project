// src/routes/AppRouter.jsx
import React from 'react';
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import CreateUser from '../pages/CreateUser';
import EditUser from '../pages/EditUser';
import Dashboard from '../pages/Dashboard';

const AppRouter = () => (
 <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
 </BrowserRouter>
   

);

export default AppRouter;