import React from 'react';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Missionvision from './components/Missionvision';
// import Amenities from './components/Amenities';
import Layoutsection from './components/Layoutsection';
import Specifications from './components/Specifications';
import Nearbyareas from './components/Nearbyareas';
import Contact from './components/Contact';
import ThreeDLayout from './components/ThreeDLayout'; // <-- Import it here
import Amenities from './components/Amenities';

// function App() {
//   return (
//     <div>
//       <Hero />
      
//     </div>
//   );
// }

function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <ThreeDLayout />  {/* <-- Use it here */} 
      {/* <Hero /> */}
      <Missionvision /> 
      {/* <Amenities /> */}
      <Layoutsection />
      <Specifications />
      <Nearbyareas />
      <Amenities />
      <Contact />
      <footer className="bg-gd-blue text-white py-12 text-center border-t border-blue-800">
  <div className="container mx-auto px-4">
    
    {/* Highlighted Branding */}
    <div className="mb-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
        <span className="font-['Tiro_Devanagari_Marathi'] font-bold text-gd-green text-10xl">
          गोकुळधाम
        </span>
      </h2>
      <p className="text-xl md:text-1xl font-medium tracking-[0.1em] text-white/60">
        by M/s. SETU DEVELOPERS
      </p>
    </div>

    {/* MahaRERA Section */}
    <div className="inline-flex flex-col items-center px-6 py-3 border border-blue-700 bg-blue-900/30 rounded-lg mb-8">
      
      <p className="text-[10px] uppercase tracking-[0.1em] text-blue-300 ">
        MahaRERA Registered
      </p>
      <img src="/maharera2.png" alt="MahaRERA" className="h-40 w-auto object-contain " />
      <p className="text-lg font-bold tracking-widest text-white">
        P52100033484
      </p>
    </div>

    {/* Copyright */}
    <div className="pt-2 border-t border-white/10 max-w-xs mx-auto">
      <p className="text-blue-400 text-xs tracking-widest uppercase">
        © 2026 GoKuldham. All Rights Reserved.
      </p>
    </div>
    
  </div>
</footer>
    </div>
  );
}



export default App;
