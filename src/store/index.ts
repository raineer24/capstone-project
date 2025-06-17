import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, cartActions } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),

  devTools: process.env.NODE_ENV !== "production",
});
// Export typed dispatch and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;