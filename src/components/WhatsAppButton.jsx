import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917232922333?text=Hello%20Gopala%20Thermopacks,%20I%20need%20information%20about%20Cold%20Storage%20Solutions."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip label */}
      <motion.span
        initial={{ opacity: 0, x: 10, width: 0 }}
        whileHover={{ opacity: 1, x: 0, width: "auto" }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden bg-white text-green-600 font-bold text-sm px-4 py-3 rounded-l-xl shadow-xl border border-green-100 whitespace-nowrap"
      >
        Chat with us
      </motion.span>

      {/* Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(34,197,94,0.5)",
            "0 0 0 16px rgba(34,197,94,0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl transition-colors duration-300"
      >
        <FaWhatsapp />
      </motion.div>
    </motion.a>
  );
}
