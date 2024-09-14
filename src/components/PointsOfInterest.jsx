import React from 'react';
import { HomeIcon, BeerIcon, TreesIcon, BuildingIcon } from 'lucide-react';

const PointsOfInterest = () => {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-green-800">Discover Dial Post</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
          <HomeIcon className="h-12 w-12 mr-4 text-green-600" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">New Village Hall</h3>
            <p className="text-green-600">Modern community space built in 2010</p>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
          <BeerIcon className="h-12 w-12 mr-4 text-amber-600" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">The Crown Inn</h3>
            <p className="text-green-600">Historic pub established in the 16th century</p>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
          <TreesIcon className="h-12 w-12 mr-4 text-green-800" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">Knepp Castle Estate</h3>
            <p className="text-green-600">Nearby ruins and rewilding project</p>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
          <BuildingIcon className="h-12 w-12 mr-4 text-gray-600" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">St George's Church</h3>
            <p className="text-green-600">Historic church in West Grinstead</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PointsOfInterest;
