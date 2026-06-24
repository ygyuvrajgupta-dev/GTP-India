import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    {
      number: 17,
      suffix: "+",
      title: "Years Experience",
    },
    {
      number: 500,
      suffix: "+",
      title: "Projects Completed",
    },
    {
      number: 100,
      suffix: "+",
      title: "Industrial Clients",
    },
    {
      number: 24,
      suffix: "/7",
      title: "Customer Support",
    },
  ];

  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-br from-[#071A52] via-[#0B3B8C] to-[#071A52] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-[#FF7A00] font-semibold"
          >
            Our Achievements
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mt-4"
          >
            Numbers That Reflect Our Excellence
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="
                bg-white/10
                backdrop-blur-lg
                border border-white/20
                rounded-3xl
                p-10
                shadow-2xl
                text-center
                hover:bg-white/15
                transition-all
                duration-300
              "
            >
              <h2 className="text-5xl font-bold text-[#FF7A00]">
                <CountUp
                  end={item.number}
                  duration={3}
                />
                {item.suffix}
              </h2>

              <p className="mt-5 text-lg text-gray-200">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}