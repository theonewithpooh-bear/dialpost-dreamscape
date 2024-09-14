import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPinIcon, HomeIcon, BeerIcon, TreesIcon, BuildingIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PointsOfInterest from '@/components/PointsOfInterest';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />

      <main className="container mx-auto py-8 px-4">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-800 chewy-regular">Welcome to Dial Post</h2>
          <p className="text-xl mb-4 text-green-700 max-w-2xl mx-auto">
            A charming West Sussex village with a rich history and natural beauty.
          </p>
          <div className="flex items-center justify-center text-green-600">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span>50.96377°N 0.35651°W</span>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardHeader className="bg-green-700 text-white p-4">
              <CardTitle className="flex items-center text-2xl">
                <HomeIcon className="h-6 w-6 mr-2" />
                Our History
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-green-800 leading-relaxed">
                Explore Dial Post's journey from its early 18th century origins to the present day.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardHeader className="bg-green-700 text-white p-4">
              <CardTitle className="flex items-center text-2xl">
                <BuildingIcon className="h-6 w-6 mr-2" />
                Local Businesses
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2 text-green-800">
                <li className="flex items-center">
                  <BeerIcon className="h-5 w-5 mr-2 text-amber-600" />
                  <span>The Crown Inn</span>
                </li>
                <li className="flex items-center">
                  <TreesIcon className="h-5 w-5 mr-2 text-green-600" />
                  <span>Knepp Estate</span>
                </li>
                <li className="flex items-center">
                  <HomeIcon className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Tates Garden Centre</span>
                </li>
                <li className="flex items-center">
                  <BuildingIcon className="h-5 w-5 mr-2 text-red-600" />
                  <span>Thakeham Furniture</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardHeader className="bg-green-700 text-white p-4">
              <CardTitle className="flex items-center text-2xl">
                <HomeIcon className="h-6 w-6 mr-2" />
                Listed Buildings
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2 text-green-800">
                <li className="flex items-center">
                  <HomeIcon className="h-5 w-5 mr-2 text-indigo-600" />
                  <span>New Lodge</span>
                </li>
                <li className="flex items-center">
                  <HomeIcon className="h-5 w-5 mr-2 text-pink-600" />
                  <span>Hazel Cottage</span>
                </li>
                <li className="flex items-center">
                  <HomeIcon className="h-5 w-5 mr-2 text-yellow-600" />
                  <span>Alma Cottage</span>
                </li>
                <li className="flex items-center">
                  <HomeIcon className="h-5 w-5 mr-2 text-purple-600" />
                  <span>Dial Post House</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <PointsOfInterest />

        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-800 chewy-regular">Knepp Estate</h2>
          <p className="text-xl mb-6 text-green-700 max-w-3xl mx-auto">
            Discover the Knepp Estate's rewilding project, spanning 3,500 acres of Sussex countryside.
          </p>
          <a href="https://knepp.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300">
              Visit Knepp Estate
            </button>
          </a>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-800 chewy-regular">Plan Your Visit</h2>
          <p className="text-xl mb-6 text-green-700 max-w-3xl mx-auto">
            Experience Dial Post's attractions, from our historic pub to the Knepp Estate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <HomeIcon className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2 text-green-700">Accommodations</h3>
              <p className="text-green-600">Find lodgings in and around Dial Post.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BeerIcon className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2 text-green-700">Local Cuisine</h3>
              <p className="text-green-600">Dine at The Crown Inn and nearby restaurants.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TreesIcon className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2 text-green-700">Nature Walks</h3>
              <p className="text-green-600">Explore local trails and the Knepp Estate.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
