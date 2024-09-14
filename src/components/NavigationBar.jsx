import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Menu, X } from 'lucide-react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Dial Post</Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block md:inline-block mt-4 md:mt-0 md:ml-6 hover:text-green-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
