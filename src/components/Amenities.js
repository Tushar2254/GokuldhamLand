import React from 'react';

const amenitiesData = [
  { name: "Club House", src: "/Amenities/Club House 2.jpg" },
  { name: "Open Gym", src: "/Amenities/open gym.png"  },
  { name: "Outdoor Seating", src: "/Amenities/outdoorsitting.jpg" },
  { name: "Children Play Area", src: "/Amenities/playarea.jpg" },
  { name: "Aji-Ajoba Katta", src: "/Amenities/Aji ajoba katta.jpg" },
  { name: "Rain Water Harvesting", src: "/Amenities/rainwaterharvesting.jpg" },
  { name: "Branded Elevators", src: "/Amenities/upper lobby-01.jpg" },
  { name: "Security Cabin", src: "/Amenities/Security Cabin.jpg" },
  { name: "CCTV Surveillance", src: "/Amenities/cctv.jpg" },
  { name: "Entrance Lobby", src: "/Amenities/lower lobby-01 (1).jpg" },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-gd-blue uppercase tracking-tighter">
            World-Class <span className="text-gd-green">Amenities</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Experience a lifestyle designed for comfort, safety, and modern living.
          </p>
        </div>

        {/* 3D Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 [perspective:1200px]">
          {amenitiesData.map((item, index) => (
            <div 
              key={index}
              className="group relative h-64 w-full cursor-pointer"
            >
              {/* The 3D Card */}
              <div className="relative h-full w-full rounded-[2rem] bg-white overflow-hidden shadow-lg 
                              transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                              transform-gpu group-hover:[transform:rotateX(10deg)_rotateY(-10deg)_translateY(-20px)] 
                              group-hover:shadow-[20px_40px_60px_rgba(0,0,0,0.15)] border border-gray-100">
                
                {/* Image (16:9 Aspect Ratio) */}
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Glassmorphism Name Tag */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-white/80 backdrop-blur-md border-t border-white/20">
                  <h3 className="text-gd-blue font-bold text-lg leading-tight group-hover:text-gd-green transition-colors">
                    {item.name}
                  </h3>
                  <div className="w-0 group-hover:w-full h-1 bg-gd-green mt-2 transition-all duration-500"></div>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-gd-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>

              {/* Shadow Element for Depth */}
              <div className="absolute inset-0 bg-black/5 blur-2xl rounded-full translate-y-12 scale-90 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>
          ))}
          
        </div>
        
      </div>
      <div className="mt-1 pt-2 border-t border-white/10 gap-6 opacity-50 hover:opacity-100 transition-opacity">
          <div className="text-right">
            <p className="text-m font-bold text-gd-green uppercase">Engineered by SETU DEVELOPER</p>
          </div>
        </div>
    </section>
  );
};

export default Amenities;
