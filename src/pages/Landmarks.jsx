import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BeerIcon, TreesIcon, HomeIcon, BuildingIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Landmarks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6 text-green-800">Local Landmarks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BeerIcon className="h-6 w-6 mr-2 text-amber-600" />
                The Crown Inn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>A historic pub established in the 16th century, offering a warm atmosphere and local cuisine.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TreesIcon className="h-6 w-6 mr-2 text-green-600" />
                Knepp Wilding Kitchen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>A unique dining experience featuring locally sourced, wild ingredients from the Knepp Estate.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HomeIcon className="h-6 w-6 mr-2 text-blue-600" />
                Blakers Yard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>A charming residential area developed in the mid-20th century, showcasing local architecture.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BuildingIcon className="h-6 w-6 mr-2 text-red-600" />
                Garden Centre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>A popular local business offering a wide variety of plants, gardening supplies, and seasonal items.</p>
            </CardContent>
          </Card>
        </div>
        <Link to="/" className="mt-6 inline-block text-green-600 hover:text-green-800 font-semibold">
          &larr; Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Landmarks;