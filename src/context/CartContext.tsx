import { createContext, useState, ReactNode } from "react";
import { CartProduct, CartContextType } from "../types";

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct): void => {
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
