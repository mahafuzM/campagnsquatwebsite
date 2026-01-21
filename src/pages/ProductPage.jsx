import React, { useEffect } from 'react'; // 1. useEffect import kora holo
/* Components Import */
import ProductHero from '../components/ProductHero';
import ProductFormCRM from '../components/ProductFormCRM';
import Contact from '../components/Contact';

const ProductPage = () => {

  // 2. Page load holei scroll top-e niye jabe
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A]">
      
      {/* 1. Hero Section: As you designed with text changes */}
      <ProductHero />

      {/* 2. Products Section: Featuring FormCRM, Crewlix, and Axilthemes */}
      <ProductFormCRM />

      {/* 3. Global Contact Section for inquiries */}
      <Contact />
      
      {/* Bottom spacing for a clean look */}
      <div className="pb-20"></div>

    </div>
  );
};

export default ProductPage;