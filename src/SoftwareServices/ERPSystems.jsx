import React, { useEffect } from 'react';
import ERPSystemsComp from '../components/ERPSystems'; 
import Contact from '../components/Contact';

const ERPSystems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <ERPSystemsComp />

      <Contact />
    </div>
  );
};

export default ERPSystems;