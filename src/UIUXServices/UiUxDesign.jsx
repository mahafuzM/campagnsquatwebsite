import React, { useEffect } from 'react';
import UIUXDesign from '../components/UIUXDesign';
import Contact from '../components/Contact';


const UiUxDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <UIUXDesign />

      <Contact />
    </div>
  );
};

export default UiUxDesign;