// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider} from 'react-redux';
import { store} from './store';
console.log('Store:', store); //
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
    <Provider store={store}>
    <App />
    <ToastContainer /> 
    </Provider>
  </React.StrictMode>
);
