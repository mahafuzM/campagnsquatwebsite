import React, { useEffect } from 'react'; // 1. useEffect import koro
import BlogHero from '../components/BlogHero';
import BlogContent from '../components/BlogContent';
import Contact from '../components/Contact';

const BlogPage = () => {
  
  // 2. Page load holei scroll top-e niye jawar logic
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'smooth' dile dhire dhire upore uthbe, 'instant' dile jhotpot chole jabe
    });
  }, []);

  return (
    <div className="w-full bg-[#02050A]">
      <BlogHero /> 
      <BlogContent />
      <Contact />
    </div>
  );
};

export default BlogPage;