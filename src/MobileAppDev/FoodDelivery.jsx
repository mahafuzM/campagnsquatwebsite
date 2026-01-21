import React, { useEffect } from 'react';
import FoodDeliveryCom from '../components/FoodDelivery';
import Contact from '../components/Contact';

const FoodDelivery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <FoodDeliveryCom />
      
      <Contact />
    </div>
  );
};

export default FoodDelivery;