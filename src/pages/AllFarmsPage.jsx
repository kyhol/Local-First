import React, { useState } from "react";
import { Search } from "lucide-react";

const AllFarmsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedProductType, setSelectedProductType] = useState("All");

  // Sample farm data (would come from your actual data source)
  const farms = [
    {
      farm: "Adelaide's Newfoundland Honey Inc and Adelaide's Honey Bee Pollinator and Wildflower Reserve",
      region: "Avalon",
      products:
        "Honey/Honey Products, Pollination Services, Adopt-a-Hive, The Honey Bee Hike, Fireweed Comb Honey, Raw Wildflower Honey, Bees wax, Flanker Starters, Honey Bee Rescue, Swarm Prevention Program, Artisan Fireweed Honey, Liquid Honey, Comb Honey",
    },
    {
      farm: "Alderbrook Acres Ltd.",
      region: "Western and Labrador",
      products: "Nursery Sod, Topsoil",
    },
    {
      farm: "All Saints Farm",
      region: "Avalon",
      products: "Field Vegetables, Greenhouse Vegetables, Flowers, Herbs",
    },
    {
      farm: "Backside Acres (Butterworths Farms)",
      region: "Avalon",
      products: "Field Vegetables, Value Added( preserves, jams, etc)",
    },
    {
      farm: "Bayview Gardens Ltd.",
      region: "Eastern",
      products:
        "Greenhouse Vegetables, Hanging Baskets, Perennials, Shrubs, Trees, Garden Supplies",
    },
    {
      farm: "Beauty of Flowers Nursery",
      region: "Central",
      products:
        "Perennials, Bedding Plants, Hanging Baskets, Landscape Trees, Shrubs, Seed Potatoes, Peat, Soil, Fertilizer, Fruit, Field Vegetables, Greenhouse Vegetables, Herbs, Flowers, Fruit Trees, Berry Plants",
    },
  ];

  const regions = [
    "All",
    "Avalon",
    "Central",
    "Eastern",
    "Western and Labrador",
  ];

  // Extract unique product types from all farms
  const allProducts = farms.reduce((acc, farm) => {
    const products = farm.products.split(", ");
    products.forEach((product) => {
      if (!acc.includes(product) && !product.includes("(")) {
        acc.push(product);
      }
    });
    return acc;
  }, []);

  const productTypes = ["All", ...allProducts.sort()];

  // Filter farms based on search, region, and product type
  const filteredFarms = farms.filter((farm) => {
    const matchesSearch =
      farm.farm.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farm.products.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === "All" || farm.region === selectedRegion;

    const matchesProductType =
      selectedProductType === "All" ||
      farm.products.toLowerCase().includes(selectedProductType.toLowerCase());

    return matchesSearch && matchesRegion && matchesProductType;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        NL Farms Directory
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
              placeholder="Search farms or products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
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

            <select
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={selectedProductType}
              onChange={(e) => setSelectedProductType(e.target.value)}
            >
              {productTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-green-50">
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider"
                >
                  Farm
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider"
                >
                  Region
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider"
                >
                  Products
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredFarms.map((farm, index) => (
                <tr key={index} className="hover:bg-green-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-800">
                    {farm.farm}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {farm.region}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {farm.products}
                  </td>
                </tr>
              ))}

              {filteredFarms.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No farms found matching your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllFarmsPage;
