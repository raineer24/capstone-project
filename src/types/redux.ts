import { CartProduct } from './product';

export interface CartState {
    items: CartProduct[];
    totalItems: number;
    isLoading: boolean;
}

export interface AddToCartPayload {
    product: CartProduct;
}

export interface RemoveFromCartPayload {
    productId: number;
    variant: string;
  
}

export interface UpdateQuantityPayload {
    productId: number;
    variant: string;
    quantity: number;
}

export interface RootState {
    cart: CartState;
}


