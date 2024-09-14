import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, BuildingIcon, ArchiveIcon, CalendarIcon, BookIcon } from 'lucide-react';
import Footer from '@/components/Footer';
import '../styles/custom.css';

const Index = () => {
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
        <section className="text-center mb-12">
          <p className="text-lg md:text-xl mb-4 text-green-700 max-w-2xl mx-auto animate-fade-in-delay">
            Explore the charm of our West Sussex village through these interactive tiles.
          </p>
          <div className="flex items-center justify-center text-green-600 animate-fade-in-delay-2">
            <span>Tap an icon to learn more about Dial Post</span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
