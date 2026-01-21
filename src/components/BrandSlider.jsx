import React from 'react';

// Importing brand logos from assets
import logo1 from '../assets/images/01-01.png';
import logo2 from '../assets/images/02.png';
import logo3 from '../assets/images/03-01.png';
import logo4 from '../assets/images/04-01.png';
import logo5 from '../assets/images/05-01.png';
import logo6 from '../assets/images/06-01.png';
import logo7 from '../assets/images/07-01.png';
import logo8 from '../assets/images/08-01.png';
import logo9 from '../assets/images/10-01.png';
import logo10 from '../assets/images/11-01.png';
import logo11 from '../assets/images/12-01.png';
import logo12 from '../assets/images/13-01.png';
import logo13 from '../assets/images/14-01.png';

const BrandSlider = () => {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, 
    logo8, logo9, logo10, logo11, logo12, logo13
  ];

  const firstRow = logos.slice(0, 7);
  const secondRow = logos.slice(7);

  return (
    <section className="w-full bg-[#02050A] py-10 md:py-16 -mt-10 md:-mt-20 overflow-hidden font-poppins relative z-10">
      {/* Container-e padding bariyechi jate duipase gap beshi thake */}
      <div className="max-w-[1445px] mx-auto px-6 md:px-16 lg:px-24">
        
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] flex flex-col gap-6">
          
          {/* Row 1: Left to Right */}
          <div className="slider-container">
            <div className="flex animate-scroll-right whitespace-nowrap items-center w-max pause-on-hover">
              {[...firstRow, ...firstRow].map((logo, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="flex-shrink-0 w-[140px] md:w-[180px] lg:w-[220px] h-20 md:h-28 flex items-center justify-center px-4 md:px-8"
                >
                  <img 
                    src={logo} 
                    alt="Brand" 
                    className="w-full h-full object-contain brightness-110 filter grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="slider-container">
            <div className="flex animate-scroll-left whitespace-nowrap items-center w-max pause-on-hover">
              {[...secondRow, ...secondRow, ...secondRow].map((logo, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="flex-shrink-0 w-[140px] md:w-[180px] lg:w-[220px] h-20 md:h-28 flex items-center justify-center px-4 md:px-8"
                >
                  <img 
                    src={logo} 
                    alt="Brand" 
                    className="w-full h-full object-contain brightness-110 filter grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandSlider;