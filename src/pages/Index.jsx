import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, BuildingIcon, ArchiveIcon, CalendarIcon, BookIcon, MapPinIcon, TreePine, BeerIcon } from 'lucide-react';
import Footer from '@/components/Footer';
import '../styles/custom.css';
import { useMediaQuery } from 'react-responsive';

const Index = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const navItems = [
    { title: "Home", icon: HomeIcon, to: "/" },
    { title: "History", icon: BookOpenIcon, to: "/history" },
    { title: "Businesses", icon: BuildingIcon, to: "/businesses" },
    { title: "Listed Buildings", icon: ArchiveIcon, to: "/listed-buildings" },
    { title: "Events", icon: CalendarIcon, to: "/events" },
    { title: "Wiki", icon: BookIcon, to: "/wiki" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-800 animate-fade-in special-elite-regular">
          Welcome to Dial Post
        </h1>
        {isDesktop ? (
          <>
            <p className="text-xl mb-8 text-center text-green-700">
              A charming West Sussex village with a rich history and natural beauty.
            </p>
            <div className="flex justify-center items-center mb-8">
              <MapPinIcon className="h-6 w-6 mr-2 text-green-600" />
              <span className="text-lg text-green-700">50.96377°N 0.35651°W</span>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
                  <HomeIcon className="h-6 w-6 mr-2" />
                  Village Highlights
                </h2>
                <ul className="space-y-2 text-green-600">
                  <li className="flex items-center">
                    <BeerIcon className="h-5 w-5 mr-2 text-amber-600" />
                    The Crown Inn: 16th-century pub with excellent food and accommodations
                  </li>
                  <li className="flex items-center">
                    <HomeIcon className="h-5 w-5 mr-2 text-blue-600" />
                    New Village Hall: Modern community space built in 2010
                  </li>
                  <li className="flex items-center">
                    <ArchiveIcon className="h-5 w-5 mr-2 text-red-600" />
                    Listed buildings: Including the historic New Lodge
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
                  <TreePine className="h-6 w-6 mr-2" />
                  Knepp Estate
                </h2>
                <p className="mb-4 text-green-600">
                  Experience the natural wonders of the Knepp Estate, a pioneering rewilding project spanning 3,500 acres of Sussex countryside.
                </p>
                <ul className="space-y-2 text-green-600 mb-4">
                  <li>Wildlife safaris</li>
                  <li>Glamping experiences</li>
                  <li>Educational tours</li>
                </ul>
                <Link to="/businesses" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300">
                  Explore Knepp Estate
                </Link>
              </div>
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-green-800">Plan Your Visit</h2>
              <p className="text-xl mb-8 text-green-700">
                Discover the perfect countryside retreat in Dial Post.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <HomeIcon className="h-12 w-12 mx-auto mb-2 text-green-600" />
                  <h3 className="text-xl font-semibold mb-2 text-green-700">Stay</h3>
                  <p className="text-green-600">Cozy rooms at The Crown Inn</p>
                </div>
                <div className="text-center">
                  <BeerIcon className="h-12 w-12 mx-auto mb-2 text-green-600" />
                  <h3 className="text-xl font-semibold mb-2 text-green-700">Dine</h3>
                  <p className="text-green-600">Local cuisine and pub fare</p>
                </div>
                <div className="text-center">
                  <TreePine className="h-12 w-12 mx-auto mb-2 text-green-600" />
                  <h3 className="text-xl font-semibold mb-2 text-green-700">Explore</h3>
                  <p className="text-green-600">Nature walks and Knepp tours</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-3 gap-6 mb-12">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="h-12 w-12 mb-2 text-green-600" />
                <span className="text-sm text-center text-green-800">{item.title}</span>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
