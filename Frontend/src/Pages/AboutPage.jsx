import React from "react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------
   THEME: "Obsidian & Champagne"
   Obsidian #0A0A0B | Graphite #141416 | Champagne #C6A45C
   Pale Gold #E8D5A3 | Bronze #8A6D2F | Ivory #F5F0E6
------------------------------------------------------------------- */

// TODO: the copy below is placeholder text written from the shop's photos.
// Replace it with the shop's real story (history, owner, years open, etc.).
const STORY = [
  "Step through our doors and into a traditional barbershop, with warm timber, polished chrome chairs and the unhurried atmosphere that barbering is known for.",
  "We specialise in modern fades, classic cuts and precise beard work for men and kids, finished with the attention to detail that only comes from real craft. Every visit starts with a conversation, so you leave looking exactly the way you imagined.",
  "No rush. No shortcuts. Just great cuts, good conversation and a chair with your name on it.",
];

// TODO: swap the images for real photos of the shop
const FEATURES = [
  {
    image: "/Images/feature2.jpg",
    title: "Classic Craft",
    text: "Traditional technique, refined for modern style.",
  },
  {
    image: "/Images/feature1.jpg",
    title: "Guaranteed Satisfaction",
    text: "We are not done until you love the result.",
  },
  {
    image: "/Images/feature2.jpg",
    title: "Top-Tier Service",
    text: "A warm welcome and a proper barbershop experience.",
  },
];

const fontStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');
.ab-display { font-family: 'Cormorant Garamond', serif; }
.ab-body { font-family: 'Montserrat', sans-serif; }
`;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const GoldDivider = () => (
  <div className="flex items-center justify-center gap-4">
    <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#C6A45C]" />
    <span className="h-1.5 w-1.5 rotate-45 bg-[#C6A45C]" />
    <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#C6A45C]" />
  </div>
);

const About = () => {
  return (
    <section className="ab-body relative overflow-hidden bg-[#0A0A0B] px-6 py-24 text-[#F5F0E6] md:py-32">
      <style>{fontStyles}</style>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-[#C6A45C]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* ------------------------------ Heading ------------------------------ */}
        <motion.div {...reveal(0)} className="text-center">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.5em] text-[#C6A45C]">
            About Us
          </p>
          <h2 className="ab-display text-4xl font-medium leading-tight tracking-wide md:text-6xl">
            Where Tradition Meets{" "}
            <span className="bg-gradient-to-r from-[#8A6D2F] via-[#F3E3B5] to-[#C6A45C] bg-clip-text italic text-transparent">
              Craft
            </span>
          </h2>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </motion.div>

        {/* ------------------------------- Story ------------------------------- */}
        <motion.div
          {...reveal(0.1)}
          className="mx-auto mt-12 max-w-3xl space-y-6 text-center"
        >
          <p className="ab-display text-2xl italic leading-relaxed text-[#E8D5A3] md:text-3xl">
            {STORY[0]}
          </p>
          <p className="text-sm font-light leading-loose tracking-wide text-[#F5F0E6]/75 md:text-base">
            {STORY[1]}
          </p>
          <p className="text-sm font-medium uppercase leading-loose tracking-[0.25em] text-[#C6A45C]">
            {STORY[2]}
          </p>
        </motion.div>

        {/* ----------------------------- Feature cards ----------------------------- */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={`${f.title}-${i}`}
              {...reveal(0.1 + i * 0.15)}
              className="group relative"
            >
              {/* Image with gold frame */}
              <div className="relative overflow-hidden border border-[#C6A45C]/30 transition-colors duration-500 group-hover:border-[#C6A45C]">
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/20 to-transparent" />

                <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-[#C6A45C] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-[#C6A45C] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Caption over image */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="mb-3 block h-px w-10 bg-[#C6A45C] transition-all duration-500 group-hover:w-20" />
                  <h3 className="ab-display text-2xl font-semibold tracking-wide text-[#F5F0E6]">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-xs font-light leading-relaxed tracking-wide text-[#F5F0E6]/70">
                    {f.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
