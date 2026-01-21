import React from 'react';

const AboutTeam = () => {
  const leader = { name: "Maharab Biswas Api", role: "Co.Founder", img: "https://via.placeholder.com/400" };
  
  const teamMembers = [
    { name: "Maharab Biswas Api", role: "Co.Founder", img: "https://via.placeholder.com/300" },
    { name: "Maharab Biswas Api", role: "Co.Founder", img: "https://via.placeholder.com/300" },
    { name: "Maharab Biswas Api", role: "Co.Founder", img: "https://via.placeholder.com/300" },
    { name: "Maharab Biswas Api", role: "Co.Founder", img: "https://via.placeholder.com/300" },
    { name: "Maharab Biswas Api", role: "Co.Founder", img: "https://via.placeholder.com/300" },
    { name: "Maharab Biswas Api", role: "Co.Founder", img: "https://via.placeholder.com/300" },
    { name: "Maharab Biswas Api", role: "Co.Founder", img: "https://via.placeholder.com/300" },
    { name: "Maharab Biswas Api", role: "Co.Founder", img: "https://via.placeholder.com/300" },
  ];

  return (
    <section className="w-full bg-[#02050A] py-16 md:py-24 font-poppins text-center overflow-hidden">
      <div className="max-w-[1445px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-white font-bold mb-5 tracking-tight" 
              style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
            Meet Our Expert <span className="">Squat</span>
          </h2>
          <p className="text-white font-normal mx-auto leading-relaxed opacity-90"
             style={{ fontSize: 'clamp(16px, 2vw, 20px)', maxWidth: '750px' }}>
            Meet the specialists behind CampaignSquad—an agile team committed to delivering high-performance digital solutions.
          </p>
        </div>

        {/* --- Leader Section (Size matched with team members) --- */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <div className="group relative w-full max-w-[260px] md:max-w-[300px]">
            {/* Image Box - Same as Team */}
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#F7A400]/40 group-hover:border-[#F7A400] transition-all duration-500 bg-white/5">
              <img 
                src={leader.img} 
                alt={leader.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
              />
            </div>
            {/* Name & Role */}
            <div className="mt-6">
              <h3 className="text-white font-bold text-xl md:text-2xl">
                {leader.name}
              </h3>
              <p className="text-[#F7A400] font-semibold tracking-[0.2em] uppercase mt-2 text-sm">
                {leader.role}
              </p>
            </div>
          </div>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="group flex flex-col items-center">
              {/* Image Box - Same as Leader */}
              <div className="w-full max-w-[260px] md:max-w-[300px] aspect-[4/5] overflow-hidden rounded-xl border border-white/10 group-hover:border-[#F7A400] transition-all duration-500 bg-white/5">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
              </div>
              {/* Name & Role */}
              <div className="mt-5 text-center px-2">
                <h4 className="text-white font-bold text-lg group-hover:text-[#F7A400] transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-white/50 text-[11px] md:text-xs uppercase tracking-widest mt-1.5 font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;