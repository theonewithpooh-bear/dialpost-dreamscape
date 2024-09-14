import React from 'react';
import { Link } from 'react-router-dom';

const AlphaExplanation = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6 text-green-800">Alpha Stage Explanation</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4 text-green-700">
          The "Alpha" stage of a website or application refers to an early phase in the development process. Here's what it means:
        </p>
        <ul className="list-disc list-inside text-green-600 mb-4">
          <li>The site is still in active development and may be incomplete.</li>
          <li>Some features may not be fully functional or might change.</li>
          <li>There could be bugs or unexpected behavior.</li>
          <li>The design and content are subject to change.</li>
          <li>We're actively seeking feedback to improve the site.</li>
        </ul>
        <p className="text-green-700 mb-4">
          While in Alpha, we encourage users to explore the site and provide feedback, but please be aware that some aspects may not be finalized or fully operational.
        </p>
        <p className="text-green-700">
          Your input is valuable in helping us refine and improve the Dial Post Village website. Thank you for your understanding and participation in this early stage!
        </p>
      </div>
      <Link to="/" className="mt-6 inline-block text-green-600 hover:text-green-800 font-semibold">
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default AlphaExplanation;
