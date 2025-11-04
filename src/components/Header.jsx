import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Menu } from 'lucide-react';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground py-5 px-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold special-elite-regular hover:opacity-90 transition-opacity">
            Dial Post
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-accent transition-colors duration-200 flex items-center font-medium"
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden bg-primary-foreground text-primary py-2 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium"
            onClick={() => setIsMobileNavOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>
      <MobileNavigation isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  );
};

export default Header;
