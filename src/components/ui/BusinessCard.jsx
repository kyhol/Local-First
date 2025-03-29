import React from "react";

const BusinessCard = ({ name, region, products, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-green-700">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">Region: {region}</p>
      <div className="mb-2">
        <p className="text-sm font-medium">Products:</p>
        <p className="text-sm text-gray-600">
          {products.slice(0, 3).join(", ")}
          {products.length > 3 ? "..." : ""}
        </p>
      </div>
      <button className="mt-2 text-green-600 text-sm hover:text-green-800">
        View details →
      </button>
    </div>
  </div>
);

export default BusinessCard;
