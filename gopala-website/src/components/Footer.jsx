import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#071A52] text-white relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">
              Gopala Thermopacks
            </h2>

            <p className="text-[#FF7A00] mt-2 text-lg font-semibold">
              India Pvt. Ltd.
            </p>

            <p className="mt-6 text-gray-300 leading-8">
              Manufacturer, Exporter and Service Provider of
              Industrial Refrigeration Systems, Cold Storage
              Plants and Cooling Solutions since 2007.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold mb-6 text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <a href="#home" className="hover:text-[#FF7A00] transition duration-300">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-[#FF7A00] transition duration-300">
                  About
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-[#FF7A00] transition duration-300">
                  Products
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#FF7A00] transition duration-300">
                  Services
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#FF7A00] transition duration-300">
                  Contact
                </a>
              </li>

            </ul>

          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold mb-6 text-white">
              Products
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>Cold Storage Plants</li>
              <li>Bitzer Compressors</li>
              <li>Ammonia Compressors</li>
              <li>Cooling Towers</li>
              <li>Control Panels</li>
              <li>Industrial Refrigeration Systems</li>

            </ul>

          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold mb-6 text-white">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-[#FF7A00]" />
                <div>
                  <p>+91 7232922333</p>
                  <p>+91 8052875755</p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-[#FF7A00]" />
                <p>gopalatharmopack@gmail.com</p>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#FF7A00]" />
                <p>
                  Govind Nagar,
                  Kanpur - 208006,
                  Uttar Pradesh, India
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#0B3B8C]">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-300 text-center">
            © 2026 Gopala Thermopacks India Pvt. Ltd.
            All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 md:mt-0">

            <div className="w-10 h-10 rounded-full bg-[#0B3B8C] flex items-center justify-center cursor-pointer hover:bg-[#FF7A00] transition duration-300">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#0B3B8C] flex items-center justify-center cursor-pointer hover:bg-[#FF7A00] transition duration-300">
              <FaLinkedinIn />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#0B3B8C] flex items-center justify-center cursor-pointer hover:bg-[#FF7A00] transition duration-300">
              <FaInstagram />
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}