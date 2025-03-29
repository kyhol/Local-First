import React from "react";

const HomePage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="bg-green-50 rounded-lg overflow-hidden shadow-lg mb-8">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Welcome to NL Local Community Hub
        </h2>
        <p className="text-lg mb-6">
          Supporting local businesses and farmers in Newfoundland and Labrador
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Discover Local Businesses"
            description="Find and support local businesses in your community."
            link="local-businesses"
          />
          <FeatureCard
            title="Food Hubs & Markets"
            description="Locate farmers markets and food hubs near you."
            link="food-hubs"
          />
          <FeatureCard
            title="Why Buy Local"
            description="Learn about the benefits of buying local produce and products."
            link="why-buy-local"
          />
        </div>
      </div>
    </div>

    <section className="mb-12">
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        Featured Businesses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BusinessCard
          name="Adelaide's Newfoundland Honey Inc"
          region="Avalon"
          products={["Honey/Honey Products", "Pollination Services"]}
          imageUrl="/api/placeholder/400/300"
        />
        <BusinessCard
          name="Deep Roots Farm and Market"
          region="Western and Labrador"
          products={["Fruit", "Field Vegetables", "Berries"]}
          imageUrl="/api/placeholder/400/300"
        />
        <BusinessCard
          name="Lester's Farm Market"
          region="Avalon"
          products={["Fruit", "Berries", "Field Vegetables"]}
          imageUrl="/api/placeholder/400/300"
        />
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        Upcoming Events
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4 pb-4 border-b">
          <h3 className="text-xl font-semibold">
            Spring Farmers Market Opening
          </h3>
          <p className="text-gray-600">
            April 15, 2025 | St. John's Farmers' Market
          </p>
          <p className="mt-2">
            Join us for the seasonal opening of the St. John's Farmers' Market
            with special events and new vendors!
          </p>
        </div>
        <div className="mb-4 pb-4 border-b">
          <h3 className="text-xl font-semibold">
            Agricultural Workshop Series
          </h3>
          <p className="text-gray-600">
            Starting May 1, 2025 | Various Locations
          </p>
          <p className="mt-2">
            Learn about sustainable farming practices with our workshop series
            for beginners and experienced gardeners alike.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Local Food Festival</h3>
          <p className="text-gray-600">
            June 12-14, 2025 | Grand Falls-Windsor
          </p>
          <p className="mt-2">
            A weekend celebration of local food featuring cooking
            demonstrations, tastings, and local producer showcases.
          </p>
        </div>
      </div>
    </section>
  </div>
);

const FeatureCard = ({ title, description, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-green-600 font-medium hover:text-green-800">
        Learn more →
      </button>
    </div>
  </div>
);

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
export default HomePage;
