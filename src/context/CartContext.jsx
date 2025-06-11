import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart", product);
    setCartItems((previousItems) => [...previousItems, product]);

    setTimeout(() => {
      alert(`${product.name} (${product.selectedVariant}) added to cart!`);
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.length;
  };

  const contextValue = {
    cartItems,
    addToCart,
    getCartCount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
