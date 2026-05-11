import React from 'react';

const Navbar = () => (
  <nav className="fixed w-full z-50 glass border-b border-gray-200 py-1 px-4 flex justify-between items-center">
  
  <div>
    <img 
      src="logo4st.png"
      alt="Gokuldham Logo" 
      className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
    />
   
  </div>
    <img 
    src="logo5st.png"
    alt="Gokuldham Logo" 
    className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105 -ml-64"
    />

  <div className="hidden md:flex space-x-8 font-medium">
    <a href="#three-d-section" className="transition-transform duration-300 hover:text-gd-green hover:scale-125 inline-block">HOME</a>
    <a href="#Missionvision" className="transition-transform duration-300 hover:text-gd-green hover:scale-125 inline-block">VISION</a>
    <a href="#layout" className="transition-transform duration-300 hover:text-gd-green hover:scale-125 inline-block">FLOOR PLAN</a>
    <a href="#specifications" className="transition-transform duration-300 hover:text-gd-green hover:scale-125 inline-block">TECHNICAL SPECIFICATION</a>
    <a href="#nearbyareas" className="transition-transform duration-300 hover:text-gd-green hover:scale-125 inline-block">CONNECTIVITY</a>
    <a href="#amenities" className="transition-transform duration-300 hover:text-gd-green hover:scale-125 inline-block">AMENITIES</a>
    <a href="#contact" className="transition-transform duration-300 hover:text-gd-green hover:scale-125 inline-block">CONTACT</a>
    {/* <a href="#contact" className="bg-gd-blue text-white px-5 py-2 rounded-full">Enquire Now</a> */}
  </div>

</nav>
);

export default Navbar;
