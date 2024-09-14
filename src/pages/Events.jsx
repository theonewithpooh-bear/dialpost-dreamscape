import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />
      <main className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-green-800">Events</h1>
        <p className="text-xl text-green-700 mb-6 font-winnie">Pardon our honeypots, but there are currently no organised events.</p>
        <img
          src="https://lh7-rt.googleusercontent.com/slidesz/AGV_vUdb0zFwq-8Zo0YjIoOJzO7WfoNW0WJ3LIZi8Kqe-HkGAh3N4dJQeJJ8LcoSM9JohVJomg7k_7Anp0IIuuosd1IU97kufgiR8LSZy3a_GvM32Iq_Mdlc8iveRc3HRW-xVPR9X8L6N5aR3-Sbpa8qJ2CSs_mXcHs=s2048?key=p0s8EYPn5tdVK48MLi7dOQ"
          alt="Confused Pooh"
          className="mx-auto w-48 h-48 object-cover"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Events;
