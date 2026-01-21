import React, { useEffect } from 'react';
import AppInterfaceComponent from '../components/AppInterface'; 
import MobileAppDevelopmentCom from '../components/MobileAppDevelopment';
import Contact from '../components/Contact';

const MobileAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <MobileAppDevelopmentCom /> 

      <Contact />
    </div>
  );
};

export default MobileAppDevelopment;