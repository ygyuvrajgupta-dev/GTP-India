import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setVisible(window.scrollY > 300);
    });
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-24 right-6 bg-blue-900 text-white p-4 rounded-full shadow-xl"
      >
        <FaArrowUp />
      </button>
    )
  );
}