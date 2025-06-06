// src/routes/AppRouter.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";

// Lazy-loaded pages
const Home = React.lazy(() => import("../pages/Home"));
const CreateUser = React.lazy(() => import("../pages/CreateUser"));
const EditUser = React.lazy(() => import("../pages/EditUser"));

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<CreateUser />} />
    <Route path="/edit/:id" element={<EditUser />} />
  </Routes>
);

export default AppRouter;
