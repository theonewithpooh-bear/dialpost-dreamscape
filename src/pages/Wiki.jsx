import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookIcon, MapPinIcon, TreePine, HomeIcon, BeerIcon } from 'lucide-react';

const Wiki = () => {
  const wikiEntries = [
    { 
      title: "Overview", 
      icon: MapPinIcon, 
      content: "Dial Post is a village in the Horsham District of West Sussex, England. It has a population of around 100 and is part of the West Grinstead civil parish."
    },
    { 
      title: "History", 
      icon: BookIcon, 
      content: "The village dates back 500 years. The name's origin is uncertain, but Dial Post house, dated 1712, post-dates the settlement name. Dial Post farm comprised 300 acres in c. 1710."
    },
    { 
      title: "Landmarks", 
      icon: HomeIcon, 
      content: "Notable landmarks include The Crown Inn (established as early as the 1600s), four Grade II listed buildings (New Lodge, Hazel Cottage, Alma Cottage, and Dial Post House), and a new village hall completed in 2010."
    },
    { 
      title: "Nature", 
      icon: TreePine, 
      content: "The ruins of medieval Knepp Castle lie between Dial Post and Southwater, part of the Knepp Estate rewilding project."
    },
    {
      title: "Local Amenities",
      icon: BeerIcon,
      content: "The village has one public house (The Crown Inn), a café and barbecue at the Knepp Wilding Kitchen, commercial space at Blakers Yard, and a Garden Centre."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6 text-green-800">Dial Post Wiki</h1>
        <p className="text-lg mb-6 text-green-700">Explore the rich history and features of our charming village.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {wikiEntries.map((entry, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <entry.icon className="h-6 w-6 mr-2" />
                  {entry.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600">{entry.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link to="/" className="text-green-600 hover:text-green-800 font-semibold">
          &larr; Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Wiki;
