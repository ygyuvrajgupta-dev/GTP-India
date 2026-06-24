import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            About Us
          </h2>

          <p className="text-gray-600 leading-8">
            Established in 2007, Gopala Thermopacks India Pvt. Ltd.
            specializes in industrial refrigeration systems,
            food cold storage plants, evaporative condensers,
            fruit ripening chambers and cooling solutions.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">

            <div className="shadow-lg p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-blue-900">
                17+
              </h3>
              <p>Years Experience</p>
            </div>

            <div className="shadow-lg p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-blue-900">
                500+
              </h3>
              <p>Projects</p>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1565610222536-ef125c59da2"
            alt=""
            className="rounded-3xl shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}