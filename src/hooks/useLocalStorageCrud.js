import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'

const STORAGE_KEY= 'users';

export const useLocalStorageCrud = () => {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Failed to load localStorage:', error);
      return [];
    }
  });

  // Sync with localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // CREATE
  const createItem = (item) => {
    const newItem = { id: uuidv4(), ...item };
    setItems((prev) => [...prev, newItem]);
    toast.success('User created successfully!');
  };

 
  // UPDATE
  const updateItem = (updateItem) => {
    setItems((prev) =>
      prev.map((item) => 
        item.id === updatedItem.id ? updatedItem : item
  )
    );
    toast.info('User updated successfully!');
  };

  // DELETE
  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    toast.warning('User deleted successfully!');
  };

   // READ (optional, but could be used for direct lookup)
  const getItemById = (id) => {
    return items.find((item) => item.id === id);
  };


  return {
    items,
    createItem,
    updateItem,
    deleteItem,
    getItemById
  };
};

export default useLocalStorageCrud;
