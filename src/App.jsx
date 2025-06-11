// src/App.jsx
import React from "react";
import AppRouter from "./routes/AppRouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
};

export default App;