import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917232922333?text=Hello%20Gopala%20Thermopacks,%20I%20need%20information%20about%20Cold%20Storage%20Solutions."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        w-16
        h-16
        rounded-full
        shadow-2xl
        flex
        items-center
        justify-center
        text-3xl
        transition-all
        duration-300
      "
    >
      <FaWhatsapp />
    </motion.a>
  );
}