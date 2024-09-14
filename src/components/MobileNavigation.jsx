import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { navItems } from '../nav-items';

const MobileNavigation = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-green-700">
          <X size={24} />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg"
            onClick={onClose}
          >
            <div className="text-green-600 mb-2">{item.icon}</div>
            <span className="text-xs text-center text-green-800">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
