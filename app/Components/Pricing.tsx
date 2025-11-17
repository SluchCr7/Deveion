import React from "react";
import { FaCheck } from "react-icons/fa";
import { Package } from "../utils/Types";


const pricePackages: Package[] = [
  {
    id: 1,
    name: "Basic",
    price: 19.99,
    features: [
      "Access to basic features",
      "Email support",
      "100MB storage",
      "Community access",
      "Single user license",
    ],
    isPopular: false,
    color: "blue",
  },
  {
    id: 2,
    name: "Standard",
    price: 49.99,
    features: [
      "Everything in Basic",
      "Priority email support",
      "1GB storage",
      "Team collaboration tools",
      "Multi-user license",
      "Advanced analytics",
    ],
    isPopular: true,
    color: "purple",
  },
  {
    id: 3,
    name: "Premium",
    price: 99.99,
    features: [
      "Everything in Standard",
      "24/7 Phone & Chat support",
      "10GB storage",
      "Dedicated account manager",
      "Custom integrations",
      "Enhanced security & backups",
      "Advanced reporting & analytics",
    ],
    isPopular: false,
    color: "pink",
  },
];

const PackageCard = ({ name, price, features, isPopular, color }: Package) => {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    pink: "bg-pink-500 hover:bg-pink-600",
    gray: "bg-gray-800 hover:bg-gray-900",
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-105">
      {isPopular && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-white px-5 py-1 rounded-full font-semibold shadow-lg">
          Most Popular
        </span>
      )}
      <h3 className="text-3xl text-black font-bold mb-4 text-center">{name}</h3>
      <p className="text-center text-5xl font-extrabold mb-6 text-gray-600">${price.toFixed(2)}</p>
      <ul className="mb-6 space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-gray-700">
            <FaCheck className={`text-${color}-500 flex-shrink-0`} />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-lg text-white font-semibold transition-colors ${
          colorClasses[color as keyof typeof colorClasses] || colorClasses.gray
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div id="pricing" className=" py-20 px-6">
      {/* العنوان والفقرة */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Pricing Plans</h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Choose a plan that fits your needs. All plans come with full features and premium support.
        </p>
      </div>

      {/* شبكة الباقات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {pricePackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            id={pkg.id}
            name={pkg.name}
            price={pkg.price}
            features={pkg.features}
            isPopular={pkg.isPopular}
            color={pkg.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
