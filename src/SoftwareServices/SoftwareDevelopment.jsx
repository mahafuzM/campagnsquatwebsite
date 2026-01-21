import React, { useEffect } from 'react';
// ফাইলের নাম ও ফাংশনের নাম এক রাখতে হলে ইমপোর্ট করার সময় 'as' ব্যবহার করতে হবে
import SoftwareDevelopmentComp from '../components/SoftwareDevelopment'; 
import Contact from '../components/Contact';

const SoftwareDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <SoftwareDevelopmentComp />

      <Contact />
    </div>
  );
};

export default SoftwareDevelopment;