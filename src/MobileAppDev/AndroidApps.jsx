import React, { useEffect } from 'react';
// ইমপোর্ট করার সময় নাম বদলে AndroidAppsComp করে দিন
import AndroidAppsComp from '../components/AndroidApps';
import Contact from '../components/Contact';


const AndroidApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      {/* এখানে এখন নতুন নামটা ব্যবহার করুন */}
      <AndroidAppsComp />
      
      <Contact />
    </div>
  );
};

export default AndroidApps;