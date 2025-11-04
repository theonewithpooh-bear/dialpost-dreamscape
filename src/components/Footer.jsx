import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Dial Post Village</h3>
            <p className="text-sm opacity-90">A hidden gem in the heart of West Sussex</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <p className="text-sm opacity-90 mb-2">
              Site admin: Monty
            </p>
            <a 
              href="mailto:info@dialpostvillage.co.uk" 
              className="text-sm opacity-90 hover:opacity-100 transition-opacity underline"
            >
              info@dialpostvillage.co.uk
            </a>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Feedback</h3>
            <p className="text-sm opacity-90">
              We'd love to hear from you! Your feedback helps us improve the site.
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm opacity-80">&copy; 2024 Dial Post Village. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
