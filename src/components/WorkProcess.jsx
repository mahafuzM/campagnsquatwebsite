import React from 'react';
import discoveryImg from '../assets/images/research.png';
import designImg from '../assets/images/ux-design (1).png';
import devImg from '../assets/images/web-design.png';
import deployImg from '../assets/images/deployment.png';

const WorkProcess = () => {
  const steps = [
    {
      title: "Discovery",
      description: "We Analyze Your Goals To Build A Strategic Technical Roadmap.",
      image: discoveryImg
    },
    {
      title: "Design",
      description: "Crafting Intuitive Interfaces That Simplify The User Experience.",
      image: designImg
    },
    {
      title: "Development",
      description: "Building High-Performance Systems With Clean, Scalable Code.",
      image: devImg
    },
    {
      title: "Deploy",
      description: "Final Optimization And Launch For A Seamless Market Entry.",
      image: deployImg
    }
  ];

  return (
    <section className="w-full bg-[#02050A] py-24 md:py-32 font-poppins overflow-hidden">
      {/* Container: Synced with 1445px and centered padding */}
      <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <h2 className="text-white text-[25px] md:text-[45px] font-extrabold tracking-tight leading-tight">
            Follow 4 Easy Work Steps
          </h2>
          
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              
              {/* Image Circle Container */}
              <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                
                {/* Golden Circle (Animated Background) */}
                <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                
                {/* Main Dark Circle */}
                <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full flex flex-col items-center">
                <h3 className="text-white text-[24px] md:text-[26px] lg:text-[28px] font-bold mb-4 tracking-wide uppercase transition-colors duration-300 group-hover:text-[#F7A400]">
                  {step.title}
                </h3>
                {/* Description - Updated to text-white with slight opacity */}
                <p className="text-white opacity-white text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed max-w-[260px] sm:max-w-[240px] md:max-w-none">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;