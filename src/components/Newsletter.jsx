import React from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="w-full bg-[#02050A] py-12 md:py-20 overflow-hidden font-poppins">
      {/* Container: Synchronized with 1445px max-width and consistent side padding */}
      <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        
        {/* Newsletter Box */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
          
          {/* Background Subtle Light Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f7a400] opacity-5 blur-[100px] pointer-events-none"></div>
          
          {/* Text Content */}
          <div className="text-center lg:text-left z-10 w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight  tracking-tight">
              Don't Miss Out the Future!
            </h2>
            <p className="text-white00 text-lg md:text-xl">
              Stay updated with our latest insights and innovations.
            </p>
          </div>

          {/* Subscription Form Container */}
          <div className="w-full lg:w-[550px] z-10">
            <form className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-[#02050A] p-2 rounded-xl border border-white/10 focus-within:border-[#f7a400] transition-all w-full">
              <input 
                type="email" 
                placeholder="Enter email here" 
                className="w-full flex-1 bg-transparent px-4 py-3 text-white focus:outline-none placeholder:text-white text-base md:text-lg"
                required
              />
              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#f7a400] text-white  font-semibold px-8 py-3.5 rounded-lg flex items-center justify-center gap-1 border-2 border-[#F7A400] hover:bg-[#0A0A0A] hover:border-[#F7A400] transition-all duration-300 whitespace-nowrap text-sm md:text-lg group   "
              >
                Submit Now
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Newsletter;