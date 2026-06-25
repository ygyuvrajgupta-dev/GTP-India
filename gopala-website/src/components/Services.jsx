import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTools, FaSnowflake, FaCogs, FaWrench, FaIndustry, FaShieldAlt, FaArrowRight } from "react-icons/fa";

const services = [
  {
    icon: FaSnowflake,
    title: "Cold Storage Installation",
    description: "Complete design, supply and installation of cold storage plants for industrial and commercial applications.",
    color: "#0B3B8C",
  },
  {
    icon: FaTools,
    title: "AMC Services",
    description: "Annual Maintenance Contracts to ensure long-term performance and reliability of your systems.",
    color: "#FF7A00",
  },
  {
    icon: FaCogs,
    title: "Industrial Refrigeration",
    description: "Advanced refrigeration systems for food processing, dairy and pharmaceutical industries.",
    color: "#0B3B8C",
  },
  {
    icon: FaWrench,
    title: "Repair & Maintenance",
    description: "Expert maintenance and repair solutions for compressors and all cooling equipment.",
    color: "#FF7A00",
  },
  {
    icon: FaIndustry,
    title: "Plant Engineering",
    description: "Customized engineering solutions tailored to your specific industrial requirements.",
    color: "#0B3B8C",
  },
  {
    icon: FaShieldAlt,
    title: "Quality Assurance",
    description: "Strict quality standards with durable, energy-efficient systems and ISO certification.",
    color: "#FF7A00",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="services" className="py-28 bg-pattern-dots overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FF7A00] font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center gap-2"
          >
            <span className="w-8 h-0.5 bg-[#FF7A00]" />
            Our Services
            <span className="w-8 h-0.5 bg-[#FF7A00]" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0B3B8C]"
          >
            Complete{" "}
            <span className="text-[#FF7A00]">Cooling</span>{" "}
            Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg"
          >
            Installation, maintenance and engineering services for industrial refrigeration and cold storage systems.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isExpanded = expanded === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => setExpanded(isExpanded ? null : i)}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 cursor-pointer group relative overflow-hidden"
              >

                {/* Hover background sweep */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#071A52] to-[#0B3B8C] rounded-3xl"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-colors duration-300"
                    style={{ backgroundColor: `${service.color}20`, color: service.color }}
                  >
                    <Icon />
                  </motion.div>

                  <h3 className="text-xl font-bold text-[#0B3B8C] group-hover:text-white transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 leading-7 text-sm">
                    {service.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 mt-5 text-[#FF7A00] font-bold text-sm"
                    whileHover={{ gap: "10px" }}
                  >
                    Learn More <FaArrowRight className="text-xs" />
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <p className="text-gray-600 font-medium">Need a customised solution?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#FF7A00] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-orange-600 transition-colors duration-300 flex items-center gap-2"
            >
              Contact Us <FaArrowRight className="text-xs" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
