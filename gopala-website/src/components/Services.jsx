import { motion } from "framer-motion";
import {
  FaTools,
  FaSnowflake,
  FaCogs,
  FaWrench,
  FaIndustry,
  FaShieldAlt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaSnowflake />,
      title: "Cold Storage Installation",
      description:
        "Complete design, supply and installation of cold storage plants for industrial and commercial applications.",
    },
    {
      icon: <FaTools />,
      title: "AMC Services",
      description:
        "Annual Maintenance Contracts to ensure long-term performance and reliability.",
    },
    {
      icon: <FaCogs />,
      title: "Industrial Refrigeration",
      description:
        "Advanced refrigeration systems for food processing, dairy and pharmaceutical industries.",
    },
    {
      icon: <FaWrench />,
      title: "Repair & Maintenance",
      description:
        "Expert maintenance and repair solutions for compressors and cooling equipment.",
    },
    {
      icon: <FaIndustry />,
      title: "Plant Engineering",
      description:
        "Customized engineering solutions tailored to industrial requirements.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assurance",
      description:
        "Strict quality standards with durable and energy-efficient systems.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">

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
            Our Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-[#0B3B8C] mt-4"
          >
            Complete Cooling Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg"
          >
            We provide installation, maintenance and engineering services
            for industrial refrigeration and cold storage systems.
          </motion.p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-2xl
                hover:shadow-2xl
                transition-all
                duration-300
                border border-gray-100
              "
            >

              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-[#0B3B8C] text-white flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#0B3B8C]">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-5 leading-8">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}