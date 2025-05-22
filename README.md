React CRUD Dashboard App with LocalStorage & Routing
A simple yet powerful CRUD dashboard app built with React , using:

localStorage for data persistence
react-router-dom for navigation
react-hook-form + zod for form validation
react-toastify for user feedback
React.memo, useMemo, and useReducer for performance and complex state management
Custom hooks: useLocalStorageCrud and useFormReducer
Error boundaries for graceful error handling
🎯 Goal
Build a reusable, scalable React CRUD application that demonstrates modern React patterns including:

Form handling with validation
Data persistence with localStorage
Client-side routing
Performance optimization (React.memo, useMemo)
Complex/nested state management with useReducer
Graceful error handling with Error Boundaries
🛠️ Tech Stack
React (Vite setup)
Frontend framework
react-router-dom
Client-side routing
react-hook-form + zod
Form validation
react-toastify
Toast notifications
localStorage
Data persistence
React.memo / useMemo
Performance optimization
useReducer
Managing complex/nested form state
ErrorBoundary
Handling runtime errors gracefully

📁 Folder Structure


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
src/
├── components/
│   ├── UserForm.jsx            # Simple form component
│   ├── ComplexUserForm.jsx     # Nested form using useReducer
│   └── ErrorBoundary.jsx       # Catches unexpected errors in UI
├── hooks/
│   ├── useLocalStorageCrud.js  # CRUD logic with localStorage
│   └── useFormReducer.js       # Custom hook for managing nested state
├── pages/
│   ├── Home.jsx                # List all users
│   ├── CreateUser.jsx          # Create new user
│   └── EditUser.jsx            # Edit user by ID
├── routes/
│   └── AppRouter.jsx           # Route definitions
├── utils/
│   └── validation.js           # Zod schemas for validation
├── App.jsx                     # Main App component with Error Boundary
└── main.jsx                    # Entry point
🔧 Features Implemented
✅ Full CRUD operations
✅ Form validation with react-hook-form and zod
✅ Routing via react-router-dom
✅ Toast notifications with react-toastify
✅ Optimized re-renders using React.memo and useMemo
✅ Shared form component (UserForm)
✅ Error handling using React Error Boundaries
✅ Nested form state managed via useReducer
✅ Works for both create and edit flows
✅ Table displays correctly from nested data structure