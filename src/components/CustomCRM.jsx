import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

/** * Custom CRM Service Page
 * Exact replica of BusinessAutomation structure.
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

const CustomCRM = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertiseData = [
        { 
            id: "01", 
            title: "Lead Management", 
            desc: "Automate lead capturing and tracking to ensure no potential customer falls through the cracks with custom validation rules.", 
            img: researchIcon 
        },
        { 
            id: "02", 
            title: "Sales Pipeline", 
            desc: "Visualize your sales stages and manage deals efficiently with custom pipeline management tailored to your team's needs.", 
            img: uxIcon 
        },
        { 
            id: "03", 
            title: "Customer Analytics", 
            desc: "Gain deep insights into customer behavior with advanced data reporting and interactive visualization dashboards.", 
            img: webIcon 
        },
        { 
            id: "04", 
            title: "Workflow Automation", 
            desc: "Reduce repetitive tasks with intelligent triggers and automated email follow-ups built into your central database.", 
            img: auditIcon 
        }
    ];

    const featureData = [
        {
            title: ["Centralize Your Entire", "Customer Journey"],
            desc: "A custom CRM is more than a database; it's the brain of your business. We build systems that centralize communication across email, chat, and phone. By having a 360-degree view of your customers, your team can provide personalized service that increases retention and drives higher lifetime value.",
            img: uxAuditImg,
            reverse: false,
        },
        {
            title: ["Seamless Integration", "With Tech Stacks"],
            desc: "Your CRM shouldn't live on an island. We ensure it communicates perfectly with your existing tech stack, whether it's Mailchimp, Slack, or QuickBooks. Our custom API integrations allow for a unified workflow where data flows automatically between departments without manual entry.",
            img: accessibilityImg,
            reverse: true,
        },
        {
            title: ["Smart Notifications", "And Task Tracking"],
            desc: 'Stay ahead of every deal with automated reminders and priority task lists. Our CRM solutions use intelligent logic to alert your sales team when a high-value lead is active, ensuring your response time is faster than the competition and conversions remain high.',
            img: businessImg,
            reverse: false,
        },
        {
            title: ["Secure Role-Based", "Access Control"],
            desc: "Protect your sensitive customer data with advanced permission layers. We build CRM systems with granular access controls, ensuring that team members only see the information necessary for their specific roles, maintaining both security and clarity for your organization.",
            img: scalableImg,
            reverse: true,
        },
    ];

    const processSteps = [
        { title: "Consultation", description: "Mapping your sales process and identifying pain points in customer management for better logic flow.", image: discoveryImg },
        { title: "Architecture", description: "Designing custom fields, modules, and dashboard layouts specifically for your team's unique workflow.", image: designImg },
        { title: "Data Migration", description: "Safely importing your existing customer data from legacy tools or spreadsheets into the new system.", image: iterationImg },
        { title: "Handoff & Training", description: "Providing a smooth rollout with full team training and documentation for maximum software adoption.", image: handoffImg }
    ];

    const points = [
        "Real-time Reporting Engine", 
        "Custom Dashboard Views", 
        "Mobile-Friendly Interface", 
        "Automated Follow-up Triggers", 
        "Scalable Database Design"
    ];

    const industryData = [
        { title: "Real Estate", desc: "Manage property inquiries, site visits, and buyer history in one unified secure place.", img: img1 },
        { title: "Consulting", desc: "Track client interactions and project-based sales cycles seamlessly with automated reminders.", img: img2 },
        { title: "E-commerce", desc: "Sync customer orders with support tickets for a faster and better service experience.", img: img3 },
        { title: "Health Tech", desc: "Manage patient appointments and follow-up history securely with HIPAA compliance logic.", img: img4 },
        { title: "B2B SaaS", desc: "Complex sales cycles management with subscription tracking and churn analytics integration.", img: img5 },
        { title: "Education", desc: "Manage student admissions, lead scoring, and parent communication effectively at scale.", img: img6 },
        { title: "Insurance", desc: "Policy tracking and automated renewal reminders for clients with document management.", img: img7 },
        { title: "Automotive", desc: "Track test drives, service history, and vehicle sales pipelines with local dealer sync.", img: img8 },
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
                            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]">
                                Custom CRM <br/> Solutions
                            </h1>
                            <p className="text-white text-[16px] md:text-[19px] max-w-[520px] mx-auto lg:mx-0 leading-relaxed font-normal">
                                Build stronger customer relationships with a CRM built for your workflow. Automate sales, track leads, and grow faster with data-driven insights.
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
                            <img 
                                src={heroImage} 
                                alt="CRM Hero" 
                                className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]" 
                            />
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
                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">CRM <span>Capabilities</span></h2>
                        <p className="text-white text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed font-medium">Empower your sales and support teams with professional-grade customer management tools.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {expertiseData.map((item, index) => (
                            <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2">
                                <span className="absolute -top-2 -right-2 text-white opacity-[0.03] text-7xl font-bold group-hover:opacity-10 transition-all">{item.id}</span>
                                <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left" 
                                        style={{ filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)' }} 
                                    />
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
                                        <img src={item.img} alt="CRM Feature" className="relative z-10 w-full aspect-[16/10] object-cover border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] rounded-[5px]" />
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
                        <h2 className="text-white text-[22px] md:text-[35px] lg:text-[45px] font-bold tracking-tight mb-6">CRM Implementation Process</h2>
                        <p className="text-white text-[16px] md:text-[18px] max-w-2xl font-light">From deep audit to final data migration, we ensure your CRM implementation is seamless and high-performing.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                        <img 
                                            src={step.image} 
                                            alt={step.title} 
                                            className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" 
                                        />
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
                            <h2 className="text-white text-[32px] md:text-[40px] lg:text-[45px] font-bold leading-[1.2] mb-8">Work Smarter with Tailored Lead Tracking</h2>
                            <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light mb-10 max-w-[580px]">We deliver high-impact CRM solutions tailored to solve your communication bottlenecks and turn leads into loyal customers.</p>
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
                                <img src={sideImg} alt="CRM Excellence" className="w-full h-auto max-h-[650px] object-contain rounded-[10px] border border-white/5 shadow-2xl" />
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
                        <h2 className="text-white text-[32px] md:text-[40px] lg:text-[45px] font-bold mb-6">Industry Expertise</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Custom CRM architectures optimized for various business sectors to drive maximum retention.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group">
                                <div className="running-border"></div>
                                <div className="card-content flex flex-col">
                                    <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                                        />
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

export default CustomCRM;