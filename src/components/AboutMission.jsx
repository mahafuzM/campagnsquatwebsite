import React from 'react';

const AboutMission = () => {
  return (
    <section className="w-full bg-[#02050A] py-16 md:py-24 font-poppins">
      {/* 1445px Container with consistent padding */}
      <div className="max-w-[1445px] mx-auto px-8 md:px-16 lg:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* --- Our Mission Card --- */}
          <div className="group bg-white/5 p-8 md:p-12 rounded-2xl border border-[#02050A] hover:border-[#F7A400] transition-all duration-300 cursor-pointer">
            <div className="mb-6 flex items-center gap-4">
              {/* Icon BG: Fixed #02050A, Border #F7A400 */}
              <div className="w-12 h-12 bg-[#02050A] rounded-full flex items-center justify-center border border-[#F7A400]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl md:text-3xl">Our Mission</h3>
            </div>
            <p className="text-white text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
              Revolutionize the way you work with our solutions designed to meet the challenges of today's 
              business landscape revolutionize. We focus on delivering precision-crafted results that empower growth.
            </p>
          </div>

          {/* --- Our Vision Card --- */}
          <div className="group bg-white/5 p-8 md:p-12 rounded-2xl border border-[#02050A] hover:border-[#F7A400] transition-all duration-300 cursor-pointer">
            <div className="mb-6 flex items-center gap-4">
              {/* Icon BG: Fixed #02050A, Border #F7A400 */}
              <div className="w-12 h-12 bg-[#02050A] rounded-full flex items-center justify-center border border-[#F7A400]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl md:text-3xl">Our Vision</h3>
            </div>
            <p className="text-white text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
              Revolutionize the way you work with the solutions designed to meet unique challenges 
              of today’s business landscape revolutionize. We aim to be the global leader in innovative tech solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMission;