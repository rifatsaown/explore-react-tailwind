import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingList = [
    {
      id: 1,
      name: "Basic",
      price: 100,
      fetures: [
        "1GB Storage",
        "10GB Bandwidth",
        "5 Email Accounts",
        "5 Subdomains",
        "5 Domains",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 200,
      fetures: [
        "2GB Storage",
        "20GB Bandwidth",
        "10 Email Accounts",
        "10 Subdomains",
        "10 Domains",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 300,
      fetures: [
        "3GB Storage",
        "30GB Bandwidth",
        "15 Email Accounts",
        "15 Subdomains",
        "15 Domains",
      ],
    },
  ];
  return (
    <div>
      <h1 className="text-5xl font-semibold bg-purple-400 p-4 mb-6">
        Best Price in city
      </h1>
      <div className="grid md:grid-cols-3 gap-4 md:m-10">
        {pricingList.map((option) => (
          <PricingOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
