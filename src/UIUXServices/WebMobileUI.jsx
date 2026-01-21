import React, { useEffect } from 'react';
import WebMobileUIComponent from '../components/WebMobileUI'; 
import Contact from '../components/Contact';

const WebMobileUI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <WebMobileUIComponent />



      <Contact />
    </div>
  );
};

export default WebMobileUI;