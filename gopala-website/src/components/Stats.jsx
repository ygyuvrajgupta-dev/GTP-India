import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ target, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    // target may contain non-numeric chars like "24/7"
    const numeric = parseInt(target);
    if (isNaN(numeric)) { setCount(target); return; }

    let start = 0;
    const steps = 60;
    const increment = numeric / steps;
    const interval = (duration * 1000) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numeric) {
        setCount(numeric);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {typeof count === "number" ? count : target}{suffix}
    </span>
  );
}

const stats = [
  { number: "17", suffix: "+", label: "Years Experience", icon: "🏆" },
  { number: "500", suffix: "+", label: "Projects Completed", icon: "🏗️" },
  { number: "100", suffix: "+", label: "Industrial Clients", icon: "🤝" },
  { number: "24/7", suffix: "", label: "Customer Support", icon: "📞" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-br from-[#040f2e] via-[#071A52] to-[#0a2a6e] text-white relative overflow-hidden"
    >
      {/* Dot pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* Glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-72 h-72 bg-[#FF7A00]/20 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#0B3B8C]/40 rounded-full blur-[80px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FF7A00] font-bold uppercase tracking-widest text-sm mb-3 flex items-center justify-center gap-2"
          >
            <span className="w-8 h-0.5 bg-[#FF7A00] inline-block" />
            Our Achievements
            <span className="w-8 h-0.5 bg-[#FF7A00] inline-block" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Numbers That Reflect Our{" "}
            <span className="text-[#FF7A00]">Excellence</span>
          </motion.h2>
        </div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, y: -6 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl text-center group cursor-default transition-colors duration-300 hover:bg-white/15"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className="text-4xl mb-4"
              >
                {stat.icon}
              </motion.div>

              <div className="text-5xl font-bold text-[#FF7A00] tabular-nums">
                <CountUp target={stat.number} suffix={stat.suffix} />
              </div>

              <p className="mt-3 text-gray-300 text-lg font-medium">{stat.label}</p>

              {/* Bottom accent bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-0.5 bg-[#FF7A00]/60 rounded-full mx-auto mt-5"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
