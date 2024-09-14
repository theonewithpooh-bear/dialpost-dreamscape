import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-900 text-white py-6 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 animate-typewriter special-elite-regular">Dial Post</h1>
        <p className="text-lg sm:text-xl md:text-2xl italic animate-fade-in-delay">A Historic Village in West Sussex</p>
      </div>
    </header>
  );
};

export default Header;
