import React, { useEffect } from 'react';
import PersonalBranding from '../components/PersonalBranding'; 
import Contact from '../components/Contact';

const PersonalBrandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <PersonalBranding />
      <Contact />
    </div>
  );
};

export default PersonalBrandingPage;