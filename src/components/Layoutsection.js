import React, { useState } from 'react';

const Layoutsection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Replace these with your 4 actual "real" flat images in the public folder
  const layoutImages = [
    { id: 1, src: "/Gokuldham-cut view-01.jpg", title: "Smart 1BHK - Type A" },
    { id: 2, src: "/Gokuldham-cut view-02.jpg", title: "Smart 1BHK - Type B" },
    { id: 3, src: "/typical floor plan-01 A3-01.jpg", title: "Typical Floor Plan" },
    { id: 4, src: "/Parking plan-01.jpg", title: "Parking Floor Plan" },

  ];


  return (
    <section id="layout" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Simple & Clean */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gd-blue uppercase tracking-tighter">
            Architectural <span className="text-gd-green">Floor Plans</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">Explore our precisely engineered 3D smart layouts</p>
        </div>
        

        {/* 4-Image 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {layoutImages.map((item) => (
            <div 
              key={item.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImg(item.src)}
            >
              {/* The "3D" Card */}
              <div className="relative z-10 overflow-hidden rounded-3xl bg-white border-4 border-white shadow-xl 
                              transition-all duration-500 ease-out
                              transform-gpu group-hover:-translate-y-4 group-hover:rotate-x-12 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
                
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Glassmorphism Label */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-white/70 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gd-blue font-bold text-center uppercase text-sm tracking-widest">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* Decorative Glow behind card */}
              <div className="absolute -inset-2 bg-gd-green/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL SIZE LIGHTBOX */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-lg p-6 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white text-5xl font-thin">&times;</button>
          
          <img 
            src={selectedImg} 
            alt="Expanded Layout" 
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl animate-in zoom-in duration-300"
          />
        </div>
      )}
          <div className="mt-2 pt-5 border-t border-white/10 gap-6 opacity-50 hover:opacity-100 transition-opacity">
          <div className="text-right">
            <p className="text-m font-bold text-gd-green uppercase">Engineered by SETU DEVELOPER</p>
          </div>
          </div>
    </section>
    
  );
};

export default Layoutsection;