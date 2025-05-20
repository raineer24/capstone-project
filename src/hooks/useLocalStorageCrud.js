// src/hooks/useLocalStorageCrud.js
import { useEffect, useState } from 'react';

export default function useLocalStorageCrud(key) {
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);

  const create = (data) => {
    const newItem = { ...data, id: Date.now().toString() };
    setItems((prev) => [...prev, newItem]);
  };

  const update = (id, updatedData) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...updatedData } : item)));
  };

  const remove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return { items, create, update, remove };
}