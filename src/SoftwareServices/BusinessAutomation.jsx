import React, { useEffect } from 'react';
import BusinessAutomationComp from '../components/BusinessAutomation'; 
import Contact from '../components/Contact';

const BusinessAutomation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <BusinessAutomationComp />

      <Contact />
    </div>
  );
};

export default BusinessAutomation;