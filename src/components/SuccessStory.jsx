import React, { useState, useEffect } from 'react';
import userImg1 from '../assets/images/h3-testimonial-2.webp';
import userImg2 from '../assets/images/h3-testimonial-3.webp';

const SuccessStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const stories = [
    { id: 1, image: userImg1, name: "Cameron Williamson", role: "Co. Founder", company: "Tekmino", feedback: "Tekmino truly exceeded our expectations. From the initial consultation to the final implementation their team provided excellent service." },
    { id: 2, image: userImg2, name: "Devon Lane", role: "Co. Founder", company: "Nexor", feedback: "Partnering with Nexor has been an absolute game-changer for our company. Their team delivered a tailored IT solution." },
    { id: 3, image: userImg1, name: "Bessie Cooper", role: "CEO", company: "TechFlow", feedback: "The efficiency and dedication of the team were remarkable throughout the project development phase." },
    { id: 4, image: userImg2, name: "Arlene McCoy", role: "Manager", company: "DataSys", feedback: "Their innovative approach helped us scale our infrastructure faster than we ever thought possible." },
    { id: 5, image: userImg1, name: "Jerome Bell", role: "Director", company: "Cloudly", feedback: "Exceptional support and deep technical expertise. They are definitely our go-to partner for IT solutions." },
    { id: 6, image: userImg2, name: "Jane Cooper", role: "Founder", company: "InnoVate", feedback: "A truly professional experience. They understood our requirements and executed them perfectly." },
  ];

  // Mobile check logic
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1280);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = isMobile ? stories.length : 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="w-full bg-[#0A0A0A] py-16 px-4 font-['Poppins'] overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Success Story</h2>
          <p className="text-white text-[15px] md:text-[20px] max-w-4xl mx-auto font-medium ">
            Real Results From The People Who Trust Us Most
          </p>
        </div>

        {/* Slider Window */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {isMobile ? (
              // Mobile View: 6 pages with 1 card each
              stories.map((item) => (
                <div key={item.id} className="w-full shrink-0 px-2">
                  <Card item={item} />
                </div>
              ))
            ) : (
              // Desktop View: Original pages with 2 cards each
              <>
                <div className="w-full shrink-0 grid grid-cols-1 xl:grid-cols-2 gap-8 px-2">
                    <Card item={stories[0]} />
                    <Card item={stories[1]} />
                </div>
                <div className="w-full shrink-0 grid grid-cols-1 xl:grid-cols-2 gap-8 px-2">
                    <Card item={stories[2]} />
                    <Card item={stories[3]} />
                </div>
                <div className="w-full shrink-0 grid grid-cols-1 xl:grid-cols-2 gap-8 px-2">
                    <Card item={stories[4]} />
                    <Card item={stories[5]} />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-[#f7a400] scale-125" : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const Card = ({ item }) => (
  <div className="bg-[#0A0D12] border border-gray-800 flex flex-col sm:flex-row gap-0 items-stretch transition-all duration-300 hover:border-[#f7a400] rounded-xl overflow-hidden">
    <div className="w-full sm:w-[45%] shrink-0 relative group cursor-pointer">
      <img src={item.image} alt={item.name} className="w-full h-full aspect-[3/4] object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-[#f7a400] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full p-6 md:p-8 justify-center">
      {/* Star Icons - Increased size to text-2xl */}
      <div className="flex gap-1 text-[#f7a400] mb-4">
        {[...Array(5)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
      </div>
      <p className="text-white text-base md:text-lg leading-relaxed mb-6 line-clamp-4">{item.feedback}</p>
      <div className="w-40 h-[1px] bg-[#f7a400] mb-8 opacity-90"></div>
      <div>
        <h4 className="text-white text-2xl ">{item.name}</h4>
        <p className="text-white0 text-base font-medium mt-1">{item.role} | {item.company}</p>
      </div>
    </div>
  </div>
);

export default SuccessStory;