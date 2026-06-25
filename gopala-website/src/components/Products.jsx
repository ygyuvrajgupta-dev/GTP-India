import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaSnowflake, FaThermometerHalf, FaWind, FaBolt, FaLeaf, FaIndustry } from "react-icons/fa";

const products = [
  { name: "Cold Storage Plant", icon: <FaSnowflake />, tag: "Storage" },
  { name: "Ammonia Compressor", icon: <FaIndustry />, tag: "Compressor" },
  { name: "Bitzer Compressor", icon: <FaIndustry />, tag: "Compressor" },
  { name: "Water Cooled Compressor", icon: <FaThermometerHalf />, tag: "Compressor" },
  { name: "Air Cooling Unit", icon: <FaWind />, tag: "Cooling" },
  { name: "Cooling Tower", icon: <FaWind />, tag: "Cooling" },
  { name: "Thermocol Sheet", icon: <FaLeaf />, tag: "Insulation" },
  { name: "Electric Control Panel", icon: <FaBolt />, tag: "Electrical" },
  { name: "Fruit Ripening Chamber", icon: <FaSnowflake />, tag: "Storage" },
  { name: "Industrial Refrigeration System", icon: <FaIndustry />, tag: "Industrial" },
  { name: "Evaporative Condenser", icon: <FaThermometerHalf />, tag: "Cooling" },
  { name: "Vegetable Cold Storage", icon: <FaSnowflake />, tag: "Storage" },
];

const tags = ["All", ...Array.from(new Set(products.map((p) => p.tag)))];

export default function Products() {
  const [activeTag, setActiveTag] = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered = activeTag === "All" ? products : products.filter((p) => p.tag === activeTag);

  return (
    <section id="products" className="py-28 bg-pattern-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FF7A00] font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center gap-2"
          >
            <span className="w-8 h-0.5 bg-[#FF7A00]" />
            Our Products
            <span className="w-8 h-0.5 bg-[#FF7A00]" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0B3B8C]"
          >
            Industrial{" "}
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
            High-quality refrigeration equipment designed for reliability, efficiency, and long service life.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTag === tag
                  ? "bg-[#0B3B8C] text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#0B3B8C] hover:text-[#0B3B8C]"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, index) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onHoverStart={() => setHovered(product.name)}
                onHoverEnd={() => setHovered(null)}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
                whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(11,59,140,0.15)" }}
              >
                {/* Image area */}
                <div className="h-48 bg-gradient-to-br from-[#071A52] via-[#0B3B8C] to-[#071A52] flex items-center justify-center relative overflow-hidden">

                  <div className="absolute inset-0" style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }} />

                  {/* Glow on hover */}
                  <motion.div
                    animate={{ scale: hovered === product.name ? 1.5 : 1, opacity: hovered === product.name ? 0.3 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-32 h-32 bg-[#FF7A00] rounded-full blur-3xl" />
                  </motion.div>

                  <motion.div
                    animate={{ scale: hovered === product.name ? 1.2 : 1, rotate: hovered === product.name ? 10 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-5xl text-white/80 relative z-10"
                  >
                    {product.icon}
                  </motion.div>

                  {/* Tag badge */}
                  <div className="absolute top-3 right-3 bg-[#FF7A00]/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#0B3B8C] group-hover:text-[#FF7A00] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    Premium industrial cooling equipment with high efficiency and durable construction.
                  </p>
                  <motion.button
                    whileHover={{ gap: "12px" }}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-4 flex items-center gap-2 text-[#FF7A00] font-bold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Get Quote <FaArrowRight className="text-xs" />
                  </motion.button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
