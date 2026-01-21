import React from 'react';
import { Link } from 'react-router-dom'; 
import aboutBanner from '../assets/images/h2-about-banner.webp'; 

const CampaignSquat = () => {
  // Stats Data
  const stats = [
    { value: "6+", label: "years experience" },
    { value: "10+", label: "Creative Members" },
    { value: "150+", label: "Successful Projects" },
    { value: "125+", label: "Happy Client" },
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-16 md:py-28 font-poppins overflow-hidden">
      {/* Container: Max-width set to 1440px for wide screens */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Top Section: Image and Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16 md:mb-24">
          
          {/* Left Side: Landscape Banner Image */}
          <div className="w-full flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full max-w-[600px]"> 
              <img 
                src={aboutBanner} 
                alt="About CampaignSquat" 
                className="w-full h-[280px] md:h-[350px] rounded-3xl object-cover shadow-2xl border border-white/5 transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col items-start space-y-6 md:space-y-8 order-1 lg:order-2">
            <h2 className="text-white text-[32px] md:text-[45px] lg:text-[55px] font-bold leading-[1.1] tracking-tight">
              We are Campaignsquat Ltd
            </h2>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[600px]">
              A high-performance squad of engineers and designers, crafting scalable 
              solutions where complex tech meets human experience.
            </p>
            
            {/* Click dile AboutPage.jsx a jabe */}
            <Link to="/about">
              <button className="bg-[#F7A400] text-white font-bold text-[15px] md:text-[17px] py-3.5 px-10 rounded-lg hover:bg-transparent border-2 border-[#F7A400] transition-all duration-300 active:scale-95">
                More About
              </button>
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/10 mb-12 md:mb-16"></div>

        {/* Bottom Section: Modern Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 w-full">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start lg:items-center text-left lg:text-center group w-full"
            >
              {/* Animated Value */}
              <h3 className="text-[#F7A400] text-[35px] md:text-[50px] lg:text-[55px] font-bold leading-none mb-3 transition-transform duration-500 group-hover:scale-110">
                {stat.value}
              </h3>
              {/* Uppercase Label */}
              <p className="text-white text-[12px] md:text-[14px] lg:text-[15px] font-medium tracking-[2px] whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CampaignSquat;