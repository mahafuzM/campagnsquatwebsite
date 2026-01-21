import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

// ইমেজ ইমপোর্টসমূহ
import heroImage from '../assets/images/684e985125e45d423c56c5c8_ui-and-ux-design-services.avif';
import atomIcon from '../assets/images/research.png';
import colorIcon from '../assets/images/ux-design (1).png';
import componentIcon from '../assets/images/web-design.png';
import docIcon from '../assets/images/3d-modeling.png'; 
import atomicImg from "../assets/images/67bd99cca298f17199f21ee2_ux-audit.avif";
import brandImg from "../assets/images/67bd99cd9074293ebd3da898_visual-design.avif";
import libraryImg from "../assets/images/67bd99cd0ac28e0c052e54d2_ui-ux-design.avif";
import manualImg from "../assets/images/67bd99cb048a34d913e1f6da_wireframing-and-prototyping.avif";
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

const DesignSystem = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertiseData = [
        { id: "01", title: "Atomic Design", desc: "Building UI components from the smallest atoms to complex organisms for ultimate reuse.", img: atomIcon },
        { id: "02", title: "Visual Language", desc: "Establishing unique color palettes, typography, and iconography that define your brand.", img: colorIcon },
        { id: "03", title: "Shared Libraries", desc: "Creating centralized Figma and React libraries that keep design and code in perfect sync.", img: componentIcon },
        { id: "04", title: "Documentation", desc: "Providing clear guidelines on usage, spacing, and accessibility to empower teams.", img: docIcon }
    ];

    const featureData = [
        {
            title: ["Consistency at Scale", "Through Atomic Logic"],
            desc: "As digital products grow, visual inconsistency becomes a major problem. We solve this by building comprehensive Design Systems based on Atomic Design principles. By creating a single source of truth for every button, input, and card, we ensure that your product looks and feels identical across every page and platform. This consistency doesn't just look professional; it builds user trust and significantly reduces the cognitive load required to navigate your ecosystem.",
            img: atomicImg,
            reverse: false,
        },
        {
            title: ["Building a Unique", "Brand Visual Language"],
            desc: "A Design System is the digital manifestation of your brand. We don't just pick colors; we create a visual language that communicates your brand values. From the corner radius of a button to the motion curves of a transition, every detail is meticulously planned to be unique to your identity. This ensure that your product doesn't just look like another 'generic' app, but stands out in a crowded market with a distinct, premium personality.",
            img: brandImg,
            reverse: true,
        },
        {
            title: ["Accelerating Velocity", "with Component Libraries"],
            desc: "Stop wasting time reinventing the wheel for every new feature. Our Design Systems include robust component libraries that allow designers and developers to 'drag and drop' proven elements. This increases design velocity by up to 50%, allowing your team to focus on solving high-level user problems rather than debating padding or hex codes. It creates a predictable, high-speed environment where shipping new updates becomes faster and safer.",
            img: libraryImg,
            reverse: false,
        },
        {
            title: ["Living Documentation", "for Agile Teams"],
            desc: "A Design System is only useful if people know how to use it. We provide 'Living Documentation'—a comprehensive guide that explains the 'why' behind every design choice. We include accessibility standards (WCAG), spacing tokens, and developer specs. This bridges the gap between creative and technical teams, providing a common language that minimizes handoff friction and ensures that the final build is a pixel-perfect match to the design intent.",
            img: manualImg,
            reverse: true,
        },
    ];

    const processSteps = [
        { title: "Inventory", description: "Auditing existing designs to identify patterns and reusable elements.", image: discoveryImg },
        { title: "Foundations", description: "Defining color tokens, typography, and grid systems for the brand.", image: designImg },
        { title: "Building", description: "Developing a comprehensive library of UI components and patterns.", image: iterationImg },
        { title: "Guidelines", description: "Documenting usage rules and best practices for the entire team.", image: handoffImg }
    ];

    const points = ["Pixel-Perfect Consistency", "Faster Time-to-Market", "Scalable Component Logic", "Inclusive/Accessible Design", "Unified Brand Experience"];

    const industryData = [
        { title: "Enterprise Systems", desc: "Managing thousands of screens with a single source of truth.", img: img1 },
        { title: "FinTech Standards", desc: "Building trust through strict visual and accessible consistency.", img: img2 },
        { title: "Healthcare Kits", desc: "Clear, functional components for high-accuracy medical tools.", img: img3 },
        { title: "Retail Libraries", desc: "Scalable UI patterns for diverse e-commerce storefronts.", img: img4 },
        { title: "SaaS Frameworks", desc: "Modular components for complex data-heavy applications.", img: img5 },
        { title: "EdTech Kits", desc: "Friendly and engaging UI patterns for diverse age groups.", img: img6 },
        { title: "Travel Ecosystems", desc: "Cohesive experience across web, mobile, and kiosks.", img: img7 },
        { title: "Logistics UI", desc: "High-contrast, utility-focused components for field apps.", img: img8 },
    ];

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            {/* 1. Hero Section */}
            <section className="relative w-full flex items-center pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white leading-tight">Design Systems</h1>
                            <p className="text-white text-[16px] md:text-[19px] max-w-[520px] mx-auto lg:mx-0 leading-relaxed font-normal">
                                We create scalable, atomic Design Systems that empower your team to build consistent, high-quality products faster than ever before.
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
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img src={heroImage} alt="Design System Visuals" className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]" />
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
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center">
                    <div className="mb-20">
                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">System <span>Foundations</span></h2>
                        <p className="text-white text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed font-medium">Standardizing design to eliminate debt and maximize creative efficiency.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {expertiseData.map((item, index) => (
                            <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2">
                                <span className="absolute -top-2 -right-2 text-white opacity-[0.03] text-7xl font-bold group-hover:opacity-10 transition-all">{item.id}</span>
                                <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left" style={{ filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)' }} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                    <p className="text-white text-[16px] leading-relaxed font-light">{item.desc}</p>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F7A400]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-white text-2xl md:text-3xl lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => <span key={i} className="block leading-[1.3] mb-1 last:mb-0">{line}</span>)}
                                    </h3>
                                    <p className="text-white text-[16px] md:text-[17px] leading-relaxed font-light text-left max-w-[580px]">{item.desc}</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="relative group overflow-hidden rounded-[5px]">
                                        <div className="absolute -inset-4 bg-[#F7A400]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <img src={item.img} alt="Design System Feature" className="relative z-10 w-full aspect-[16/10] object-cover border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] rounded-[5px]" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Process Section */}
            <section className="w-full bg-[#02050A] py-24 md:py-32">
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                        <h2 className="text-white text-[22px] md:text-[35px] lg:text-[45px] font-bold tracking-tight mb-6">How We Build Systems</h2>
                        <p className="text-white text-[16px] md:text-[18px] max-w-2xl font-light">Creating a scalable design infrastructure requires a balanced mix of auditing, architecture, and documentation.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                        <img src={step.image} alt={step.title} className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    <h3 className="text-white text-[22px] md:text-[24px] lg:text-[26px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{step.title}</h3>
                                    <p className="text-white text-[15px] md:text-[16px] leading-relaxed font-light max-w-[280px]">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Section */}
            <section className="py-20 md:py-32 lg:py-40 relative z-[1]">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-20">
                            <h2 className="text-white text-[32px] md:text-[40px] lg:text-[45px] font-bold leading-[1.2] mb-8">Future-Proof Your Product Infrastructure</h2>
                            <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light mb-10 max-w-[580px]">We don't just deliver static designs; we build living ecosystems that grow with your company, saving you thousands in technical and design debt.</p>
                            <div className="flex flex-col gap-6 md:gap-7 mb-12">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-5 group">
                                        <div className="w-8 h-8 md:w-9 md:h-9 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                                            <Check className="text-[#F7A400] w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
                                        </div>
                                        <span className="text-white text-[18px] md:text-[20px] font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start">
                                <Link to="/contact" className="inline-block w-full sm:w-auto">
                                                               <button className="w-full sm:w-auto bg-[#F7A400] text-white border-2 border-[#F7A400] text-xl rounded-[5px] px-10 py-4 font-semibold hover:bg-[#0a0a0a]  transition-all duration-500 shadow-lg shadow-[#F7A400]/10 active:scale-95 group">
                                                              Get Started
                                                               </button>
                                                              </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img src={sideImg} alt="Design System Excellence" className="w-full h-auto max-h-[650px] object-contain rounded-[10px] border border-white/5 shadow-2xl" />
                                <div className="absolute inset-0 bg-[#F7A400]/5 blur-[120px] rounded-full -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industries Section */}
            <section className="py-24 md:py-36 mt-[-60px] md:mt-[-90px] relative z-10 overflow-hidden">
                <style>{`
                    @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; }
                    .border-run-container:hover .running-border { opacity: 1; }
                    .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
                    .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; }
                `}</style>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-white text-[32px] md:text-[40px] lg:text-[45px] font-bold mb-6">Systems We've Built</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Scalable design infrastructure across diverse industrial ecosystems.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group">
                                <div className="running-border"></div>
                                <div className="card-content flex flex-col">
                                    <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col text-left">
                                        <h3 className="text-white text-xl md:text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                        <p className="text-white text-[14px] md:text-[15px] font-light opacity-90">{item.desc}</p>
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

export default DesignSystem;