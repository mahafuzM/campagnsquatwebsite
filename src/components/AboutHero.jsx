import React from 'react';
/* 1. Import the hero image from assets */
import heroImg from '../assets/images/pexels-fauxels-3184421.jpg';

const AboutHero = () => {
  return (
    <section className="w-full bg-[#050505] pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 font-poppins">
      
      {/* Running Border Animation CSS */}
      <style>{`
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .running-border-wrapper {
          position: relative;
          padding: 2px;
          overflow: hidden;
          width: 100%;
        }
        .running-border-line {
          position: absolute;
          width: 300%;
          height: 300%;
          top: -100%;
          left: -100%;
          background: conic-gradient(transparent, transparent, transparent, #F7A400);
          animation: rotate-border 4s linear infinite;
          z-index: 0;
        }
        .inner-img-box {
          position: relative;
          z-index: 1;
          background: #050505;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <div className="max-w-[1445px] mx-auto flex flex-col items-center">
        
        {/* 2. Headline */}
        <h1 
          className="text-white font-bold text-center mb-10 md:mb-16 max-w-[1000px] leading-[1.2] md:leading-tight"
          style={{ fontSize: 'clamp(28px, 35px, 45px)' }} 
        >
          We Design & Build Digital <br className="hidden md:block" /> 
          Experiences That Move the Needle
        </h1>

        {/* 3. Hero Image Section with FIXED SMALL HEIGHT */}
        <div className="w-full max-w-[1300px] running-border-wrapper rounded-[10px] shadow-2xl border border-white/10">
          
          <div className="running-border-line"></div>

          {/* Eikhane height ta force kora hoyeche */}
          <div 
            className="inner-img-box rounded-[10px] h-[300px] md:h-[500px] lg:h-[650px]"
          >
            <img 
              src={heroImg} 
              alt="Digital Experiences"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;