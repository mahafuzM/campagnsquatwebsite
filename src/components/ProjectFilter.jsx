import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Images Import
import qiraatImg from '../assets/images/Qiraat.webp';
import rivertelImg from '../assets/images/Rivertel.avif';
import taleekImg from '../assets/images/Taleek.avif';
import qiraat2Img from '../assets/images/Qiraat 2.jpg';
import rivertel2Img from '../assets/images/Rivertel 2.jpg';
import taleek2Img from '../assets/images/Taleek 2.jpg';

const ProjectFilter = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "Software Development",
    "Mobile App Development"
  ];

  const cases = [
    { 
      id: 1, 
      image: qiraatImg, 
      title: "Qiraat", 
      category: "UI/UX Design", 
      fullName: "Qiraat | Beauty Cosmetics E-commerce Website | UI/UX Design",
      description: "EdTech web and app design for a seamless Quran study experience." 
    },
    { 
      id: 2, 
      image: rivertelImg, 
      title: "Rivertel", 
      category: "Web Development", 
      fullName: "Rivertel | Telecom Brand Experience | Digital Transformation & Strategy",
      description: "Improving digital experience for a US telecom brand" 
    },
    { 
      id: 3, 
      image: taleekImg, 
      title: "Taleek", 
      category: "Mobile App Development", 
      fullName: "Taleek | Sports Tech Analytics | Athlete Performance & Data Visualization",
      description: "Empowering Athletes with Real-Time Performance Analytics & Sports Tech" 
    },
    { 
      id: 4, 
      image: qiraat2Img, 
      title: "Qiraat Pro", 
      category: "Software Development", 
      fullName: "Qiraat Pro | Advanced EdTech Platform | Enterprise Learning Management System",
      description: "EdTech web and app design for a seamless Quran study experience." 
    },
    { 
      id: 5, 
      image: rivertel2Img, 
      title: "Rivertel Biz", 
      category: "Web Development", 
      fullName: "Rivertel Biz | B2B Telecom Dashboard | Corporate Infrastructure Management",
      description: "Improving digital experience for a US telecom brand" 
    },
    { 
      id: 6, 
      image: taleek2Img, 
      title: "Taleek Academy", 
      category: "Mobile App Development", 
      fullName: "Taleek Academy | Sports Coaching Portal | Global Mentorship & Training Program",
      description: "Empowering Athletes with Real-Time Performance Analytics & Sports Tech" 
    }
  ];

  // মামা, এই ফাংশনটা fullName কে ক্লিন স্লাগ (dash-separated) বানিয়ে দিবে
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') 
      .replace(/(^-|-$)/g, '');    
  };

  const filteredCases = activeTab === 'All' 
    ? cases 
    : cases.filter(item => item.category === activeTab);

  return (
    <section className="w-full bg-[#02050A] pt-12 md:pt-24 font-['Poppins']">
      <div className="max-w-[1445px] mx-auto px-4 md:px-16 lg:px-24">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-start md:justify-center gap-3 md:gap-5 mb-12 md:mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`
                px-5 py-3 md:px-8 md:py-4 
                text-[16px] sm:text-lg md:text-2xl font-bold md:font-semibold tracking-wide
                transition-all duration-300 border-2 rounded-[5px] text-white
                ${activeTab === category 
                  ? 'bg-[#F7A400] border-[#F7A400] shadow-[0_10px_20px_rgba(247,164,0,0.3)]' 
                  : 'bg-transparent border-[#F7A400]/30 hover:border-[#F7A400]'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCases.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#0A0A0A] border border-gray-800 flex flex-col overflow-hidden group transition-all duration-300 hover:border-[#f7a400]"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-white text-3xl font-bold mb-3">{item.title}</h3>
                <p className="text-white text-lg md:text-xl leading-snug opacity-80">{item.description}</p>
              </div>

              {/* Read More Button with Clean Slug URL */}
              <Link 
                to={`/projects/${createSlug(item.fullName)}`} 
                state={{ title: item.title, image: item.image }} 
                className="w-full py-4 bg-[#f7a400] text-white font-semibold text-xl text-center transition-all duration-300 border-2 border-transparent hover:bg-[#02050A] hover:border-[#f7a400]"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFilter;