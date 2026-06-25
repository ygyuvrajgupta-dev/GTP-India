import { motion } from "framer-motion";

export default function Clients() {

  const clients = [
    "Britannia",
    "NTPC",
    "Indian Oil",
    "Parle",
    "Aditya Birla",
    "Hawkins",
    "Indian Railways",
    "Superhouse Group",
  ];

  // Duplicate list so the scroll loop is seamless
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-[#FF7A00] font-semibold"
          >
            Our Clients
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-[#0B3B8C] mt-4"
          >
            Trusted By Industry Leaders
          </motion.h2>

        </div>

      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-6 w-max"
          style={{
            animation: "marquee 30s linear infinite",
          }}
        >
          {doubled.map((client, index) => (
            <div
              key={index}
              className="
                bg-white
                shadow-2xl
                rounded-3xl
                w-64
                h-40
                flex-shrink-0
                flex
                items-center
                justify-center
                text-xl
                font-bold
                text-[#0B3B8C]
                border-2
                border-gray-100
              "
            >
              <div className="text-center">
                <div className="text-3xl mb-2">🏢</div>
                <div>LOGO PLACEHOLDER</div>
                <div className="text-sm text-gray-500 mt-1">{client}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}
