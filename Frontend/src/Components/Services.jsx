import React from "react";
import { motion } from "framer-motion";
import Booking from "./Booking";

/* ------------------------------------------------------------------
   THEME: "Obsidian & Champagne"
   Obsidian #0A0A0B | Graphite #141416 | Champagne #C6A45C
   Pale Gold #E8D5A3 | Bronze #8A6D2F | Ivory #F5F0E6
------------------------------------------------------------------- */

const services = [
  {
    image: "/Images/prasanna1.jpeg",
    name: "Haircut",
    price: 25,
    note: "Skin fade with foil used: +$5",
  },
  {
    image: "/Images/barber.jpg",
    name: "Beard",
    price: 15,
  },
  {
    image: "/Images/barber.jpg",
    name: "Haircut & Beard",
    price: 35,
    featured: true,
  },
];

const fontStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');
.sv-display { font-family: 'Cormorant Garamond', serif; }
.sv-body { font-family: 'Montserrat', sans-serif; }
`;

const GoldDivider = () => (
  <div className="flex items-center justify-center gap-4">
    <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#C6A45C]" />
    <span className="h-1.5 w-1.5 rotate-45 bg-[#C6A45C]" />
    <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#C6A45C]" />
  </div>
);

const Services = () => {
  return (
    <section className="sv-body relative w-full overflow-hidden bg-[#0A0A0B] px-6 py-24 text-[#F5F0E6] md:py-32 lg:px-12">
      <style>{fontStyles}</style>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-[#C6A45C]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#5A1A24]/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ------------------------------ Heading ------------------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.5em] text-[#C6A45C]">
            What We Do
          </p>
          <h2 className="sv-display text-5xl font-medium tracking-wide md:text-7xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#8A6D2F] via-[#F3E3B5] to-[#C6A45C] bg-clip-text italic text-transparent">
              Services
            </span>
          </h2>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </motion.div>

        {/* -------------------------------- Cards -------------------------------- */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex h-full flex-col border border-[#C6A45C]/30 bg-gradient-to-b from-[#141416] to-[#0A0A0B] transition-all duration-500 hover:-translate-y-2 hover:border-[#C6A45C] hover:shadow-[0_20px_60px_rgba(198,164,92,0.2)]"
            >
              {/* Corner accents */}
              <span className="pointer-events-none absolute left-3 top-3 z-10 h-5 w-5 border-l-2 border-t-2 border-[#C6A45C] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 right-3 z-10 h-5 w-5 border-b-2 border-r-2 border-[#C6A45C] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />

                {service.featured && (
                  <span className="absolute right-4 top-4 bg-gradient-to-r from-[#8A6D2F] via-[#C6A45C] to-[#E8D5A3] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#0A0A0B]">
                    Best Value
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-end justify-between gap-4">
                  <h3 className="sv-display text-3xl font-semibold leading-tight tracking-wide">
                    {service.name}
                  </h3>
                  <div className="text-right">
                    <p className="sv-display text-4xl font-semibold leading-none text-[#E8D5A3]">
                      ${service.price}
                    </p>
                    <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.3em] text-[#C6A45C]">
                      Cash
                    </p>
                  </div>
                </div>

                <span className="my-5 block h-px w-12 bg-[#C6A45C] transition-all duration-500 group-hover:w-24" />

                {/* Extra note (keeps card heights aligned) */}
                <div className="min-h-[24px]">
                  {service.note && (
                    <p className="text-xs font-light italic tracking-wide text-[#E8D5A3]/80">
                      ({service.note})
                    </p>
                  )}
                </div>

                <div className="mt-auto pt-6">
                  <Booking serviceName={service.name} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
