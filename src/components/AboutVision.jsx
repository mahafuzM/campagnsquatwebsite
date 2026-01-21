import React from 'react';
/* 1. Importing the image from assets */
import visionImg from '../assets/images/pexels-fauxels-3182812.jpg';
import { Link } from 'react-router-dom';

const AboutVision = () => {
  return (
    <section className="w-full bg-[#02050A] py-12 md:py-24 font-poppins overflow-hidden">
      {/* Container matching Navbar padding responsive */}
      <div className="max-w-[1445px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          
          {/* LEFT SIDE: Image Section - Responsive Height */}
          <div className="w-full lg:w-[46%]"> 
            <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl border border-white/10 shadow-xl">
              <img 
                src={visionImg} 
                alt="Our Vision" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Text Content Section */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center text-left">
            
            {/* Header Text - Responsive Font Size */}
            <h2 
              className="text-white font-bold leading-[1.3] md:leading-[1.5] mb-6" 
              style={{ fontSize: 'clamp(28px, 5vw, 40px)' }}
            >
              Excellence Through Innovation <br className="hidden sm:block" /> Powered by CampaignSquat Ltd 
            </h2>

            {/* Description Text - Responsive Font Size */}
            <p 
              className="text-white font-normal leading-[1.6] md:leading-[1.8] mb-8" 
              style={{ fontSize: 'clamp(16px, 3vw, 20px)' }}
            >
              At CampaignSquad, we don't just build websites; we engineer digital ecosystems. 
              By blending sophisticated AI integration with high-performance web architecture, 
              we empower businesses to transcend traditional boundaries and achieve scalable 
              growth through precision-crafted, future-ready technology.
            </p>

            {/* Button - Responsive width on mobile */}
            <div className="mt-2">
              <Link to="/projects">
  <button className="w-full sm:w-auto bg-[#F7A400] text-white font-bold py-3.5 md:py-4 px-10 rounded-md text-[16px] hover:bg-transparent  border-2 border-[#F7A400] transition-all duration-300 active:scale-95 shadow-lg">
    Our Project
  </button>
</Link>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVision;