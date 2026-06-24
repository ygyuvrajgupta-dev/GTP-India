import { motion } from "framer-motion";

export default function Products() {
  const products = [
    "Cold Storage Plant",
    "Ammonia Compressor",
    "Bitzer Compressor",
    "Water Cooled Compressor",
    "Air Cooling Unit",
    "Cooling Tower",
    "Thermocol Sheet",
    "Electric Control Panel",
    "Fruit Ripening Chamber",
    "Industrial Refrigeration System",
    "Evaporative Condenser",
    "Vegetable Cold Storage",
  ];

  return (
    <section id="products" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-[#FF7A00] font-semibold"
          >
            Our Products
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-[#0B3B8C] mt-4"
          >
            Industrial Cooling Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg"
          >
            High-quality refrigeration equipment designed for
            reliability, efficiency, and long service life.
          </motion.p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {products.map((product, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-2xl
                hover:shadow-2xl
                transition-all
                duration-300
                border border-gray-100
              "
            >

              {/* Image Placeholder */}
              <div className="h-56 bg-gradient-to-br from-[#071A52] to-[#0B3B8C] flex items-center justify-center relative overflow-hidden">

                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>

                <div className="text-center relative z-10">

                  <h3 className="text-2xl font-bold text-white">
                    IMAGE
                  </h3>

                  <p className="text-gray-200 mt-2">
                    Placeholder
                  </p>

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-[#0B3B8C]">
                  {product}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Premium industrial cooling equipment with
                  high efficiency and durable construction.
                </p>

                <button className="mt-6 bg-[#FF7A00] text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl">
                  Learn More
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}