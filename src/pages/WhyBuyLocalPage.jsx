import React from "react";

const WhyBuyLocalPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-green-800 mb-6">Why Buy Local?</h1>

    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <p className="mb-4">
        Newfoundland and Labrador's geographical landscape and remoteness –
        along with ever-rising transportation costs – create an even higher
        dependency on other provinces and countries for fresh food. Inclement
        weather, labour disputes, or mechanical issues with the ferry system can
        greatly decrease access to fresh, healthy foods, and the long distance
        trucks travel to ship food to the province may impact a product's food
        nutritional value, freshness and shelf life (Quinlan, 2012).
      </p>
      <p className="mb-4">
        Climate change, adapted growing varieties, and new technologies have
        enabled producers to diversify their offerings to better suit customers'
        increasing demands (Doyle, 2014). While Newfoundland and Labrador is
        known for growing traditional "Jiggs Dinner" vegetables such as turnip,
        carrot, cabbage and potatoes, our producers are growing more than 100
        different vegetables and fruit locally.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-3">
        In addition, our farmers also produce other food categories such as:
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Meat: beef, pork, lamb</li>
        <li>Poultry: chicken, turkey</li>
        <li>Eggs</li>
        <li>Dairy: cheese and milk</li>
        <li>Honey</li>
        <li>Herbs</li>
      </ul>

      <p className="text-lg font-medium text-green-700 mb-4">
        Buying local results in numerous benefits for families, communities and
        the environment.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <BenefitCard
        title="Food Sustainability"
        content="By supporting local farmers today, you are creating demand and opportunities for producers in the future through development, succession and new farmers. This is crucial for food security, especially given our current reliance on importing food we are capable of growing at home."
      />
      <BenefitCard
        title="Support for local farmers"
        content="Buying local food provides income to farmers to maintain and develop their farms and help produce affordable, nutritious, high-quality food for the future. While vegetables and fruit tend to be seasonal, many vegetables are locally produced and available year round."
      />
      <BenefitCard
        title="More Nutritious"
        content="Produce is susceptible to nutrient loss once it's harvested; therefore, the shorter the time between the farm and your table, the less likely nutrients will be lost. Importing food from outside of the province requires travel on trucks and boats, resulting in more time between harvest and consumption."
      />
      <BenefitCard
        title="Better Value for your Dollar"
        content="Food produced close to home gives you more value for your dollar. When you buy from a local producer, the product is harvested within hours or days of your purchase, maintaining its nutrients and freshness."
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <BenefitCard
        title="Fresher"
        content="The closer to home food is produced, the fresher and tastier it will be. The Newfoundland and Labrador eggs you buy at the store come from a local farm, and it only takes days for eggs to ship from farm to grocery store."
      />
      <BenefitCard
        title="Tastes Better"
        content="Food produced here is allowed to ripen naturally and is not harvested until it is ready. Our province's growing season with its cool nights gives our produce a certain sweetness that is our unique taste of place."
      />
      <BenefitCard
        title="Contribution to Local Economy"
        content="Choosing fresh and delicious local food helps create jobs and supports our economy. Farmers are using other local businesses such as hardware stores, gas stations, mechanics, and more; the money you spend locally is passed on through other businesses in the area."
      />
      <BenefitCard
        title="Environmental Considerations"
        content="Newfoundland and Labrador's farmers take pride in being good stewards of the land, helping to preserve it for future generations. Having our food travel less distance provides us with a better product to feed our families and contributes to improving our carbon footprint."
      />
    </div>

    <div className="bg-green-50 rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">
        How Can You Help?
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Ask your local grocery retailers for more Newfoundland and Labrador
          produced items in store
        </li>
        <li>Look at packaging to identify where the item comes from</li>
        <li>Visit farms in your local area</li>
        <li>Visit farmers' markets</li>
        <li>Visit fall fairs</li>
        <li>Follow Newfoundland and Labrador farmers on social media</li>
        <li>
          Visit gov.nl.ca/farm-guide for listing of farmers, harvest
          availability, contact information, festival and events, harvest
          schedule and more
        </li>
        <li>Share your support by using the hashtag #ISupportNLAgriculture</li>
      </ul>
    </div>
  </div>
);

const BenefitCard = ({ title, content }) => (
  <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-green-700 mb-3">{title}</h3>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default WhyBuyLocalPage;
