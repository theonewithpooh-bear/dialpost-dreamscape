import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { navItems } from '../nav-items';

const MobileNavigation = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-green-50 z-50 p-4 overflow-y-auto">
      <div className="flex justify-end mb-4">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-green-100 transition-colors duration-200"
            onClick={onClose}
          >
            <div className="text-green-600 mb-2">{item.icon}</div>
            <span className="text-sm text-center text-green-800">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;