import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/background-01-copyright (1).jpg';

const ProjectHero = () => {
  return (
    <section className="w-full bg-[#0a0a0a] overflow-hidden">
      
      <div className="w-full relative">
        
        <div className="relative w-full h-[400px] overflow-hidden shadow-2xl">
          
          {/* 1. Background Image */}
          <div 
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: `url("${heroImg}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.9) contrast(1.1)' 
            }}
          ></div>

          {/* 2. Overlay */}
          <div className="absolute inset-0 bg-black/30 z-[1]"></div>

          {/* 3. Content Layer */}
          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6 md:px-20">
            
            {/* Title - Our Case Study */}
            <h1 className="text-2xl md:text-[45px] font-[1000] text-white mb-6 md:whitespace-nowrap tracking-tight leading-tight drop-shadow-lg">
              Our Case Study
            </h1>

            {/* Description - 2 lines setup */}
            <p className="text-sm md:text-[20px] text-white mb-8 font-semibold leading-relaxed drop-shadow-md max-w-5xl">
              <span className="md:block">An Experience design agency building high-end products and experiences</span>
              <span className="md:block">that grow your business exponentially.</span>
            </p>

            {/* Home Button */}
            <Link to="/home">
              <button className="bg-[#F7A400] text-white  border-white/30 font-semibold py-3.5 px-14 rounded-lg hover:bg-[#02040A] hover:text-white transition-all duration-300 shadow-xl text-xl tracking-widest active:scale-95 border-2 hover:border-[#f7a400]">
                Home
              </button>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectHero;