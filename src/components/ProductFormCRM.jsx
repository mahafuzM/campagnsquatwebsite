import React from 'react';
/* Importing specific product images */
import formCRMImg from '../assets/images/AW-AI-Form-Builder-540x350.webp';
import crewlixImg from '../assets/images/crewlix-product-538x350.webp';
import axilThemesImg from '../assets/images/axilthemes-product-538x350.webp';

const ProductFormCRM = () => {
  const productList = [
    {
      id: 1,
      name: "FormCRM: AI Form Builder",
      description: "Shopify AI Form Builder helps you create custom forms within seconds. You can handle contact, refunds, surveys, and feedback with seamless integration to match the theme of the store.",
      image: formCRMImg,
      reverse: false 
    },
    {
      id: 2,
      name: "Crewlix",
      description: "People management solution for hybrid teams that takes care of employee attendance, shift, and leave management so your organization has a better employee experience.",
      image: crewlixImg,
      reverse: true 
    },
    {
      id: 3,
      name: "Axilthemes",
      description: "A collocation of wonderful WordPress themes and plugins so you can take that brilliant idea of yours into the virtual world very easily within a few hours.",
      image: axilThemesImg,
      reverse: false 
    }
  ];

  return (
    <section className="w-full bg-[#02050A] py-16 md:py-32">
      <div className="max-w-[1445px] mx-auto px-6 md:px-16 lg:px-24">
        
        <div className="flex flex-col gap-32 md:gap-56">
          {productList.map((product) => (
            <div 
              key={product.id} 
              className={`flex flex-col ${product.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-28`}
            >
              
              {/* --- Text Content Side --- */}
              <div className="flex-1 space-y-10 text-left">
                
                <h2 className="text-white text-[25px] md:text-[40px] font-[1000] leading-[1.2] tracking-wide">
                  {product.name}
                </h2>
                
                <p className="text-white text-[16px] md:text-[20px] leading-[1.8] font-medium ">
                  {product.description}
                </p>
                
                <div className="pt-6">
                  {/* বাটনটি মোবাইলে ছোট করার জন্য py-2.5 px-7 করা হয়েছে, এবং ডেস্কটপে py-3.5 px-10 */}
                  <button className="bg-[#F7A400] text-white font-semibold border-2 border-[#f7a400] py-2.5 px-7 md:py-3.5 md:px-10 rounded-lg hover:bg-[#02050A] transition-all duration-300 active:scale-95 text-[14px] md:text-[17px] tracking-wider inline-block">
                    Get The Product
                  </button>
                </div>
              </div>

              {/* --- Image Side --- */}
              <div className="flex-1 w-full max-w-[540px] md:max-w-none">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-white/5 rounded-[5px] blur-lg group-hover:bg-white/10 transition duration-700"></div>
                  
                  <div className="relative overflow-hidden rounded-[5px] border border-white/10 bg-[#0A0A0A]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductFormCRM;