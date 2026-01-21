import React from 'react';
import processImg from '../assets/images/process-img.png';

const Agency = () => {
  return (
    <section className="w-full bg-[#02050A] py-12 md:py-24 flex justify-center items-center overflow-hidden">
      {/* Container: Increased side padding to create more space on both sides */}
      <div className="max-w-[1445px] w-full mx-auto px-8 sm:px-14 md:px-20 lg:px-24 flex justify-center">
        
        <div className="w-full flex justify-center items-center">
          <img 
            src={processImg} 
            alt="Agency Process" 
            className="
              w-full 
              h-auto 
              max-w-[1200px] /* Limits the image width for better visual balance */
              max-h-[350px] md:max-h-full 
              object-contain 
              brightness-110
              transition-transform
              duration-500
              hover:scale-[1.02] /* Subtle hover effect */
            "
          />
        </div>
        
      </div>
    </section>
  );
};

export default Agency;