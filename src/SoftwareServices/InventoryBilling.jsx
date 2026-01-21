import React, { useEffect } from 'react';
import InventoryBillingComp from '../components/InventoryBilling'; 
import Contact from '../components/Contact';

const InventoryBilling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      <InventoryBillingComp />


      <Contact />
    </div>
  );
};

export default InventoryBilling;