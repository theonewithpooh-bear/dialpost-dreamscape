import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />
      <main className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-green-800">Events</h1>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/3f844ce5-7818-40d1-bf1f-1905ce8bcdcf/d566soy-9c881b90-b42b-40b7-abb4-34292fc9836d.png"
          alt="Confused Pooh"
          className="mx-auto w-64 h-64 object-cover mb-6"
        />
        <p className="text-xl text-green-700">Sorry, there are currently no organised events.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Events;