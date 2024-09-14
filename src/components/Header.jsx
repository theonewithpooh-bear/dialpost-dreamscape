import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = ({ onOpenNavigation }) => {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-900 text-white py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold animate-typewriter special-elite-regular">Dial Post</h1>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={onOpenNavigation} 
          aria-label="View Navigation"
          className="text-white border-white hover:bg-green-600"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
