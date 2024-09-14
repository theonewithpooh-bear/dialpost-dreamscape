import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Menu } from 'lucide-react';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white py-4 px-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold special-elite-regular">Dial Post</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-green-300 transition-colors duration-200 flex items-center"
                  >
                    {item.icon}
                    <span className="ml-1">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded"
            onClick={() => setIsMobileNavOpen(true)}
          >
            Display Navigation
          </button>
        </div>
      </div>
      <MobileNavigation isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  );
};

export default Header;
