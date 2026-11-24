// import React from "react";
// import { BsTelephoneOutbound } from "react-icons/bs";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Header = () => {
//   const location = useLocation();
//   const isHome = location.pathname === "/";

//   const navigate = useNavigate();

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services & Pricing", path: "/service-and-pricing" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <header className="w-full fixed top-0 left-0 z-50 p-1">
//       <div className="w-2/3 mx-auto bg-black/50 backdrop-blur-sm p-3 flex items-center justify-around rounded-full">
//         <ul className="flex gap-8 text-[#F5F5F5] font-medium text-lg font-rajdhani">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <Link className="hover:text-[#C6A45C]" to={item.path}>
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <div className="flex text-[#F5F5F5] font-medium text-sm font-orbitron items-center justify-center gap-4">
//           <div>
//             <p>Need a Barber? Call Us</p>
//             <p>0400811122</p>
//           </div>
//         </div>

//         <div className="relative hover:border-none rounded-md  hover:bg-[#C6A45C] px-3 py-2 clip-diagonal hover:scale-105 ">
//           <button
//             onClick={() => navigate("/service-and-pricing")}
//             className="cursor-pointer text-[#F5F5F5] hover:text-black font-orbitron text-sm font-bold "
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsTelephoneOutbound } from "react-icons/bs";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

/* ------------------------------------------------------------------
   THEME: "Obsidian & Champagne"
   Obsidian #0A0A0B | Graphite #141416 | Champagne #C6A45C
   Pale Gold #E8D5A3 | Bronze #8A6D2F | Ivory #F5F0E6
------------------------------------------------------------------- */

// TODO: replace with The Liverpool Street Barber Shop's real number
const PHONE_DISPLAY = "0400 811 122";
const PHONE_LINK = "0400811122";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services & Pricing", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

const fontStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Montserrat:wght@400;500;600&display=swap');
.hdr-display { font-family: 'Cormorant Garamond', serif; }
.hdr-body { font-family: 'Montserrat', sans-serif; }
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Switch from transparent to solid once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="hdr-body fixed left-0 top-0 z-50 w-full px-3 pt-3 md:pt-5">
      <style>{fontStyles}</style>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 backdrop-blur-xl transition-all duration-500 md:px-7 ${
          scrolled
            ? "border-[#C6A45C]/40 bg-[#0A0A0B]/90 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            : "border-[#C6A45C]/20 bg-[#0A0A0B]/45"
        }`}
      >
        {/* ----------------------------- Brand ----------------------------- */}
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center rotate-45 border border-[#C6A45C] transition-all duration-500 group-hover:bg-[#C6A45C]/15">
            <span className="-rotate-45 hdr-display text-lg font-bold text-[#C6A45C]">
              L
            </span>
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="hdr-body text-[9px] font-medium uppercase leading-none tracking-[0.4em] text-[#C6A45C]">
              The Liverpool Street
            </span>
            <span className="hdr-display mt-1 text-2xl font-semibold leading-none tracking-[0.2em] text-[#F5F0E6]">
              BARBER SHOP
            </span>
            {/* Barber-pole stripe accent */}
            {/* <span className="mt-1.5 flex h-[2px] w-full overflow-hidden rounded-full">
              <span className="flex-1 bg-[#B3202E]" />
              <span className="flex-1 bg-[#F5F0E6]" />
              <span className="flex-1 bg-[#1F4E9C]" />
              <span className="flex-1 bg-[#B3202E]" />
              <span className="flex-1 bg-[#F5F0E6]" />
              <span className="flex-1 bg-[#1F4E9C]" />
            </span> */}
          </span>
        </Link>

        {/* --------------------------- Desktop nav -------------------------- */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `relative block px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#E8D5A3]"
                        : "text-[#F5F0E6]/75 hover:text-[#C6A45C]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0.5 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#C6A45C] to-transparent"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 32,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ------------------------- Phone + Book Now ------------------------ */}
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href={`tel:${PHONE_LINK}`}
            className="group hidden items-center gap-3 xl:flex"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A45C]/50 text-[#C6A45C] transition-all duration-300 group-hover:bg-[#C6A45C] group-hover:text-[#0A0A0B]">
              <BsTelephoneOutbound size={14} />
            </span>
            <span className="leading-tight">
              <span className="block text-[9px] uppercase tracking-[0.25em] text-[#F5F0E6]/55">
                Need a barber?
              </span>
              <span className="block text-sm font-semibold tracking-wider text-[#F5F0E6] transition-colors group-hover:text-[#E8D5A3]">
                {PHONE_DISPLAY}
              </span>
            </span>
          </a>

          <button
            onClick={() => navigate("/service-and-pricing")}
            className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-[#8A6D2F] via-[#C6A45C] to-[#8A6D2F] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0A0A0B] transition-all duration-500 hover:shadow-[0_0_28px_rgba(198,164,92,0.55)] sm:block"
          >
            <span className="relative z-10">Book Now</span>
            <span className="absolute inset-0 -translate-x-full bg-[#F3E3B5] transition-transform duration-500 group-hover:translate-x-0" />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A45C]/50 text-[#C6A45C] transition-colors hover:bg-[#C6A45C]/10 lg:hidden"
          >
            {open ? <HiX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
          </button>
        </div>
      </motion.div>

      {/* ---------------------------- Mobile menu --------------------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 w-full max-w-6xl overflow-hidden rounded-3xl border border-[#C6A45C]/35 bg-[#0A0A0B]/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="border-b border-[#C6A45C]/15 last:border-none"
                >
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 text-sm uppercase tracking-[0.25em] transition-colors ${
                        isActive ? "text-[#E8D5A3]" : "text-[#F5F0E6]/80"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        {isActive && (
                          <span className="h-1.5 w-1.5 rotate-45 bg-[#C6A45C]" />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 border-t border-[#C6A45C]/20 bg-[#141416] px-6 py-5">
              <a
                href={`tel:${PHONE_LINK}`}
                className="flex items-center justify-center gap-3 rounded-full border border-[#C6A45C]/50 py-3 text-sm font-medium tracking-wider text-[#E8D5A3]"
              >
                <BsTelephoneOutbound size={14} />
                {PHONE_DISPLAY}
              </a>
              <button
                onClick={() => navigate("/service-and-pricing")}
                className="rounded-full bg-gradient-to-r from-[#8A6D2F] via-[#C6A45C] to-[#8A6D2F] py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0A0A0B]"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
