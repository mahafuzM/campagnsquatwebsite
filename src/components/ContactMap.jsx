import React from 'react';

const ContactMap = () => {
  // ঝিনাইদহ শহীদ মশিউর রহমান সড়ক (৭৩০০) এর একদম রিয়েল গুগল ম্যাপ এমবেড লিঙ্ক
  const googleMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14647.924831614053!2d89.17641045!3d23.54219565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9e7f77207c47d%3A0x6a92e182b98b07e9!2sJhenaidah%20Sadar%2C%20Jhenaidah!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd";

  return (
    <section className="w-full bg-[#02050A] py-12 md:py-16">
      {/* Container with max-width 1445px and equal side padding */}
      <div className="max-w-[1445px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Real Google Map Container */}
        <div className="w-full h-[450px] md:h-[600px] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-300 hover:border-[#F7A400]/50 bg-[#111]">
          <iframe
            title="Shohid Moshiur Rahman Sharak Map"
            src={googleMapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;