import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, BuildingIcon, ArchiveIcon, CalendarIcon, BookIcon } from 'lucide-react';
import Footer from '@/components/Footer';
import '../styles/custom.css';
import { useMediaQuery } from 'react-responsive';

const Index = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-800 animate-fade-in special-elite-regular">
          Welcome to Dial Post
        </h1>
        {isMobile ? (
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
        ) : (
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl mb-4 text-green-700 max-w-2xl mx-auto animate-fade-in-delay">
              Explore the charm of our West Sussex village through our interactive website.
            </p>
            <div className="flex justify-center space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
        <section className="text-center mb-12">
          <p className="text-lg md:text-xl mb-4 text-green-700 max-w-2xl mx-auto animate-fade-in-delay">
            Discover the rich history, local businesses, and community events that make Dial Post unique.
          </p>
          <div className="flex items-center justify-center text-green-600 animate-fade-in-delay-2">
            <span>Click on a {isMobile ? "tile" : "button"} to learn more about Dial Post</span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
