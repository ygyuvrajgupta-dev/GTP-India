import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Products",
    "Services",
    "Clients",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#071A52] shadow-2xl">

      {/* Top Bar */}
      <div className="bg-[#0B3B8C] text-white text-sm py-2 px-6 hidden lg:flex justify-between">
        <span>📞 +91 7232922333 | +91 8052875755</span>
        <span>✉️ gopalatharmopack@gmail.com</span>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-white">
            Gopala Thermopacks
          </h1>

          <p className="text-gray-300 text-sm">
            India Pvt. Ltd.
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium text-white">

          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#FF7A00] transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#071A52] shadow-lg px-6 pb-6">

          <div className="flex flex-col gap-5 text-lg text-white">

            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-[#FF7A00] transition duration-300"
              >
                {item}
              </a>
            ))}

          </div>

        </div>
      )}
    </header>
  );
}