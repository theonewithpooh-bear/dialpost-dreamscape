import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Header = () => {
  return (
    <header className="bg-green-700 text-white py-4 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold special-elite-regular animate-typewriter">Dial Post</Link>
          <nav>
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-green-300 transition-colors duration-200 flex items-center">
                    {item.icon}
                    <span className="ml-1">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
