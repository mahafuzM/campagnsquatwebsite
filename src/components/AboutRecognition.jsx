import React from 'react';
/* আপনার ইমেজ পাথ */
import recognitionImg from '../assets/images/pexels-fauxels-3182812.jpg';

const AboutRecognition = () => {
  const data = [
    { platform: "Clutch", desc: "Top B2B Service Provider & UX Design Agency" },
    { platform: "Upwork", desc: "Top Rated Design Agency" },
    { platform: "Fiverr.", desc: "Pro-Verified Development Squad" }
  ];

  return (
    <section className="w-full bg-[#02050A] py-16 md:py-24 font-poppins overflow-hidden">
      <div className="max-w-[1445px] mx-auto px-8 md:px-16 lg:px-24">
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Image - Resized as you liked */}
          <div className="w-full lg:w-[40%]">
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[520px] overflow-hidden rounded-xl border border-white/5">
              <img 
                src={recognitionImg} 
                alt="Our Recognition" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Text Content - Big Bold Style Like Before */}
          <div className="w-full lg:w-[55%] flex flex-col pt-2">
            <h2 className="text-white font-bold text-3xl md:text-5xl mb-12 tracking-tight">
              The Global Recognition
            </h2>

            <div className="flex flex-col">
              {data.map((item, index) => (
                <div 
                  key={index} 
                  className="py-8 md:py-10 border-b border-white/10 last:border-none group"
                >
                  {/* Platform Name - Back to Extra Large (7xl) */}
                  <h3 className="text-white font-bold text-5xl md:text-7xl mb-4 tracking-tighter group-hover:text-[#F7A400] transition-colors duration-300">
                    {item.platform}
                  </h3>
                  {/* Description - Large and Clear */}
                  <p className="text-white font-medium text-xl md:text-2xl opacity-90 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutRecognition;