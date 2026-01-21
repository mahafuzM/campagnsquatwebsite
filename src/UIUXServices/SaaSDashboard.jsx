import React, { useEffect } from 'react';
import SaaSDashboardComponent from '../components/SaaSDashboard'; 
import Contact from '../components/Contact';

const SaaSDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <SaaSDashboardComponent />

      <Contact />
    </div>
  );
};

export default SaaSDashboard;