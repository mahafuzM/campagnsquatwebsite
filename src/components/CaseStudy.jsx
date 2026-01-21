import React from 'react';
import { Link } from 'react-router-dom';

// Images Import
import qiraatImg from '../assets/images/Qiraat.webp';
import rivertelImg from '../assets/images/Rivertel.avif';
import taleekImg from '../assets/images/Taleek.avif';
import qiraat2Img from '../assets/images/Qiraat 2.jpg';
import rivertel2Img from '../assets/images/Rivertel 2.jpg';
import taleek2Img from '../assets/images/Taleek 2.jpg';

const CaseStudy = () => {
  const cases = [
    { 
      id: 1, 
      image: qiraatImg, 
      title: "Qiraat", 
      fullName: "Qiraat | Beauty Cosmetics E-commerce Website | UI/UX Design",
      description: "EdTech web and app design for a seamless Quran study experience." 
    },
    { 
      id: 2, 
      image: rivertelImg, 
      title: "Rivertel", 
      fullName: "Rivertel | Telecom Brand Experience | Digital Transformation & Strategy",
      description: "Improving digital experience for a US telecom brand" 
    },
    { 
      id: 3, 
      image: taleekImg, 
      title: "Taleek", 
      fullName: "Taleek | Sports Tech Analytics | Athlete Performance & Data Visualization",
      description: "Empowering Athletes with Real-Time Performance Analytics & Sports Tech" 
    },
    { 
      id: 4, 
      image: qiraat2Img, 
      title: "Qiraat Pro", 
      fullName: "Qiraat Pro | Advanced EdTech Platform | Enterprise Learning Management System", 
      description: "EdTech web and app design for a seamless Quran study experience." 
    },
    { 
      id: 5, 
      image: rivertel2Img, 
      title: "Rivertel Biz", 
      fullName: "Rivertel Biz | B2B Telecom Dashboard | Corporate Infrastructure Management", 
      description: "Improving digital experience for a US telecom brand" 
    },
    { 
      id: 6, 
      image: taleek2Img, 
      title: "Taleek Academy", 
      fullName: "Taleek Academy | Sports Coaching Portal | Global Mentorship & Training Program", 
      description: "Empowering Athletes with Real-Time Performance Analytics & Sports Tech" 
    }
  ];

  // মামা, এই ফাংশনটা নাম থেকে স্পেস সরিয়ে ড্যাশ বসিয়ে দিবে
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // সব স্পেশাল ক্যারেক্টার আর স্পেসকে '-' বানাবে
      .replace(/(^-|-$)/g, '');    // শুরুর আর শেষের বাড়তি '-' মুছে দিবে
  };

  return (
    <section className="w-full bg-[#02050A] py-16 px-4 font-['Poppins']">
      <div className="max-w-[1300px] mx-auto">
        
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Our Case Study</h2>
          <p className="text-white text-[15px] md:text-[20px] max-w-4xl mx-auto leading-relaxed font-medium opacity-100 px-4">
            An Experience design agency building high-end products and experiences that grow your business exponentially.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cases.map((item) => (
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

              <div className="p-8 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-white text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-white text-lg md:text-xl leading-snug opacity-80">{item.description}</p>
              </div>

              {/* Clean URL Link - এখানে স্লাগ তৈরি করা হয়েছে */}
              <Link
                to={`/projects/${createSlug(item.fullName)}`}
                state={{ title: item.title, image: item.image }} // Data load করার জন্য title পাঠানো হচ্ছে
                className="w-full py-4 bg-[#f7a400] text-white text-center font-semibold text-xl transition-all duration-300 border-2 border-transparent hover:bg-[#02050A] hover:border-[#f7a400]"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/projects">
            <button className="px-12 py-5 bg-[#f7a400] text-white font-semibold text-xl rounded-lg border-2 border-[#f7a400] hover:bg-transparent transition-all duration-300 ">
              View All Project
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;