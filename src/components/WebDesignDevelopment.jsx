import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

/**
 * Web Design & Development Page
 * Optimized with Premium Dark Theme & Golden Accents
 */

// ইমেজ ইমপোর্টসমূহ
import heroImage from '../assets/images/684e985125e45d423c56c5c8_ui-and-ux-design-services.avif';
import researchIcon from '../assets/images/research.png';
import uxIcon from '../assets/images/ux-design (1).png';
import webIcon from '../assets/images/web-design.png';
import auditIcon from '../assets/images/3d-modeling.png'; 
import uxAuditImg from "../assets/images/67bd99cca298f17199f21ee2_ux-audit.avif";
import accessibilityImg from "../assets/images/67bd99cd9074293ebd3da898_visual-design.avif";
import businessImg from "../assets/images/67bd99cd0ac28e0c052e54d2_ui-ux-design.avif";
import scalableImg from "../assets/images/67bd99cb048a34d913e1f6da_wireframing-and-prototyping.avif";
import discoveryImg from '../assets/images/research.png';
import designImg from '../assets/images/ux-design (1).png';
import iterationImg from '../assets/images/web-design.png';
import handoffImg from '../assets/images/deployment.png';
import sideImg from '../assets/images/68f83b06286c348a306ca292_ba2295a9420407bb9d191dce596af810_Group 2147225387.avif';
import img1 from '../assets/images/original-3632fddd9c6a0fd99b661a62dcfa64dc (1).webp';
import img2 from '../assets/images/rpvu1v3dzk7wzyresb1u.jpg';
import img3 from '../assets/images/original-8325640f824b29ea86b0529dea15ae0d.webp';
import img4 from '../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7.webp';
import img5 from '../assets/images/original-850e6ed57edfd03c6d1b94ae832d62f7 (1).webp';
import img6 from '../assets/images/original-ad1e136638ef25805d74bc2a9ff8ab7e.webp';
import img7 from '../assets/images/479f22210697035.Y3JvcCwyNjA5LDIwNDAsMTM1LDA.png';
import img8 from '../assets/images/original-e2914736408e4069af7f75a4d351c1b7.webp';
import BrandSlider from './BrandSlider';

