import React, { useState, useEffect } from 'react'; 
import headerBg from '../assets/images/124274 (1).jpg';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const vimeoId = "1153559168"; 

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isVideoOpen]);

  return (
    <section className="relative w-full bg-[#02050A] pt-32 md:pt-48 font-poppins overflow-hidden">
      
      <style>{`
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .running-border-container {
          position: relative;
          padding: 2.2px; 
          overflow: hidden;
          display: inline-block;
        }
        .running-border-line {
          position: absolute;
          width: 250%;
          height: 250%;
          top: -75%;
          left: -75%;
          background: conic-gradient(transparent, transparent, transparent, #F7A400);
          animation: rotate-border 4s linear infinite;
          z-index: 0;
        }
        .inner-content {
          position: relative;
          z-index: 1;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-6 xl:px-12 flex flex-col items-center text-center">
        <div className="mb-6 md:mb-10">
          <div className="running-border-container rounded-xl overflow-hidden shadow-lg">
            <div className="running-border-line"></div>
            {/* Darker BG #050505 for extra depth */}
            <div className="inner-content bg-[#92817A]/20 px-6 py-2 md:px-10 md:py-4 rounded-xl">
              <span className="text-white text-[14px] md:text-[20px] font-medium">
                Where Creativity Meets High-End Engineering
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1300px] mb-6 md:mb-8">
          <h1 className="text-white font-bold leading-[1.2] tracking-tight">
            <span className="block text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px]">
              Engineering the Next Generation of
            </span>
            <span className="text-[#F7A400] text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] block mt-2 md:mt-6">
              Digital Products
            </span>
          </h1>
        </div>

        <div className="max-w-[850px] mb-8 md:mb-12">
          <p className="text-white text-[15px] md:text-[19px] leading-relaxed">
            We build high-performance software and intuitive digital experiences. Helping 
            <br className="hidden md:block" /> 
            brands scale through cutting-edge design and engineering.
          </p>
        </div>

        <div className="mb-16 md:mb-24">
         <Link to="/contact" className="block w-full sm:w-auto">
           <button className="w-full sm:w-auto bg-[#F7A400] text-white font-semibold text-[14px] md:text-[16px] py-3.5 px-8 rounded-lg border-2 border-[#F7A400] hover:bg-transparent hover:text-white transition-all duration-300 active:scale-95">
         Get Started
       </button>
       </Link>
        </div>
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-12 pb-20 md:pb-32">
        <div 
          className="running-border-container rounded-2xl md:rounded-3xl cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] w-full"
          onClick={() => setIsVideoOpen(true)}
        >
          <div className="running-border-line"></div>
          
          <div className="inner-content bg-[#02050A] rounded-2xl md:rounded-3xl group">
            <img 
              src={headerBg} 
              alt="Product" 
              className="w-full h-[250px] sm:h-[350px] md:h-[550px] lg:h-[645px] object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-300">
              <div className="w-14 h-14 md:w-24 md:h-24 bg-[#F7A400] rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 active:scale-90">
                <svg viewBox="0 0 24 24" fill="black" className="w-8 h-8 md:w-16 md:h-16 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 md:top-10 md:right-12 text-white text-5xl md:text-8xl font-thin hover:text-[#F7A400] transition-colors z-[1001] cursor-pointer"
          >
            &times;
          </button>
          
          <div className="w-full max-w-[1440px] aspect-video bg-black overflow-hidden border border-white/10 shadow-2xl rounded-lg transform transition-all duration-500 scale-100">
            <iframe 
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&badge=0&autopause=0`} 
              className="w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title="Vimeo Video"
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
};

export default Header;