import React from "react";

const FoodHubsPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-green-800 mb-6">
      Food Hubs and Farmers Markets
    </h1>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Food Hubs</h2>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Western NL Food Hub
          </h3>
          <p className="mb-4">
            Year Round Orders placed Friday to Monday Pick ups on Thursday
          </p>
          <p className="mb-4">23 Broadway Road, Corner Brook</p>
          <p className="mb-4">
            Visit{" "}
            <a
              href="https://www.nlfoodhub.ca/"
              className="text-green-600 hover:underline"
            >
              https://www.nlfoodhub.ca/
            </a>{" "}
            for details
          </p>

          <h4 className="text-lg font-semibold mb-2">Pickup Locations:</h4>
          <div className="pl-4 space-y-6">
            <div>
              <h5 className="font-medium">Corner Brook</h5>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Western NL Food Hub, 17 Herald Avenue, Corner Brook</li>
                <li>Thursdays, 11:00 a.m. – 6:00 p.m.</li>
                <li>
                  GCSU Backlot (Grenfell Campus), 20 University Drive, Corner
                  Brook
                </li>
                <li>Thursdays, 1:00 p.m. – 6:00 p.m.</li>
                <li>
                  Vine Place Community Centre, 30 Crestview Avenue, Corner Brook
                </li>
                <li>Thursdays, 1:00 p.m. – 4:00 p.m.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium">Pasadena</h5>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Birchbark Farm, 138 Main Street, Pasadena</li>
                <li>Fridays, 12:00 p.m. – 5:00 p.m.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium">Deer Lake</h5>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Off the Hook Fish Market, 37 Old Bonne Bay Road, Deer Lake
                </li>
                <li>Fridays, 11:00 a.m. – 5:00 p.m.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium">Black Duck Siding</h5>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Sweet Berry Farms, 27 Farm Road, Black Duck Siding</li>
                <li>Saturdays, 10:00 a.m. – 4:00 p.m.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium">Wiltondale</h5>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Frontier Cottages and Convenience, 50 Route 430, Wiltondale
                </li>
                <li>Fridays, 1:00 p.m. – 8:00 p.m.</li>
                <li>Saturdays, 9:00 a.m. – 8:00 p.m.</li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg font-semibold mt-6 mb-2">Home Delivery</h4>
          <p className="mb-2">
            <strong>Corner Brook and Pasadena customers only</strong>
          </p>
          <p className="mb-1">Corner Brook: $8.00 delivery fee</p>
          <p className="mb-1">Pasadena: $25.00 delivery fee</p>
          <p className="mb-1">Thursdays</p>
          <p className="mt-4">
            <strong>Email:</strong> foodhub@foodfirstnl.ca
          </p>
          <p>
            <strong>Phone:</strong> (709) 501-8894
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Killick Coast Food Hub
          </h3>
          <p className="mb-1">June to December</p>
          <p className="mb-1">Orders placed Saturday to Monday</p>
          <p className="mb-1">Pick ups on Thursday</p>
          <p className="mb-4">
            Visit{" "}
            <a
              href="https://killickcoastfoodhub.ca"
              className="text-green-600 hover:underline"
            >
              killickcoastfoodhub.ca
            </a>{" "}
            for details
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Farmers Markets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/api/placeholder/400/200"
            alt="Clarenville Farm and Market"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Clarenville Farm and Market
            </h3>
            <p className="mb-1">Saturdays, June to November</p>
            <p className="mb-1">9am – 2pm</p>
            <p className="mb-1">134 TransCanada Highway, Clarenville</p>
            <p className="mt-2">
              <a
                href="http://www.farmandmarketclarenville.ca"
                className="text-green-600 hover:underline"
              >
                www.farmandmarketclarenville.ca
              </a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/api/placeholder/400/200"
            alt="Grand Falls-Windsor Farmers' Market"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Grand Falls-Windsor Farmers' Market
            </h3>
            <p className="mb-1">Saturdays, June to November</p>
            <p className="mb-1">10 a.m. – 2 p.m.</p>
            <p className="mb-1">14 High Street, Grand Falls-Windsor</p>
            <p className="mt-2">
              <a href="#" className="text-green-600 hover:underline">
                Visit their Facebook page
              </a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/api/placeholder/400/200"
            alt="St. John's Farmers' Market"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              St. John's Farmers' Market
            </h3>
            <p className="mb-1">Saturdays 9 A.M. – 4 P.M. (Year Round)</p>
            <p className="mb-1">Sundays 11 A.M. – 4 P.M (Seasonal)</p>
            <p className="mb-1">245 Freshwater Road, St. John's</p>
            <p className="mt-2">
              <a
                href="http://www.stjohnsfarmersmarket.ca"
                className="text-green-600 hover:underline"
              >
                www.stjohnsfarmersmarket.ca
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default FoodHubsPage;
