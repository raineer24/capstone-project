// src/App.jsx
import React from 'react';
import AppRouter from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;