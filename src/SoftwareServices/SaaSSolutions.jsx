import React, { useEffect } from 'react';
import SaaSSolutionsComp from '../components/SaaSSolutions'; 
import { Contact2 } from 'lucide-react';
import Contact from '../components/Contact';

const SaaSSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <SaaSSolutionsComp />

      <Contact />
    </div>
  );
};

export default SaaSSolutions;