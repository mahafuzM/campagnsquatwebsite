import React, { useEffect } from 'react';
// এখানে নামটা 'CrossPlatformComp' রাখলাম যাতে নিচের ফাংশনের সাথে না মিলে
import CrossPlatformComp from '../components/CrossPlatform'; 
import Contact from '../components/Contact';

const CrossPlatformPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A]">
      {/* আসল ডিজাইন কম্পোনেন্ট */}
      <CrossPlatformComp />
      
      {/* কন্টাক্ট সেকশন */}
      <Contact />
    </div>
  );
};

// এই নামটাই App.js এ lazy import হিসেবে কাজ করবে
export default CrossPlatformPage;