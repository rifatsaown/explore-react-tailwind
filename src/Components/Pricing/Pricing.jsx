import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingList = [
        {id : 1, name : 'Basic', price : 100,},
        {id : 2, name : 'Standard', price : 200,},
        {id : 3, name : 'Premium', price : 300,},
    ];
    return (
        <div>
            <h1 className='text-5xl font-semibold bg-purple-400 p-4 pb-5'>Best Price in city</h1>
            {
                pricingList.map((option) => (<PricingOption key={option.id} option={option} />) )
            }
        </div>
    );
};

export default Pricing;