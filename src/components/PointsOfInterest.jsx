import React from 'react';
import { HomeIcon, BeerIcon, TreesIcon, BuildingIcon } from 'lucide-react';

const PointsOfInterest = () => {
  const points = [
    {
      title: "New Village Hall",
      description: "Modern community space built in 2010",
      icon: <HomeIcon className="h-12 w-12 text-green-600" />,
    },
    {
      title: "The Crown Inn",
      description: "Historic pub established in the 16th century",
      icon: <BeerIcon className="h-12 w-12 text-orange-500" />,
    },
    {
      title: "Knepp Castle Estate",
      description: "Nearby ruins and rewilding project",
      icon: <TreesIcon className="h-12 w-12 text-green-700" />,
    },
    {
      title: "St George's Church",
      description: "Historic church in West Grinstead",
      icon: <BuildingIcon className="h-12 w-12 text-gray-600" />,
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-green-800 special-elite-regular">Discover Dial Post</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {points.map((point, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start space-x-4">
            <div className="flex-shrink-0">
              {point.icon}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-green-700 chewy-regular">{point.title}</h3>
              <p className="text-green-600">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PointsOfInterest;
