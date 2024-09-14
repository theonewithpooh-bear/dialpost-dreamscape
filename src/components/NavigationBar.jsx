import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const NavigationBar = () => {
  return (
    <nav className="bg-green-800 text-white py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="hover:text-green-300 transition-colors duration-200 flex items-center"
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;