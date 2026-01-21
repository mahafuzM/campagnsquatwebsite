import React, { useEffect, useState, useRef } from 'react';
import { FaUpload, FaChevronLeft, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';


const ApplyjobPage = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); 
    const [fileName, setFileName] = useState("No file selected");

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // --- TESTING ER JONNO: EmailJS kaj na korleo nichei animation dekhabe ---
        // setStatus('success'); // Shudhu check korar jonno eita uncomment kore dekhte paro
        
        emailjs.sendForm(
            'YOUR_SERVICE_ID', 
            'YOUR_TEMPLATE_ID',
            formRef.current, 
            'YOUR_PUBLIC_KEY'
        )
        .then(() => {
            setLoading(false);
            setStatus('success'); 
            setFileName("No file selected");
            formRef.current.reset();
        })
        .catch((error) => {
            setLoading(false);
            // EmailJS error khaileo jate tumi bujhte paro, tai status success kore dekho testing e
            console.log("Error:", error.text);
            alert("EmailJS Keys gulo thik moto bosaite hobe, naile Success hobe na!");
        });
    };

    const labelStyle = "block text-white text-lg font-medium mb-3";
    const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#F7A400] transition-all text-lg";

    const cardWrapper = "relative p-[2px] overflow-hidden rounded-2xl group";
    const runningBorderBg = "absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#000_40%,#F7A400_50%,#000_60%,#000_100%)]";
    const cardInner = "relative bg-[#0a0a0a] rounded-2xl p-8 md:p-12 h-full w-full";

    return (
        <main className="bg-[#02050a] font-poppins min-h-screen pt-28 pb-20 relative">
            <style>
                {` 
                   @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } 
                   @keyframes zoomIn { 
                     from { transform: scale(0.8); opacity: 0; } 
                     to { transform: scale(1); opacity: 1; } 
                   }
                `}
            </style>

            {/* --- FULL SCREEN SUCCESS OVERLAY --- */}
            {status === 'success' && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4">
                    <div className="bg-[#0a0a0a] border-2 border-[#F7A400] p-10 rounded-[40px] max-w-[450px] w-full text-center shadow-[0_0_80px_rgba(247,164,0,0.4)] animate-[zoomIn_0.3s_ease-out]">
                        <div className="w-24 h-24 bg-[#F7A400] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(247,164,0,0.5)]">
                            <FaCheckCircle className="text-black" size={55} />
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">Application Sent!</h2>
                        <p className="text-white/60 text-lg mb-10 leading-relaxed">
                            We have received your application. Our team will get back to you shortly.
                        </p>
                        <button 
                            onClick={() => setStatus(null)}
                            className="w-full bg-[#F7A400] text-black font-bold py-5 rounded-2xl hover:bg-white transition-all transform active:scale-95 text-xl"
                        >
                            Awesome!
                        </button>
                    </div>
                </div>
            )}

            <div className="max-w-[850px] mx-auto px-6">
                <Link to="/job-details" className="inline-flex items-center gap-2 text-white hover:text-[#f7a400] transition-colors mb-10 group">
                    <FaChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Job Details</span>
                </Link>

                <div className={cardWrapper}>
                    <div className={runningBorderBg}></div>
                    <div className={cardInner}>
                        <div className="mb-12 border-b border-white/10 pb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Job Application Form</h1>
                            <p className="text-white text-lg">Provide your details to join Campaignsquat.Ltd</p>
                        </div>

                        <form ref={formRef} className="space-y-10" onSubmit={handleSubmit}>
                            {/* Inputs (Same as yours) */}
                            <div>
                                <label className={labelStyle}>Full Name <span className="text-[#F7A400]">*</span></label>
                                <input name="full_name" type="text" placeholder="Enter your full name" required className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Email Address <span className="text-[#F7A400]">*</span></label>
                                <input name="email" type="email" placeholder="example@mail.com" required className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Phone Number <span className="text-[#F7A400]">*</span></label>
                                <input name="phone" type="tel" placeholder="Your answer" required className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Total Year of Experience <span className="text-[#F7A400]">*</span></label>
                                <input name="total_exp" type="text" placeholder="e.g. 2+ years" required className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Current Salary <span className="text-[#F7A400]">*</span></label>
                                <input name="current_salary" type="text" placeholder="Your answer" required className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Expected Salary <span className="text-[#F7A400]">*</span></label>
                                <input name="expected_salary" type="text" placeholder="Your answer" required className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Cover Letter <span className="text-[#F7A400]">*</span></label>
                                <textarea name="cover_letter" placeholder="Why should we hire you?" required className={`${inputStyle} h-40 resize-none`} />
                            </div>

                            {/* CV Upload */}
                            <div>
                                <label className={labelStyle}>CV or Resume <span className="text-[#F7A400]">*</span></label>
                                <div className="relative">
                                    <input type="file" id="cv-upload" name="cv_file" onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" required />
                                    <label htmlFor="cv-upload" className="flex flex-col items-center justify-center gap-4 w-full border-2 border-dashed border-white/10 hover:border-[#F7A400] rounded-2xl px-6 py-12 cursor-pointer transition-all group bg-white/[0.01] hover:bg-[#F7A400]/5 text-center">
                                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F7A400]/10 transition-colors">
                                            <FaUpload className="text-[#F7A400]" size={24} />
                                        </div>
                                        <div>
                                            <span className="text-white font-semibold text-lg block">Upload a file or drag and drop here</span>
                                            <p className="text-white text-sm mt-2 max-w-sm mx-auto leading-relaxed">
                                                Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 50MB.
                                            </p>
                                        </div>
                                        {fileName !== "No file selected" && (
                                            <span className="mt-4 px-4 py-1.5 bg-[#F7A400]/20 text-[#F7A400] rounded-full text-sm font-medium border border-[#F7A400]/30 animate-pulse">
                                                Selected: {fileName}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center gap-6">
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="w-full md:w-max bg-[#F7A400] border-2 border-[#F7A400] text-white font-semibold px-14 py-4 rounded-lg text-xl hover:bg-transparent transition-all transform active:scale-95  flex items-center justify-center gap-3"
                                >
                                    {loading && <FaSpinner className="animate-spin" />}
                                    {loading ? 'Submitting...' : 'Submit Application'}
                                </button>
                                
                                <button 
                                    type="reset" 
                                    onClick={() => {setFileName("No file selected"); setStatus(null);}} 
                                    className="text-white hover:text-[#f7a400] transition-colors text-lg"
                                >
                                    Clear form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <p className="text-center text-white/30 text-sm mt-10">
                    Form created for Campaignsquat.Ltd. All rights reserved.
                </p>
            </div>
        </main>
    );
};

export default ApplyjobPage;