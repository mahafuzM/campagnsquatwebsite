import React from 'react';
import { 
  Code2, Terminal, Cpu, Layers, Globe, Zap, 
  Layout, Server, Hexagon, Box, Cpu as Chip 
} from 'lucide-react';

const SkillsGrid = () => {
  const techStack = [
    { name: "Java", icon: <Code2 size={18} /> },
    { name: "Python", icon: <Terminal size={18} /> },
    { name: "Rust", icon: <Chip size={18} /> },
    { name: "C++", icon: <Code2 size={18} /> },
    { name: "C#", icon: <Layers size={18} /> },
    { name: "PHP", icon: <Globe size={18} /> },
    { name: "Ruby", icon: <Zap size={18} /> },
    { name: "React", icon: <Hexagon size={18} /> },
    { name: "Next.js", icon: <Layout size={18} /> },
    { name: "Tailwind CSS", icon: <Box size={18} /> },
    { name: "Node.js", icon: <Server size={18} /> },
    { name: "Vue.js", icon: <Hexagon size={18} /> },
    { name: "Svelte", icon: <Zap size={18} /> },
  ];

  const displayStack = [...techStack, ...techStack, ...techStack];

  return (
    <section className="w-full bg-[#02050A] py-6 md:py-10 overflow-hidden">
      
      <style>
        {`
          @keyframes marqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          @keyframes marqueeRight {
            0% { transform: translateX(-33.33%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            display: flex;
            animation: marqueeLeft 35s linear infinite;
          }
          .animate-marquee-right {
            display: flex;
            animation: marqueeRight 35s linear infinite;
          }
          @media (max-width: 768px) {
            .animate-marquee-left, .animate-marquee-right {
              animation-duration: 25s;
            }
          }
          .animate-marquee-left:hover, .animate-marquee-right:hover {
            animation-play-state: paused;
          }
          /* দুই পাশে আবছা ইফেক্ট দেওয়ার জন্য */
          .mask-fade {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}
      </style>

      {/* Main Container: পূর্বের সেকশনের সাথে মিল রেখে Padding সেট করা হয়েছে */}
      <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col gap-4 md:gap-6">
        
        {/* Row 1: Left */}
        <div className="w-full relative flex items-center overflow-hidden h-[50px] md:h-[65px] mask-fade">
          <div className="animate-marquee-left whitespace-nowrap gap-3 px-2">
            {displayStack.map((tech, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-1.5 md:py-2.5 rounded-lg md:rounded-xl border border-white/10 bg-white/5 cursor-pointer transition-all duration-300 hover:border-[#F7A400] hover:bg-white/10 hover:scale-105 group mx-1.5"
              >
                <div className="text-[#F7A400] group-hover:scale-110 transition-transform">{tech.icon}</div>
                <span className="text-white text-[13px] md:text-[15px] font-semibold tracking-wide">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right */}
        <div className="w-full relative flex items-center overflow-hidden h-[50px] md:h-[65px] mask-fade">
          <div className="animate-marquee-right whitespace-nowrap gap-3 px-2">
            {displayStack.map((tech, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-1.5 md:py-2.5 rounded-lg md:rounded-xl border border-white/10 bg-white/5 cursor-pointer transition-all duration-300 hover:border-[#F7A400] hover:bg-white/10 hover:scale-105 group mx-1.5"
              >
                <div className="text-[#F7A400] group-hover:scale-110 transition-transform">{tech.icon}</div>
                <span className="text-white text-[13px] md:text-[15px] font-semibold tracking-wide">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Left */}
        <div className="w-full relative flex items-center overflow-hidden h-[50px] md:h-[65px] mask-fade">
          <div className="animate-marquee-left whitespace-nowrap gap-3 px-2">
            {displayStack.map((tech, index) => (
              <div 
                key={`row3-${index}`} 
                className="flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-1.5 md:py-2.5 rounded-lg md:rounded-xl border border-white/10 bg-white/5 cursor-pointer transition-all duration-300 hover:border-[#F7A400] hover:bg-white/10 hover:scale-105 group mx-1.5"
              >
                <div className="text-[#F7A400] group-hover:scale-110 transition-transform">{tech.icon}</div>
                <span className="text-white text-[13px] md:text-[15px] font-semibold tracking-wide">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsGrid;