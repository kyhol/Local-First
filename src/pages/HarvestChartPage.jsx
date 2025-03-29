import React from "react";

const HarvestChartPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-green-800 mb-6">Harvest Chart</h1>

    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <p className="mb-6">
          This chart shows when various crops in Newfoundland and Labrador are
          typically ready for harvest. Growing seasons may vary based on weather
          conditions and specific locations within the province.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-green-50">
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider"
                >
                  Crop
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider"
                >
                  Ready for Harvest (Estimated)
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider"
                >
                  Crop
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider"
                >
                  Ready for Harvest (Estimated)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <HarvestRow
                crop1="Asparagus"
                time1="Early June"
                crop2="Kohlrabi"
                time2="Can be as Early as Mid July"
              />
              <HarvestRow
                crop1="Beans"
                time1="Mid August"
                crop2="Leeks"
                time2="Late August/Early September"
              />
              <HarvestRow
                crop1="Beets"
                time1="After June"
                crop2="Lettuce"
                time2="Can be as Early as Mid July"
              />
              <HarvestRow
                crop1="Blackberries"
                time1="Late August"
                crop2="Mushrooms"
                time2="Any time"
              />
              <HarvestRow
                crop1="Blueberries"
                time1="Late August"
                crop2="Onions"
                time2="Can be as early as Mid August"
              />
              <HarvestRow
                crop1="Broccoli"
                time1="Can be as Early as Mid July"
                crop2="Parsnips"
                time2="Late August"
              />
              <HarvestRow
                crop1="Brussel Sprouts"
                time1="Early September"
                crop2="Peas"
                time2="As early July"
              />
              <HarvestRow
                crop1="Cabbage"
                time1="Can be as early as Late July"
                crop2="Peppers"
                time2="Early October"
              />
              <HarvestRow
                crop1="Carrots"
                time1="Baby as early as Mid July"
                crop2="Potatoes"
                time2="Late July"
              />
              <HarvestRow
                crop1="Cauliflower"
                time1="Mid July"
                crop2="Radishes"
                time2="After June"
              />
              <HarvestRow
                crop1="Celery"
                time1="Late August"
                crop2="Raspberries"
                time2="Late July to August"
              />
              <HarvestRow
                crop1="Eggplant"
                time1="Late August"
                crop2="Spinach"
                time2="Can be as Early as Mid July"
              />
              <HarvestRow
                crop1="Collard"
                time1="As early as Mid July"
                crop2="Squash"
                time2="Early September"
              />
              <HarvestRow
                crop1="Corn"
                time1="Early September"
                crop2="Strawberries"
                time2="Mid to Late July"
              />
              <HarvestRow
                crop1="Cranberries"
                time1="October"
                crop2="Swiss Chard"
                time2="As early as Mid July"
              />
              <HarvestRow
                crop1="Cucumbers"
                time1="Late July"
                crop2="Tomatoes"
                time2="Early September"
              />
              <HarvestRow
                crop1="Garlic"
                time1="Late August/Early September"
                crop2="Turnip White"
                time2="Mid July"
              />
              <HarvestRow
                crop1="Garlic"
                time1="Late August/Early September"
                crop2="Turnip Yellow"
                time2="Mid August"
              />
              <HarvestRow
                crop1="Herbs"
                time1="As early as July"
                crop2="Zucchini"
                time2="Late July"
              />
              <HarvestRow
                crop1="Kale"
                time1="As early as Mid July"
                crop2=""
                time2=""
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

const HarvestRow = ({ crop1, time1, crop2, time2 }) => (
  <tr className="hover:bg-green-50">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-800">
      {crop1}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
      {time1}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-800">
      {crop2}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
      {time2}
    </td>
  </tr>
);
export default HarvestChartPage;
