import { motion } from "framer-motion";

const products = [
  {
    title: "Cold Storage Plant",
    image: "/products/cold-storage.jpg",
  },
  {
    title: "Ammonia Compressor",
    image: "/products/ammonia-compressor.jpg",
  },
  {
    title: "Bitzer Compressor",
    image: "/products/bitzer.jpg",
  },
  {
    title: "Water Cooled Compressor",
    image: "/products/water-cooled.jpg",
  },
  {
    title: "Air Cooling Unit",
    image: "/products/air-cooling.jpg",
  },
  {
    title: "Cooling Tower",
    image: "/products/cooling-tower.jpg",
  },
  {
    title: "Thermocol Sheet",
    image: "/products/thermocol-sheet.jpg",
  },
  {
    title: "Electric Control Panel",
    image: "/products/control-panel.jpg",
  }
];

export default function Products() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
          Our Products
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {products.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >

              <img
                src={item.image}
                className="h-56 w-full object-cover"
                alt=""
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">
                  {item.title}
                </h3>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}