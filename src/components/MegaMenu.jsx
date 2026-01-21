import React from 'react';
import { Link } from 'react-router-dom';
import uiIcon from '../assets/images/curve.png';
import webIcon from '../assets/images/coding.png';
import softIcon from '../assets/images/stack.png';
import mobIcon from '../assets/images/mobile-development.png';

const MegaMenu = () => {
  const serviceData = [
    {
      title: "UI/UX Design",
      image: uiIcon,
      path: "/ui-ux-design", 
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
      title: "Web Design & Development",
      image: webIcon,
      path: "/web-design-development", 
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
      title: "Software Development",
      image: softIcon,
      path: "/software-development", 
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
      title: "Mobile App Development",
      image: mobIcon,
      path: "/mobile-app-development", // App.js এর সাথে ম্যাচ করা হলো
      items: [
        { name: "Android Apps", link: "/android-apps" },
        { name: "iOS Apps", link: "/ios-apps" },
        { name: "Cross-Platform", link: "/cross-platform-apps" }, // match with App.js
        { name: "E-Commerce Apps", link: "/ecommerce-apps" },
        { name: "Booking Apps", link: "/booking-apps" },
        { name: "Food Delivery", link: "/food-delivery-apps" }, // match with App.js
        { name: "On-Demand Apps", link: "/on-demand-apps" }
      ]
    }
  ];

  return (
    <div className="lg:absolute lg:top-full lg:left-[-90px] lg:w-screen relative w-full pointer-events-auto pt-4 lg:pt-6 flex justify-center z-[50]">
      <div className="w-full lg:max-w-[1440px] px-2 md:px-12 lg:px-20">
        <div className="bg-[#0A0A0A] border-[1px] lg:border-[2px] border-[#8C9096]/30 rounded-2xl p-4 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {serviceData.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#02050A] border border-[#8C9096]/20 rounded-xl p-4 md:p-6 transition-all duration-300 flex flex-col group hover:border-[#F7A400] hover:shadow-[0_0_20px_rgba(247,164,0,0.1)]"
              >
                <Link to={service.path} className="flex items-center gap-3 mb-4 cursor-pointer group/title">
                  <div className="w-9 h-9 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center p-2 shrink-0 group-hover/title:scale-110 transition-transform">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <h3 className="text-white font-bold text-[14px] md:text-[17px] leading-tight group-hover/title:text-[#F7A400] transition-colors">
                    {service.title}
                  </h3>
                </Link>

                <div className="w-full h-[1px] bg-[#8C9096]/10 mb-4"></div>

                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        to={item.link} 
                        className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer group/item transition-all"
                      >
                        <span className="text-[#F7A400] text-lg font-black transition-transform group-hover/item:translate-x-1">
                          →
                        </span>
                        <span className="text-[12.5px] md:text-[14.5px] font-medium">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;