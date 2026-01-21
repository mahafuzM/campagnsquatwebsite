import React, { useEffect } from 'react';
import AppInterfaceComponent from '../components/AppInterface'; 
import OnDemandAppsCom from '../components/OnDemandApps';
import Contact from '../components/Contact';

const OnDemandApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <OnDemandAppsCom /> 
      <Contact />
    </div>
  );
};

export default OnDemandApps;