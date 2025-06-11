// src/routes/AppRouter.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


// Lazy-loaded pages
import Home from "../pages/Home";
import CreateUser from '../pages/CreateUser';
import EditUser from "../pages/EditUser"
import Product from '../pages/Product';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
      <Route path="/product" element={<Product/>} />
    </Routes>
  </Router>
);

export default AppRouter;
