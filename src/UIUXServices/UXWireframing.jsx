import React, { useEffect } from 'react';
import UXWireframingComponent from '../components/UXWireframing'; 
import Contact from '../components/Contact';

const UXWireframing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <UXWireframingComponent />

      <Contact />
    </div>
  );
};

export default UXWireframing;