import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, BuildingIcon, ArchiveIcon, CalendarIcon, BookIcon, MapPinIcon, TreePine, BeerIcon } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center text-foreground animate-fade-in special-elite-regular">
          Welcome to Dial Post
        </h1>
        {isDesktop ? (
          <>
            <p className="text-xl mb-8 text-center text-muted-foreground max-w-2xl mx-auto">
              A charming West Sussex village with a rich history and natural beauty
            </p>
            <div className="flex justify-center items-center mb-12">
              <MapPinIcon className="h-5 w-5 mr-2 text-primary" />
              <span className="text-lg text-muted-foreground">50.96377°N 0.35651°W</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-6 text-card-foreground flex items-center">
                  <HomeIcon className="h-6 w-6 mr-3 text-primary" />
                  Village Highlights
                </h2>
                <ul className="space-y-4 text-card-foreground">
                  <li className="flex items-start">
                    <BeerIcon className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                    <span>The Crown Inn: 16th-century pub with excellent food and accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <HomeIcon className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                    <span>New Village Hall: Modern community space built in 2010</span>
                  </li>
                  <li className="flex items-start">
                    <ArchiveIcon className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                    <span>Listed buildings: Including the historic New Lodge</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-6 text-card-foreground flex items-center">
                  <TreePine className="h-6 w-6 mr-3 text-primary" />
                  Knepp Estate
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Experience the natural wonders of the Knepp Estate, a pioneering rewilding project spanning 3,500 acres of Sussex countryside.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Wildlife safaris
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Glamping experiences
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Educational tours
                  </li>
                </ul>
                <Link to="/businesses" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium">
                  Explore Knepp Estate
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Plan Your Visit</h2>
              <p className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
                Discover the perfect countryside retreat in Dial Post
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HomeIcon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Stay</h3>
                  <p className="text-muted-foreground">Cosy rooms at The Crown Inn</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BeerIcon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Dine</h3>
                  <p className="text-muted-foreground">Local cuisine and pub fare</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TreePine className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Explore</h3>
                  <p className="text-muted-foreground">Nature walks and Knepp tours</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-3 gap-4 mb-12">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="flex flex-col items-center justify-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border"
              >
                <item.icon className="h-12 w-12 mb-3 text-primary" />
                <span className="text-sm text-center text-card-foreground font-medium">{item.title}</span>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
