import React, { useEffect } from 'react';
import SiteOptimization from '../components/SiteOptimization'; 
import Contact from '../components/Contact';

const SiteOptimizationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <SiteOptimization />

      <Contact />
    </div>
  );
};

export default SiteOptimizationPage;