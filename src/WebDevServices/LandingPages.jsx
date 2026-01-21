import React, { useEffect } from 'react';
import LandingPages from '../components/LandingPages'; 
import Contact from '../components/Contact';

const LandingPagesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <LandingPages />
      <Contact />
    </div>
  );
};

export default LandingPagesPage;