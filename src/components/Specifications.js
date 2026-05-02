import React from 'react';
import {
  Utensils, Zap, Paintbrush, DoorOpen, 
  Building2, Droplets, Sun
} from 'lucide-react';

const Specifications = () => {
  const categories = [
    {
      title: "R.C.C & Walls",
      icon: <Building2 className="w-8 h-8 text-gd-green" />,
      details: [
        "Earthquake proof structural design",
        "4x6 Internal sand plaster with Gypsum finish",
        "External double coat plaster"
      ]
    },
    {
      title: "Flooring & Kitchen",
      icon: <Utensils className="w-8 h-8 text-gd-green" />,
      details: [
        "Vitrified tile flooring in all rooms",
        "Antiskid tiles in toilets & balconies",
        "Granite top kitchen platform with SS sink",
        "Designer dado tiles up to 2 feet level"
      ]
    },
    {
      title: "Doors & Windows",
      icon: <DoorOpen className="w-8 h-8 text-gd-green" />,
      details: [
        "Powder coated 3-track aluminum sliding windows",
        "Granite/Marble window sill on all four sides",
        "Quality hardware fittings & Europa latch lock"
      ]
    },
    {
      title: "Electrification",
      icon: <Zap className="w-8 h-8 text-gd-green" />,
      details: [
        "Fire resistant ISI mark wires/cables",
        "Provision for AC point in Master Bedroom",
        "TV & Telephone points in Living & Master Bedroom"
      ]
    },
    {
      title: "Bathroom & Plumbing",
      icon: <Droplets className="w-8 h-8 text-gd-green" />,
      details: [
        "Concealed plumbing with Jaguar/Equivalent fittings",
        "Designer dado glazed/mat finished tiles up to lintel level"
      ]
    },
    {
      title: "Project Highlights",
      icon: <Sun className="w-8 h-8 text-gd-green" />,
      details: [
        "Branded Elevators & Rain Water Harvesting",
        "Roof top Solar P.V Electrical Project",
        "Generator backup for common area and lift"
      ]
    }
  ];

  return (
    <section id="specifications" className="py-24 bg-gd-blue text-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gd-green/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter inline-block">
            Technical <span className="text-gd-green">Specifications</span>
          </h2>
          <div className="h-1 w-24 bg-gd-green mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gd-green/90 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,255,127,0.1)]"
            >
              <div className="mb-6 p-3 bg-white/5 inline-block rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {cat.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide group-hover:text-gd-green transition-colors">
                {cat.title}
              </h3>
              
              <ul className="space-y-3">
                {cat.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-blue-100/70 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-gd-green mt-1.5 shrink-0 opacity-50"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Branding Footer inside Specs */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-4">
            <Paintbrush className="text-gd-green" />
            <p className="text-xs uppercase tracking-widest">OBD Paint (Internal) & Apex (External)</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gd-green uppercase">Engineered by SETU DEVELOPER</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
