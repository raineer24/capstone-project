// src/components/molecules/VariantSelector.jsx
import React from 'react';

const VariantSelector = ({ label, options, selectedVariant, onVariantSelect }) => {
    console.log('VariantSelector received:', { label, options, selectedVariant });
    
    if (!options || options.length === 0) {
        return <div>No options available</div>;
    }
    
    return (
        <div style={{ border: '2px solid red', padding: '15px', margin: '10px 0', backgroundColor: 'white' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 'bold' }}>{label}</h3>
            <p style={{ color: 'red', margin: '0 0 10px 0' }}>Debug: Options = {JSON.stringify(options)}</p>
            
            {/* Try basic HTML buttons first */}
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => {
                        console.log('Size button clicked:', option);
                        onVariantSelect(option);
                    }}
                    style={{
                        padding: '10px 15px',
                        margin: '5px',
                        border: '2px solid black',
                        borderRadius: '5px',
                        backgroundColor: selectedVariant === option ? '#4F46E5' : '#ffffff',
                        color: selectedVariant === option ? 'white' : 'black',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}
                >
                    {option}
                </button>
            ))}
            
            <p style={{ marginTop: '10px', fontSize: '12px' }}>Selected: {selectedVariant || 'None'}</p>
        </div>
    );
};

export default VariantSelector;