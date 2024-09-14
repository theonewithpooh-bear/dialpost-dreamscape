import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-700 text-white py-4 px-4">
      <div className="container mx-auto">
        <Link to="/" className="text-4xl font-bold special-elite-regular">Dial Post</Link>
      </div>
    </header>
  );
};

export default Header;
