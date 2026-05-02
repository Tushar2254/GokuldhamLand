import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, School, Factory, Church, School2, GridIcon, FactoryIcon,} from 'lucide-react';

const Nearbyareas = () => {
  const locations = [
    { name: "Z.P. School", dist: "500 Meter", icon: <School /> },
    { name: "Khandoba Temple", dist: "1.0 KM", icon: <Church/> },
    { name: "RMD-SINHAGAD INSTITUTE", dist: "1.0 KM", icon: <School2 /> },
    { name: "Kondhapuri MIDC", dist: "1.0 KM", icon: <Factory /> },
    { name: "Shikrapur", dist: "6.0 KM", icon: <Navigation /> },
    { name: "Ranjangaon Ganapati", dist: "7.0 KM", icon: <GridIcon /> },
    { name: "Ranjangaon MIDC", dist: "7.0 KM", icon: <Factory /> },
    { name: "Sanaswadi MIDC", dist: "10 KM", icon: <FactoryIcon /> }
  ];

  return (
    <section id="nearbyareas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gd-blue">CONNECTIVITY</h2>
          <p className="text-gray-500 mt-2 italic font-marathi">शिक्रापूर व रांजणगाव MIDC च्या अगदी जवळ</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {locations.map((loc, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-12 h-12 bg-gd-blue text-white rounded-full flex items-center justify-center mb-4 shadow-md">
                {loc.icon}
              </div>
              <h4 className="font-bold text-gray-800">{loc.name}</h4>
              <p className="text-gd-green font-bold mt-1">{loc.dist}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nearbyareas;
