import React, { useEffect } from 'react';
import CustomWebsites from '../components/CustomWebsites'; 
import Contact from '../components/Contact';

const CustomWebsitesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <CustomWebsites />

      <Contact />
    </div>
  );
};

export default CustomWebsitesPage;