import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

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

  return (
    <section id="clients" className="py-24 bg-white">

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

        <Marquee speed={50} pauseOnHover gradient={false}>

          {clients.map((client, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="
                mx-6
                bg-white
                shadow-2xl
                rounded-3xl
                w-64
                h-40
                flex
                items-center
                justify-center
                text-xl
                font-bold
                text-[#0B3B8C]
                border-2
                border-gray-100
                transition-all
                duration-300
              "
            >
              <div className="text-center">
                <div className="text-3xl mb-2">🏢</div>
                <div>LOGO PLACEHOLDER</div>
                <div className="text-sm text-gray-500 mt-1">{client}</div>
              </div>
            </motion.div>

          ))}

        </Marquee>

      </div>

    </section>
  );
}