import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaSnowflake, FaPhone } from "react-icons/fa";

// Floating particle component
function Particle({ style }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/10"
      style={style}
      animate={{
        y: [0, -30, 0],
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: style.duration,
        repeat: Infinity,
        delay: style.delay,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = Array.from({ length: 12 }, (_, i) => ({
  width: Math.random() * 60 + 20,
  height: Math.random() * 60 + 20,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
}));

const stats = [
  { number: "35+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "100+", label: "Industrial Clients" },
  { number: "24/7", label: "Customer Support" },
];

export default function Hero() {
  useEffect(() => {
    document.title = "Gopala Thermopacks India Pvt. Ltd. | Cold Storage Solutions";
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#040f2e] via-[#071A52] to-[#0a2a6e]" />

      {/* Dot pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#0B3B8C]/50 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#FF7A00]/20 blur-[100px]"
      />

      {/* Floating particles */}
      {particles.map((p, i) => <Particle key={i} style={p} />)}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-4xl">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaSnowflake className="text-[#FF7A00] text-lg" />
              </motion.span>
              <span className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white font-semibold uppercase tracking-wider text-sm">
                Est. 2007 · ISO 9001:2015 Certified
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
            >
              Engineered
              <br />
              <span className="text-[#FF7A00] relative">
                Cold.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                  className="absolute bottom-2 left-0 h-1 bg-[#FF7A00]/40 rounded-full"
                />
              </span>{" "}
              <span className="text-white">Delivered.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
              Manufacturer, Exporter &amp; Service Provider of industrial refrigeration,
              cold storage plants, compressors and cooling solutions — trusted by
              NTPC, Indian Oil, Britannia and more.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-20">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,122,0,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-3 bg-[#FF7A00] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:bg-orange-600 transition-colors duration-300"
              >
                Explore Products
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#071A52" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
              >
                <FaPhone className="text-sm" />
                Request Quote
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.18)" }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white text-center transition-colors duration-300 cursor-default"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#FF7A00]">{stat.number}</div>
                <div className="text-sm text-gray-300 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>

    </section>
  );
}
