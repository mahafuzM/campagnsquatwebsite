import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/campaign-squat-2-1.png';
import MegaMenu from './MegaMenu';

const RunningIcons = ({ isMobile = false }) => (
  <div className={`relative flex items-center overflow-hidden ml-1 ${isMobile ? 'w-8 h-5' : 'w-8 h-6'}`}>
    <div className="flex gap-0" style={{ animation: 'arrowNoGap 3.5s infinite linear' }}>
      {[20, 50, 100, 20, 50, 100].map((op, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white shrink-0" style={{ opacity: op / 100 }}>
          <path d="M6.45 17.45L11.9 12L6.45 6.55L7.5 5.5L14 12L7.5 18.5L6.45 17.45ZM12.45 17.45L17.9 12L12.45 6.55L13.5 5.5L20 12L13.5 18.5L12.45 17.45Z" />
        </svg>
      ))}
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const servicesData = [
    {
      id: "uiux",
      title: "UI/UX Design",
      link: "/ui-ux-design",
      items: [
        { name: "Web & Mobile UI", link: "/web-mobile-ui" },
        { name: "UX & Wireframing", link: "/ux-wireframing" },
        { name: "Interactive Prototype", link: "/interactive-prototype" },
        { name: "SaaS & Dashboards", link: "/saas-dashboard" },
        { name: "Design Systems", link: "/design-system" },
        { name: "Landing Page UI", link: "/landing-page-ui" },
        { name: "App Interfaces", link: "/app-interface" }
      ]
    },
    {
      id: "web",
      title: "Web Design & Development",
      link: "/web-design-development",
      items: [
        { name: "Custom Websites", link: "/custom-websites" },
        { name: "WordPress Dev", link: "/wordpress-development" },
        { name: "Landing Pages", link: "/landing-pages" },
        { name: "Corporate Sites", link: "/corporate-sites" },
        { name: "Personal Branding", link: "/personal-branding" },
        { name: "Site Optimization", link: "/site-optimization" },
        { name: "E-Commerce Dev", link: "/ecommerce-development" }
      ]
    },
    {
      id: "software",
      title: "Software Development",
      link: "/software-development",
      items: [
        { name: "Custom CRM", link: "/custom-crm" },
        { name: "ERP Systems", link: "/erp-systems" },
        { name: "Business Automation", link: "/business-automation" },
        { name: "Inventory & Billing", link: "/inventory-billing" },
        { name: "HRM Systems", link: "/hrm-systems" },
        { name: "SaaS Solutions", link: "/saas-solutions" },
        { name: "API Integration", link: "/api-integration" }
      ]
    },
    {
      id: "app",
      title: "Mobile App Development",
      link: "/mobile-app-development", 
      items: [
        { name: "Android Apps", link: "/android-apps" },
        { name: "iOS Apps", link: "/ios-apps" },
        { name: "Cross-Platform", link: "/cross-platform-apps" }, 
        { name: "E-Commerce Apps", link: "/ecommerce-apps" },
        { name: "Booking Apps", link: "/booking-apps" },
        { name: "Food Delivery", link: "/food-delivery-apps" }, 
        { name: "On-Demand Apps", link: "/on-demand-apps" }
      ]
    }
  ];

  return (
    <nav className="w-full h-24 md:h-28 bg-[#0A0A0A] fixed top-0 left-0 z-[100] border-b border-white/5 font-poppins">
      <style>
        {`
          @keyframes arrowNoGap { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
          @keyframes fadeInCustom { from { opacity: 0; transform: translate(-50%, 10px); } to { opacity: 1; transform: translate(-50%, 0); } }
          .animate-fade-in-custom { animation: fadeInCustom 0.3s ease-out forwards; }
        `}
      </style>

      <div className="max-w-[1445px] h-full mx-auto flex items-center justify-between px-6 xl:px-10">
        <div className="flex items-center">
          <Link to="/home">
            <img src={logo} alt="Logo" className="h-16 sm:h-20 md:h-24 w-auto object-contain cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 h-full">
          <Link to="/home" className="text-[17px] font-medium text-white hover:text-[#F7A400] transition-colors">Home</Link>
          <Link to="/about" className="text-[17px] font-medium text-white hover:text-[#F7A400] transition-colors">About Us</Link>
          
          <div className="h-full flex items-center relative" 
               onMouseEnter={() => setIsServiceHovered(true)} 
               onMouseLeave={() => setIsServiceHovered(false)}>
            
            <Link to="/service" className="flex items-center gap-1 cursor-pointer group py-10 z-[110]">
              <span className={`text-[17px] font-medium transition-colors ${isServiceHovered ? 'text-[#F7A400]' : 'text-white'}`}>Service</span>
              <svg className={`w-4 h-4 transition-transform duration-300 ${isServiceHovered ? 'rotate-180 text-[#F7A400]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </Link>

            {isServiceHovered && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in-custom z-[120]"
                style={{ width: 'calc(100vw - 48px)', maxWidth: '1445px' }}
              >
                <div className="pointer-events-auto">
                  <MegaMenu />
                </div>
              </div>
            )}
          </div>

          <Link to="/projects" className="text-[17px] font-medium text-white hover:text-[#F7A400] transition-colors">Our Project</Link>
          <Link to="/product" className="text-[17px] font-medium text-white hover:text-[#F7A400] transition-colors">Our Product</Link>
          <Link to="/blog" className="text-[17px] font-medium text-white hover:text-[#F7A400] transition-colors">Blog</Link>
          <Link to="/careers" className="text-[17px] font-medium text-white hover:text-[#F7A400] transition-colors">Careers</Link>
          <Link to="/contact" className="text-[17px] font-medium text-white hover:text-[#F7A400] transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* DESKTOP BOOK MEETING BUTTON (FIXED) */}
          <Link 
            to="/book-meeting" 
            className="hidden sm:flex items-center bg-[#F7A400] text-white font-bold py-3 px-6 text-[15px] rounded-md border-2 border-[#F7A400] hover:bg-transparent transition-all duration-300"
          >
            <div className="flex items-center">
              <span>Book A Meeting</span>
              <RunningIcons />
            </div>
          </Link>

          {!isOpen && (
            <button className="lg:hidden w-12 h-12 flex flex-col justify-center items-center gap-2" onClick={() => setIsOpen(true)}>
              <span className="w-10 h-[3px] bg-white"></span>
              <span className="w-7 h-[3px] bg-[#F7A400] self-end"></span>
              <span className="w-10 h-[3px] bg-white"></span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Side Drawer */}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-[#0A0A0A] z-[105] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 lg:hidden shadow-2xl flex flex-col`}>
        <div className="flex justify-between items-center h-28 px-8 border-b border-white/5 bg-white/5">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
          <button className="text-white text-5xl font-light" onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-10 px-8 flex flex-col gap-6">
          <Link to="/home" className="flex items-center justify-between text-xl font-semibold text-white border-b border-white/10 pb-6" onClick={() => setIsOpen(false)}>
            Home <span className="text-[#F7A400] text-2xl">»</span>
          </Link>
          <Link to="/about" className="text-xl font-semibold text-white border-b border-white/10 pb-6 flex justify-between" onClick={() => setIsOpen(false)}>
            About  <span className="text-[#F7A400] text-2xl">»</span>
          </Link>

          <div className="flex flex-col border-b border-white/10">
            <div className="flex items-center justify-between w-full pb-6">
              <Link to="/service" className="text-xl font-semibold text-white" onClick={() => setIsOpen(false)}>
                Service
              </Link>
              <button onClick={() => setMobileServiceOpen(!mobileServiceOpen)}>
                <span className={`transition-transform duration-300 block text-[#F7A400] text-2xl ${mobileServiceOpen ? 'rotate-90' : ''}`}>»</span>
              </button>
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ${mobileServiceOpen ? 'max-h-[2500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
              {servicesData.map((service) => (
                <div key={service.id} className="mb-4">
                  <div className={`flex items-center justify-between w-full rounded-xl border transition-all ${activeSubMenu === service.id ? 'bg-[#F7A400] border-[#F7A400]' : 'bg-white/5 border-white/10'}`}>
                    <Link 
                      to={service.link} 
                      className={`flex-1 p-4 font-semibold text-[15px] ${activeSubMenu === service.id ? 'text-black' : 'text-white/90'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                    <button 
                      onClick={() => setActiveSubMenu(activeSubMenu === service.id ? null : service.id)}
                      className={`px-5 py-4 border-l ${activeSubMenu === service.id ? 'border-black/20 text-black' : 'border-white/10 text-[#F7A400]'}`}
                    >
                      <span className="text-xl font-bold">{activeSubMenu === service.id ? '−' : '+'}</span>
                    </button>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${activeSubMenu === service.id ? 'max-h-[800px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-3 pl-6 py-3 ml-4 border-l-2 border-[#F7A400]">
                      {service.items.map((sub, i) => (
                        <Link 
                          key={i} 
                          to={sub.link} 
                          className="text-white/70 hover:text-[#F7A400] text-[16px] font-medium py-1 transition-colors" 
                          onClick={() => setIsOpen(false)}
                        >
                          → {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {['Our Project', 'Our Product', 'Blog', 'Careers', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={item === 'Our Project' ? "/projects" : item === 'Our Product' ? "/product" : item === 'Blog' ? "/blog" : item === 'Careers' ? "/careers" : "/contact"} 
              className="flex items-center justify-between text-xl font-semibold text-white border-b border-white/10 pb-6"
              onClick={() => setIsOpen(false)}
            >
              {item} <span className="text-[#F7A400] text-2xl">»</span>
            </Link>
          ))}
          
          {/* MOBILE BOOK MEETING BUTTON (FIXED LINE 244) */}
          <Link 
            to="/book-meeting" 
            className="flex items-center justify-center mt-6 bg-[#F7A400] text-black font-bold text-lg py-5 rounded-xl w-full active:scale-95 transition-transform text-center shadow-[0_10px_30px_rgba(247,164,0,0.3)]"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <span>Book A Meeting</span>
              <RunningIcons isMobile={true} />
            </div>
          </Link>
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[101] lg:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;