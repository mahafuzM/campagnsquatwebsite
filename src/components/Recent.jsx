import React from 'react';
import { Play } from 'lucide-react'; 
import study1 from '../assets/images/study 1.jpg';
import study2 from '../assets/images/study 2.jpg';

const Recent = () => {
  return (
    <section className="w-full bg-[#02050A] py-12 md:py-24 overflow-hidden font-poppins">
      
      {/* Container with consistent 1445px max-width and side padding */}
      <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 text-center">
        
        {/* Header Section */}
        <h2 className="text-3xl sm:text-[45px] md:text-6xl lg:text-[45px] font-extrabold text-white mb-6 md:mb-10 tracking-tight text-balance uppercase">
          Our Recent Project Videos
        </h2>
        
        <p className="text-gray-300 text-base sm:text-[10px] md:text-[20px] max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed">
          Turning complex visions into high-performance reality. <br className="hidden md:block" /> 
          Watch our latest work in action.
        </p>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          
          {/* Project Card 1 - Increased height using aspect-[16/10] */}
          <div className="relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl border border-white/10 aspect-[16/10] md:aspect-[16/9.5] lg:aspect-[16/10]">
            <img 
              src={study1} 
              alt="Project Video 1" 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all duration-300">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-[#f7a400] rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Play fill="black" color="black" size={48} className="ml-1" />
              </div>
            </div>
          </div>

          {/* Project Card 2 - Increased height using aspect-[16/10] */}
          <div className="relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl border border-white/10 aspect-[16/10] md:aspect-[16/9.5] lg:aspect-[16/10]">
            <img 
              src={study2} 
              alt="Project Video 2" 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all duration-300">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-[#f7a400] rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Play fill="black" color="black" size={48} className="ml-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Recent;