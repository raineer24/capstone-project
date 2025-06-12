import { CartProduct } from "./product";

export interface CartContextType {
    cartItems: CartProduct[];
    addToCart: (product: CartProduct) => void;
    getCartCount: () => number;
}