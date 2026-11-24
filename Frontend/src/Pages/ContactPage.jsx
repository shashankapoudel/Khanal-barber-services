import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogoLight } from "react-icons/pi";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";

/* ------------------------------------------------------------------
   THEME: "Obsidian & Champagne"
   Obsidian #0A0A0B | Graphite #141416 | Champagne #C6A45C
   Pale Gold #E8D5A3 | Bronze #8A6D2F | Ivory #F5F0E6
------------------------------------------------------------------- */

// TODO: replace all of these with The Liverpool Street Barber Shop's real details
const CONTACT = {
  location: "Hobart, Tasmania",
  phoneDisplay: "0400 811 122",
  phoneLink: "0400811122",
  email: "sharpandmobile@gmail.com",
};

// TODO: placeholder hours, replace with the real opening hours
const HOURS = [
  { day: "Monday – Friday", time: "9:00 am – 5:30 pm" },
  { day: "Saturday", time: "9:00 am – 3:00 pm" },
  { day: "Sunday", time: "Closed" },
];

// TODO: replace with the shop's real social pages
const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/himalayascraftnepal/",
    icon: <SlSocialFacebook />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/himalayascraftnepal/",
    icon: <SlSocialInstagram />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@himalayascraftnepal/",
    icon: <PiTiktokLogoLight />,
  },
];

const fontStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');
.ct-display { font-family: 'Cormorant Garamond', serif; }
.ct-body { font-family: 'Montserrat', sans-serif; }
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

const InfoRow = ({ icon, label, children }) => (
  <div className="flex items-start gap-4">
    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C6A45C]/40 text-lg text-[#C6A45C]">
      {icon}
    </span>
    <div>
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C6A45C]">
        {label}
      </p>
      <div className="text-sm font-light leading-relaxed text-[#F5F0E6]/80">
        {children}
      </div>
    </div>
  </div>
);

const fieldClass =
  "peer w-full border-0 border-b border-[#F5F0E6]/25 bg-transparent px-0 py-3 text-sm text-[#F5F0E6] placeholder-transparent outline-none transition-colors duration-300 focus:border-[#C6A45C]";

const labelClass =
  "pointer-events-none absolute left-0 -top-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C6A45C] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-[0.2em] peer-placeholder-shown:text-[#F5F0E6]/50 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:tracking-[0.3em] peer-focus:text-[#C6A45C]";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your backend / EmailJS / Formspree here
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="ct-body relative min-h-screen overflow-hidden bg-[#0A0A0B] px-6 pb-24 pt-36 text-[#F5F0E6] md:pt-44">
      <style>{fontStyles}</style>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-[#C6A45C]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#5A1A24]/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* ------------------------------ Heading ------------------------------ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-16 text-center"
        >
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.5em] text-[#C6A45C]">
            Contact Us
          </p>
          <h1 className="ct-display text-5xl font-medium tracking-wide md:text-7xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-[#8A6D2F] via-[#F3E3B5] to-[#C6A45C] bg-clip-text italic text-transparent">
              Touch
            </span>
          </h1>
          <div className="mt-6">
            <GoldDivider />
          </div>
          <p className="ct-display mx-auto mt-6 max-w-xl text-xl italic text-[#E8D5A3]/80">
            Questions, bookings or just want a chat? Send us a message and we
            will get back to you.
          </p>
        </motion.div>

        {/* ------------------------------- Content ------------------------------ */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Info panel */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="space-y-8 border border-[#C6A45C]/25 bg-[#141416] p-8 md:p-10 lg:col-span-2"
          >
            <h2 className="ct-display text-3xl font-semibold tracking-wide">
              The Liverpool Street{" "}
              <span className="text-[#C6A45C]">Barber Shop</span>
            </h2>

            <InfoRow icon={<HiOutlineLocationMarker />} label="Visit">
              {CONTACT.location}
            </InfoRow>

            <InfoRow icon={<HiOutlinePhone />} label="Call">
              <a
                href={`tel:${CONTACT.phoneLink}`}
                className="transition-colors duration-300 hover:text-[#E8D5A3]"
              >
                {CONTACT.phoneDisplay}
              </a>
            </InfoRow>

            <InfoRow icon={<HiOutlineMail />} label="Email">
              <a
                href={`mailto:${CONTACT.email}`}
                className="break-all transition-colors duration-300 hover:text-[#E8D5A3]"
              >
                {CONTACT.email}
              </a>
            </InfoRow>

            <InfoRow icon={<HiOutlineClock />} label="Hours">
              <ul className="space-y-1">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span>{h.day}</span>
                    <span className="text-[#E8D5A3]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoRow>

            <div className="border-t border-[#C6A45C]/20 pt-6">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C6A45C]">
                Follow Us
              </p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A45C]/40 text-lg text-[#C6A45C] transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A45C] hover:bg-[#C6A45C] hover:text-[#0A0A0B]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Form panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="relative border border-[#C6A45C]/25 bg-gradient-to-b from-[#141416] to-[#0A0A0B] p-8 md:p-12 lg:col-span-3"
          >
            {/* Corner accents */}
            <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-[#C6A45C]" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-[#C6A45C]" />

            <h2 className="ct-display mb-10 text-3xl font-semibold tracking-wide">
              Send us a message
            </h2>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[320px] flex-col items-center justify-center text-center"
                >
                  <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A45C] text-2xl text-[#C6A45C]">
                    ✓
                  </span>
                  <h3 className="ct-display text-3xl text-[#E8D5A3]">
                    Thank you
                  </h3>
                  <p className="mt-3 max-w-sm text-sm font-light text-[#F5F0E6]/70">
                    Your message has been received. We will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C6A45C] underline-offset-8 hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-9"
                >
                  <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className={fieldClass}
                      />
                      <label htmlFor="name" className={labelClass}>
                        Your Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={handleChange}
                        className={fieldClass}
                      />
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      className={fieldClass}
                    />
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Message"
                      value={form.message}
                      onChange={handleChange}
                      className={`${fieldClass} resize-none`}
                    />
                    <label htmlFor="message" className={labelClass}>
                      Your Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden bg-gradient-to-r from-[#8A6D2F] via-[#C6A45C] to-[#8A6D2F] py-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#0A0A0B] transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(198,164,92,0.4)]"
                  >
                    <span className="relative z-10">Send Message</span>
                    <span className="absolute inset-0 -translate-x-full bg-[#F3E3B5] transition-transform duration-500 group-hover:translate-x-0" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
