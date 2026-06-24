import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-sky-500 text-white min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Engineering Advanced
          <br />
          Cold Storage Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-xl max-w-2xl"
        >
          Manufacturer • Exporter • Service Provider
          Since 2007
        </motion.p>

        <div className="mt-10 flex gap-5">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold">
            Explore Products
          </button>

          <button className="border border-white px-8 py-4 rounded-xl">
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
}