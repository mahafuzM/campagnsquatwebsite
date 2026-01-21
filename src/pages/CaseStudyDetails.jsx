import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate, useParams } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaShareAlt, FaChevronLeft } from 'react-icons/fa';

// ১. Data file import
import { projectsFullDetails } from '../data/projectsData'; 

const CaseStudyDetails = () => {
  const { title } = useParams(); // URL থেকে ড্যাশওয়ালা টাইটেল পাবে (যেমন: qiraat-beauty-cosmetics)
  const location = useLocation();
  const navigate = useNavigate();
  
  const [projectContent, setProjectContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getProjectData = () => {
      try {
        // ১. যদি Link এর state থেকে সরাসরি টাইটেল (Key) আসে (সবচেয়ে দ্রুত উপায়)
        if (location.state && location.state.title && projectsFullDetails[location.state.title]) {
          const content = projectsFullDetails[location.state.title];
          setProjectContent({ 
            ...content, 
            image: location.state.image || content.image, 
            displayTitle: content.fullName // এখানে অরিজিনাল সুন্দর নামটা দেখাবে
          });
          setLoading(false);
          return;
        } 

        // ২. যদি সরাসরি URL এ কেউ ঢুকে (যেমন: সরাসরি লিঙ্ক পেস্ট করলে)
        // আমরা ইউআরএল এর 'slug' টাকে আমাদের ডাটা ফাইলের fullName গুলোর সাথে ম্যাচ করাবো
        const projectData = Object.values(projectsFullDetails).find((p) => {
          const generatedSlug = p.fullName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
          return generatedSlug === title;
        });

        if (projectData) {
          setProjectContent({ 
            ...projectData, 
            displayTitle: projectData.fullName 
          });
        } else {
          // যদি কোনো ডাটা না মেলে তবে প্রজেক্ট লিস্টে পাঠিয়ে দেবে
          navigate('/projects'); 
        }
        setLoading(false);
      } catch (error) {
        console.error("Data Fetch Error:", error);
        setLoading(false);
      }
    };

    getProjectData();
  }, [title, location.state, navigate]);

  if (loading) return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white text-2xl font-['Poppins']">
      Loading Case Study...
    </div>
  );

  if (!projectContent) return null;

  return (
    <section className="w-full bg-[#0A0A0A] font-['Poppins'] text-white selection:bg-white selection:text-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-60">
        
        {/* Navigation */}
        <div className="py-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-white hover:text-[#f7a400] transition-colors">
            <FaChevronLeft size={14} /> 
            <span className="text-sm uppercase font-medium">Back to Projects</span>
          </Link>
        </div>

        {/* 1. Hero Image */}
        <div className="w-full mb-12">
          <img 
            src={projectContent.image || "https://via.placeholder.com/1200x600"} 
            alt={projectContent.displayTitle} 
            className="w-full h-auto object-cover rounded-none shadow-2xl" 
          />
        </div>

        {/* 2. Dynamic Title (অরিজিনাল fullName এখানে দেখাবে) */}
        <div className="mb-20">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {projectContent.displayTitle}
          </h1>
        </div>

        {/* Dynamic Text Sections */}
        <div className="space-y-28 mb-32">
          
          {/* About Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#f7a400]">About The Project</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-justify font-normal opacity-90">
              {projectContent.about}
            </p>
          </div>

          {/* Process Image */}
          <div className="w-full">
            <img src={projectContent.image} alt="Project Process" className="w-full h-auto object-cover border border-white/5 opacity-80" />
          </div>

          {/* Problem Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#f7a400]">Problem</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-justify font-normal opacity-90">
              {projectContent.problem}
            </p>
          </div>

          {/* Solution Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#f7a400]">Solution</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-justify font-normal opacity-90">
              {projectContent.solution}
            </p>
          </div>

          {/* Features Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#f7a400]">Key Features Implemented</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-justify font-normal opacity-90">
              {projectContent.features}
            </p>
          </div>

          {/* Testimonial Section */}
          {projectContent.testimonial && (
            <div className="bg-[#02050A] p-10 md:p-16 border-l-4 border-[#f7a400]">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Testimonial</h2>
              <p className="text-xl md:text-3xl leading-relaxed font-light italic mb-8 opacity-80">
                "{projectContent.testimonial}"
              </p>
              <p className="text-xl font-bold text-[#f7a400]">— {projectContent.client}</p>
            </div>
          )}
        </div>
      </div>

      {/* Share Section */}
      <div className="w-full bg-[#02050A] border-t border-white/10 mt-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-60 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <FaShareAlt size={20} className="text-[#f7a400]" /> 
            <span className="text-xl font-normal">Share A Post</span>
          </div>
          <div className="flex gap-12 text-white">
            <FaFacebookF size={24} className="cursor-pointer hover:text-[#f7a400] transition-colors" />
            <FaInstagram size={24} className="cursor-pointer hover:text-[#f7a400] transition-colors" />
            <FaLinkedinIn size={24} className="cursor-pointer hover:text-[#f7a400] transition-colors" />
            <FaTwitter size={24} className="cursor-pointer hover:text-[#f7a400] transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetails;