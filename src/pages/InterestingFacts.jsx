// Interesting Facts Page

import React from "react";
const FactsPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-green-800 mb-6">
      Interesting Facts About Our Agriculture Industry
    </h1>

    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <ul className="space-y-4">
          <FactItem text="The province of Newfoundland and Labrador is home to over 300 different farms." />
          <FactItem text="Farm Cash Receipts were $163.9 million in 2023, up 9.8% from 2022." />
          <FactItem text="The largest crop commodity is Greenhouse and Nursery, accounting for 6.1 per cent of total Farm Cash Receipts." />
          <FactItem text="Value of vegetable production remained unchanged at $7.0 million; the top two vegetable crops in 2023 were turnips and potatoes." />
          <FactItem text="The top five crops in 2023 accounted for 71 per cent of all vegetable sales; they are as follows: potato, turnip, carrot, cabbage and pumpkin." />
          <FactItem text="Farm Cash Receipts for fruit production rose 13.0 per cent in 2023 to $1.9 million; with strawberries being the highest valued crop at $0.9 million." />
          <FactItem text="In terms of berries, strawberries are the largest in terms of value, cranberries are largest by volume produced and blueberries are the largest by area of production." />
          <FactItem text="The province has ten commercial apiculture (beekeeping) operations producing a variety of honey and beeswax products plus providing pollination services for crops." />
          <FactItem text="The largest commodities in Newfoundland and Labrador agriculture are Dairy, Chicken, Eggs, Greenhouse and Nursery, and Vegetables." />
          <FactItem text="There were 2,900 sheep in the province with 2,100 lambs born in 2023." />
          <FactItem text="The value of eggs in 2023 rose 7.0 percent to $25.6 million. Newfoundland and Labrador Egg production in 2023 declined 2.0 per cent from the record high of 10.4 million dozen set in 2022." />
          <FactItem text="There were 10,800 cattle (dairy and beef) in this province in 2023." />
          <FactItem text="The volume of milk produced in Newfoundland and Labrador was 47.3 million litres in 2023." />
          <FactItem text="The value of milk production in 2023 was $53.5 million (combined value of industrial and fluid milk sales)." />
        </ul>
      </div>
    </div>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-green-50 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-green-800 mb-4">
          Economic Impact
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <span className="block text-2xl font-bold text-green-700">
              $163.9 million
            </span>
            <span className="text-gray-600">Farm Cash Receipts in 2023</span>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <span className="block text-2xl font-bold text-green-700">
              9.8%
            </span>
            <span className="text-gray-600">Increase from 2022</span>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <span className="block text-2xl font-bold text-green-700">
              $53.5 million
            </span>
            <span className="text-gray-600">
              Value of milk production in 2023
            </span>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-green-800 mb-4">
          Agricultural Resources
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <span className="block text-2xl font-bold text-green-700">
              300+
            </span>
            <span className="text-gray-600">Farms across the province</span>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <span className="block text-2xl font-bold text-green-700">
              10,800
            </span>
            <span className="text-gray-600">
              Cattle (dairy and beef) in 2023
            </span>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <span className="block text-2xl font-bold text-green-700">
              47.3 million
            </span>
            <span className="text-gray-600">
              Litres of milk produced in 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FactItem = ({ text }) => (
  <li className="flex items-start">
    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-3 bg-green-100 text-green-800 rounded-full">
      •
    </span>
    <span>{text}</span>
  </li>
);

export default FactsPage;
