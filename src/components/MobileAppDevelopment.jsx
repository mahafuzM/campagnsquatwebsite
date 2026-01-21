import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';


// ইমেজ ইমপোর্টসমূহ (তুমি তোমার পাথ অনুযায়ী ইমেজগুলো চেক করে নিও)
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

const MobileAppDevelopment = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const expertiseData = [
        { id: "01", title: "Custom App Dev", desc: "Building tailor-made mobile applications that align perfectly with your unique business requirements.", img: researchIcon },
        { id: "02", title: "Native Solutions", desc: "High-performance native apps for iOS and Android that leverage full device capabilities.", img: uxIcon },
        { id: "03", title: "App Optimization", desc: "Enhancing existing apps for better speed, responsiveness, and overall user performance.", img: webIcon },
        { id: "04", title: "Maintenance & Support", desc: "Ensuring your mobile applications stay updated, secure, and bug-free post-launch.", img: auditIcon }
    ];

    const featureData = [
        {
            title: ["Powerful Performance", "at Your Fingertips"],
            desc: "A great mobile app isn't just about looks; it's about speed and reliability. We focus on writing clean, efficient code that ensures your application runs smoothly even under heavy loads. By optimizing every background process and API call, we provide a lightning-fast experience that keeps users coming back. Our development team prioritizes resource management to ensure low battery consumption and high-speed responsiveness across all mobile devices.",
            img: uxAuditImg,
            reverse: false,
        },
        {
            title: ["Security Built Into", "the Core Architecture"],
            desc: "Data privacy and security are non-negotiable in today's mobile world. We implement high-level encryption, secure authentication (OAuth, JWT), and follow the best industry practices to protect your business and user data. From secure payment gateway integration to biometrics, we ensure that your mobile application is resilient against modern cyber threats and compliant with global security standards.",
            img: accessibilityImg,
            reverse: true,
        },
        {
            title: ["Seamless Integration", "with Your Ecosystem"],
            desc: "Your mobile app should work in harmony with your existing software and third-party services. We specialize in building robust APIs and connecting your app with CRM systems, ERPs, and cloud databases. Whether it's social media login, push notifications, or real-time data syncing, we ensure a unified experience across your entire digital presence, making your business operations more efficient and automated.",
            img: businessImg,
            reverse: false,
        },
        {
            title: ["Scalable Growth for", "Future-Ready Apps"],
            desc: "We don't just build for today; we build for your future success. Our app architecture is modular and scalable, allowing you to add new features and handle increasing user traffic without starting from scratch. We use cloud-native technologies to ensure that as your business grows, your mobile platform can grow with it—maintaining high performance and visual consistency throughout the expansion process.",
            img: scalableImg,
            reverse: true,
        },
    ];

    const processSteps = [
        { title: "Planning", description: "Strategizing the app architecture and feature set for your goals.", image: discoveryImg },
        { title: "Development", description: "Coding your application with modern frameworks and best practices.", image: designImg },
        { title: "Testing", description: "Rigorous QA testing to ensure a bug-free and stable user experience.", image: iterationImg },
        { title: "Launch", description: "Deploying your app to Play Store and App Store with full support.", image: handoffImg }
    ];

    const points = ["End-to-End Development", "Agile Methodology", "User-Centric Approach", "Cloud-Ready Infrastructure", "Seamless API Integration"];

    const industryData = [
        { title: "Finance", desc: "Secure mobile banking and wallet solutions for modern users.", img: img1 },
        { title: "Retail", desc: "Feature-rich shopping apps with integrated payment and tracking.", img: img2 },
        { title: "Healthcare", desc: "Telemedicine and patient management apps with data privacy.", img: img3 },
        { title: "Education", desc: "E-learning platforms with video streaming and interactive quizzes.", img: img4 },
        { title: "Business", desc: "Enterprise mobile solutions for internal workflow management.", img: img5 },
        { title: "Real Estate", desc: "Property listing apps with AR/VR tour and location services.", img: img6 },
        { title: "Travel", desc: "Real-time booking and navigation apps for modern travelers.", img: img7 },
        { title: "Logistics", desc: "Efficient delivery tracking and fleet management applications.", img: img8 },
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
                            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.4]">Mobile App Development</h1>
                            <p className="text-white text-[16px] md:text-[19px] max-w-[520px] mx-auto lg:mx-0 leading-relaxed font-normal">
                                Transform your ideas into high-performance mobile applications. We build scalable, secure, and user-friendly apps for Android and iOS that drive business success.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                              {/* Link container-e mobile-er jonno w-full use kora hoyeche */}
                          <Link to="/contact" className="block w-full sm:inline-block sm:w-auto">
                            <button className="w-full sm:w-auto border-2 border-[#f7a400] bg-[#F7A400] text-white font-semibold py-4 px-10 text-[16px] md:text-[18px] rounded-lg transition-all duration-300 hover:bg-[#02050A]  active:scale-95">
                             Start Developing
                              </button>
                            </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-full"></div>
                            <img src={heroImage} alt="Mobile App Development" className="relative z-10 w-full h-auto max-w-[550px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]" />
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
                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Development <span>Expertise</span></h2>
                        <p className="text-white text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed font-medium">Turning complex business logic into smooth mobile experiences with expert coding.</p>
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
                                        <img src={item.img} alt="Feature" className="relative z-10 w-full aspect-[16/10] object-cover border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] rounded-[5px]" />
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
                        <h2 className="text-white text-[22px] md:text-[35px] lg:text-[45px] font-bold tracking-tight mb-6">Our Development Process</h2>
                        <p className="text-white text-[16px] md:text-[18px] max-w-2xl font-light">We follow a structured agile process to deliver high-quality mobile applications on time and within budget.</p>
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
                            <h2 className="text-white text-[32px] md:text-[40px] lg:text-[45px] font-bold leading-[1.2] mb-8">We Build Apps That Your Users Love</h2>
                            <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light mb-10 max-w-[580px]">At Campaignsquat, we combine technical excellence with business strategy to deliver mobile products that make an impact.</p>
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
                                <img src={sideImg} alt="App Development Excellence" className="w-full h-auto max-h-[650px] object-contain rounded-[10px] border border-white/5 shadow-2xl" />
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
                        <h2 className="text-white text-[32px] md:text-[40px] lg:text-[45px] font-bold mb-6">Vertical Expertise</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Custom mobile solutions across different industries to solve unique challenges.</p>
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

export default MobileAppDevelopment;