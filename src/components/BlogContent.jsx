import React, { useState } from 'react';
import { Search } from 'lucide-react'; 
import { Link } from 'react-router-dom'; // লিঙ্ক আপ করার জন্য এটি যোগ করা হয়েছে

// ইমেজ ইমপোর্ট
import blogImg1 from '../assets/images/business-people-using-laptop-meeting-room-1-1.jpg';
import blogImg2 from '../assets/images/blog-brand.jpg';
import blogImg3 from '../assets/images/blog-1.jpg';

const BlogContent = () => {
  const [activeCategory, setActiveCategory] = useState('Ui/Ux Design');
  const categories = ['Ui/Ux Design', 'Web Development', 'Software Development', 'Mobile Apps Development'];

  return (
    <div className="bg-[#02030a] min-h-screen text-white font-poppins selection:bg-white selection:text-black overflow-x-hidden">
      
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-10 md:py-20">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* LEFT SIDEBAR */}
          <aside className="w-full lg:w-[400px] shrink-0 bg-[#0a0a0a] border border-[#ffffff20] rounded-xl p-8 flex flex-col gap-10 h-fit">
            
            {/* Search Bar - Real Search Icon Added */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white uppercase tracking-widest">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full h-12 bg-[#ffffff10] text-white border border-[#ffffff20] rounded-lg px-4 pr-12 focus:outline-none focus:border-[#f7a400] transition-all placeholder:text-white/40"
                />
                {/* রিয়েল আইকন উইথ ফিক্সড কালার */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f7a400] cursor-pointer hover:scale-110 transition-transform">
                  <Search size={20} strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <hr className="border-[#ffffff10]" />

            {/* Categories */}
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-semibold text-white uppercase tracking-widest">Categories</h3>
              <ul className="space-y-4">
                {categories.map((cat, index) => {
                  const isActive = activeCategory === cat;
                  return (
                    <li 
                      key={index} 
                      onClick={() => setActiveCategory(cat)}
                      className="flex items-center gap-4 border-b border-[#ffffff10] pb-3 last:border-none cursor-pointer transition-all group"
                    >
                      <div className={`w-4 h-4 rounded-full border ${isActive ? 'border-[#f7a400]' : 'border-white'} flex items-center justify-center transition-colors`}>
                        {isActive && <div className="w-2 h-2 bg-[#f7a400] rounded-full"></div>}
                      </div>
                      <span className={`text-lg font-medium transition-colors ${isActive ? 'text-[#f7a400]' : 'text-white'}`}>
                        {cat}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <hr className="border-[#ffffff10]" />

            {/* Recent Posts */}
            <div className="flex flex-col gap-10"> 
              <h3 className="text-lg font-semibold text-white uppercase tracking-widest">Recent Posts</h3>
              {[
                { title: "How to design a website: A complete guide.", date: "Jan 4, 2026", img: blogImg1 },
                { title: "The Future Web Development 2026", date: "Jan 2, 2026", img: blogImg2 },
                { title: "The Art of Digital Storytelling", date: "Dec 30, 2026", img: blogImg3 }
              ].map((post, idx) => (
                <div key={idx} className="group cursor-pointer flex flex-col gap-4 border-b border-[#ffffff10] pb-7 last:border-none last:pb-0">
                  <div className="relative overflow-hidden rounded-xl h-48 border border-[#ffffff15]">
                     <div className="absolute top-4 left-4 z-10 bg-[#f7a400] text-white px-5 py-1.5 rounded text-[11px] font-bold uppercase tracking-widest">
                        {post.date}
                     </div>
                     <img src={post.img} alt="post" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <p className="text-lg font-bold leading-tight text-white group-hover:underline underline-offset-4">{post.title}</p>
                </div>
              ))}
            </div>

            <hr className="border-[#ffffff10]" />

            {/* Tags Section */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-white uppercase tracking-widest ">Tags</h3>
              <div className="flex flex-wrap gap-3 ">
                {[
                  'Ui/Ux', 'Web Design', 'Web', 
                  'Ui/Ux', 'Web Design', 'Web'
                ].map((tag, idx) => (
                  <span key={idx} className="border border-[#f7a400] bg-[#f7a400] px-6 py-2.5 rounded-lg text-[14px] font-bold cursor-pointer hover:bg-[#02040a] hover:border-[#f7a400] hover:text-white transition-all text-center">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT */}
          <main className="flex-1 flex flex-col gap-10 bg-[#0a0a0a] ">
            {[
              { id: 1, category: "Ui/Ux Design", title: "How to design a website: A complete guide.", date: "January 04 2026", author: "John Doe", img: blogImg1 },
              { id: 2, category: "Web Development", title: "The Future Web Development 2026", date: "January 02 2026", author: "John Doe", img: blogImg2 },
              { id: 3, category: "Ui/Ux Design", title: "The Art of Digital Storytelling: Secrets Experts", date: "December 30 2026", author: "John Doe", img: blogImg3 }
            ].map((post) => (
              <article key={post.id} className="bg-[#0a0a0a] border border-[#ffffff15] rounded-xl overflow-hidden flex flex-col group">
                
                <div className="relative overflow-hidden h-56 md:h-[300px]">
                   <div className="absolute top-5 left-5 z-10 bg-[#f7a400] text-white px-5 py-1.5 rounded text-[11px] font-bold uppercase tracking-widest shadow-lg">
                      {post.category}
                   </div>
                   <img src={post.img} alt="article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" />
                </div>
                
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-4 text-[#f7a400]">
                    <span className="text-base font-medium">{post.date}</span>
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="text-base font-medium">By {post.author}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-white leading-tight group-hover:text-[#f7a400] transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-white text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                    We will then develop a cohesive brand message and visual identity that resonate with our target audience. 
                    Our strategy includes optimizing our digital presence, leveraging social media, and crafting compelling 
                    content to engage our community.
                  </p>

                  {/* Learn more বাটনকে Link এ রূপান্তর করা হয়েছে */}
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-block bg-[#f7a400] border-2 border-[#F7A400] text-white px-8 py-2.5 rounded hover:bg-[#02050A] hover:text-white transition-all text-lg font-semibold text-[11px] tracking-widest w-fit text-center"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </main>

        </div>
      </div>
    </div>
  );
};

export default BlogContent;