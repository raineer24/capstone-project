import { useCallback } from "react";
import { useAppDispatch, useAppSelector  } from "./";
import { cartActions } from "../store/slices/cartSlice";
import { CartProduct } from "../types";

export const useReduxCart = () => {
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state) => state.cart);

  const addToCart = useCallback(
    (product: CartProduct) => {
      dispatch(cartActions.addToCart(product));
    },
    [dispatch]
  );

  const removeFromCart = useCallback(
    (id: number, variant: string) => {
      dispatch(cartActions.removeFromCart({id, variant}));
    },
    [dispatch]
  );

  const updateQuantity = useCallback(
    (id: number, variant: string, quantity: number) => {
      dispatch(cartActions.updateQuantity({id, variant, quantity}));
    },
    [dispatch]
  );

  

  const clearCart = useCallback(() => {
    dispatch(cartActions.clearCart());
  }, [dispatch]);

  const getCartTotal = useCallback(() => {
    return cartState.items.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  }, [cartState.items]);

  const getItemCount = useCallback(
    (id: number, variant: string) => {
      const item = cartState.items.find(
        (item) => item.id === id && item.selectedVariant === variant
      );

      return item?.quantity || 0;
    },
    [cartState.items]
  );

  return {
   // State
   cartItems: cartState.items,
   totalItems: cartState.totalItems,
   isLoading: cartState.isLoading,

   //Actions

   addToCart,
   removeFromCart,
   updateQuantity,
   clearCart,

   //Utilities
   getCartTotal,
   getItemCount
  }
};
