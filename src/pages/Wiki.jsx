import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookIcon, MapPinIcon, TreeIcon, HomeIcon } from 'lucide-react';

const Wiki = () => {
  const wikiEntries = [
    { title: "Geography", icon: MapPinIcon, content: "Dial Post is located in West Sussex, England, approximately 6 miles south of Horsham." },
    { title: "History", icon: BookIcon, content: "The village has roots dating back to the early 18th century, evolving from an agricultural settlement." },
    { title: "Landmarks", icon: HomeIcon, content: "Notable landmarks include The Crown Inn, the new Village Hall, and several listed buildings." },
    { title: "Nature", icon: TreeIcon, content: "The nearby Knepp Estate offers a glimpse into rewilding and conservation efforts in the area." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6 text-green-800">Dial Post Wiki</h1>
        <p className="text-lg mb-6 text-green-700">Welcome to the Dial Post Wiki, your source for information about our charming village.</p>
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