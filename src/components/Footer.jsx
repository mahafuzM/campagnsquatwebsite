import React from 'react';
import { Link } from 'react-router-dom'; // এটি অ্যাড করা হয়েছে
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronsRight, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter 
} from 'lucide-react';
import logo from '../assets/images/campaign-squat-2-1.png'; 

// Animated arrow icons component for the hiring button
const RunningIcons = () => (
  <div className="relative flex items-center overflow-hidden ml-1 w-8 h-6">
    <div className="flex gap-0" style={{ animation: 'arrowNoGap 3.5s infinite linear' }}>
      {[20, 50, 100, 20, 50, 100].map((op, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white shrink-0" style={{ opacity: op / 100 }}>
          <path d="M6.45 17.45L11.9 12L6.45 6.55L7.5 5.5L14 12L7.5 18.5L6.45 17.45ZM12.45 17.45L17.9 12L12.45 6.55L13.5 5.5L20 12L13.5 18.5L12.45 17.45Z" />
        </svg>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0A0A] text-white pt-12 md:pt-20 pb-10 font-poppins border-t border-white/5">
      <style>
        {`@keyframes arrowNoGap { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }`}
      </style>

      {/* Main Container */}
      <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="space-y-6 md:space-y-8">
            <img 
              src={logo} 
              alt="CampaignSquat Logo" 
              className="h-20 md:h-24 w-auto text-left object-contain cursor-pointer" 
            />
            
            <p className="text-white text-base md:text-xl leading-relaxed text-left">
              Where innovation meets excellence. We craft stunning websites and high-impact 
              digital experiences, blending creativity with precision to elevate your brand.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-start gap-3 pt-2">
              {[Facebook, Instagram, Youtube, Linkedin, Twitter].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#"
                  className="w-11 h-11 rounded-full bg-transparent border border-white/10 flex items-center justify-center text-white hover:bg-[#f7a400] hover:text-black hover:border-[#f7a400] transition-all duration-300 shadow-sm"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="text-left">
            <h4 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#f7a400] tracking-wider">Services</h4>
            <ul className="space-y-4 text-white text-lg md:text-xl">
              {["UI/UX Design", "Web Development", "Software Development", "Mobile App Development"].map((item) => (
                <li key={item} className="flex items-center justify-start gap-2 group cursor-pointer">
                  <ChevronsRight size={18} className="text-[#f7a400] group-hover:translate-x-1 transition-transform" />
                  <a href="#" className="hover:text-[#f7a400] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="text-left">
            <h4 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#f7a400] tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-white text-lg md:text-xl">
              {["About Us", "Our Project", "Our Product", "Blog", "Contact", "Careers"].map((item) => (
                <li key={item} className="flex items-center justify-start gap-2 group cursor-pointer">
                  <ChevronsRight size={18} className="text-[#f7a400] group-hover:translate-x-1 transition-transform" />
                  <Link to={item === "Careers" ? "/careers" : "#"} className="hover:text-[#f7a400] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="text-left">
            <h4 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#f7a400] tracking-wider">Contact Us</h4>
            <ul className="space-y-6 text-white text-base md:text-lg">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#f7a400] shrink-0 mt-1" />
                <a href="mailto:sales@campaignsquat.com" className="hover:text-[#f7a400] text-xl break-all">sales@campaignsquat.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#f7a400] shrink-0 mt-1" />
                <a href="tel:+8801330093408" className="hover:text-[#f7a400] text-xl">+88 01330093408</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#f7a400] shrink-0 mt-1" />
                <div>
                  <span className="text-white font-bold block mb-1 text-2xl">Bangladesh</span>
                  <p className="leading-snug text-base md:text-lg text-white">Shohid Moshiur Rahman Sharak, Jhenaidah 7300, Khulna, Bangladesh</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#f7a400] shrink-0 mt-1" />
                <div>
                  <span className="text-white font-bold block mb-1 text-2xl">UK</span>
                  <p className="leading-snug text-base md:text-lg text-white">Unit 13 Freeland Park, Poole, England, BH16 6FA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Hiring CTA Card */}
        <div className="bg-[#02050A] border border-white/10 rounded-2xl md:rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 shadow-[0_0_50px_-15px_rgba(247,164,0,0.15)] hover:shadow-[0_0_60px_-10px_rgba(247,164,0,0.25)] transition-all duration-500">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl md:text-5xl font-bold mb-3 text-white tracking-tight">Careers</h3>
            <p className="text-white text-base md:text-lg max-w-xl leading-relaxed mb-4">Shape the future of CampaignSquat with us! Join our innovative team.</p>
            <h4 className="text-[#f7a400] text-lg font-bold tracking-[0.1em] ">We Are Hiring!</h4>
          </div>
          
          {/* LinkUp done here */}
          <Link to="/careers" className="w-full sm:w-auto bg-[#f7a400] text-white font-semibold px-10 py-5 rounded-xl border-2 border-[#F7A400] flex items-center justify-center hover:bg-[#0A0A0A] hover:border-[#F7A400] transition-all duration-300 text-lg group shadow-lg">
            <div className="flex items-center">
               <span>Click Here</span>
               <RunningIcons />
            </div>
          </Link>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-white text-xl md:text-2xl font-light">
            © {new Date().getFullYear()} CampaignSquat Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;