import React, { useEffect } from 'react'; 
// Import korar somoy nam ta ektu bodle BookingAppsComp dilam
import BookingAppsComp from '../components/BookingApps';
import Contact from '../components/Contact';

const BookingApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#02050A] min-h-screen">
      {/* Ekhne import kora oi name-ei call hobe */}
      <BookingAppsComp />

      <Contact />
    </div>
  );
};

export default BookingApps;