import React, { useEffect } from 'react'; // useEffect import kora hoyeche
/* 1. Importing all components for the Home Page */
import Header from '../components/Header';
import BrandSlider from '../components/BrandSlider'; 
import CampaignSquat from '../components/campaignsquat'; 
import SkillsGrid from '../components/SkillsGrid'; 
import Services from '../components/Service'; 
import WorkProcess from '../components/WorkProcess';
import Agency from '../components/Agency'; 
import Recent from '../components/Recent';
import CaseStudy from '../components/CaseStudy'; 
import SuccessStory from '../components/SuccessStory'; 
import Questions from '../components/Questions';
import Contact from '../components/Contact';


const Home = () => {
  
  // Home page load hole scroll top-e niye jabe
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* 2. Hero Header Section */}
      <Header />

      {/* 3. Trusted Brand Logos Slider */}
      <BrandSlider />

      {/* 4. Company Overview & About Information */}
      <CampaignSquat />

      {/* 5. Technologies & Skillsets Grid */}
      <SkillsGrid />

      {/* 6. Professional Services Offerings */}
      <Services />

      {/* 7. Step-by-Step Workflow Process */}
      <WorkProcess />

      {/* 8. Agency Specialized Features */}
      <Agency />

      {/* 9. Showcase of Recent Projects */}
      <Recent />

      {/* 10. In-depth Case Studies Analysis */}
      <CaseStudy />

      {/* 11. Client Testimonials & Success Stories */}
      <SuccessStory />

      {/* 12. Frequently Asked Questions (FAQ) */}
      <Questions />

      {/* 13. Project Inquiry & Contact Form */}
      <Contact />

      {/* 14. Email Subscription Newsletter */}
      
    </main>
  );
};

export default Home;