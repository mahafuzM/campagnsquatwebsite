import React, { useEffect } from 'react';
import AppInterfaceComponent from '../components/AppInterface'; 
import IosAppsCom from '../components/IosApps';
import Contact from '../components/Contact';

const IosApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <IosAppsCom /> 

      <Contact />
    </div>
  );
};

export default IosApps;