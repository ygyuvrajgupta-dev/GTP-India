import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "17+", title: "Years Experience" },
    { number: "500+", title: "Projects Completed" },
    { number: "100+", title: "Industrial Clients" },
    { number: "24/7", title: "Support" },
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold">{item.number}</h2>
            <p className="mt-4">{item.title}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}