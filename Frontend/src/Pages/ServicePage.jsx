import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { BsTelephoneOutbound } from "react-icons/bs";

/* ------------------------------------------------------------------
   THEME: "Obsidian & Champagne"
   Obsidian #0A0A0B | Graphite #141416 | Champagne #C6A45C
   Pale Gold #E8D5A3 | Bronze #8A6D2F | Ivory #F5F0E6
------------------------------------------------------------------- */

// TODO: replace with the shop's real number
const PHONE_DISPLAY = "0400 811 122";
const PHONE_LINK = "0400811122";

// TODO: ALL services, descriptions, durations and prices below are
// placeholders. Replace them with the shop's real menu.
const SERVICES = [
  {
    category: "Haircuts",
    name: "Classic Haircut",
    desc: "Scissor or clipper cut, finished with a neat neckline and style.",
    time: "30 min",
    price: 40,
  },
  {
    category: "Haircuts",
    name: "Skin Fade",
    desc: "A sharp, seamless fade blended to your preferred length on top.",
    time: "40 min",
    price: 45,
  },
  {
    category: "Haircuts",
    name: "Kids Cut",
    desc: "A tidy, comfortable cut for young gentlemen (under 12).",
    time: "25 min",
    price: 30,
  },
  {
    category: "Haircuts",
    name: "Senior Cut",
    desc: "A classic cut with the same care and attention to detail.",
    time: "30 min",
    price: 32,
  },
  {
    category: "Beard & Shave",
    name: "Beard Trim & Shape",
    desc: "Sculpted and lined up to suit your face shape.",
    time: "20 min",
    price: 25,
  },
  {
    category: "Beard & Shave",
    name: "Hot Towel Shave",
    desc: "A traditional straight-razor shave with hot towels and aftershave.",
    time: "30 min",
    price: 45,
  },
  {
    category: "Beard & Shave",
    name: "Head Shave",
    desc: "A smooth razor finish with a soothing hot towel.",
    time: "30 min",
    price: 40,
  },
  {
    category: "Packages",
    name: "The Gentleman",
    desc: "Classic haircut and beard trim with a hot towel finish.",
    time: "50 min",
    price: 60,
    featured: true,
  },
  {
    category: "Packages",
    name: "The Full Works",
    desc: "Skin fade, hot towel shave and styling. Our complete experience.",
    time: "75 min",
    price: 85,
    featured: true,
  },
];

const CATEGORIES = ["All", "Haircuts", "Beard & Shave", "Packages"];

const fontStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');
.sv-display { font-family: 'Cormorant Garamond', serif; }
.sv-body { font-family: 'Montserrat', sans-serif; }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.1 + i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const GoldDivider = () => (
  <div className="flex items-center justify-center gap-4">
    <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#C6A45C]" />
    <span className="h-1.5 w-1.5 rotate-45 bg-[#C6A45C]" />
    <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#C6A45C]" />
  </div>
);

