import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. useNavigate import kora hoyeche
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate(); // 2. navigate function initialize kora hoyeche

  // 3. Form submit handler jeta Home page-e niye jabe
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ekhane apni chaile form validation ba API call korte paren
    navigate('/'); // Home page-e redirect korbe
  };

  return (
    <section className="w-full bg-[#0A0A0A] py-20 font-poppins text-white overflow-hidden">
      {/* Container: Synchronized with 1445px width and consistent side padding */}
      <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT SIDE BOX: Contact Information */}
          <div className="border border-white/10 rounded-xl p-8 md:p-12 bg-[#02050A] flex flex-col justify-between">
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4  tracking-tight text-white">
                  Have A Project In Mind
                </h2>
                <p className="text-white text-lg">Let's Build Something Extraordinary Together.</p>
              </div>

              <div className="space-y-10">
                {/* Email Info */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#f7a400] rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    <Mail size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-wider mb-1">Email</h4>
                    <p className="text-white text-lg font-medium">Sales@Campaignsquad.Com</p>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#f7a400] rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    <Phone size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-wider mb-1">Phone</h4>
                    <p className="text-white text-lg font-medium">+88 01330093408</p>
                  </div>
                </div>

                {/* Address: Bangladesh */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#f7a400] rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    <MapPin size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-wider mb-1">Bangladesh</h4>
                    <p className="text-white text-lg leading-relaxed max-w-xs">
                      Shahid Moshiur Rahman Sharak, Jhenaidah 7300, Khulna, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Address: UK */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#f7a400] rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    <MapPin size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-wider mb-1">UK</h4>
                    <p className="text-white text-lg leading-relaxed max-w-xs">
                      Unit 13 Freeland Park Wareham Road, Poole, England, BH18 8FA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE BOX: Send Us A Message Form */}
          <div className="border border-white/10 rounded-xl p-8 md:p-12 bg-[#02050A]">
            <h3 className="text-3xl md:text-5xl font-bold mb-10 text-white  tracking-tight">Send Us A Message</h3>
            
            {/* Form submit e handleSubmit call kora hoyeche */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name Input */}
              <input 
                type="text" 
                placeholder="Full Name" 
                required
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg p-4 focus:outline-none focus:border-[#f7a400] transition-all placeholder:text-white text-white"
              />
              
              {/* Phone Number Input */}
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-4 focus:outline-none focus:border-[#f7a400] transition-all placeholder:text-white text-white"
              />

              {/* Email Input */}
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-4 focus:outline-none focus:border-[#f7a400] transition-all placeholder:text-white text-white"
              />

              {/* Service Selection */}
              <div className="relative">
                <select className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-4 focus:outline-none focus:border-[#f7a400] transition-all appearance-none cursor-pointer text-white">
                  <option selected disabled>Select Service</option>
                  <option>UI/UX Design</option>
                  <option>Web Design & Development</option>
                  <option>Software Development</option>
                  <option>Mobile App Development</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                  <ChevronDown size={20} />
                </div>
              </div>

              {/* Message Textarea */}
              <textarea 
                placeholder="Write your message here..." 
                rows="5"
                required
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-4 focus:outline-none focus:border-[#f7a400] transition-all placeholder:text-white resize-none text-white"
              ></textarea>

              {/* Submit Button */}
              <button 
                type="submit"
                className="bg-[#f7a400] text-white text-lg font-semibold py-4 px-10 rounded-lg flex items-center gap-2 border-2 border-[#F7A400] hover:border-[#F7A400] hover:bg-[#02050A] transition-all duration-300 w-full md:w-fit justify-center group"
              >
                Send Message 
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;