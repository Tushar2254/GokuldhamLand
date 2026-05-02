// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Target, Eye, Shovel, MapPin, 
//   Phone, Mail, CheckCircle2, Navigation 
// } from 'lucide-react';

// const Home = () => {
//   // Animation Variants for "3D" pop-in effect
//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.6 }
//   };

//   return (
//     <div className="bg-white text-gray-900 font-sans">
      
//       {/* 1. HERO SECTION (3D Parallax Feel) */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gd-blue">
//         <motion.div 
//           initial={{ scale: 1.2 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 2 }}
//           className="absolute inset-0 opacity-40"
//         >
//           <img 
//             src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1500" 
//             className="w-full h-full object-cover" 
//             alt="GoKuldham Project"
//           />
//         </motion.div>
        
//         <div className="relative z-10 text-center text-white px-4">
//           <motion.h1 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-7xl font-bold mb-4"
//           >
//             गोकुळधाम
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-xl md:text-2xl text-gd-green font-light italic"
//           >
//             "जगणं, निसर्गाच्या सानिध्यातील..!"
//           </motion.p>
//         </div>
//       </section>

//       {/* 2. MISSION & VISION (Glassmorphism) */}
//       <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
//         <motion.div {...fadeInUp} className="p-8 rounded-2xl bg-blue-50 border border-blue-100 shadow-xl">
//           <Target className="text-gd-blue mb-4" size={40} />
//           <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
//           <p className="text-gray-600">To provide high-quality, earthquake-resistant homes that blend modern luxury with the tranquility of nature at an affordable price.</p>
//         </motion.div>
//         <motion.div {...fadeInUp} className="p-8 rounded-2xl bg-green-50 border border-green-100 shadow-xl">
//           <Eye className="text-gd-green mb-4" size={40} />
//           <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
//           <p className="text-gray-600">To become the benchmark for residential development in the Shikrapur-Kondhapuri belt, ensuring every family experiences the joy of "Vastupurti".</p>
//         </motion.div>
//       </section>

//       {/* 3. AMENITIES (Grid Layout) */}
//       <section className="py-20 bg-gd-blue text-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16 underline decoration-gd-green underline-offset-8">Grand Amenities</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {['Club House', 'Children Play Area', 'Jogging Track', 'Open Gym', 'Aji-Ajoba Katta', 'Party Lawn', 'Gazebo', 'Security Cabin'].map((item, i) => (
//               <motion.div 
//                 key={i}
//                 whileHover={{ scale: 1.05, rotateY: 10 }}
//                 className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center"
//               >
//                 <div className="text-gd-green flex justify-center mb-2"><CheckCircle2 /></div>
//                 <p>{item}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. SPECIFICATIONS (Detailed List from PDF) */}
//       <section className="py-20 px-6 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-10 text-center">Technical Specifications</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="space-y-4">
//             <li className="list-none flex gap-2"><strong>Structure:</strong> Earthquake resistant R.C.C design</li>
//             <li className="list-none flex gap-2"><strong>Walls:</strong> 6" external & internal thick brick/block walls</li>
//             <li className="list-none flex gap-2"><strong>Windows:</strong> Powder coated 3-track aluminum sliding</li>
//           </div>
//           <div className="space-y-4">
//             <li className="list-none flex gap-2"><strong>Kitchen:</strong> Black Granite platform with SS sink</li>
//             <li className="list-none flex gap-2"><strong>Plumbing:</strong> Concealed plumbing with Jaguar/equivalent CP fittings</li>
//             <li className="list-none flex gap-2"><strong>Electrical:</strong> Concealed wiring with modular switches</li>
//           </div>
//         </div>
//       </section>

//       {/* 5. PROPERTY LAYOUT (Image + Data) */}
//       <section className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
//           <motion.div {...fadeInUp} className="flex-1">
//             <img src="https://via.placeholder.com/600x400?text=1BHK+Layout+Plan" className="rounded-2xl shadow-2xl border-4 border-white" alt="Layout" />
//           </motion.div>
//           <div className="flex-1">
//             <h2 className="text-4xl font-bold mb-6">1 BHK Smart Layout</h2>
//             <p className="text-xl text-gray-600 mb-4">Total Carpet Area: <strong>417.00 sq.ft</strong></p>
//             <ul className="space-y-2 text-lg">
//               <li>Living Room: 9'6" x 12'0"</li>
//               <li>Kitchen: 7'6" x 7'5"</li>
//               <li>Bedroom: 11'2" x 9'0"</li>
//               <li>Dry Terrace included</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* 6. NEARBY AREAS */}
//       <section className="py-20 px-6 max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-12">Prime Connectivity</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="p-6 border rounded-xl hover:bg-blue-50 transition">
//             <Navigation className="mx-auto text-gd-blue mb-4" />
//             <h4 className="font-bold">Kondhapuri MIDC</h4>
//             <p>1.0 KM</p>
//           </div>
//           <div className="p-6 border rounded-xl hover:bg-blue-50 transition">
//             <Navigation className="mx-auto text-gd-blue mb-4" />
//             <h4 className="font-bold">Shikrapur</h4>
//             <p>6.0 KM</p>
//           </div>
//           <div className="p-6 border rounded-xl hover:bg-blue-50 transition">
//             <Navigation className="mx-auto text-gd-blue mb-4" />
//             <h4 className="font-bold">Z.P. School</h4>
//             <p>500 Meter</p>
//           </div>
//         </div>
//       </section>

//       {/* 7. CONTACT US & LOCATION */}
//       <section className="py-20 bg-white border-t">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
//           <div>
//             <h2 className="text-3xl font-bold mb-6 text-gd-blue">Get In Touch</h2>
//             <div className="space-y-6">
//               <p className="flex items-center gap-4 text-lg"><MapPin className="text-gd-green" /> Gat No. 417, Kondhapuri, Pune-Ahmednagar Road</p>
//               <p className="flex items-center gap-4 text-lg"><Phone className="text-gd-green" /> +91 98XXX XXXXX</p>
//               <p className="flex items-center gap-4 text-lg"><Mail className="text-gd-green" /> sales@setudevelopers.com</p>
//             </div>
//             <div className="mt-10 h-64 bg-gray-200 rounded-xl overflow-hidden">
//               <p className="p-10 text-center italic">Google Maps Placeholder</p>
//             </div>
//           </div>
//           <form className="bg-gray-50 p-8 rounded-2xl shadow-inner space-y-4">
//             <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-lg" />
//             <input type="email" placeholder="Email Address" className="w-full p-4 border rounded-lg" />
//             <input type="text" placeholder="Interested In (e.g. 1BHK)" className="w-full p-4 border rounded-lg" />
//             <textarea placeholder="Message" className="w-full p-4 border rounded-lg h-32"></textarea>
//             <button className="w-full bg-gd-blue text-white py-4 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg">Submit Inquiry</button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

