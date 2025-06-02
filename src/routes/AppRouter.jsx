// src/routes/AppRouter.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";

// Lazy-loaded pages
const Home = React.lazy(() => import("../pages/Home"));
const CreateUser = React.lazy(() => import("../pages/CreateUser"));
const EditUser = React.lazy(() => import("../pages/EditUser"));

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Spinner />}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="/create"
        element={
          <React.Suspense fallback={<Spinner />}>
            <CreateUser />
          </React.Suspense>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <React.Suspense fallback={<Spinner />}>
            <EditUser />
          </React.Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
