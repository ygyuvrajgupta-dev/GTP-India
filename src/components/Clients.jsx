import { motion } from "framer-motion";

const clientLogo = (file) => `${import.meta.env.BASE_URL}clients/${file}`;

const clients = [
  { name: "Britannia", logo: clientLogo("britannia.png") },
  { name: "NTPC", logo: clientLogo("ntpc.png") },
  { name: "Indian Oil", logo: clientLogo("indian-oil.png") },
  { name: "Parle", logo: clientLogo("parle.png") },
  { name: "Aditya Birla", logo: clientLogo("aditya-birla.png") },
  { name: "Hawkins", logo: clientLogo("hawkins.png") },
  { name: "Indian Railways", logo: clientLogo("indian-railways.png") },
  { name: "Superhouse Group", logo: clientLogo("superhouse.png") },
  { name: "Indian Air Force", logo: clientLogo("Indian_Air_Force.png") },
];
const doubled = [...clients, ...clients];

export default function Clients() {
  return (
    <section id="clients" className="py-28 bg-pattern-grid overflow-hidden">

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
            Our Clients
            <span className="w-8 h-0.5 bg-[#FF7A00]" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0B3B8C]"
          >
            Trusted By{" "}
            <span className="text-[#FF7A00]">Industry</span>{" "}
            Leaders
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-4 text-lg"
          >
            Proudly serving India's most recognised organisations
          </motion.p>
        </div>

      </div>

      {/* Marquee row 1 — left */}
      <div className="relative w-full overflow-hidden mb-5">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-5 w-max"
          style={{ animation: "marquee-left 35s linear infinite" }}
        >
          {doubled.map((client, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, y: -4, boxShadow: "0 20px 40px rgba(11,59,140,0.15)" }}
              className="bg-white shadow-md rounded-2xl w-52 h-28 flex-shrink-0 flex items-center justify-center border border-gray-100 cursor-default transition-shadow duration-300"
            >
              <div className="text-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12 w-auto max-w-[120px] object-contain mb-1 mx-auto"
                />
                <div className="text-sm font-bold text-[#0B3B8C]">{client.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right (reverse) */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-5 w-max"
          style={{ animation: "marquee-right 35s linear infinite" }}
        >
          {[...doubled].reverse().map((client, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, y: -4 }}
              className="bg-white shadow-md rounded-2xl w-52 h-28 flex-shrink-0 flex items-center justify-center border border-gray-100 cursor-default"
            >
              <div className="text-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12 w-auto max-w-[120px] object-contain mb-1 mx-auto"
                />
                <div className="text-sm font-bold text-[#0B3B8C]">{client.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

    </section>
  );
}
