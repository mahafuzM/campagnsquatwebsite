import React, { useEffect } from 'react';
// ইমপোর্ট করার সময় নামটা পরিবর্তন করে নিন
import ECommerceAppsComp from '../components/ECommerceApps';
import Contact from '../components/Contact';

const ECommerceApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      {/* এখানে নতুন নামটা ব্যবহার করুন */}
      <ECommerceAppsComp />

      <Contact />
    </div>
  );
};

export default ECommerceApps;