import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, CartState } from "../../types";

const initialState: CartState = {
    items: [],
    totalItems: 0,
    isLoading: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {}

    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const newProduct = action.payload;
      const existingItem = state.items.find(
        item => item.id === newProduct.id && 
                item.selectedVariant === newProduct.selectedVariant
      );
      if (existingItem) {

      } else {
        state.items.push({
            ...newProduct,
            quantity: 1
        })
      }
    }

   
})

