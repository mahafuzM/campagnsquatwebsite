import React, { useEffect } from 'react';
import WordPressDev from '../components/WordPressDev'; 
import Contact from '../components/Contact';

const WordPressDevPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <WordPressDev />
      <Contact />
    </div>
  );
};

export default WordPressDevPage;