const WebDesignDevelopment = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertiseData = [
        { id: "01", title: "Custom Web Development", desc: "Building high-performance, scalable websites tailored to your unique business needs.", img: researchIcon },
        { id: "02", title: "Responsive Design", desc: "Ensuring your website looks and functions perfectly on all devices, from mobile to desktop.", img: uxIcon },
        { id: "03", title: "E-commerce Solutions", desc: "Creating secure, conversion-optimized online stores that drive global sales.", img: webIcon },
        { id: "04", title: "Performance Optimization", desc: "Fast-loading, SEO-friendly websites engineered for speed and superior user experience.", img: auditIcon }
    ];

    const featureData = [
        {
            title: ["Turning Complex Ideas into", "Seamless Digital Reality"],
            desc: "Web development is about more than just code; it's about building a robust foundation for your brand's digital presence. We take your vision and translate it into a high-functioning ecosystem. By utilizing the latest frameworks, we ensure your site is not only visually stunning but also technically flawless.",
            img: uxAuditImg,
            reverse: false,
        },
        {
            title: ["Optimized for Speed,", "Built for Performance"],
            desc: "In the digital world, every millisecond counts. We prioritize technical SEO and clean code architecture to ensure lightning-fast load times. Our development process focuses on maximizing efficiency, helping you rank higher on search engines and keeping users engaged.",
            img: accessibilityImg,
            reverse: true,
        },
        {
            title: ["Scalable Architecture for", "Future-Ready Growth"],
            desc: 'Your website should grow as your business grows. We build using modular architecture and flexible integrations that allow for easy updates and future feature additions. Our code is written to be maintainable, secure, and ready for whatever comes next.',
            img: businessImg,
            reverse: false,
        },
        {
            title: ["Security and Privacy", "At the Core"],
            desc: "We integrate advanced security protocols into every layer of our process. From SSL encryption to secure API integrations, we ensure that your business data and user information are protected against vulnerabilities, providing total peace of mind.",
            img: scalableImg,
            reverse: true,
        },
    ];

    const processSteps = [
        { title: "Planning", description: "Mapping out the site structure and technology stack for success.", image: discoveryImg },
        { title: "Development", description: "Writing clean, efficient code to bring the design to life.", image: designImg },
        { title: "Quality Assurance", description: "Rigorous testing across browsers to ensure bug-free performance.", image: iterationImg },
        { title: "Launch", description: "Deployment and optimization for a smooth, high-impact go-live.", image: handoffImg }
    ];

    const points = ["Full-Stack Expertise", "SEO-First Approach", "Agile Development", "API Integrations", "Ongoing Support & Maintenance"];

    const industryData = [
        { title: "FinTech Platforms", desc: "Building secure financial dashboards and digital payment systems.", img: img1 },
        { title: "E-commerce Hubs", desc: "Developing scalable marketplaces with complex management.", img: img2 },
        { title: "HealthCare Portals", desc: "Secure and HIPAA-compliant platforms for patients and doctors.", img: img3 },
        { title: "Learning Platforms", desc: "Interactive LMS and educational portals for global students.", img: img4 },
        { title: "SaaS Products", desc: "Powerful web-based software solutions with subscription models.", img: img5 },
        { title: "Real Estate Portals", desc: "Search-intensive platforms with dynamic property listings.", img: img6 },
        { title: "Travel & Tourism", desc: "High-speed booking engines and destination discovery tools.", img: img7 },
        { title: "Business Consulting", desc: "Professional corporate sites that establish authority and trust.", img: img8 },
    ];

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                           <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]">
                           Web Design & <br/>Development
                            </h1>
                            <p className="text-white text-[16px] md:text-[19px] max-w-[520px] mx-auto lg:mx-0 leading-relaxed font-normal opacity-80">
                                We build fast, responsive, and secure websites. From custom coding to complex integrations, we create digital solutions that perform.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                                <Link to="/contact" className="w-full sm:w-auto">
                                  <button className="w-full sm:w-auto bg-[#F7A400] border-[#f7a400] border-2 text-white font-semibold py-4 px-10 text-[16px] md:text-[18px] rounded-lg transition-all duration-300 transform hover:bg-[#02050A]  active:scale-95 shadow-lg shadow-[#F7A400]/10 group">
                                    Get Started
                                  </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[80%] h-[80%] bg-[#F7A400]/5 blur-[100px] rounded-full"></div>
                            <img src={heroImage} alt="Web Development" className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Slider Section */}
            <section className="w-full overflow-hidden">
                <BrandSlider />
            </section>

            {/* 2. Expertise Section */}
            <section className="bg-[#0A0A0A] py-24 md:py-32">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 text-center w-full">
                    <div className="mb-20">
                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Development <span>Expertise</span></h2>
                        <p className="text-white text-[18px] md:text-[20px] max-w-2xl mx-auto font-medium opacity-80">Cutting-edge web solutions engineered for modern businesses.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {expertiseData.map((item, index) => (
                            <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2">
                                <span className="absolute -top-2 -right-2 text-white opacity-[0.03] text-7xl font-bold group-hover:opacity-10 transition-all">{item.id}</span>
                                <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-contain invert transition-all duration-500 group-hover:scale-110" style={{ filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)' }} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                    <p className="text-white text-[16px] leading-relaxed font-light opacity-80">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Features Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
                    <div className="flex flex-col gap-24 md:gap-44">
                        {featureData.map((item, index) => (
                            <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                <div className="w-full md:w-1/2 text-left">
                                    <h3 className="text-white text-2xl md:text-3xl lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => <span key={i} className="block leading-[1.3] mb-1 last:mb-0">{line}</span>)}
                                    </h3>
                                    <p className="text-white text-[16px] md:text-[17px] leading-relaxed font-light max-w-[580px] opacity-80">{item.desc}</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="relative group overflow-hidden rounded-[5px]">
                                        <div className="absolute -inset-4 bg-[#F7A400]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <img src={item.img} alt="Web Feature" className="relative z-10 w-full aspect-[16/10] object-cover border border-white/10 rounded-[5px] shadow-2xl transition-all duration-500 group-hover:scale-[1.03]" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Process Section */}
            <section className="w-full bg-[#0A0A0A] py-24 md:py-32">
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 text-center">
                    <h2 className="text-white text-[22px] md:text-[35px] lg:text-[45px] font-bold mb-20">Web Development Process</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center group cursor-pointer">
                                <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 group-hover:left-0 group-hover:rotate-[360deg]"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#02050A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50">
                                        <img src={step.image} alt={step.title} className="w-16 h-16 md:w-20 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110" />
                                    </div>
                                </div>
                                <h3 className="text-white text-[22px] md:text-[24px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{step.title}</h3>
                                <p className="text-white text-[15px] md:text-[16px] font-light max-w-[280px] opacity-70">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Section */}
            <section className="py-20 md:py-32 lg:py-40">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                    <div className="w-full lg:w-1/2 text-left order-2 lg:order-1 relative z-20">
                        <h2 className="text-white text-[32px] md:text-[40px] lg:text-[45px] font-bold mb-8 leading-[1.2]">Robust Websites for Modern Businesses</h2>
                        <div className="flex flex-col gap-6 mb-12">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-center gap-5 group">
                                    <div className="w-8 h-8 rounded-full border-2 border-[#F7A400] flex items-center justify-center transition-all duration-300 group-hover:bg-[#F7A400]">
                                        <Check className="text-[#F7A400] group-hover:text-black w-5 h-5 stroke-[3px]" />
                                    </div>
                                    <span className="text-white text-[18px] md:text-[20px] font-medium">{point}</span>
                                </div>
                            ))}
                        </div>
                       <Link to="/contact" className="inline-block w-full sm:w-auto">
                                                      <button className="w-full sm:w-auto bg-[#F7A400] text-white border-2 border-[#F7A400] text-xl rounded-[5px] px-10 py-4 font-semibold hover:bg-[#0a0a0a]  transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                                     Get Started
                                                      </button>
                                                     </Link>
                    </div>
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#F7A400]/5 blur-[100px] rounded-full -z-10"></div>
                            <img src={sideImg} alt="Web Development Excellence" className="w-full h-auto rounded-[10px] border border-white/5 shadow-2xl transition-all duration-700 group-hover:rotate-1" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industry Expertise (Running Border) */}
            <section className="py-24 md:py-36 relative overflow-hidden">
                <style>{`
                    @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; }
                    .border-run-container:hover .running-border { opacity: 1; }
                    .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
                    .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; }
                `}</style>
                <div className="max-w-[1445px] mx-auto px-6 text-center w-full">
                    <h2 className="text-white text-[32px] md:text-[45px] font-bold mb-16">Industry Expertise</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group cursor-pointer">
                                <div className="running-border"></div>
                                <div className="card-content flex flex-col">
                                    <div className="overflow-hidden rounded-t-[5px]">
                                        <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left">
                                        <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                        <p className="text-white text-[15px] font-light opacity-70">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WebDesignDevelopment;