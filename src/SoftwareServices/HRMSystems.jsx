import React, { useEffect } from 'react';
import HRMSystemsComp from '../components/HRMSystems'; 
import Contact from '../components/Contact';

const HRMSystems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <HRMSystemsComp />


      <Contact />
    </div>
  );
};

export default HRMSystems;