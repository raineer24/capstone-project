// src/components/molecules/ImageSlider.jsx
import React from 'react';

const ImageSlider = ({ images, currentIndex, onImageSelect }) => {
    console.log('ImageSlider received:', { images, currentIndex });
    
    return (
        <div className="flex gap-2 mt-4">
            {images && images.map((imageUrl, index) => (
                <img 
                    key={index}
                    src={imageUrl}  // Use the actual image URL
                    alt={`Product view ${index + 1}`}
                    style={{
                        width: '64px',
                        height: '64px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        border: currentIndex === index ? '2px solid blue' : '2px solid #e5e7eb'
                    }}
                    onClick={() => {
                        console.log('Thumbnail clicked:', index);
                        onImageSelect(index);
                    }}
                />
            ))}
        </div>
    );
};

export default ImageSlider;