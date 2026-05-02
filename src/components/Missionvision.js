import React from 'react';
import { motion } from 'framer-motion'; // Ensure you've run: npm install framer-motion
import { Target, Eye, ShieldCheck, Sparkles } from 'lucide-react';

const Missionvision = () => {
  // Animation variants for a weighted, smooth entry
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const gokuldhamVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="Missionvision" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-3xl">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariant}
              className="text-5xl md:text-5xl font-black text-gd-blue uppercase tracking-tighter leading-none"
            >
              The Soul of 
              <motion.span 
                variants={gokuldhamVariant}
                className="block md:inline-block md:ml-4 text-6xl md:text-8xl text-gd-green font-marathi italic drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] leading-tight"
              >
                गोकुळधाम
              </motion.span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-500 font-medium uppercase tracking-[0.4em] text-sm border-l-4 border-gd-green pl-4"
          >
            Purpose • Precision • Peace
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* MISSION CARD */}
          <div className="lg:col-span-5 group">
            <div className="relative p-10 bg-gd-blue rounded-[3rem] text-white overflow-hidden h-full transition-all duration-500 hover:shadow-[0_30px_60px_rgba(3,45,96,0.3)] hover:-translate-y-3">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-700">
                <Target size={180} />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                  <Target className="text-gd-green w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">OUR MISSION</h3>
                <p className="text-blue-100/90 leading-relaxed text-lg font-marathi italic">
                  "गोकुळधाम” हा केवळ एक प्रोजेक्ट नाही, तर प्रत्येक कुटुंबासाठी सुख, शांती आणि समृद्धीचे एक सुंदर निवासस्थान निर्माण करण्याचा आमचा ध्यास आहे. आधुनिक सुविधा, निसर्गाशी सुसंगत वातावरण आणि विश्वासार्ह बांधकाम यांचा संगम घडवून प्रत्येक ग्राहकाला त्याच्या स्वप्नातील घर देणे, हेच आमचे ध्येय आहे.
                </p>
              </div>
            </div>
          </div>

          {/* VISION CARD */}
          <div className="lg:col-span-7">
            <div className="p-10 border-2 border-gray-100 rounded-[3rem] bg-gray-50/50 backdrop-blur-sm transition-all duration-500 hover:border-gd-green/30 hover:bg-white h-full">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-gd-green rounded-xl flex items-center justify-center shadow-lg shadow-gd-green/20">
                  <Eye className="text-white w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black text-gd-blue tracking-tight uppercase">Our Vision</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: <ShieldCheck className="text-gd-green w-5 h-5" />, text: "ग्राहकांच्या अपेक्षांपेक्षा अधिक दर्जेदार आणि सुरक्षित घरे उपलब्ध करून देणे" },
                  { icon: <Sparkles className="text-gd-green w-5 h-5" />, text: "आधुनिक तंत्रज्ञान आणि उत्कृष्ट डिझाइनचा वापर करून गुणवत्तापूर्ण बांधकाम करणे" },
                  { icon: <Target className="text-gd-green w-5 h-5" />, text: "वेळेवर प्रोजेक्ट पूर्ण करून विश्वास टिकवणे" },
                  { icon: <Eye className="text-gd-green w-5 h-5" />, text: "पर्यावरणपूरक आणि टिकाऊ विकासाला प्राधान्य देणे" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="mt-1 transition-transform duration-300 group-hover:scale-125">{item.icon}</div>
                    <p className="text-gray-600 font-marathi leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gd-blue font-bold font-marathi text-xl text-center md:text-left">
                  प्रत्येक कुटुंबासाठी आनंदी, सुरक्षित आणि समृद्ध जीवनशैली निर्माण करणे.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missionvision;