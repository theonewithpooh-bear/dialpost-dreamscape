import React from 'react';
import { HomeIcon, BeerIcon, TreesIcon, BuildingIcon } from 'lucide-react';

const PointsOfInterest = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4">Points of Interest</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <HomeIcon className="h-6 w-6 mr-2 text-green-600" />
          <span>New village hall built in 2010</span>
        </div>
        <div className="flex items-center">
          <BeerIcon className="h-6 w-6 mr-2 text-amber-600" />
          <span>The Crown Inn, established in the 16th century</span>
        </div>
        <div className="flex items-center">
          <TreesIcon className="h-6 w-6 mr-2 text-green-800" />
          <span>Nearby Knepp Castle ruins and Rewilding Estate</span>
        </div>
        <div className="flex items-center">
          <BuildingIcon className="h-6 w-6 mr-2 text-gray-600" />
          <span>St George's Church in West Grinstead</span>
        </div>
      </div>
    </section>
  );
};

export default PointsOfInterest;