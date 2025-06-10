const ImageSlider = ({
    images,
    currentIndex,
    onImageSelect
}) => {
    return (
        <div className="flex">
            {images.map((image, index) => (
                <img 
                src={index} 
                alt={image} 
                className={`w-16 h-16 object-cover ${
                    currentIndex === index
                    ? 'border-blue-500'
                    : 'border-grqy-200'
                }`}
                onClick={() => onImageSelect(index)}
                />
            ))}
        </div>
    )
};

export default ImageSlider;