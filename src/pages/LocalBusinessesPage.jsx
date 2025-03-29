import React, { useState } from "react";
import { Search } from "lucide-react";
import BusinessCard from "../components/ui/BusinessCard";

const LocalBusinessesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const categories = [
    "All",
    "Field Vegetables",
    "Berries",
    "Fruit",
    "Meat",
    "Dairy",
    "Eggs",
    "Honey",
    "Herbs",
  ];

  const regions = [
    "All",
    "Avalon",
    "Central",
    "Eastern",
    "Western and Labrador",
  ];

  // Sample businesses (would be fetched from API/database in real app)
  const businesses = [
    {
      id: 1,
      name: "Adelaide's Newfoundland Honey Inc",
      region: "Avalon",
      products: [
        "Honey/Honey Products",
        "Pollination Services",
        "Adopt-a-Hive",
      ],
      imageUrl: "/api/placeholder/400/300",
    },
    {
      id: 2,
      name: "Alderbrook Acres Ltd.",
      region: "Western and Labrador",
      products: ["Nursery Sod", "Topsoil"],
      imageUrl: "/api/placeholder/400/300",
    },
    {
      id: 3,
      name: "All Saints Farm",
      region: "Avalon",
      products: [
        "Field Vegetables",
        "Greenhouse Vegetables",
        "Flowers",
        "Herbs",
      ],
      imageUrl: "/api/placeholder/400/300",
    },
    {
      id: 4,
      name: "Backside Acres",
      region: "Avalon",
      products: ["Field Vegetables", "Value Added( preserves, jams, etc)"],
      imageUrl: "/api/placeholder/400/300",
    },
    {
      id: 5,
      name: "Bayview Gardens Ltd.",
      region: "Eastern",
      products: [
        "Greenhouse Vegetables",
        "Hanging Baskets",
        "Perennials",
        "Shrubs",
        "Trees",
      ],
      imageUrl: "/api/placeholder/400/300",
    },
    {
      id: 6,
      name: "Lester's Farm Market",
      region: "Avalon",
      products: [
        "Fruit",
        "Berries",
        "Field Vegetables",
        "Greenhouse Vegetables",
        "Eggs",
      ],
      imageUrl: "/api/placeholder/400/300",
    },
  ];

  // Filter businesses based on search term, category, and region
  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.products.some((p) =>
        p.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" ||
      business.products.some(
        (p) =>
          p.includes(selectedCategory) ||
          (selectedCategory === "Meat" &&
            (p.includes("Beef") || p.includes("Pork") || p.includes("Lamb")))
      );

    const matchesRegion =
      selectedRegion === "All" || business.region === selectedRegion;

    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Local Businesses
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="relative flex-grow">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search businesses or products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <select
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBusinesses.map((business) => (
          <BusinessCard
            key={business.id}
            name={business.name}
            region={business.region}
            products={business.products}
            imageUrl={business.imageUrl}
          />
        ))}

        {filteredBusinesses.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              No businesses found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default LocalBusinessesPage;
