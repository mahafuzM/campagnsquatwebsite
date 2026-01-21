import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Calendar, User, Clock, Eye, ArrowLeft, Share2,
  Facebook, Twitter, Linkedin, Instagram 
} from 'lucide-react';
import Contact from '../components/Contact';

// ইমেজ ইমপোর্ট
import blogImg1 from '../assets/images/business-people-using-laptop-meeting-room-1-1.jpg';
import blogImg2 from '../assets/images/blog-brand.jpg';
import blogImg3 from '../assets/images/blog-1.jpg';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // বড় এবং প্রফেশনাল ব্লগ ডাটা
  const blogData = {
    "1": { 
      img: blogImg1, 
      title: "The Latest UI/UX Design Trends for 2026 - Prepare for Them",
      date: "Jan 12, 2026",
      read: "7 Min Read",
      views: "1.2k",
      intro: "UI/UX design in 2026 is defined by intelligent systems determining how digital products behave, respond, and evolve. Decisions now rely on AI and real-time behavioral signals.",
      heading: "Top 13 UI/UX Design Trends for 2026 (Expert Forecast)",
      content1: "Hyper-personalization adapts interfaces based on real behavior, not assumptions. Instead of static layouts, experiences reshape content and flows continuously.",
      content2: "Conversational and Multimodal UX blends voice, text, visuals, and gestures into unified interactions. Users move fluidly between speaking and typing.",
      content3: "Predictive UX focuses on recognizing intent before users articulate it, surfacing content at the right moment to reduce friction without demanding attention.",
      tags: ["#UIUX", "#DesignTrends", "#FutureTech", "#UserExperience"]
    },
    "2": { 
      img: blogImg2, 
      title: "The Future of Web Development 2026: What's Changing?",
      date: "Jan 14, 2026",
      read: "6 Min Read",
      views: "850",
      intro: "The web landscape in 2026 is moving beyond traditional frameworks. Edge computing and decentralized networks are becoming the backbone of high-performance applications.",
      heading: "Key Technologies Shaping the Web in 2026",
      content1: "Serverless architectures have evolved into seamless autonomous environments where scalability is handled entirely by intelligent cloud providers.",
      content2: "WebAssembly (WASM) is now the standard for high-performance applications in the browser, allowing desktop-level software to run directly on the web.",
      content3: "AI-integrated IDEs and automated code generation have transformed the developer's role from writing syntax to architecting complex logic.",
      tags: ["#WebDev", "#Coding", "#FutureWeb", "#JavaScript"]
    },
    "3": { 
      img: blogImg3, 
      title: "The Art of Digital Storytelling: Secrets from Industry Experts",
      date: "Jan 15, 2026",
      read: "5 Min Read",
      views: "2.1k",
      intro: "Digital storytelling is no longer just about content; it's about creating an immersive emotional journey that connects a brand deeply with its audience.",
      heading: "Mastering the Narrative in a Digital Age",
      content1: "Experts agree that the most successful stories are those that put the user at the center. Interactive narratives allow users to choose their own path.",
      content2: "Visual storytelling through micro-animations and scroll-triggered transitions keeps users engaged longer than static text ever could.",
      content3: "Emotional resonance is achieved through authenticity. Brands that share their failures as well as their wins build much higher long-term trust.",
      tags: ["#Storytelling", "#DigitalMarketing", "#Branding", "#Content"]
    }
  };

  const currentBlog = blogData[id] || blogData["1"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="w-full bg-[#02050A] font-poppins text-white selection:bg-[#f7a400] selection:text-white overflow-x-hidden">
      
      <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 py-6 md:py-18">
        
        {/* --- Full Blog Card Section --- */}
        <div className="bg-[#0a0a0a] border border-[#ffffff10] rounded-[10px] overflow-hidden shadow-2xl">
          
          {/* Header Area - Title & Meta */}
          <div className="p-10 md:p-20 lg:p-24 text-center flex flex-col gap-14">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] text-white max-w-[1150px] mx-auto">
              {currentBlog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-12 border-b border-[#ffffff10] pb-14 text-white">
              <div className="flex items-center gap-3">
                <User size={22} className="text-[#f7a400]" />
                <span className="text-base font-medium uppercase tracking-widest text-white">Admin</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={22} className="text-[#f7a400]" />
                <span className="text-base text-white">{currentBlog.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={22} className="text-[#f7a400]" />
                <span className="text-base text-white">{currentBlog.read}</span>
              </div>
              <div className="flex items-center gap-3">
                <Eye size={22} className="text-[#f7a400]" />
                <span className="text-base text-white">{currentBlog.views} Views</span>
              </div>
            </div>
          </div>

          {/* Main Image Area */}
          <div className="px-10 md:px-20">
            <div className="w-full h-[350px] md:h-[650px] rounded-[10px] overflow-hidden border border-[#ffffff10]">
              <img 
                src={currentBlog.img} 
                alt={currentBlog.title} 
                className="w-full h-full object-cover opacity-90" 
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="p-10 md:p-20 lg:p-24 flex flex-col gap-20">
            
            {/* Share Post Section */}
            <div className="bg-[#02050A] border-t border-b border-[#ffffff10] -mx-10 md:-mx-20 lg:-mx-24 px-10 md:px-20 lg:px-24 py-10">
              <div className="flex flex-wrap items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <Share2 size={26} className="text-[#f7a400]" />
                  <h3 className="text-3xl font-bold text-white tracking-[2px]">Share A Post</h3>
                </div>
                <div className="flex items-center gap-5">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 rounded-full border border-[#ffffff15] flex items-center justify-center text-white hover:bg-[#f7a400] transition-all duration-300">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Text Content - All Text White */}
            <div className="flex flex-col gap-16 text-white text-lg md:text-2xl leading-relaxed max-w-[1250px] text-justify">
              
              <p className="text-white opacity-90">
                {currentBlog.intro}
              </p>

              <div className="flex flex-col gap-20">
                <div className="space-y-10">
                   <h2 className="text-3xl md:text-5xl font-bold text-white">
                     {currentBlog.heading}
                   </h2>
                   <p className="text-white opacity-90">
                     After extensive research into current market shifts, we have identified key strategies that will dominate the landscape in 2026. Let's explore:
                   </p>
                </div>

                <div className="grid gap-24">
                  <div className="space-y-8">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase text-white">1. Core Integration</h3>
                    <p className="text-white opacity-90">{currentBlog.content1}</p>
                  </div>
                  
                  <div className="space-y-8">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase text-white">2. User-Centric Flow</h3>
                    <p className="text-white opacity-90">{currentBlog.content2}</p>
                  </div>

                  <div className="space-y-8">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase text-white">3. Strategic Implementation</h3>
                    <p className="text-white opacity-90">{currentBlog.content3}</p>
                  </div>
                </div>
              </div>

              {/* Tags Area */}
              <div className="mt-14 border-t-2 border-b-2 border-[#ffffff10] bg-[#02050A] -mx-10 md:-mx-20 lg:-mx-24 mb-[-40px] md:mb-[-80px] lg:mb-[-96px]">
                <div className="py-14 px-10 md:px-20 lg:px-24">
                  <h3 className="text-3xl font-semibold tracking-[2px] mb-10 text-white">
                    Tags
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
                    {currentBlog.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[#f7a400] text-xl cursor-pointer hover:text-white transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Back To Blog Button --- */}
        <div className="flex justify-center mt-16 mb-10">
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-3 bg-[#f7a400] text-white px-10 py-5 rounded-[5px] font-semibold border-2 border-[#f7a400] text-xl hover:bg-[#02050A] transition-all duration-500 shadow-xl"
          >
            <ArrowLeft size={20} />
            Back To Blog
          </button>
        </div>

      </div>

      <Contact />
    </div>
  );
};

export default BlogDetails;