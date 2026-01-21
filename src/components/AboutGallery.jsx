import React from 'react';

// ইমেজগুলো ইমপোর্ট
import img1 from '../assets/images/pexels-fauxels-3182812.jpg'; 
import img2 from '../assets/images/pexels-fauxels-3182811.jpg';
import img3 from '../assets/images/pexels-fauxels-3182750.jpg';
import img4 from '../assets/images/pexels-fauxels-3182755.jpg';

const AboutGallery = () => {
  // ৪টি ইমেজকে ৩ বার রিপিট করে ১২টি বানানো হলো
  const images = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4];

  return (
    <section className="w-full bg-[#0A0A0A] py-16 md:py-24 font-poppins overflow-hidden">
      
      {/* Inline CSS Animation - No Config Needed */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-infinite {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
        `}
      </style>

      {/* আপনার সেই ফিক্সড ম্যাক্স-উইডথ কন্টেইনার */}
      <div className="max-w-[1445px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Marquee Wrapper */}
        <div className="relative flex overflow-hidden rounded-2xl">
          
          {/* The Scrolling Content */}
          <div className="animate-marquee-infinite gap-6 items-center">
            
            {/* First Set of 12 Images */}
            {images.map((img, index) => (
              <div 
                key={index} 
                className={`shrink-0  border border-white/5 overflow-hidden shadow-xl
                  ${index % 2 === 0 ? 'w-[300px] h-[400px]' : 'w-[300px] h-[480px]'}
                `}
              >
                <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}

            {/* Loop Set (Same 12 Images for Seamless Motion) */}
            {images.map((img, index) => (
              <div 
                key={`loop-${index}`} 
                className={`shrink-0 rounded-2xl border border-white/5 overflow-hidden shadow-xl
                  ${index % 2 === 0 ? 'w-[300px] h-[400px]' : 'w-[300px] h-[480px]'}
                `}
              >
                <img src={img} alt={`Gallery Loop ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;