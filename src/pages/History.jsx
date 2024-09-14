import React from 'react';
import { Link } from 'react-router-dom';

const History = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6 text-green-800">Our Rich History</h1>
      <p className="text-lg mb-4 text-green-700">
        Dial Post has a fascinating history dating back to the early 18th century. Our village has seen significant changes over the years, evolving from a small agricultural settlement to the charming community we know today.
      </p>
      <p className="text-lg mb-4 text-green-700">
        Key historical events and landmarks include:
      </p>
      <ul className="list-disc list-inside mb-6 text-green-700">
        <li>The establishment of The Crown Inn in the 16th century</li>
        <li>The construction of the original village hall in the late 19th century</li>
        <li>The impact of both World Wars on our small community</li>
        <li>The development of Blakers Yard in the mid-20th century</li>
        <li>The opening of the new village hall in 2010</li>
      </ul>
      <Link to="/" className="text-green-600 hover:text-green-800 font-semibold">
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default History;
