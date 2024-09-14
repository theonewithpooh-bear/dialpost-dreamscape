import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPinIcon, HomeIcon, BeerIcon, TreesIcon, BuildingIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/custom.css';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />

      <main className="container mx-auto py-8 px-4">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-800 animate-fade-in">Welcome to Dial Post</h2>
          <p className="text-xl mb-4 text-green-700 max-w-2xl mx-auto animate-fade-in-delay">
            A charming West Sussex village with a rich history and natural beauty.
          </p>
          <div className="flex items-center justify-center text-green-600 animate-fade-in-delay-2">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span>50.96377°N 0.35651°W</span>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl rounded-lg overflow-hidden">
            <CardHeader className="bg-green-700 text-white p-4">
              <CardTitle className="flex items-center text-2xl">
                <HomeIcon className="h-6 w-6 mr-2" />
                Village Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2 text-green-800">
                <li className="flex items-center">
                  <BeerIcon className="h-5 w-5 mr-2 text-amber-600" />
                  <span>The Crown Inn - 16th-century pub</span>
                </li>
                <li className="flex items-center">
                  <HomeIcon className="h-5 w-5 mr-2 text-blue-600" />
                  <span>New Village Hall - built in 2010</span>
                </li>
                <li className="flex items-center">
                  <BuildingIcon className="h-5 w-5 mr-2 text-red-600" />
                  <span>Listed buildings - including New Lodge</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl rounded-lg overflow-hidden">
            <CardHeader className="bg-green-700 text-white p-4">
              <CardTitle className="flex items-center text-2xl">
                <TreesIcon className="h-6 w-6 mr-2" />
                Knepp Estate
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-green-800 leading-relaxed mb-4">
                Experience the natural wonders of the Knepp Estate, a pioneering rewilding project spanning 3,500 acres of Sussex countryside.
              </p>
              <a href="https://knepp.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Explore Knepp Estate
              </a>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-green-800">Plan Your Visit</h2>
          <p className="text-xl mb-6 text-green-700 max-w-3xl mx-auto">
            From our historic pub to scenic walks, Dial Post offers a perfect countryside retreat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <HomeIcon className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2 text-green-700">Stay</h3>
              <p className="text-green-600">Cozy accommodations at The Crown Inn</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <BeerIcon className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2 text-green-700">Dine</h3>
              <p className="text-green-600">Local cuisine at The Crown Inn</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <TreesIcon className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2 text-green-700">Explore</h3>
              <p className="text-green-600">Nature walks and Knepp Estate tours</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
