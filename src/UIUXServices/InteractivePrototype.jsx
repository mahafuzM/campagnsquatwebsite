import React, { useEffect } from 'react';
import InteractivePrototypeComponent from '../components/InteractivePrototype'; 
import Contact from '../components/Contact';

const InteractivePrototype = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <InteractivePrototypeComponent />

      <Contact />
    </div>
  );
};

export default InteractivePrototype;