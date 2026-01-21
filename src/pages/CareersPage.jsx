import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // এইটা অ্যাড করলাম লিঙ্ক আপ করার জন্য

// ইমেজ ইমপোর্ট
import careerHeroImg from '../assets/images/pexels-fauxels-3182787.jpg';
import environmentIcon from '../assets/images/environment.png';
import moneyIcon from '../assets/images/money.png';
import coffeeIcon from '../assets/images/coffee.png';
import virtualIcon from '../assets/images/virtual-world.png';
import travelIcon from '../assets/images/travel-and-tourism.png';
import Contact from '../components/Contact';

const CareersPage = () => {
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const benefits = [
        { title: <>Excellent Culture <br/> & Environment</>, img: environmentIcon },
        { title: <>Performance & <br/> Festival Bonuses</>, img: moneyIcon },
        { title: <>Meals, Coffee <br/> & Snacks</>, img: coffeeIcon },
        { title: <>Work-Life <br/> Harmony</>, img: virtualIcon },
        { title: <>Annual <br/> Pleasure Tour</>, img: travelIcon }
    ];

    const jobOpenings = [
        { title: "Software Engineer", type: "On-Site", time: "Full Time" },
        { title: "Full Stack Developer", type: "On-Site", time: "Full Time" },
        { title: "Senior UI Designer", type: "On-Site", time: "Full Time" },
        { title: "Outreach Specialist", type: "On-Site", time: "Full Time" },
        { title: "Media Buyer", type: "On-Site", time: "Full Time" },
        { title: "Business Analyst", type: "On-Site", time: "Full Time" }
    ];

    const goldenFilter = {
        filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)'
    };

    const sectionPadding = "max-w-[1445px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20";

    return (
        <main className="bg-[#02050a] font-poppins min-h-screen">
            {/* --- Running Border Animation CSS --- */}
            <style>
                {`
                    @keyframes border-rotate {
                        100% { transform: rotate(360deg); }
                    }
                    .running-border-box {
                        position: relative;
                        padding: 3px;
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .running-border-box::before {
                        content: '';
                        position: absolute;
                        width: 150%;
                        height: 150%;
                        background: conic-gradient(transparent, transparent, transparent, #f7a400);
                        animation: border-rotate 4s linear infinite;
                    }
                    .inner-content {
                        position: relative;
                        z-index: 10;
                        background: #02050a;
                        width: 100%;
                        height: 100%;
                    }
                `}
            </style>
            
            {/* --- ১. Hero Section --- */}
            <section className="relative w-full pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#F7A400]/5 blur-[100px] md:blur-[140px] rounded-full -z-0"></div>
                
                <div className={sectionPadding}>
                    <div className="flex flex-col items-center text-center mb-16 relative z-10">
                        <h1 className="text-white text-3xl md:text-5xl lg:text-[54px] font-bold leading-[1.3] md:leading-[1.4]">
                            Shape the Future of Campaignsquat. Ltd 
                            <br className="hidden md:block" /> 
                            with Us
                        </h1>
                        
                        <p className="text-white text-[18px] md:text-[20px] max-w-[800px] leading-relaxed font-light mt-10 md:mt-12">
                            We’re a team of passionate designers and thinkers building products that people love. 
                            Come do the best work of your life with us.
                        </p>
                    </div>
                    
                    <div className="running-border-box rounded-[5px] md:rounded-[10px] max-w-[1250px] mx-auto shadow-2xl">
                        <div className="inner-content rounded-[5px] md:rounded-[10px] overflow-hidden group">
                            <img 
                                src={careerHeroImg} 
                                alt="Campaignsquat Team" 
                                className="w-full h-auto object-cover max-h-[400px] md:max-h-[600px] transition-transform duration-1000 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#02050a]/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ২. Why Join Section --- */}
            <section className="py-20 md:py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className={sectionPadding}>
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-white text-2xl md:text-[45px] font-bold tracking-tight">
                            Why Join Campaignsquat Ltd.
                        </h2>
                        <p className="text-white text-[18px] md:text-[20px] max-w-[750px] mx-auto leading-relaxed mt-8 md:mt-16">
                            We believe in taking care of our team as much as we care<br></br> for our clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 md:w-24 md:h-24 mb-6 relative flex items-center justify-center transition-all duration-500">
                                    <div className="absolute inset-0 bg-[#F7A400]/0 rounded-full group-hover:bg-[#F7A400]/10 transition-all duration-500 scale-50 group-hover:scale-100 border border-white/5 group-hover:border-[#F7A400]/20"></div>
                                    <img src={benefit.img} alt="Benefit" className="w-12 h-12 md:w-14 md:h-14 object-contain transition-all duration-500 group-hover:scale-110" style={goldenFilter} />
                                </div>
                                <h3 className="text-white text-lg md:text-[20px] font-semibold leading-[1.4] group-hover:text-[#F7A400] transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ৩. Current Openings Section --- */}
            <section className="py-20 md:py-24 bg-[#02050a]">
                <div className={sectionPadding}>
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-white text-2xl md:text-[45px] font-bold mb-8 md:mb-12">
                            Current Openings
                        </h2>
                        <p className="text-white text-[18px] md:text-[20px] max-w-[900px] mx-auto font-light leading-relaxed">
                            Explore Our Open Roles And Find The Perfect Opportunity To Grow Your Career With Campaignsquat.Ltd
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {jobOpenings.map((job, index) => (
                            <div key={index} className="bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden flex flex-col group hover:border-[#F7A400]/30 transition-all duration-300">
                                <div className="p-6 md:p-8 pb-10 flex-grow">
                                    <h3 className="text-white text-xl md:text-2xl font-bold mb-3">{job.title}</h3>
                                    <p className="text-white text-[16px] md:text-lg mb-6 font-medium">{job.type}</p>
                                    <div className="inline-block px-5 py-2 rounded-md border border-[#F7A400] text-white text-sm font-semibold tracking-wide">
                                        {job.time}
                                    </div>
                                </div>
                               <Link 
                                    to="/job-details" 
                                   className="w-full bg-[#F7A400] text-white font-bold py-4 text-center block text-semibase md:text-lg border-2 border-[#F7A400] hover:bg-[#02050A] transition-colors duration-300"
                                  >
                                   Job Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
};

export default CareersPage;