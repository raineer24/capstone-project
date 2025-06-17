import { useState } from "react";
import ProductGallery from "./ProductGallery";
import VariantSelector from "../molecules/VariantSelector";
import Button from "../atoms/Button";
import { useReduxCart } from "../../hooks/useReduxCart";

const ProductDisplay = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState("");

  const { addToCart } = useReduxCart();

    // Debug: Let's see what we're getting
  console.log('Product data:', product);
  console.log('Product variants:', product.variants);

  const handleAddToCart = () => {
    if (!selectedVariant) {
      alert("Please select a size first");
      return;
    }

    const cartItem = {
      ...product,
      selectedVariant: selectedVariant,
    };

    addToCart(cartItem);
  };

  const handleVariantSelect = (variant) => {
     console.log('Selected variant:', variant);
    setSelectedVariant(variant);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <ProductGallery images={product.images} />

      {/* Right side - Product info and controls */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

        <p className="text-gray-600 mb-4">{product.description}</p>

        <p className="text-2xl font-semibold text-blue-600 mb-6">
          ₱{product.price.toLocaleString()}
        </p>

        {/* Size selection */}
        <VariantSelector
          label="Choose Size"
          options={product.variants}
          selectedVariant={selectedVariant}
          onVariantSelect={handleVariantSelect}
        />

        {/* Add to cart button */}
        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDisplay;
