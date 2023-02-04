import React from 'react';

const PricingOption = ({option}) => {
    return (
        <div>
            <div>
                <p>{option.price}</p>
                <h3>{option.name}</h3>
            </div>
        </div>
    );
};

export default PricingOption;