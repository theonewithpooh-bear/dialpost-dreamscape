import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPinIcon, HomeIcon, BeerIcon, TreesIcon, BuildingIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PointsOfInterest from '@/components/PointsOfInterest';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

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
                <li>The Crown Inn (established in the 16th century)</li>
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

        <PointsOfInterest />

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Knepp Rewilding Estate</h2>
          <p className="text-lg mb-4">
            The Knepp Rewilding Estate is a pioneering rewilding project located near Dial Post. 
            It's a 3,500-acre estate where natural processes are allowed to shape the land, 
            resulting in a haven for wildlife and a unique visitor experience.
          </p>
          <a href="https://knepp.co.uk" target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-700 hover:bg-green-800">Learn More About Knepp</Button>
          </a>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Visit Dial Post</h2>
          <p className="text-lg mb-4">
            Experience the charm of this historic village, its 16th-century pub, and the nearby Knepp Rewilding Estate.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
