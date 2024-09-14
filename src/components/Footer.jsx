import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2024 Dial Post Village. All rights reserved.</p>
        <p className="text-sm mb-4">A hidden gem in the heart of West Sussex</p>
        <div className="mb-4">
          <p className="mb-2">
            Contact Monty, site admin, for changes or information: 
            <a href="mailto:info@dialpostvillage.co.uk" className="underline hover:text-green-300 ml-1">info@dialpostvillage.co.uk</a>
          </p>
          <p>Feedback is very much appreciated!</p>
        </div>
        <div className="flex justify-center items-center">
          <span className="bg-yellow-500 text-black px-2 py-1 rounded-md text-sm font-bold mr-2">α</span>
          <p className="text-sm mr-2">This website is currently in Alpha stage.</p>
          <Link to="/alpha-explanation" className="text-sm underline hover:text-green-300">What does Alpha stage mean?</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
