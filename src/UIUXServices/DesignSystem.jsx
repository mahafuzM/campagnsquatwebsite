import React, { useEffect } from 'react';
import DesignSystemComponent from '../components/DesignSystem'; 
import Contact from '../components/Contact';

const DesignSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <DesignSystemComponent />

      <Contact />
    </div>
  );
};

export default DesignSystem;