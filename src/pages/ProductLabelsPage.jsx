import React from "react";

const ProductLabelsPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-green-800 mb-6">
      Understanding Canadian Product Labels
    </h1>

    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="p-6">
        <p className="mb-6 text-lg">
          <strong>
            "Product of Canada" means the product's ingredients, processing, and
            labor are primarily Canadian, while "Made in Canada" indicates the
            last substantial transformation occurred in Canada, potentially with
            imported ingredients
          </strong>
          . Here's a more detailed breakdown:
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-green-600 py-3 px-6">
          <h2 className="text-xl font-bold text-white">"Product of Canada"</h2>
        </div>
        <div className="p-6">
          <ul className="space-y-4">
            <li className="flex">
              <span className="font-semibold text-green-800 mr-2">
                High Canadian Content:
              </span>
              <span>
                For non-food items, this means at least 98% of the total direct
                costs of production or manufacturing must be incurred in Canada.
              </span>
            </li>
            <li className="flex">
              <span className="font-semibold text-green-800 mr-2">
                Last Transformation in Canada:
              </span>
              <span>
                The last substantial transformation of the good must occur in
                Canada.
              </span>
            </li>
            <li className="flex">
              <span className="font-semibold text-green-800 mr-2">
                Food Products:
              </span>
              <span>
                For food, it means that the primary ingredients, processing, and
                associated labor are Canadian.
              </span>
            </li>
            <li className="flex">
              <span className="font-semibold text-green-800 mr-2">
                Example:
              </span>
              <span>
                A product labelled "Product of Canada" would likely be made with
                mostly Canadian ingredients and processed in Canada.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-green-600 py-3 px-6">
          <h2 className="text-xl font-bold text-white">"Made in Canada"</h2>
        </div>
        <div className="p-6">
          <ul className="space-y-4">
            <li className="flex">
              <span className="font-semibold text-green-800 mr-2">
                Lower Canadian Content Threshold:
              </span>
              <span>
                For non-food items, this means at least 51% of the total direct
                costs of production or manufacturing must be incurred in Canada.
              </span>
            </li>
            <li className="flex">
              <span className="font-semibold text-green-800 mr-2">
                Last Transformation in Canada:
              </span>
              <span>
                The last substantial transformation of the good must occur in
                Canada.
              </span>
            </li>
            <li className="flex">
              <span className="font-semibold text-green-800 mr-2">
                Qualifying Statement:
              </span>
              <span>
                The "Made in Canada" claim should be accompanied by a qualifying
                statement indicating that the product contains imported content.
              </span>
            </li>
            <li className="flex">
              <span className="font-semibold text-green-800 mr-2">
                Example:
              </span>
              <span>
                A product labelled "Made in Canada with imported parts"
                indicates the final assembly or transformation occurred in
                Canada, but some components might be imported.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-green-50 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">
        Why Does This Matter?
      </h2>
      <p className="mb-4">
        Understanding these labels helps consumers make informed choices about
        the products they buy. When you see these labels on food products:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>"Product of Canada"</strong> means you're supporting primarily
          Canadian agriculture, farmers, and food processors.
        </li>
        <li>
          <strong>"Made in Canada"</strong> supports Canadian food processing
          jobs, but ingredients may come from other countries.
        </li>
      </ul>
      <p className="mt-4">
        When you choose to buy local Newfoundland and Labrador products, you're
        supporting an even more direct local supply chain and economy.
      </p>
    </div>
  </div>
);
export default ProductLabelsPage;
