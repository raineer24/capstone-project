const VariantSelector = ({
    label,
    options,
    selectedVariant,
    onVariantSelect
}) => {
    return (
        <div className="mb-4">
            <p className="font-medium mb-2">{label}</p>
            <div className="flex gap-2">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => {onVariantSelect(option)}}
                        className={`px-3 py-2 border rounded ${
                            selectedVariant === option
                             ? 'bg-blue-600 text-white border-blue-600'
                             : 'bg-white tex-gray-700 border-gray-300 hover:border-blue-300'
                        }`}
                    >
                            {option}
                    </button>
                ))}
            </div>
        </div>
    )
};  

export default VariantSelector;