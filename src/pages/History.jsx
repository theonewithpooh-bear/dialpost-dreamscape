import React from 'react';
import { Link } from 'react-router-dom';

const History = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-5xl font-bold mb-8 text-foreground">Our Rich History</h1>
        <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
          <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
            Dial Post has a fascinating history dating back to the early 18th century. Our village has seen significant changes over the years, evolving from a small agricultural settlement to the charming community we know today.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Historical Events and Landmarks</h2>
          <ul className="space-y-3 mb-6 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>The establishment of The Crown Inn in the 16th century</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>The construction of the original village hall in the late 19th century</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>The impact of both World Wars on our small community</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>The development of Blakers Yard in the mid-20th century</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>The opening of the new village hall in 2010</span>
            </li>
          </ul>
        </div>
        <Link to="/" className="mt-8 inline-flex items-center text-primary hover:opacity-80 font-semibold transition-opacity">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default History;
