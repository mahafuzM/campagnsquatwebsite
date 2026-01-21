import React, { useEffect } from 'react';
import ECommerceDev from '../components/ECommerceDev'; 
import Contact from '../components/Contact';

const ECommerceDevPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <ECommerceDev />
      <Contact />
    </div>
  );
};

export default ECommerceDevPage;