const ServicePage = () => {
  const [active, setActive] = useState("All");

  const visible = SERVICES.filter(
    (s) => active === "All" || s.category === active,
  );
  const featured = SERVICES.filter((s) => s.featured);

  return (
    <div className="sv-body relative min-h-screen overflow-hidden bg-[#0A0A0B] px-6 pb-24 pt-36 text-[#F5F0E6] md:pt-44">
      <style>{fontStyles}</style>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-[#C6A45C]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-[#5A1A24]/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* ------------------------------ Heading ------------------------------ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-14 text-center"
        >
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.5em] text-[#C6A45C]">
            Services &amp; Pricing
          </p>
          <h1 className="sv-display text-5xl font-medium tracking-wide md:text-7xl">
            The{" "}
            <span className="bg-gradient-to-r from-[#8A6D2F] via-[#F3E3B5] to-[#C6A45C] bg-clip-text italic text-transparent">
              Menu
            </span>
          </h1>
          <div className="mt-6">
            <GoldDivider />
          </div>
          <p className="sv-display mx-auto mt-6 max-w-xl text-xl italic text-[#E8D5A3]/80">
            Traditional craft, modern precision. Every service begins with a
            consultation so you leave exactly as you imagined.
          </p>
        </motion.div>

        {/* ----------------------------- Featured ----------------------------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {featured.map((s) => (
            <div
              key={s.name}
              className="group relative overflow-hidden border border-[#C6A45C]/40 bg-gradient-to-br from-[#141416] to-[#0A0A0B] p-8 transition-all duration-500 hover:border-[#C6A45C] hover:shadow-[0_0_50px_rgba(198,164,92,0.18)] md:p-10"
            >
              <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-[#C6A45C]" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-[#C6A45C]" />

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#C6A45C]">
                Signature Package
              </p>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="sv-display text-3xl font-semibold tracking-wide md:text-4xl">
                  {s.name}
                </h3>
                <span className="sv-display text-4xl font-semibold text-[#E8D5A3]">
                  ${s.price}
                </span>
              </div>
              <p className="mt-4 text-sm font-light leading-relaxed text-[#F5F0E6]/70">
                {s.desc}
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-[#F5F0E6]/45">
                {s.time}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ------------------------------ Tabs ------------------------------ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                active === cat
                  ? "text-[#0A0A0B]"
                  : "text-[#F5F0E6]/70 hover:text-[#C6A45C]"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="service-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8A6D2F] via-[#C6A45C] to-[#E8D5A3]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* ---------------------------- Menu list ---------------------------- */}
        <div className="border-y border-[#C6A45C]/25">
          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => (
              <motion.div
                key={s.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group border-b border-[#C6A45C]/10 py-7 last:border-none"
              >
                <div className="flex items-baseline gap-3">
                  <h3 className="sv-display text-2xl font-semibold tracking-wide transition-colors duration-300 group-hover:text-[#E8D5A3] md:text-3xl">
                    {s.name}
                  </h3>
                  {/* dotted leader */}
                  <span className="mb-1.5 flex-1 border-b border-dotted border-[#C6A45C]/40" />
                  <span className="sv-display text-2xl font-semibold text-[#C6A45C] md:text-3xl">
                    ${s.price}
                  </span>
                </div>
                <div className="mt-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <p className="max-w-lg text-sm font-light text-[#F5F0E6]/65">
                    {s.desc}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#F5F0E6]/40">
                    {s.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-6 text-center text-[11px] font-light uppercase tracking-[0.2em] text-[#F5F0E6]/40">
          Prices in AUD and subject to change
        </p>

        {/* ------------------------------- CTA ------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-24 overflow-hidden border border-[#C6A45C]/40 bg-[#141416] px-8 py-14 text-center md:px-16"
        >
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-[#5A1A24]/30 blur-3xl" />
          <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-[#C6A45C]" />
          <span className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-[#C6A45C]" />
          <span className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-[#C6A45C]" />
          <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-[#C6A45C]" />

          <div className="relative">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.5em] text-[#C6A45C]">
              Reserve Your Chair
            </p>
            <h2 className="sv-display text-4xl font-medium tracking-wide md:text-5xl">
              Ready for a sharper you?
            </h2>
            <p className="sv-display mx-auto mt-4 max-w-md text-lg italic text-[#E8D5A3]/80">
              Call the shop or send us a message to book your appointment.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_LINK}`}
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-gradient-to-r from-[#8A6D2F] via-[#C6A45C] to-[#8A6D2F] px-9 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#0A0A0B] transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(198,164,92,0.45)]"
              >
                <BsTelephoneOutbound className="relative z-10" />
                <span className="relative z-10">{PHONE_DISPLAY}</span>
                <span className="absolute inset-0 -translate-x-full bg-[#F3E3B5] transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <Link
                to="/contact"
                className="border border-[#C6A45C]/60 px-9 py-4 text-xs font-medium uppercase tracking-[0.3em] text-[#F5F0E6] transition-all duration-500 hover:border-[#C6A45C] hover:bg-[#C6A45C]/10 hover:text-[#E8D5A3]"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;
