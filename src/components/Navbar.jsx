import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = ["Home", "About", "Products", "Services", "Clients", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white shadow-md"
      }`}
    >
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-[#0B3B8C] text-white text-sm py-2 px-6 hidden lg:flex justify-between"
      >
        <span>📞 +91 7232922333</span>
        <span>✉️ gopalatharmopack@gmail.com</span>
      </motion.div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1 className="text-2xl font-bold text-[#071A52] leading-tight">
            Gopala Thermopacks
          </h1>
          <p className="text-[#0B3B8C] text-xs tracking-widest uppercase">
            India Pvt. Ltd.
          </p>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base font-semibold">
          {navLinks.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group text-[#5B9BD5] hover:text-[#FF7A00] transition-colors duration-300"
              >
                {item}
                {/* animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF7A00] transition-all duration-300 ${
                    active === item.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="hidden md:block bg-[#FF7A00] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-orange-600 transition-all duration-300"
        >
          Request Quote
        </motion.button>

        {/* Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl text-[#0B3B8C]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-semibold text-[#5B9BD5] hover:text-[#FF7A00] transition-colors duration-300 py-2 border-b border-gray-50"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                onClick={() => { setOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="mt-2 bg-[#FF7A00] text-white py-3 rounded-xl font-bold"
              >
                Request Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
