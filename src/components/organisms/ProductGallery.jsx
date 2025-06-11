import { useState } from "react";
import Image from '../atoms/Image';
import ImageSlider from '../molecules/ImageSlider';

const ProductGallery = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    /**
   * Function to change the main image when user clicks thumbnail
   * @param {number} index - Index of the image to display
   */

    const handleImageSelect = (index) => {
        setCurrentImageIndex(index)
    }

    return (
        <div>
            {/* Main large image */}
            <div className="mb-4">
                <Image 
                    src={images[currentImageIndex]}
                    alt={`Product image ${currentImageIndex + 1}`}
                    className="rounded-lg"
                />
            </div>

            {/*Thumbnail navigation */}
            <ImageSlider 
                images={images}
                currentIndex={currentImageIndex}
                onImageSelect={handleImageSelect}
            />
        </div>
    )
};

export default ProductGallery;