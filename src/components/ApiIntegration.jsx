import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

/** * API Integration Service Page
 * This component handles the full layout for Custom API Integration services.
 * Optimized for React 18+ and Tailwind CSS.
 */

// ইমেজ ইমপোর্টসমূহ (তোর অরিজিনাল পাথ অনুযায়ী)
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

const ApiIntegration = () => {

    useEffect(() => {
        // স্ক্রল টপে নেওয়ার জন্য window hook
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // ১. এক্সপার্টিজ ডাটা (API Integration কন্টেন্ট)
    const expertiseData = [
        { id: "01", title: "Restful & GraphQL", desc: "Building high-performance, secure, and flexible API architectures for modern web apps with specialized endpoint management.", img: researchIcon },
        { id: "02", title: "Third-Party Sync", desc: "Seamlessly connecting your platform with global tools like Stripe, Twilio, Google Maps, and various custom SaaS solutions.", img: uxIcon },
        { id: "03", title: "Legacy Integration", desc: "Bridging the gap between your old software and new digital ecosystems safely using custom wrapper architectures and middleware.", img: webIcon },
        { id: "04", title: "Webhook Systems", desc: "Implementing real-time data push notifications and automated event-driven triggers to keep all systems in perfect synchronization.", img: auditIcon }
    ];

    // ২. ফিচার সেকশন ডাটা
    const featureData = [
        {
            title: ["Connect Your Entire", "Software Ecosystem"],
            desc: "Modern businesses run on dozens of apps. We make sure they all speak the same language. Our custom API integration services allow data to flow seamlessly between your website, mobile app, CRM, and accounting software, eliminating manual data entry forever. We focus on low-latency connections that ensure your data moves at the speed of your business.",
            img: uxAuditImg,
            reverse: false,
        },
        {
            title: ["Secure and Robust", "Payment Gateways"],
            desc: "Security is non-negotiable in financial transactions. We integrate PCI-compliant payment gateways like Stripe, PayPal, and SSLCommerz, ensuring that every transaction is encrypted and secure. We handle the complex logic of subscriptions, automated refunds, and multi-currency payouts while maintaining a detailed audit trail for every single cent processed.",
            img: accessibilityImg,
            reverse: true,
        },
        {
            title: ["Scalable Middleware", "and Data Bridges"],
            desc: 'Sometimes off-the-shelf tools don’t fit your unique business logic. We build custom middleware that acts as a specialized translator between different software. This ensures that even legacy on-premise systems can share data with modern cloud platforms without compromising speed, reliability, or exposing sensitive internal network structures.',
            img: businessImg,
            reverse: false,
        },
        {
            title: ["Real-Time Monitoring", "and API Auditing"],
            desc: "An API is only as good as its uptime. We implement advanced logging and real-time monitoring tools to track every request and response. If a third-party service goes down, our systems use intelligent failover logic and automated retry mechanisms to ensure your business operations remain unaffected and data remains consistent across all platforms.",
            img: scalableImg,
            reverse: true,
        },
    ];

    // ৩. প্রসেস স্টেপস (API Workflow)
    const processSteps = [
        { title: "Endpoint Mapping", description: "Identifying data endpoints and communication protocols for maximum efficiency and security analysis.", image: discoveryImg },
        { title: "Middleware Logic", description: "Writing the logic to process and transform data securely between different applications and databases.", image: designImg },
        { title: "Security Layer", description: "Implementing OAuth 2.0, JWT, and high-level encryption layers to protect data integrity during transmission.", image: iterationImg },
        { title: "Speed Optimization", description: "Tuning the connection for low-latency and high-speed data transfer across the global infrastructure.", image: handoffImg }
    ];

    // ৪. কি-পয়েন্টস (Why Choose Us)
    const points = ["OAuth 2.0 Security Protocols", "Low-Latency Response Time", "Scalable Rate Limiting Logic", "Auto-Generated Swagger Docs", "24/7 Endpoint Uptime Monitoring"];

    // ৫. ইন্ডাস্ট্রি ডাটা (Cross-Sector Expertise)
    const industryData = [
        { title: "FinTech", desc: "Connecting banking APIs and secure transaction processing hubs with multi-layer encryption.", img: img1 },
        { title: "E-commerce", desc: "Syncing inventory with Amazon, eBay, and global logistics providers for automated fulfillment.", img: img2 },
        { title: "Travel & Booking", desc: "Integrating flight, hotel, and car rental GDS systems for real-time availability updates.", img: img3 },
        { title: "Healthcare", desc: "Connecting labs and diagnostic centers with patient portals following strict HIPAA compliance.", img: img4 },
        { title: "Social Media", desc: "Automating data analytics and posting across global platforms via official API channels.", img: img5 },
        { title: "Logistics", desc: "Real-time GPS tracking and carrier API integrations for end-to-end supply chain visibility.", img: img6 },
        { title: "Gov-Tech", desc: "Secure digital ID and government database connectivity for efficient public service delivery.", img: img7 },
        { title: "EdTech", desc: "Connecting virtual classrooms with payment, result systems, and student management portals.", img: img8 },
    ];

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            {/* --- Hero Section Start --- */}
            <section className="relative w-full flex items-center pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]">Custom API <br className="hidden lg:block"/>Integrations</h1>
                            <p className="text-white text-[16px] md:text-[19px] max-w-[520px] mx-auto lg:mx-0 leading-relaxed font-normal opacity-90">
                                Connect, sync, and scale. We build secure API bridges that unify your business tools into one powerful, automated ecosystem for seamless data flow.
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
                            <div className="absolute w-[85%] h-[85%] bg-[#F7A400]/5 blur-[100px] rounded-full"></div>
                            <img src={heroImage} alt="API Integration" className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-[1.03]" />
                        </div>
                    </div>
                </div>
            </section>

             {/* Slider Section */}
            <section className="w-full overflow-hidden">
                <BrandSlider />
            </section>

            {/* --- Expertise Section Start --- */}
            <section className="bg-[#0A0A0A] py-24 md:py-32 border-y border-white/5">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 text-center relative">
                    <div className="mb-20">
                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Integration <span>Expertise</span></h2>
                        <p className="text-white text-[18px] md:text-[20px] max-w-2xl mx-auto font-medium opacity-80">Building secure bridges between the world's most powerful software platforms for enterprise scalability.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {expertiseData.map((item, index) => (
                            <div key={index} className="group relative bg-[#02050A] border border-white/10 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2">
                                <span className="absolute -top-2 -right-2 text-white opacity-[0.03] text-7xl font-bold group-hover:opacity-10 transition-all">{item.id}</span>
                                <div className="mb-8 w-16 h-16 flex items-center justify-start relative z-10">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                    <p className="text-white text-[16px] leading-relaxed font-light opacity-70">{item.desc}</p>
                                </div>
                                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#F7A400]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Features Section Start --- */}
            <section className="py-20 md:py-32 lg:py-44">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
                    <div className="flex flex-col gap-28 md:gap-48">
                        {featureData.map((item, index) => (
                            <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                <div className="w-full md:w-1/2 text-left">
                                    <h3 className="text-white text-2xl md:text-3xl lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => <span key={i} className="block leading-[1.3] mb-1">{line}</span>)}
                                    </h3>
                                    <p className="text-white text-[16px] md:text-[17px] leading-relaxed font-light max-w-[580px] opacity-80">{item.desc}</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="relative group overflow-hidden rounded-[5px] border border-white/10">
                                        <div className="absolute inset-0 bg-[#F7A400]/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                        <img src={item.img} alt="API Integration Feature" className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105 shadow-2xl" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Process Section Start --- */}
            <section className="w-full bg-[#02050A] py-24 md:py-36 border-t border-white/5">
                <div className="max-w-[1445px] mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto mb-24">
                        <h2 className="text-white text-[35px] md:text-[45px] font-bold mb-6">The Integration Process</h2>
                        <p className="text-white/60 text-lg font-light">We follow a methodical approach to ensure every data bridge is secure, fast, and resilient against third-party server failures.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center group cursor-default">
                                <div className="relative mb-12 w-40 h-40 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 group-hover:rotate-[360deg] group-hover:left-0 opacity-50"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 group-hover:border-[#F7A400]/50 shadow-2xl transition-all">
                                        <img src={step.image} alt={step.title} className="w-16 h-16 brightness-0 invert group-hover:scale-110 transition-transform" />
                                    </div>
                                </div>
                                <h3 className="text-white text-[24px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{step.title}</h3>
                                <p className="text-white/70 text-[15px] font-light max-w-[280px] leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Why Choose Section Start --- */}
            <section className="py-24 md:py-32 lg:py-40">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    <div className="w-full lg:w-1/2 text-left order-2 lg:order-1 relative">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#F7A400]/5 blur-[100px] -z-10"></div>
                        <h2 className="text-white text-[32px] md:text-[45px] font-bold mb-8 leading-tight">Seamless Connectivity for Superior Efficiency</h2>
                        <div className="flex flex-col gap-6 mb-12">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-center gap-5 group">
                                    <div className="w-8 h-8 rounded-full border-2 border-[#F7A400] flex items-center justify-center group-hover:bg-[#F7A400] transition-all duration-300">
                                        <Check className="text-[#F7A400] group-hover:text-black w-5 h-5 stroke-[3px]" />
                                    </div>
                                    <span className="text-white text-[18px] md:text-[20px] font-medium opacity-90">{point}</span>
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
                        <div className="relative group overflow-hidden rounded-[10px] border border-white/5">
                            <img src={sideImg} alt="API Integration Solutions" className="w-full h-auto transition-transform duration-1000 group-hover:scale-105 shadow-2xl" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#02050a] to-transparent opacity-30"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Industry Expertise Section Start --- */}
            <section className="py-24 md:py-36 relative overflow-hidden bg-[#0A0A0A]/50 border-t border-white/5">
                <style>{`
                    @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; }
                    .border-run-container:hover .running-border { opacity: 1; }
                    .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
                    .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; transition: all 0.4s ease; }
                    .border-run-container:hover .card-content { background: #0c0c0c; transform: translateY(-2px); }
                `}</style>
                <div className="max-w-[1445px] mx-auto px-6 text-center">
                    <h2 className="text-white text-[35px] md:text-[45px] font-bold mb-16">Enterprise Sector Expertise</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group">
                                <div className="running-border"></div>
                                <div className="card-content flex flex-col h-full">
                                    <div className="overflow-hidden h-52">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-t-[5px] transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left flex-grow">
                                        <h3 className="text-white text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                        <p className="text-white/70 text-[15px] font-light leading-relaxed">{item.desc}</p>
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

export default ApiIntegration;
// End of ApiIntegration Component