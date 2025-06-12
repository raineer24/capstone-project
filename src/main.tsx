// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
// src/main.jsx
import './index.css';
import 'react-toastify/dist/ReactToastify.css'; // <-- Import CSS
import { ToastContainer } from 'react-toastify';

const rootElement = document.getElementById('root');

if(!rootElement) {
  throw new Error('Failed to find root element');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer /> 
  </React.StrictMode>
);
