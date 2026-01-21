import React, { useEffect } from 'react';
import CustomCRMComp from '../components/CustomCRM'; 
import Contact from '../components/Contact';

const CustomCRM = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <CustomCRMComp />


      <Contact />
    </div>
  );
};

export default CustomCRM;