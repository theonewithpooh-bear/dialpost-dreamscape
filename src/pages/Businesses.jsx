import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BeerIcon, TreesIcon, HomeIcon, BuildingIcon, PhoneIcon, MailIcon, GlobeIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Businesses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6 text-green-800">Local Businesses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BeerIcon className="h-6 w-6 mr-2 text-amber-600" />
                The Crown Inn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">A historic pub established in the 16th century, offering a warm atmosphere, local cuisine, and a selection of fine ales. The Crown Inn is the heart of Dial Post's community life.</p>
              <div className="flex space-x-4">
                <a href="tel:+441403710902" className="flex items-center text-green-600 hover:text-green-800">
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  Call
                </a>
                <a href="mailto:info@thecrowndialpost.com" className="flex items-center text-green-600 hover:text-green-800">
                  <MailIcon className="h-4 w-4 mr-1" />
                  Email
                </a>
                <a href="https://www.thecrowndialpost.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
                  <GlobeIcon className="h-4 w-4 mr-1" />
                  Website
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TreesIcon className="h-6 w-6 mr-2 text-green-600" />
                Knepp Estate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">A pioneering rewilding project spread across 3,500 acres. Knepp Estate offers wildlife safaris, glamping experiences, and educational tours about conservation and biodiversity.</p>
              <div className="flex space-x-4">
                <a href="tel:+441403741235" className="flex items-center text-green-600 hover:text-green-800">
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  Call
                </a>
                <a href="mailto:enquiries@knepp.co.uk" className="flex items-center text-green-600 hover:text-green-800">
                  <MailIcon className="h-4 w-4 mr-1" />
                  Email
                </a>
                <a href="https://knepp.co.uk" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
                  <GlobeIcon className="h-4 w-4 mr-1" />
                  Website
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HomeIcon className="h-6 w-6 mr-2 text-blue-600" />
                Dial Post Garden Centre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">A family-run garden centre offering a wide variety of plants, gardening supplies, and seasonal items. The centre also features a charming café serving homemade treats.</p>
              <div className="flex space-x-4">
                <a href="tel:+441403710358" className="flex items-center text-green-600 hover:text-green-800">
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  Call
                </a>
                <a href="mailto:info@dialpostgardencentre.co.uk" className="flex items-center text-green-600 hover:text-green-800">
                  <MailIcon className="h-4 w-4 mr-1" />
                  Email
                </a>
                <a href="https://www.dialpostgardencentre.co.uk" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
                  <GlobeIcon className="h-4 w-4 mr-1" />
                  Website
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BuildingIcon className="h-6 w-6 mr-2 text-red-600" />
                Blakers Yard Antiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">A treasure trove of antiques and collectibles housed in a charming converted barn. Blakers Yard offers a unique shopping experience with items ranging from vintage furniture to rare books.</p>
              <div className="flex space-x-4">
                <a href="tel:+441403710789" className="flex items-center text-green-600 hover:text-green-800">
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  Call
                </a>
                <a href="mailto:enquiries@blakersyardantiques.co.uk" className="flex items-center text-green-600 hover:text-green-800">
                  <MailIcon className="h-4 w-4 mr-1" />
                  Email
                </a>
                <a href="https://www.blakersyardantiques.co.uk" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
                  <GlobeIcon className="h-4 w-4 mr-1" />
                  Website
                </a>
              </div>
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

export default Businesses;