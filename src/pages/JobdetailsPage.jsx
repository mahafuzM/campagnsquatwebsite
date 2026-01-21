import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaClock, FaCheckCircle } from 'react-icons/fa';
// ১. এখানে Link ইম্পোর্ট করলাম
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const JobdetailsPage = () => {
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const sectionPadding = "max-w-[1300px] mx-auto px-6 sm:px-10 md:px-16";

    return (
        <main className="bg-[#02050a] font-poppins min-h-screen pt-28 pb-20 text-white">
            
            <div className={sectionPadding}>
                {/* --- Header Section --- */}
                <div className="border-b border-white/10 pb-10 mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Key Account Manager</h1>
                    
                    <div className="flex flex-wrap gap-8 text-white/90">
                        <div className="flex items-center gap-3 text-lg">
                            <FaMapMarkerAlt className="text-[#F7A400]" />
                            <span>Location: On-site</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <FaBriefcase className="text-[#F7A400]" />
                            <span>Type: Full Time</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <FaMoneyBillWave className="text-[#F7A400]" />
                            <span>Salary: Negotiable</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <FaClock className="text-[#F7A400]" />
                            <span>Shift: Night Shift (North America)</span>
                        </div>
                    </div>
                </div>

                {/* --- Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* Intro */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#F7A400] mb-6">What do we look for:</h2>
                            <div className="text-white text-xl leading-relaxed space-y-6">
                                <p>We’re looking for a highly motivated <span className="text-white font-bold underline decoration-[#F7A400]">Key Account Manager</span> to join our dynamic sales team. The best part? No prior experience or internships are required. If you have excellent English communication skills and come from a business or tech (CSE) background and have a passion for sales, this opportunity is made for you.</p>
                                <p>Global sales is one of the fastest-growing and most in-demand industries today, and very few are stepping up to lead. You can be one of the few — the superheroes of this space.</p>
                                <div className="bg-[#F7A400]/10 border-l-8 border-[#F7A400] p-6 italic text-white text-2xl rounded-r-lg">
                                    "If you're in your final semester with just 1–2 months left before graduation, you're highly welcome — and will be given priority for this position."
                                </div>
                            </div>
                        </section>

                        {/* Responsibilities */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#F7A400] mb-8">Core Responsibilities:</h2>
                            <ul className="grid gap-6">
                                {[
                                    "Engage with international clients (USA, Europe, Middle East) through professional English communication.",
                                    "Understand client needs and effectively present relevant service solutions.",
                                    "Conduct industry and competitor research to understand global market trends.",
                                    "Identify potential opportunities aligned with our services and target industries.",
                                    "Develop and maintain strong, long-term relationships with international clients.",
                                    "Provide consistent follow-up and support to move prospects through the sales funnel.",
                                    "Track communications, meetings, and deal progress using CRM tools.",
                                    "Participate in training sessions and stay updated on global business practices."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-white text-xl leading-snug">
                                        <FaCheckCircle className="text-[#F7A400] mt-1 shrink-0 text-2xl" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Requirements */}
                        <section className="bg-white/5 p-10 rounded-2xl border border-white/10">
                            <h2 className="text-3xl font-bold text-[#F7A400] mb-8">Core Requirements:</h2>
                            <div className="space-y-6 text-white text-xl">
                                <p>• <span className="text-[#F7A400] font-bold text-2xl italic">English Fluency:</span> You must be a clear, confident, and fluent communicator—both written and spoken. This is the most important skill.</p>
                                <p>• <span className="text-[#F7A400] font-bold">Background:</span> Foundational knowledge in business or computer science/technology.</p>
                                <p>• <span className="text-[#F7A400] font-bold">Education:</span> We don’t care about your CGPA. Dropouts or final semester students are encouraged.</p>
                                <p>• <span className="text-[#F7A400] font-bold">Essential:</span> Applicants must be open to working <span className="underline decoration-2 underline-offset-4">night shifts</span> (North American Time).</p>
                            </div>
                        </section>

                    </div>

                    {/* Right Column: Sidebar / Benefits */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#0a0a0a] border border-white/20 p-10 rounded-3xl sticky top-32 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Benefits & Perks</h2>
                            <ul className="space-y-5 mb-10">
                                {[
                                    "Negotiable Salary + Commission",
                                    "Two Weekly Holidays",
                                    "Subsidized Lunch & Snacks",
                                    "Two Festival Bonuses",
                                    "Yearly Salary Review",
                                    "Health Insurance (After 1 Year)",
                                    "Indoor Games (Table Tennis, Foosball)",
                                    "Long Service Benefit"
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-4 text-lg text-white font-medium">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#F7A400] shadow-[0_0_10px_#F7A400]"></div>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            
                            {/* ২. এই যে এখানে লিংক অ্যাড করে দিলাম */}
                           <Link to="/apply-job" className="w-full block">
                            <button className="w-full bg-[#F7A400] text-white font-semibold py-5 rounded-lg border-2 border-[#F7A400] transition-all duration-300 text-xl shadow-lg hover:bg-[#02050A] ">
                              Apply for this job
                              </button>
                             </Link>
                            
                            <p className="text-center text-white/50 mt-6 text-sm">
                                Send your CV to: careers@campaignsquat.com
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="mt-20">
                <Contact />
            </div>
        </main>
    );
};

export default JobdetailsPage;