import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917232922333"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl text-white text-3xl"
    >
      <FaWhatsapp />
    </a>
  );
}