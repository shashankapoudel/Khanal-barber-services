// import { motion, AnimatePresence } from 'framer-motion';
// import React, { useEffect, useState } from 'react';
// import Services from '../Components/Services';
// import About from '../Components/About';

// const phrases = [
//     'Classic Cuts, Modern Style',
//     'Precision. Passion. Perfection.',
//     'Look Sharp. Feel Sharp.',
// ];

// const HomePage = () => {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setIndex((prev) => (prev + 1) % phrases.length);
//         }, 2500);
//         return () => clearInterval(timer);
//     }, []);

//     return (

//         <div>

//             <div
//                 className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
//                 style={{ backgroundImage: "url('/Images/barber.jpg')" }}
//             >
// <motion.div
//     initial={{ y: "100vh", opacity: 0 }}
//     animate={{ y: 0, opacity: 1 }}
//     transition={{ duration: 1, ease: "easeOut" }}
//     className="flex flex-col items-center"
// >
//     <h1 className="text-5xl font-semibold font-rajdhani mb-4">
//         Welcome to Khanal Barber Services
//     </h1>

//                     <AnimatePresence mode="wait">
//                         <motion.p
//                             key={phrases[index]}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.5 }}
//                             className="text-2xl font-orbitron text-gray-200 font-medium"
//                         >
//                             {phrases[index]}
//                         </motion.p>
//                     </AnimatePresence>

//                 </motion.div>
//             </div>

// <div>
//     <About />
// </div>

// <div>
//     <Services />
// </div>

//         </div>
//     );
// };

// export default HomePage;

// import { motion, AnimatePresence } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import Services from "../Components/Services";
// import About from "../Components/About";

// const phrases = [
//   "Classic Cuts, Modern Style",
//   "Precision. Passion. Perfection.",
//   "Look Sharp. Feel Sharp.",
// ];

// const HomePage = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % phrases.length);
//     }, 2500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div>
//       <div className="relative h-screen overflow-hidden">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           src="/Images/prashanna2.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />

//         <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
//           <motion.div
//             initial={{ y: "100vh", opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="flex flex-col items-center"
//           >
//             <h1 className="text-5xl font-semibold font-orbitron mb-4">
//               Welcome to SHARP AND MOBILE
//             </h1>

//             <AnimatePresence mode="wait">
//               <motion.p
//                 key={phrases[index]}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-2xl font-rajdhani text-[#C6A45C] font-medium"
//               >
//                 {phrases[index]}
//               </motion.p>
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </div>

//       <div>
//         <About />
//       </div>

//       <div>
//         <Services />
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import Services from "../Components/Services";
import About from "../Components/About";

/* ------------------------------------------------------------------
   THEME: "Obsidian & Champagne"
   Obsidian  #0A0A0B  – deep, near-black base
   Graphite  #141416  – raised surfaces
   Champagne #C6A45C  – signature gold (your original)
   Pale Gold #E8D5A3  – highlights / shine
   Bronze    #8A6D2F  – gold shadow
   Ivory     #F5F0E6  – primary text
   Bordeaux  #5A1A24  – rare, deep accent glow
------------------------------------------------------------------- */

const phrases = [
  "Classic Cuts, Modern Style",
  "Precision. Passion. Perfection.",
  "Look Sharp. Feel Sharp.",
];

const marqueeItems = [
  "Precision Cuts",
  "Hot Towel Shaves",
  "Beard Sculpting",
  "Classic Barbering",
  "Tailored To You",
  "Premium Grooming",
];

const fontStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');

.font-display { font-family: 'Cormorant Garamond', serif; }
.font-body { font-family: 'Montserrat', sans-serif; }

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.animate-marquee { animation: marquee 30s linear infinite; }

@keyframes shine {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.gold-shine {
  background: linear-gradient(110deg, #8A6D2F 0%, #C6A45C 25%, #F3E3B5 50%, #C6A45C 75%, #8A6D2F 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 6s linear infinite;
}

@keyframes scrollDot {
  0%, 100% { transform: translateY(0); opacity: 1; }
  60%      { transform: translateY(14px); opacity: 0; }
}
.animate-scroll-dot { animation: scrollDot 2s ease-in-out infinite; }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.2 + i * 0.18,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const GoldDivider = () => (
  <div className="flex items-center justify-center gap-4 py-2">
    <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C6A45C]" />
    <span className="h-1.5 w-1.5 rotate-45 bg-[#C6A45C]" />
    <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C6A45C]" />
  </div>
);

const HomePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Subtle parallax on the hero video + fade of hero content on scroll
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 800], [0, 160]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const contentY = useTransform(scrollY, [0, 500], [0, -60]);

  return (
    <div className="bg-[#0A0A0B] text-[#F5F0E6] font-body">
      <style>{fontStyles}</style>

      {/* ============================ HERO ============================ */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        {/* Video with parallax */}
        <motion.video
          style={{ y: videoY }}
          className="absolute inset-0 h-[115%] w-full object-cover"
          src="/Images/prashanna2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-[#0A0A0B]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/70 via-transparent to-[#0A0A0B]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,10,11,0.85)_100%)]" />
        <div className="absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[#5A1A24]/25 blur-3xl" />

        {/* Thin gold frame */}
        <div className="pointer-events-none absolute inset-4 border border-[#C6A45C]/25 md:inset-8" />
        <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-[#C6A45C] md:left-8 md:top-8 md:h-10 md:w-10" />
        <div className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-[#C6A45C] md:right-8 md:top-8 md:h-10 md:w-10" />
        <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-[#C6A45C] md:bottom-8 md:left-8 md:h-10 md:w-10" />
        <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-[#C6A45C] md:bottom-8 md:right-8 md:h-10 md:w-10" />

        {/* Content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 text-[11px] font-medium uppercase tracking-[0.5em] text-[#C6A45C] md:text-xs"
          >
            Premium Traditional Barbering
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-5xl font-medium leading-[1.05] tracking-wide md:text-7xl lg:text-8xl"
          >
            <span className="block text-2xl italic font-normal text-[#F5F0E6]/80 md:text-3xl">
              Welcome to The
            </span>
            <span className="gold-shine block text-4xl font-semibold tracking-[0.08em] sm:text-5xl md:text-6xl lg:text-7xl">
              LIVERPOOL STREET
            </span>
            <span className="block text-4xl tracking-[0.3em] text-[#F5F0E6] sm:text-5xl md:text-6xl lg:text-7xl">
              BARBER SHOP
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8 w-full"
          >
            <GoldDivider />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-4 h-10"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={phrases[index]}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.6 }}
                className="font-display text-2xl italic text-[#E8D5A3] md:text-3xl"
              >
                {phrases[index]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#services"
              className="group relative overflow-hidden border border-[#C6A45C] bg-gradient-to-r from-[#8A6D2F] via-[#C6A45C] to-[#8A6D2F] px-10 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#0A0A0B] transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,164,92,0.45)]"
            >
              <span className="relative z-10">Our Services</span>
              <span className="absolute inset-0 -translate-x-full bg-[#F3E3B5] transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#about"
              className="border border-[#C6A45C]/50 px-10 py-4 text-xs font-medium uppercase tracking-[0.3em] text-[#F5F0E6] transition-all duration-500 hover:border-[#C6A45C] hover:bg-[#C6A45C]/10 hover:text-[#E8D5A3]"
            >
              Our Story
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C6A45C]/80">
            Scroll
          </span>
          <div className="flex h-10 w-6 justify-center rounded-full border border-[#C6A45C]/60 pt-2">
            <span className="animate-scroll-dot h-1.5 w-1.5 rounded-full bg-[#C6A45C]" />
          </div>
        </motion.div>
      </section>

      {/* ========================= MARQUEE STRIP ========================= */}
      <section className="relative overflow-hidden border-y border-[#C6A45C]/25 bg-[#141416] py-5">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[
            ...marqueeItems,
            ...marqueeItems,
            ...marqueeItems,
            ...marqueeItems,
          ].map((item, i) => (
            <span
              key={i}
              className="flex items-center text-xs font-medium uppercase tracking-[0.4em] text-[#E8D5A3]/90 md:text-sm"
            >
              <span className="px-8">{item}</span>
              <span className="h-1.5 w-1.5 rotate-45 bg-[#C6A45C]" />
            </span>
          ))}
        </div>
      </section>

      {/* ============================ ABOUT ============================ */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#0A0A0B]"
      >
        <About />
      </motion.div>

      <div className="bg-[#0A0A0B] py-6">
        <GoldDivider />
      </div>

      {/* =========================== SERVICES =========================== */}
      <motion.div
        id="services"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#0A0A0B]"
      >
        <Services />
      </motion.div>
    </div>
  );
};

export default HomePage;
