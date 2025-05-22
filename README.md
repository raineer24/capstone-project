# React CRUD Dashboard App with LocalStorage & Routing

A simple yet powerful **CRUD dashboard app** built with **React**, using:
- `localStorage` for data persistence
- `react-router-dom` for navigation
- `react-hook-form` + `zod` for form validation
- `react-toastify` for user feedback
- `React.memo`, `useMemo` for performance optimization
- A custom hook: `useLocalStorageCrud`
- And in-progress: a **complex nested form using `useReducer`**

---

## 🎯 Goal

Build a reusable, scalable React CRUD application that demonstrates modern React patterns including:
- Form handling with validation
- Data persistence with localStorage
- Client-side routing
- Performance optimization
- Complex state management with `useReducer`

---

## 🛠️ Tech Stack

| Tool/Package             | Purpose |
|--------------------------|---------|
| React (Vite setup)       | Frontend framework |
| react-router-dom         | Client-side routing |
| react-hook-form + zod    | Form validation |
| react-toastify           | Toast notifications |
| localStorage             | Data persistence |
| React.memo / useMemo     | Performance optimization |
| useReducer               | In Progress – managing complex/nested form state |

---

## 📁 Folder Structure
src/
├── components/ # Reusable UI components
│ ├── UserForm.jsx # Simple form component
│ └── ComplexUserForm.jsx # [In Progress] Nested form using useReducer
├── hooks/
│ ├── useLocalStorageCrud.js # CRUD logic with localStorage
│ └── useFormReducer.js # [In Progress] Custom hook for managing complex state
├── pages/
│ ├── Home.jsx # List all users
│ ├── CreateUser.jsx # Create new user
│ └── EditUser.jsx # Edit user by ID
├── routes/
│ └── AppRouter.jsx # Route definitions
├── utils/
│ └── validation.js # Zod schemas for validation
├── App.jsx # Main App component
└── main.jsx # Entry point


---

## 🔧 Features Implemented

✅ Full CRUD operations  
✅ Form validation with `react-hook-form` and `zod`  
✅ Routing via `react-router-dom`  
✅ Toast notifications with `react-toastify`  
✅ Optimized re-renders using `React.memo` and `useMemo`  
✅ Shared form component (`UserForm`)  
✅ Error handling (e.g., "User not found")  
✅ Working with localStorage for data persistence  

---

## 🚧 Current Work in Progress

🛠️ You are currently building:

- ✅ A **complex form using `useReducer`**
- ✅ Integration with existing `useLocalStorageCrud` hook
- ✅ Nested form state for fields like:
  - Personal Info
  - Role Details (with permissions)
  - Address

---

## 🚀 How to Run This Project

1. **Clone the repo:**

```bash
git clone https://github.com/raineer24/capstone-project.git 
cd capstone-project

Install dependencies:
bash


1
npm install
Start development server:
bash


1
npm run dev
Open http://localhost:5173 in your browser.

📝 Future Improvements (Planned)
UI/UX Enhancements
Add Tailwind or ShadCN styling
Animated transitions with framer-motion
Advanced State Management
Global state with Zustand or Context API
Persisting form state across sessions
Data Enhancements
Search/filter functionality
Pagination or virtual scroll
Testing & Quality
ESLint + Prettier setup
Unit tests with Vitest/Jest