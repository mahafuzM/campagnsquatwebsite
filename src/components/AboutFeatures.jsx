import React from 'react';

const AboutFeatures = () => {
  const features = [
    { 
      title: "User-First Design", 
      desc: "We focus on creating intuitive experiences that make your users' lives easier and keep them coming back.",
      icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    },
    { 
      title: "Expert Minds", 
      desc: "Our squad consists of seasoned developers and designers dedicated to solving complex digital challenges.",
      icon: <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1 0-4.88 2.5 2.5 0 0 1 0-4.88A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 0-4.88 2.5 2.5 0 0 0 0-4.88A2.5 2.5 0 0 0 14.5 2z" />
    },
    { 
      title: "Total Transparency", 
      desc: "We believe in honest communication, keeping you updated at every step so there are no surprises.",
      icon: <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    },
    { 
      title: "Fast & Reliable", 
      desc: "We combine speed with quality, ensuring your project is delivered on time without compromising performance.",
      icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    },
    { 
      title: "Modern Thinking", 
      desc: "We stay ahead of the curve by using the latest AI and web technologies to future-proof your business.",
      icon: <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-5.636l-.707-.707M12 21v-1m0-11a3.5 3.5 0 1 1-3.5 3.5c0-1 .5-2 1.5-2.5V4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V7.5c1 .5 1.5 1.5 1.5 2.5z" />
    },
    { 
      title: "Smart Results", 
      desc: "Every feature we build is backed by data and logic to ensure your business goals are actually met.",
      icon: <path d="M18 20V10M12 20V4M6 20v-6" />
    }
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-16 md:py-24 font-poppins">
      <div className="max-w-[1445px] mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Section Header */}
        <div className="max-w-[900px] mx-auto text-center mb-16">
          <h2 className="text-white font-bold leading-[1.3] mb-6" style={{ fontSize: 'clamp(32px, 5vw, 45px)' }}>
            What Sets <span className="text-white">CampaignSquat</span> Apart
          </h2>
          <p className="text-white font-normal leading-[1.8]" style={{ fontSize: 'clamp(16px, 3vw, 20px)' }}>
            We combine technical precision with creative strategy to build digital solutions that don't just work—they perform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 md:p-10 rounded-2xl bg-[#02050A] border border-white/5 hover:border-[#F7A400] transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-5 mb-8">
                {/* Icon Box */}
                <div className="w-14 h-14 bg-[#0A0A0A] rounded-full flex items-center justify-center border border-[#F7A400] shrink-0">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#F7A400" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-7 h-7"
                  >
                    {item.icon}
                  </svg>
                </div>
                {/* Title */}
                <h3 className="text-white font-bold text-2xl md:text-[26px] leading-tight">
                  {item.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-white font-normal text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutFeatures;