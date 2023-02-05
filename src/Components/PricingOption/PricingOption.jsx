import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const PricingOption = ({ option }) => {
  return (
    <div className=" bg-purple-400 p-10 rounded-xl mx-10">
      <div>
        <h2 className=" text-slate-100">
          <span className="text-5xl font-bold text-white">{option.price}</span>
          /m
        </h2>
        <p className="text-3xl my-3 font-semibold">{option.name}</p>
      </div>
      {option.fetures.map((feture, index) => (
        <div key={index} className="flex items-center ml-3 mt-6">
          <IoIosCheckmarkCircleOutline className="w-6 h-6" />
          <p className="text-xl font-semibold ml-2">{feture}</p>
        </div>
      ))}
      <button className="bg-green-500 font-semibold text-white rounded-md px-4 py-2 md:mb-0 mt-4 hover:bg-green-400">
        Buy Now
      </button>
    </div>
  );
};

export default PricingOption;
