const Button = ({
    children,
    type = 'button',
    onClick,
    variant = 'primary',
    disabled = false
}) => {
    const baseStyle = 'px-4 py-2 rounded font-medium transition-colors';

    const variants = {
        primary: '',
        secondary: ''
    }

    const className = `${} ${} ${}`;

    return (
        <button></button>
    )
}