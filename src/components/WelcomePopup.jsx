import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { differenceInDays, parse } from 'date-fns';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
    const today = new Date();
    const expirationDate = parse('2024-09-20', 'yyyy-MM-dd', new Date());
    
    if (!hasSeenPopup && differenceInDays(expirationDate, today) > 0) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to Alpha Version 1.1</DialogTitle>
          <DialogDescription>
            <p className="mb-4">We're excited to introduce the latest updates to our Dial Post Village website:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Improved navigation with a cleaner layout</li>
              <li>New 'History' and 'Listed Buildings' pages</li>
              <li>Enhanced 'Businesses' page with more local information</li>
              <li>Responsive design for better mobile experience</li>
              <li>Performance optimizations for faster loading</li>
            </ul>
            <p>Thank you for being part of our alpha testing. Your feedback is valuable!</p>
          </DialogDescription>
        </DialogHeader>
        <Button onClick={handleClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;