import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MapPinIcon, HomeIcon, BeerIcon, TreesIcon, BuildingIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-700 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Dial Post</h1>
          <p className="text-xl">A charming village in West Sussex, England</p>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">About Dial Post</h2>
          <p className="text-lg mb-4">
            Dial Post is a picturesque village located in the Horsham District of West Sussex, England. 
            It's part of the civil parish of West Grinstead and has a population of around 100 people.
          </p>
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span>Coordinates: 50.96377°N 0.35651°W</span>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>History</CardTitle>
            </CardHeader>
            <CardContent>
              <p>The origin of the name is uncertain, but Dial Post house, dated 1712, post-dates the name of the settlement. Dial Post farm comprised 300 acres in c. 1710.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Landmarks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>The Crown Inn (public house)</li>
                <li>Knepp Wilding Kitchen</li>
                <li>Blakers Yard</li>
                <li>Garden Centre</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Listed Buildings</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>New Lodge</li>
                <li>Hazel Cottage</li>
                <li>Alma Cottage</li>
                <li>Dial Post House</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Points of Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <HomeIcon className="h-6 w-6 mr-2 text-green-600" />
              <span>New village hall built in 2010</span>
            </div>
            <div className="flex items-center">
              <BeerIcon className="h-6 w-6 mr-2 text-amber-600" />
              <span>The Crown Inn, established in the 1870s</span>
            </div>
            <div className="flex items-center">
              <TreesIcon className="h-6 w-6 mr-2 text-green-800" />
              <span>Nearby Knepp Castle ruins</span>
            </div>
            <div className="flex items-center">
              <BuildingIcon className="h-6 w-6 mr-2 text-gray-600" />
              <span>St George's Church in West Grinstead</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Visit Dial Post</h2>
          <p className="text-lg mb-4">
            Experience the charm of this historic village and its surrounding countryside.
          </p>
          <Button className="bg-green-700 hover:bg-green-800">Plan Your Visit</Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Dial Post Village. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
