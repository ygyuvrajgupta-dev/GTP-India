import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="text-[#FF7A00] font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h2 className="text-5xl font-bold text-[#0B3B8C] mt-4 leading-tight">
            Delivering Reliable Industrial Refrigeration Solutions Since 2007
          </h2>

          <p className="mt-8 text-gray-600 leading-8 text-lg">
            Gopala Thermopacks India Pvt. Ltd. is a trusted manufacturer,
            exporter, and service provider of advanced cold storage plants,
            industrial refrigeration systems, compressors, evaporative
            condensers, and cooling equipment.
          </p>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            With years of experience and a highly skilled team, we provide
            energy-efficient, durable, and high-performance cooling solutions
            for food processing, dairy industries, pharmaceuticals, fruits,
            vegetables, and industrial applications.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 mt-10">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100"
            >
              <h3 className="font-bold text-[#0B3B8C] text-xl">
                Low Power Consumption
              </h3>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100"
            >
              <h3 className="font-bold text-[#0B3B8C] text-xl">
                Superior Quality Materials
              </h3>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100"
            >
              <h3 className="font-bold text-[#0B3B8C] text-xl">
                Easy Installation
              </h3>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100"
            >
              <h3 className="font-bold text-[#0B3B8C] text-xl">
                Long Service Life
              </h3>
            </motion.div>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          {/* Image Placeholder */}
          <div className="h-[500px] rounded-3xl bg-gradient-to-br from-[#071A52] to-[#0B3B8C] flex items-center justify-center shadow-2xl">

            <div className="text-center p-8">

              <h2 className="text-4xl font-bold text-white">
                IMAGE PLACEHOLDER
              </h2>

              <p className="mt-4 text-gray-200 text-lg">
                Company / Factory Image
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}