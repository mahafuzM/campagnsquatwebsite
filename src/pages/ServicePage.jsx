import React, { useEffect } from 'react'; // 1. useEffect import kora hoyeche
import ServiceHero from '../components/ServiceHero';
import ServiceUi from '../components/ServiceUi';
import ServiceWeb from '../components/ServiceWeb';
import ServiceSoftwer from '../components/ServiceSoftwer';
import ServiceMobile from '../components/ServiceMobile';
import Contact from '../components/Contact';

const Service = () => {
  
  // 2. Page load hole scroll top-e niye jawar logic
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#02050A]">
      {/* Section 1: Hero Section */}
      <ServiceHero />
      
      {/* Section 2: UI/UX Services */}
      <ServiceUi />

      {/* Section 3: Web Development */}
      <ServiceWeb />

      {/* Section 4: Software Solutions */}
      <ServiceSoftwer />
      
      {/* Section 5: Mobile App Development */}
      <ServiceMobile />
     
      {/* Section 6: Global Contact */}
      <Contact />
    </main>
  );
};

export default Service;