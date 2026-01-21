import React, { useEffect } from 'react'; // 1. useEffect import koro
/* Components Import */
import ContactHero from '../components/ContactHero'; 
import Contact from '../components/Contact'; 
import ContactMap from '../components/ContactMap';

const ContactPage = () => {
  
  // 2. Page-e click korle jate ekdom upore niye jay
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A]">
      {/* ১. আপনার নতুন কন্টাক্ট হিরো */}
      <ContactHero />

      {/* ২. হিরোর ঠিক নিচেই কন্টাক্ট সেকশন */}
      <Contact />
      
      <ContactMap />
      <div className="pb-20"></div>
    </div>
  );
};

export default ContactPage;