import React, { useEffect } from 'react';
import AppInterfaceComponent from '../components/AppInterface'; 
import Contact from '../components/Contact';

const AppInterface = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <AppInterfaceComponent />

      <Contact />
    </div>
  );
};

export default AppInterface;