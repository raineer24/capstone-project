const Image = ({
    src,
    alt,
    className = '',
    onClick,
    ...props
}) => {
    return (
        <img src={src} 
        alt={alt} 
        className={`w-full object-cover ${className}`}
        onClick={onClick}
        {...props}
        />
    )
}

export default Image;