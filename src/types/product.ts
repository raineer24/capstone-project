export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    variants: string[];
    images: string[];
}

export interface CartProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    variants: string[]
    images: string[];
}

export interface CartProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    selectedVariant: string;
    images: string[];
}