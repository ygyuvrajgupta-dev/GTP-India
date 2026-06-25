import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  useEffect(() => {
    document.title = "Gopala Thermopacks India Pvt. Ltd. | Cold Storage Solutions";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "Manufacturer, Exporter and Service Provider of Cold Storage Plants, Industrial Refrigeration Systems, Compressors and Cooling Solutions.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Manufacturer, Exporter and Service Provider of Cold Storage Plants, Industrial Refrigeration Systems, Compressors and Cooling Solutions.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>

      <section
        id="home"
        className="relative min-h-screen overflow-hidden flex items-center"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#071A52] via-[#0B3B8C] to-[#071A52]">

          {/* Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">

            <div className="text-center">

              <h1 className="text-7xl font-bold text-white">
                VIDEO
              </h1>

              <p className="text-white text-2xl mt-4">
                PLACEHOLDER
              </p>

            </div>

          </div>

        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              inline-block
              bg-[#FF7A00]
              px-6
              py-3
              rounded-full
              text-white
              font-semibold
              uppercase
              tracking-wider
              text-sm
            "
          >
            Engineering Advanced
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="
              text-white
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-bold
              leading-tight
              mt-8
            "
          >
            Cold Storage
            <br />
            <span className="text-[#FF7A00]">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="
              mt-8
              text-xl
              md:text-2xl
              text-gray-200
              max-w-3xl
              leading-relaxed
            "
          >
            Manufacturer • Exporter • Service Provider Since 2007
            <br />
            Delivering advanced industrial refrigeration and cooling
            solutions with quality and innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-6 mt-12"
          >

            <button
              className="
                bg-[#FF7A00]
                text-white
                px-10
                py-4
                rounded-2xl
                font-bold
                shadow-2xl
                hover:bg-orange-600
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Explore Products
            </button>

            <button
              className="
                border-2
                border-white
                text-white
                px-10
                py-4
                rounded-2xl
                font-bold
                hover:bg-white
                hover:text-[#071A52]
                transition-all
                duration-300
              "
            >
              Request Quote
            </button>

          </motion.div>

          {/* Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mt-24"
          >

            <div
              className="
                bg-white/10
                backdrop-blur-lg
                border border-white/20
                rounded-3xl
                p-8
                text-white
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <h2 className="text-5xl font-bold text-[#FF7A00]">
                17+
              </h2>

              <p className="mt-4 text-lg">
                Years Experience
              </p>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-lg
                border border-white/20
                rounded-3xl
                p-8
                text-white
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <h2 className="text-5xl font-bold text-[#FF7A00]">
                500+
              </h2>

              <p className="mt-4 text-lg">
                Projects Completed
              </p>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-lg
                border border-white/20
                rounded-3xl
                p-8
                text-white
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <h2 className="text-5xl font-bold text-[#FF7A00]">
                24/7
              </h2>

              <p className="mt-4 text-lg">
                Customer Support
              </p>
            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
}