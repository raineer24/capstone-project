import { useEffect, useState } from 'react';

const useLocalStorageCrud = (key) => {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load localStorage:', error);
      return [];
    }
  });

  // Sync with localStorage on change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [key, items]);

  // CREATE
  const addItem = (data) => {
    const newItem = { ...data, id: Date.now().toString() };
    setItems((prev) => [...prev, newItem]);
  };

  // READ (optional, but could be used for direct lookup)
  const getItem = (id) => {
    return items.find((item) => item.id === id);
  };

  // UPDATE
  const updateItem = (id, updatedData) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
  };

  // DELETE
  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    items,
    addItem,
    getItem,
    updateItem,
    deleteItem,
  };
};

export default useLocalStorageCrud;
