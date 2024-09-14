import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPinIcon, HomeIcon, BeerIcon, TreesIcon, BuildingIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PointsOfInterest from '@/components/PointsOfInterest';
import '../styles/custom.css';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />

      <main className="container mx-auto py-8 px-4">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-800 animate-fade-in">Welcome to Dial Post</h2>
          <p className="text-xl mb-4 text-green-700 max-w-2xl mx-auto animate-fade-in-delay">
            Discover the hidden gem of West Sussex, where history meets nature in perfect harmony.
          </p>
          <div className="flex items-center justify-center text-green-600 animate-fade-in-delay-2">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span>50.96377°N 0.35651°W</span>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-green-700">Our Rich History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-600">Dive into the fascinating past of Dial Post, dating back to the early 18th century and beyond.</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-green-700">Local Landmarks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-green-600">
                <li>The Crown Inn (16th century)</li>
                <li>Knepp Wilding Kitchen</li>
                <li>Blakers Yard</li>
                <li>Garden Centre</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-green-700">Listed Buildings</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-green-600">
                <li>New Lodge</li>
                <li>Hazel Cottage</li>
                <li>Alma Cottage</li>
                <li>Dial Post House</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <PointsOfInterest />

        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-800">Knepp Rewilding Estate</h2>
          <p className="text-xl mb-6 text-green-700 max-w-3xl mx-auto">
            Experience the wonders of nature at the pioneering Knepp Rewilding Estate. 
            Witness the rebirth of a diverse ecosystem across 3,500 acres of stunning Sussex countryside.
          </p>
          <a href="https://knepp.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Explore Knepp Estate
            </Button>
          </a>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-800">Plan Your Visit</h2>
          <p className="text-xl mb-6 text-green-700 max-w-3xl mx-auto">
            Immerse yourself in the tranquil beauty of Dial Post. From our historic pub to the 
            breathtaking Knepp Rewilding Estate, unforgettable experiences await.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <HomeIcon className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2 text-green-700">Cozy Accommodations</h3>
              <p className="text-green-600">Find charming lodgings in and around Dial Post.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <BeerIcon className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2 text-green-700">Local Cuisine</h3>
              <p className="text-green-600">Savor delicious meals at The Crown Inn and nearby eateries.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <TreesIcon className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2 text-green-700">Nature Walks</h3>
              <p className="text-green-600">Explore scenic trails and the Knepp Rewilding Estate.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
