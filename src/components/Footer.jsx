import { motion } from "framer-motion";
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const quickLinks = ["Home", "About", "Products", "Services", "Clients", "Contact"];
const productList = ["Cold Storage Plants", "Bitzer Compressors", "Ammonia Compressors", "Cooling Towers", "Control Panels", "Industrial Refrigeration"];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#040f2e] via-[#071A52] to-[#040f2e] text-white relative overflow-hidden">

      {/* Dot pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* Glow orb */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-1/3 w-96 h-96 bg-[#FF7A00]/30 rounded-full blur-[120px]"
      />

      {/* Top divider accent */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white">Gopala Thermopacks</h2>
            <p className="text-[#FF7A00] mt-1 font-semibold tracking-wide">India Pvt. Ltd.</p>

            <p className="mt-5 text-gray-400 leading-7 text-sm">
              Manufacturer, Exporter and Service Provider of Industrial Refrigeration
              Systems, Cold Storage Plants and Cooling Solutions since 2007.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaWhatsapp />, href: "https://wa.me/917232922333" },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, backgroundColor: "#FF7A00", y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm transition-colors duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-3">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5, color: "#FF7A00" }}
                    className="text-gray-400 hover:text-[#FF7A00] transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <FaArrowRight className="text-[10px] text-[#FF7A00]" /> {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-3">Products</h3>
            <ul className="space-y-3">
              {productList.map((p) => (
                <li key={p} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-3">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <motion.a
                href="tel:+917232922333"
                whileHover={{ x: 4 }}
                className="flex gap-3 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaPhoneAlt className="mt-0.5 text-[#FF7A00] flex-shrink-0" />
                +91 7232922333
              </motion.a>


              <motion.a
                href="mailto:gopalatharmopack@gmail.com"
                whileHover={{ x: 4 }}
                className="flex gap-3 text-gray-400 hover:text-white transition-colors duration-300 break-all"
              >
                <FaEnvelope className="mt-0.5 text-[#FF7A00] flex-shrink-0" />
                gopalatharmopack@gmail.com
              </motion.a>

              <div className="flex gap-3 text-gray-400">
                <FaMapMarkerAlt className="mt-0.5 text-[#FF7A00] flex-shrink-0" />
                <span>85/1-2 Block-9, Govind Nagar,<br />Kanpur - 208006, UP, India</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            © 2026 Gopala Thermopacks India Pvt. Ltd. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs">
            ISO 9001:2015 Certified · Est. 2007 · Kanpur, India
          </p>
        </div>
      </div>

    </footer>
  );
}
