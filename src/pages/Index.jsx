import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPinIcon, HomeIcon, BeerIcon, TreePine, BuildingIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/custom.css';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />

      <main className="container mx-auto py-8 px-4">
        <section className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 animate-fade-in">Welcome to Dial Post</h2>
          <p className="text-lg md:text-xl mb-4 text-green-700 max-w-2xl mx-auto animate-fade-in-delay">
            A charming West Sussex village with a rich history and natural beauty.
          </p>
          <div className="flex items-center justify-center text-green-600 animate-fade-in-delay-2">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span>50.96377°N 0.35651°W</span>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-800 flex items-center">
                <HomeIcon className="h-6 w-6 mr-2 text-green-600" />
                Village Highlights
              </h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-center">
                  <BeerIcon className="h-5 w-5 mr-2 text-amber-600 flex-shrink-0" />
                  <span>The Crown Inn: 16th-century pub with excellent food and accommodations</span>
                </li>
                <li className="flex items-center">
                  <HomeIcon className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                  <span>New Village Hall: Modern community space built in 2010</span>
                </li>
                <li className="flex items-center">
                  <BuildingIcon className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" />
                  <span>Listed buildings: Including the historic New Lodge</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-800 flex items-center">
                <TreePine className="h-6 w-6 mr-2 text-green-600" />
                Knepp Estate
              </h3>
              <p className="text-green-700 leading-relaxed mb-4">
                Experience the natural wonders of the Knepp Estate, a pioneering rewilding project spanning 3,500 acres of Sussex countryside.
              </p>
              <ul className="space-y-2 text-green-700 mb-4">
                <li>Wildlife safaris</li>
                <li>Glamping experiences</li>
                <li>Educational tours</li>
              </ul>
              <a href="https://knepp.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                Explore Knepp Estate
              </a>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Plan Your Visit</h2>
          <p className="text-lg md:text-xl mb-6 text-green-700 max-w-3xl mx-auto">
            Discover the perfect countryside retreat in Dial Post.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: HomeIcon, title: "Stay", description: "Cozy rooms at The Crown Inn" },
              { icon: BeerIcon, title: "Dine", description: "Local cuisine and pub fare" },
              { icon: TreePine, title: "Explore", description: "Nature walks and Knepp tours" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <item.icon className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2 text-green-700">{item.title}</h3>
                <p className="text-green-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
