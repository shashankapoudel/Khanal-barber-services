import React from "react";
import { motion } from "framer-motion";

const HEADING_TOP = "Where Tradition Meets";
const HEADING_GOLD = "Craft";

const PARAGRAPHS = [
  "Step into a traditional barbershop, with warm timber, polished chrome chairs and an unhurried atmosphere.",
  "From modern fades to classic cuts and precise beard work for men and kids, every visit starts with a conversation so you leave looking exactly as you imagined.",
];

const POINTS = [
  "Classic craft, modern style",
  "Guaranteed satisfaction",
  "Top-tier service",
];

const IMAGE_MAIN = "/Images/feature2.jpg";
const IMAGE_SMALL = "/Images/feature1.jpg";

const fontStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');
.ab-display { font-family: 'Cormorant Garamond', serif; }
.ab-body { font-family: 'Montserrat', sans-serif; }
`;

const About = () => {
  return (
    <section className="ab-body relative overflow-hidden bg-[#0A0A0B] px-6 py-16 text-[#F5F0E6] md:py-20 lg:px-12">
      <style>{fontStyles}</style>

      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#C6A45C]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ------------------------------- Text ------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.5em] text-[#C6A45C]">
            About Us
          </p>

          <h2 className="ab-display text-4xl font-medium leading-tight tracking-wide md:text-5xl">
            {HEADING_TOP}{" "}
            <span className="bg-gradient-to-r from-[#8A6D2F] via-[#F3E3B5] to-[#C6A45C] bg-clip-text italic text-transparent">
              {HEADING_GOLD}
            </span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3 lg:mx-0 lg:justify-start">
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C6A45C]" />
            <span className="h-px w-20 bg-gradient-to-r from-[#C6A45C] to-transparent" />
          </div>

          <div className="mt-6 space-y-4">
            <p className="ab-display text-xl italic leading-relaxed text-[#E8D5A3] md:text-2xl">
              {PARAGRAPHS[0]}
            </p>
            <p className="text-sm font-light leading-loose tracking-wide text-[#F5F0E6]/75">
              {PARAGRAPHS[1]}
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 lg:justify-start">
            {POINTS.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F5F0E6]/85"
              >
                <span className="h-1.5 w-1.5 rotate-45 bg-[#C6A45C]" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ------------------------------ Images ------------------------------ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md pb-10 pr-6 lg:max-w-none"
        >
          <div className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-[calc(100%-1.5rem)] border border-[#C6A45C]/60" />

          <div className="group relative overflow-hidden">
            <img
              src={IMAGE_MAIN}
              alt="Inside the barber shop"
              className="h-80 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 md:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-0 -right-0 h-36 w-36 overflow-hidden border-4 border-[#0A0A0B] shadow-[0_10px_40px_rgba(0,0,0,0.6)] md:h-44 md:w-44">
            <img
              src={IMAGE_SMALL}
              alt="Barber shop detail"
              className="h-full w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 border border-[#C6A45C]/70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
