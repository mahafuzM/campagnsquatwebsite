import React, { useEffect } from 'react';
import CorporateSites from '../components/CorporateSites'; 
import Contact from '../components/Contact';

const CorporateSitesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <CorporateSites />

      <Contact />
    </div>
  );
};

export default CorporateSitesPage;