import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-[#FF7A00] font-semibold"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-[#0B3B8C] mt-4"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg"
          >
            We are always ready to help you with industrial refrigeration
            and cold storage solutions.
          </motion.p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Address */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0B3B8C] text-white flex items-center justify-center text-3xl mb-6">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-2xl font-bold text-[#0B3B8C] mb-4">
              Address
            </h3>

            <p className="text-gray-600 leading-7">
              85/1-2 Block-9,
              Govind Nagar,
              Kanpur - 208006,
              Uttar Pradesh, India
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0B3B8C] text-white flex items-center justify-center text-3xl mb-6">
              <FaPhoneAlt />
            </div>

            <h3 className="text-2xl font-bold text-[#0B3B8C] mb-4">
              Phone
            </h3>

            <p className="text-gray-600">+91 7232922333</p>
            <p className="text-gray-600 mt-2">+91 8052875755</p>
            <p className="text-gray-600 mt-2">+91 9628665656</p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0B3B8C] text-white flex items-center justify-center text-3xl mb-6">
              <FaEnvelope />
            </div>

            <h3 className="text-2xl font-bold text-[#0B3B8C] mb-4">
              Email
            </h3>

            <p className="text-gray-600 break-all">
              gopalatharmopack@gmail.com
            </p>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0B3B8C] text-white flex items-center justify-center text-3xl mb-6">
              <FaClock />
            </div>

            <h3 className="text-2xl font-bold text-[#0B3B8C] mb-4">
              Working Hours
            </h3>

            <p className="text-gray-600">
              Monday - Saturday
            </p>

            <p className="text-gray-600 mt-2">
              9:00 AM - 6:00 PM
            </p>
          </motion.div>

        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >

          <div className="h-[400px] rounded-3xl bg-gradient-to-br from-[#071A52] to-[#0B3B8C] flex items-center justify-center shadow-2xl relative overflow-hidden">

            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="text-center relative z-10">

              <h2 className="text-4xl font-bold text-white">
                GOOGLE MAP PLACEHOLDER
              </h2>

              <p className="text-gray-200 mt-4 text-lg">
                Replace later with embedded Google Maps
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}