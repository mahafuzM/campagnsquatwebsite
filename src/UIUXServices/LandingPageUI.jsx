import React, { useEffect } from 'react';
import LandingPageUIComponent from '../components/LandingPageUI'; 
import Contact from '../components/Contact';

const LandingPageUI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <LandingPageUIComponent />


      <Contact />
    </div>
  );
};

export default LandingPageUI;