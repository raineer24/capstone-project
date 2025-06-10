const Image = ({
    src,
    alt,
    className = '',
    onclick,
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