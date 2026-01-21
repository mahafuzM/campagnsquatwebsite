import React, { useEffect } from 'react';
import WebDesignDevelopment from '../components/WebDesignDevelopment'; 
import Contact from '../components/Contact';

const WebDesignDevelopmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <WebDesignDevelopment />
      <Contact />
    </div>
  );
};

export default WebDesignDevelopmentPage;