import React from "react";

const ProductDetailPage = ({ business, product }) => (
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="/api/placeholder/400/400"
            alt={product.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">
            {business.name}
          </div>
          <h2 className="mt-1 text-2xl font-semibold text-gray-900">
            {product.name}
          </h2>
          <p className="mt-2 text-gray-600">{product.description}</p>

          <div className="mt-4">
            <span className="text-gray-700 font-medium">Price: </span>
            <span className="text-green-700 font-bold">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="mt-4">
            <span className="text-gray-700 font-medium">Availability: </span>
            <span
              className={`font-medium ${
                product.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="mt-6">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Contact Business
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetailPage;
