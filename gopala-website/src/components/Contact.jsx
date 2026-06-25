import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_DUMMY_API_KEY_HERE", // Replace with real key from web3forms.com
          subject: `New Quote Request from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", requirement: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const requirements = [
    "Cold Storage Plant",
    "Ammonia Compressor",
    "Bitzer Compressor",
    "Cooling Tower",
    "Industrial Refrigeration System",
    "AMC / Maintenance Service",
    "Fruit Ripening Chamber",
    "Electric Control Panel",
    "Other",
  ];

  return (
    <section id="contact" className="py-24 bg-pattern-dots">

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

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0B3B8C] text-white flex items-center justify-center text-3xl mb-6">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-2xl font-bold text-[#0B3B8C] mb-4">Address</h3>
            <p className="text-gray-600 leading-7">
              85/1-2 Block-9,<br />
              Govind Nagar,<br />
              Kanpur - 208006,<br />
              Uttar Pradesh, India
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0B3B8C] text-white flex items-center justify-center text-3xl mb-6">
              <FaPhoneAlt />
            </div>
            <h3 className="text-2xl font-bold text-[#0B3B8C] mb-4">Phone</h3>
            <p className="text-gray-600">+91 7232922333</p>
            <p className="text-gray-600 mt-2">+91 9628665656</p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0B3B8C] text-white flex items-center justify-center text-3xl mb-6">
              <FaEnvelope />
            </div>
            <h3 className="text-2xl font-bold text-[#0B3B8C] mb-4">Email</h3>
            <p className="text-gray-600 break-all">
              gopalatharmopack@gmail.com
            </p>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0B3B8C] text-white flex items-center justify-center text-3xl mb-6">
              <FaClock />
            </div>
            <h3 className="text-2xl font-bold text-[#0B3B8C] mb-4">Working Hours</h3>
            <p className="text-gray-600">Monday - Saturday</p>
            <p className="text-gray-600 mt-2">9:00 AM - 6:00 PM</p>
          </motion.div>

        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        >

          <div className="grid lg:grid-cols-2">

            {/* Left — decorative panel */}
            <div className="bg-gradient-to-br from-[#071A52] via-[#0B3B8C] to-[#071A52] p-12 flex flex-col justify-center relative overflow-hidden">

              {/* dot pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
                backgroundSize: '28px 28px'
              }}></div>

              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-white leading-tight">
                  Request a <span className="text-[#FF7A00]">Free Quote</span>
                </h3>
                <p className="text-gray-300 mt-6 leading-8 text-lg">
                  Fill in your details and our team will get back to you within 24 hours with a customised solution.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-4 text-gray-200">
                    <div className="w-10 h-10 rounded-full bg-[#FF7A00] flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <p>Fill out the enquiry form</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-200">
                    <div className="w-10 h-10 rounded-full bg-[#FF7A00] flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <p>Our team reviews your requirement</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-200">
                    <div className="w-10 h-10 rounded-full bg-[#FF7A00] flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <p>Receive a customised quote within 24 hrs</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right — form */}
            <div className="p-10 lg:p-12">

              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <FaCheckCircle className="text-green-500 text-6xl mb-6" />
                  <h3 className="text-3xl font-bold text-[#0B3B8C]">Thank You!</h3>
                  <p className="text-gray-600 mt-4 text-lg">
                    Your enquiry has been sent successfully.<br />
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 bg-[#FF7A00] text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <h3 className="text-2xl font-bold text-[#0B3B8C] mb-2">
                    Send us an Enquiry
                  </h3>

                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0B3B8C] focus:ring-2 focus:ring-[#0B3B8C]/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0B3B8C] focus:ring-2 focus:ring-[#0B3B8C]/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0B3B8C] focus:ring-2 focus:ring-[#0B3B8C]/20 transition-all duration-200"
                    />
                  </div>

                  {/* Requirement dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Requirement <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0B3B8C] focus:ring-2 focus:ring-[#0B3B8C]/20 transition-all duration-200 bg-white"
                    >
                      <option value="">Select your requirement</option>
                      {requirements.map((req) => (
                        <option key={req} value={req}>{req}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about your project or requirement..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0B3B8C] focus:ring-2 focus:ring-[#0B3B8C]/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <div className="flex items-center gap-3 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <FaExclamationCircle />
                      <p className="text-sm">Something went wrong. Please try again or call us directly.</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#FF7A00] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      "Send Enquiry →"
                    )}
                  </button>

                </form>
              )}

            </div>

          </div>

        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="h-[400px] rounded-3xl bg-gradient-to-br from-[#071A52] to-[#0B3B8C] flex items-center justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
              backgroundSize: '28px 28px'
            }}></div>
            <div className="text-center relative z-10">
              <h2 className="text-4xl font-bold text-white">GOOGLE MAP PLACEHOLDER</h2>
              <p className="text-gray-200 mt-4 text-lg">Replace later with embedded Google Maps</p>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
