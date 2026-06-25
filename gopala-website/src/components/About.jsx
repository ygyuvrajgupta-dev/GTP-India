import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaUsers, FaLeaf } from "react-icons/fa";

const features = [
  { icon: <FaLeaf />, title: "Low Power Consumption", desc: "Energy-efficient systems that reduce operational costs." },
  { icon: <FaAward />, title: "Superior Quality", desc: "ISO certified materials and components throughout." },
  { icon: <FaCheckCircle />, title: "Easy Installation", desc: "Designed for rapid deployment with minimal downtime." },
  { icon: <FaUsers />, title: "Long Service Life", desc: "Built to last with 24/7 after-sales support." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-28 bg-pattern-dots overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[#FF7A00] font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2"
            >
              <span className="w-8 h-0.5 bg-[#FF7A00] inline-block" />
              About Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#0B3B8C] leading-tight mb-6"
            >
              Delivering Reliable{" "}
              <span className="text-[#FF7A00]">Refrigeration</span>{" "}
              Since 2007
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-600 leading-8 text-lg mb-5"
            >
              Gopala Thermopacks India Pvt. Ltd. is a trusted manufacturer,
              exporter, and service provider of advanced cold storage plants,
              industrial refrigeration systems, compressors, evaporative
              condensers, and cooling equipment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-600 leading-8 text-lg mb-10"
            >
              With a highly skilled team, we provide energy-efficient, durable,
              and high-performance cooling solutions for food processing, dairy,
              pharmaceuticals, and industrial applications.
            </motion.p>

            {/* Feature cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ scale: 1.04, y: -4, boxShadow: "0 20px 40px rgba(11,59,140,0.12)" }}
                  className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 flex gap-4 items-start cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B3B8C]/10 text-[#0B3B8C] flex items-center justify-center text-lg flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B3B8C] text-base">{f.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right — image placeholder with animated border */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-3xl border-2 border-dashed border-[#0B3B8C]/20"
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              animate={{ y: [0, -8, 0] }}
              className="absolute -top-6 -right-6 z-10 bg-[#FF7A00] text-white rounded-2xl px-5 py-3 shadow-2xl text-center"
            >
              <div className="text-2xl font-bold">ISO</div>
              <div className="text-xs font-semibold">9001:2015</div>
            </motion.div>

            {/* Second badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              animate={{ y: [0, 8, 0] }}
              className="absolute -bottom-6 -left-6 z-10 bg-[#071A52] text-white rounded-2xl px-5 py-3 shadow-2xl text-center"
            >
              <div className="text-2xl font-bold">17+</div>
              <div className="text-xs font-semibold">Yrs. Experience</div>
            </motion.div>

            {/* Main image box */}
            <div className="h-[520px] rounded-3xl bg-gradient-to-br from-[#071A52] via-[#0B3B8C] to-[#071A52] flex items-center justify-center shadow-2xl relative overflow-hidden">

              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }} />

              {/* Animated circles */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 border border-white/10 rounded-full" />
              </motion.div>
              <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-40 h-40 border border-white/10 rounded-full" />
              </motion.div>

              <div className="text-center relative z-10 p-8">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  🏭
                </motion.div>
                <h2 className="text-3xl font-bold text-white">IMAGE PLACEHOLDER</h2>
                <p className="mt-3 text-gray-300">Company / Factory Image</p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
