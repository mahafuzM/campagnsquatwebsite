import React, { useEffect } from 'react';
// Import korar somoy nam ektu bodle de jate niche conflict na hoy
import UIUXDesignSection from '../components/UIUXDesign'; 
import Contact from '../components/Contact';

const UiUxDesignPage = () => { // Page-er nam ektu alada rakh (UiUxDesignPage)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      {/* Ekhone component-ta thik nam-e call hobe */}
      <UIUXDesignSection /> 

      <Contact />
    </div>
  );
};

export default UiUxDesignPage;