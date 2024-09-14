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
              <p className="mb-4">An award-winning free house owned and run by Penny and James Middleton-Burn. Known for excellent homemade food, local Sussex breweries, and a welcoming atmosphere.</p>
              <ul className="mb-4 list-disc list-inside">
                <li>Daily menu of pub classics and seasonal specials</li>
                <li>Four beautifully appointed rooms and two self-catering cottages</li>
                <li>Dog-friendly with a beer garden and patio</li>
                <li>Close to excellent walks and the Knepp Castle Estate</li>
              </ul>
              <div className="flex space-x-4">
                <a href="tel:+441403710902" className="flex items-center text-green-600 hover:text-green-800">
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  Call
                </a>
                <a href="https://www.thecrowninndialpost.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
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
                <a href="tel:+441403713230" className="flex items-center text-green-600 hover:text-green-800">
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  Call
                </a>
                <a href="mailto:safaris@knepp.co.uk" className="flex items-center text-green-600 hover:text-green-800">
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
                Tates Old Barn Garden Centre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Part of the Tates Group since 2018, Old Barn Garden Centre has been transformed into a destination garden centre with a 200-seater restaurant and coffee shop. It offers a wide range of plants, garden supplies, and home decor items.</p>
              <ul className="mb-4 list-disc list-inside">
                <li>Extensive plant nursery with knowledgeable staff</li>
                <li>Garden and Lifestyle shop for home and garden inspiration</li>
                <li>Wide range of garden buildings, hot tubs, and conservatories</li>
                <li>200-seater restaurant and coffee shop</li>
                <li>The Garden Room available for events and functions</li>
              </ul>
              <div className="flex space-x-4">
                <a href="tel:+441403710000" className="flex items-center text-green-600 hover:text-green-800">
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  Call
                </a>
                <a href="https://www.tatesofsussex.co.uk/garden-centres/old-barn/" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
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
                Thakeham Furniture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">A family-run antique furniture business established in 1987 by Tim and Belinda Chavasse. Thakeham Furniture specializes in high-quality Georgian furniture with an emphasis on color and patina. Their large showroom in Dial Post, West Sussex, is housed in a characterful old engineering works with ample natural light.</p>
              <ul className="mb-4 list-disc list-inside">
                <li>Specializes in Georgian furniture</li>
                <li>Emphasis on color and patina</li>
                <li>Skilled restoration services</li>
                <li>Family-run business since 1987</li>
              </ul>
              <div className="flex space-x-4">
                <a href="tel:+441403713649" className="flex items-center text-green-600 hover:text-green-800">
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  Call
                </a>
                <a href="mailto:info@thakehamfurniture.co.uk" className="flex items-center text-green-600 hover:text-green-800">
                  <MailIcon className="h-4 w-4 mr-1" />
                  Email
                </a>
                <a href="https://www.thakehamfurniture.co.uk" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
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
