import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        
        {/* Left Section - Logo & Address */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-cover bg-center" style={{ backgroundImage: "url('/LemonLogo.png')" }} />
            <p className="text-lg font-bold">The Little Lemon</p>
          </div>
          <p className="text-sm text-gray-400">
            Tower 2, Sgt Esguerra, Quezon City, Manila, Philippines
          </p>
          <h4 className="text-md font-semibold">12.168.986.200</h4>
        </div>

        {/* Right Section - Social & Contact */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Come Follow Us At!</p>
          <h6 className="text-sm text-gray-400">Lemonlime@gmail.com</h6>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
