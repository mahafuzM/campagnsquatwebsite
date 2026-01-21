import React, { useEffect } from 'react';
import ApiIntegrationComp from '../components/ApiIntegration'; 
import Contact from '../components/Contact';

const ApiIntegration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <ApiIntegrationComp />

      <Contact />
    </div>
  );
};

export default ApiIntegration;