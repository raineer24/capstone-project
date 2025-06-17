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
    reducers: {

    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const newProduct = action.payload;

      const existingItem = state.items.find(
        item => item.id === newProduct.id && 
                item.selectedVariant === newProduct.selectedVariant
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) +1;
      } else {
        state.items.push({
            ...newProduct,
            quantity: 1
        })
      }

      state.totalItems = state.items.reduce((total, item) =>
        total + (item.quantity || 1), 0
    )
    },

    removeFromCart: (state, action: PayloadAction<{id: number; variant: string}>) => {
        const { id, variant } =action.payload;

        state.items = state.items.filter(
            item => !(item.id === id && item.selectedVariant === variant)
        )

        state.totalItems = state.items.reduce((total, item) =>
            total + (item.quantity || 1), 0
        )
    },

    updateQuantity: (state, action: PayloadAction<{
        id: number;
        variant: string;
        quantity: number;
    }>) => {
        const { id, variant, quantity} = action.payload;

        const item = state.items.find(
            item => item.id === id && item.selectedVariant === variant
        );

        if(item) {
            if (quantity <= 0) {

                 state.items = state.items.filter(
            cartItem => !(cartItem.id === id && cartItem.selectedVariant === variant)
        )
            } else {
               
            item.quantity = quantity
   
            }
            // recalculate total items
         state.totalItems = state.items.reduce((total, cartItem) =>
            total + (cartItem.quantity || 1), 0
        )
        } 

         
    },
     clearCart: (state) => {
        state.items = [];
        state.totalItems = 0;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading =action.payload
    }

    }



   
});

export const CartActions = cartSlice.actions;

export default cartSlice.reducer;

