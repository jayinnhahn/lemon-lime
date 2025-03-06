import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 mx-auto w-11/12 max-w-6xl transition-all duration-300 py-2 rounded-lg z-50 bg-[#1E1E1E] ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-cover bg-center" style={{ backgroundImage: "url('/LemonLogo.png')" }} />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-[#F5F5F5] hover:text-blue-500 font-inter font-normal">Home</a>
          <a href="#" className="text-[#F5F5F5] hover:text-blue-500 font-inter font-normal">Menu</a>
          <a href="#" className="text-[#F5F5F5] hover:text-blue-500 font-inter font-normal">Reserve A Table</a>
        </div>

        <div className="md:hidden">
          <button className="text-[#F5F5F5] hover:text-blue-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
