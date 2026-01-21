import React from 'react';
import { Link } from 'react-router-dom'; // Link import kora hoyeche
import webDevImg from '../assets/images/rfom38gbminqxoy56msn (2).webp';

const ServiceWeb = () => {
  // Point gulo ke link er shathe mapping kora hoyeche
  const points = [
    { name: "Custom Websites", link: "/custom-websites" },
    { name: "WordPress Dev", link: "/wordpress-development" },
    { name: "Landing Pages", link: "/landing-pages" },
    { name: "Corporate Sites", link: "/corporate-sites" },
    { name: "Personal Branding", link: "/personal-branding" },
    { name: "Site Optimization", link: "/site-optimization" },
    { name: "E-commerce Development", link: "/ecommerce-development" }
  ];

  return (
    <section className="w-full bg-[#02050A] py-10 md:py-20 overflow-hidden">
      
      <div className="max-w-[1445px] mx-auto px-4 md:px-16 lg:px-24">
        
        <div className="w-full border border-white/10 rounded-[10px] p-6 md:p-12 lg:p-16 shadow-2xl bg-[#0A0A0A]">
          
          <div className="flex flex-col lg:flex-row-reverse items-stretch justify-between gap-10 lg:gap-20">
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              
              <h2 className="text-white text-3xl md:text-4xl lg:text-[42px] font-black mb-6 md:mb-8 leading-tight tracking-tight lg:whitespace-nowrap">
                Web Design & <span className="">Development</span>
              </h2>
              
              <p className="text-white text-sm md:text-[18px] mb-8 md:mb-10 leading-relaxed">
                Building fast, responsive, and SEO-optimized websites <br className="hidden md:block" /> 
                tailored to your brand’s growth.
              </p>

              <div className="flex flex-col w-full">
                {points.map((point, index) => (
                  <Link key={index} to={point.link} className="w-full group block cursor-pointer">
                    <div className="flex items-center gap-4 py-4 md:py-6">
                      
                      <svg 
                        className="w-5 h-5 md:w-6 md:h-6 text-[#F7A400] transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                      </svg>
                      
                      <span className="text-white font-bold text-base md:text-xl lg:text-[22px] transition-all duration-300 group-hover:text-[#F7A400]">
                        {point.name}
                      </span>
                    </div>
                    
                    <div className="w-full h-[1px] bg-white/20 group-hover:bg-[#F7A400]/40 transition-all duration-300"></div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-full rounded-[10px] overflow-hidden border border-white/10 shadow-sm">
                <img 
                  src={webDevImg} 
                  alt="Web Design & Development" 
                  className="absolute inset-0 w-full h-full object-cover opacity-95 transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ServiceWeb;