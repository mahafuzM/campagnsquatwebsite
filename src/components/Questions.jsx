import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services does CampaignSquad provide?",
      answer: "CampaignSquad provides a wide range of services including UI/UX design, web development, custom software solutions, and digital marketing strategies tailored to grow your business."
    },
    {
      question: "How long does a typical project take?",
      answer: "The timeline depends on the project's complexity. Small projects might take 2-4 weeks, while larger enterprise solutions can take 3-6 months. We provide a detailed schedule after the initial discovery phase."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we offer various support packages to ensure your platform stays updated, secure, and performs at its best even after the initial launch."
    },
    {
      question: "Can you work with our existing design/codebase?",
      answer: "Absolutely. Our team is experienced in auditing and scaling existing projects. We can pick up from where your previous team left off or provide a complete refactor if needed."
    },
    {
      question: "How do you estimate the time for the UI/UX project?",
      answer: "We estimate based on the number of screens, user journey complexity, and required research. We use agile methodology to break down the process into clear milestones."
    }
  ];

  return (
    <section className="w-full bg-[#02050A] py-20 overflow-hidden font-poppins">
      {/* Container: 1445px max-width with consistent side padding */}
      <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 ">
            Just Ask Us Some Questions
          </h2>
          <p className="text-white text-[15px] md:text-[20px]">
            Quick answers to your most frequent inquiries
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border transition-all duration-300 rounded-2xl ${
                openIndex === index 
                ? 'border-[#f7a400] bg-[#0A0A0A]' 
                : 'border-gray-800/50 bg-[#0A0A0A] hover:border-gray-600'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${
                  openIndex === index ? 'text-[#f7a400]' : 'text-white'
                }`}>
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <div className="bg-[#f7a400] p-1.5 rounded-full shadow-[0_0_15px_rgba(247,164,0,0.3)] transition-transform duration-300 rotate-180">
                      <Minus size={22} strokeWidth={3} color="black" />
                    </div>
                  ) : (
                    <div className="bg-white/10 p-1.5 rounded-full transition-transform duration-300">
                      <Plus size={22} strokeWidth={3} color="white" />
                    </div>
                  )}
                </span>
              </button>

              {/* Animated Content Section */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-8 text-white text-lg leading-relaxed">
                  <div className="h-[1px] w-full bg-gray-800 mb-6"></div>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;