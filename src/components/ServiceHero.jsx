import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/background-01-copyright (1).jpg';

const SarviceHero = () => {
  return (
    <section className="w-full bg-[#0a0a0a] overflow-hidden">
      
      <div className="w-full relative">
        
        <div className="relative w-full h-[400px] overflow-hidden shadow-2xl">
          
          {/* ১. ব্যাকগ্রাউন্ড ইমেজ */}
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

          {/* ২. হালকা ওভারলে */}
          <div className="absolute inset-0 bg-black/30 z-[1]"></div>

          {/* ৩. কন্টেন্ট লেয়ার */}
          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6 md:px-20">
            
            {/* টাইটেল */}
            <h1 className="text-2xl md:text-[45px] font-[1000] text-white mb-6 md:whitespace-nowrap tracking-tight leading-tight drop-shadow-lg">
              Digital Product Design & Consulting
            </h1>

            {/* ৪. ডেসক্রিপশন (p tag) - সুন্দরভাবে ২ লাইনে সাজানো হয়েছে */}
            <p className="text-sm md:text-[20px] text-white mb-8 font-semibold leading-relaxed drop-shadow-md">
              <span className="md:block">Bridging the gap between complex tech and intuitive design.</span>
              <span className="md:block">We build scalable, market-ready digital products from your ideas.</span>
            </p>

            {/* বাটন */}
            <Link to="/home">
              <button className="bg-[#F7A400] text-white border-2 border-[#F7A400] font-semibold py-3.5 px-14 rounded-lg hover:bg-[#02040A] hover:text-white transition-all duration-300 shadow-xl text-lg tracking-widest active:scale-95">
                Home
              </button>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SarviceHero;