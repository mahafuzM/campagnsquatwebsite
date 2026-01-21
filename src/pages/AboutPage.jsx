import React, { useEffect } from 'react'; // useEffect add kora hoyeche
/* 1. Importing all About Page Sections */
import AboutHero from '../components/AboutHero';
import AboutVision from '../components/AboutVision';
import AboutMission from '../components/AboutMission'; 
import AboutFeatures from '../components/AboutFeatures';
import AboutRecognition from '../components/AboutRecognition';
import AboutTeam from '../components/AboutTeam';
import AboutGallery from '../components/AboutGallery';
import Contact from '../components/Contact';

const About = () => {

  // Page-e click korle scroll upore niye jawar jonno eita dorkar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#02050A]">
      {/* Section 1: Hero Section */}
      <AboutHero />

      {/* Section 2: Excellence Through Innovation Section */}
      <AboutVision />

      {/* Section 3: Image Gallery */}
      <AboutGallery />

      {/* Section 4: Our Mission & Vision */}
      <AboutMission />
      
      {/* Section 5: Features */}
      <AboutFeatures />

      {/* Section 6: Recognition */}
      <AboutRecognition />

      {/* Section 7: Team */}
      <AboutTeam />

      <Contact />
    </main>
  );
};

export default About;