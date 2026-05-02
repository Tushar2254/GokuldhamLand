import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThreeDLayout = () => {
  const sectionRef = useRef();
  const [offset, setOffset] = useState(0);
  const smoothOffset = useRef(0);
  const rafRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;
      const raw = Math.max(0, Math.min(1, -rect.top / sectionHeight));
      smoothOffset.current = raw;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth lerp loop
  useEffect(() => {
    let current = 0;
    const loop = () => {
      current += (smoothOffset.current - current) * 0.08;
      setOffset(current);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Image 1: visible 0→0.7, fades out 0.7→1
  const img1Opacity = offset < 0.7 ? 1 : Math.max(0, 1 - (offset - 0.7) * (1 / 0.3));
  // Image 1: subtle zoom-in as you scroll (starts at 1, grows to 1.15 at offset=0.7)
  const img1Scale = 1 + offset * 0.9;

  // Image 2: invisible until 0.7, fades in 0.7→1
  const img2Opacity = offset < 0.7 ? 0 : Math.min(1, (offset - 0.7) * (1 / 0.3));
  // Image 2: starts slightly zoomed out and zooms in
  const img2Scale = 0.95 + img2Opacity * 0.2;

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes downwardScroller {
        0% { transform: translateY(-20px); opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translateY(20px); opacity: 0; }
      }
      .animate-downward {
        animation: downwardScroller 2s cubic-bezier(0.42, 0, 0.58, 1) infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="three-d-section"
      className="relative w-full h-[300vh] bg-black"
    >
      {/* Sticky container — stays fixed to viewport while scrolling through 300vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* IMAGE 1 — night.jpg */}
        <div
          className="absolute inset-0"
          style={{ opacity: img1Opacity, willChange: 'opacity, transform' }}
        >
          <img
            src="/night.jpg"
            alt="Gokuldham Exterior"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: `scale(${img1Scale})`,
              transformOrigin: 'center center',
              willChange: 'transform',
            }}
          />
        </div>

        {/* IMAGE 2 — topview.jpg */}
        <div
          className="absolute inset-0"
          style={{ opacity: img2Opacity, willChange: 'opacity, transform' }}
        >
          <img
            src="/topview.jpg"
            alt="Gokuldham Top View"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: `scale(${img2Scale})`,
              transformOrigin: 'center center',
              willChange: 'transform',
            }}
          />
        </div>

        {/* BRANDING OVERLAY */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.8,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-center"
          >
            <img
              src="/logo2st.png"
              alt="Gokuldham Logo"
              className="w-auto h-32 md:h-64 object-contain filter drop-shadow-[0_10px_10px_rgba(0,0,0,1)]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-4 text-white/70 text-xs tracking-[0.4em] uppercase"
            >
              Est. 2026
            </motion.p>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none gap-6">
          <div className="w-[6px] h-12 border border-white/30 rounded-full flex justify-center items-center relative overflow-hidden">
            <div
              className="w-1.5 h-1.5 rounded-full animate-downward"
              style={{ backgroundColor: '#00FF7F', boxShadow: '0 0 10px #00FF7F' }}
            />
          </div>
          <p className="text-white/60 text-[9px] tracking-[0.8em] uppercase leading-none ml-[1.5em]">
            Scroll to Explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeDLayout;
