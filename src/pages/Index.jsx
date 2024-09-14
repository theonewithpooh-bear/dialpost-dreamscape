import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPinIcon, HomeIcon, BeerIcon, TreesIcon, BuildingIcon, BookOpenIcon, ArchiveIcon } from 'lucide-react';
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

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl rounded-lg overflow-hidden">
            <CardHeader className="bg-green-700 text-white p-4">
              <CardTitle className="flex items-center text-2xl">
                <BookOpenIcon className="h-6 w-6 mr-2" />
                Our Rich History
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-green-800 leading-relaxed">
                Embark on a journey through time as you explore the fascinating past of Dial Post. From its humble beginnings in the early 18th century to its present-day charm, every corner of our village tells a story.
              </p>
              <Link to="/history" className="mt-4 text-green-600 font-semibold hover:text-green-800 transition-colors">
                Discover our heritage &rarr;
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl rounded-lg overflow-hidden">
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
                  <span>Dial Post Garden Centre</span>
                </li>
                <li className="flex items-center">
                  <BuildingIcon className="h-5 w-5 mr-2 text-red-600" />
                  <span>Blakers Yard Antiques</span>
                </li>
              </ul>
              <Link to="/businesses" className="mt-4 text-green-600 font-semibold hover:text-green-800 transition-colors">
                Explore our businesses &rarr;
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl rounded-lg overflow-hidden">
            <CardHeader className="bg-green-700 text-white p-4">
              <CardTitle className="flex items-center text-2xl">
                <ArchiveIcon className="h-6 w-6 mr-2" />
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
              <Link to="/listed-buildings" className="mt-4 text-green-600 font-semibold hover:text-green-800 transition-colors">
                Learn about our heritage buildings &rarr;
              </Link>
            </CardContent>
          </Card>
        </section>

        <PointsOfInterest />

        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-800">Knepp Estate</h2>
          <p className="text-xl mb-6 text-green-700 max-w-3xl mx-auto">
            Experience the wonders of nature at the pioneering Knepp Estate. 
            Witness the rebirth of a diverse ecosystem across 3,500 acres of stunning Sussex countryside.
          </p>
          <a href="https://knepp.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Explore Knepp Estate
            </button>
          </a>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-800">Plan Your Visit</h2>
          <p className="text-xl mb-6 text-green-700 max-w-3xl mx-auto">
            Immerse yourself in the tranquil beauty of Dial Post. From our historic pub to the 
            breathtaking Knepp Estate, unforgettable experiences await.
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
              <p className="text-green-600">Explore scenic trails and the Knepp Estate.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
