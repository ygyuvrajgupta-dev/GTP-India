import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="shadow-xl p-10 rounded-2xl">
            <FaMapMarkerAlt className="text-4xl text-blue-900 mb-4" />

            <h3 className="font-bold text-2xl mb-4">
              Address
            </h3>

            <p>
              85/1-2 Block-9, Govind Nagar,
              Kanpur - 208006,
              Uttar Pradesh, India
            </p>
          </div>

          <div className="shadow-xl p-10 rounded-2xl">
            <FaPhoneAlt className="text-4xl text-blue-900 mb-4" />

            <h3 className="font-bold text-2xl mb-4">
              Phone
            </h3>

            <p>+91 7232922333</p>
            <p>+91 8052875755</p>
          </div>

          <div className="shadow-xl p-10 rounded-2xl">
            <FaEnvelope className="text-4xl text-blue-900 mb-4" />

            <h3 className="font-bold text-2xl mb-4">
              Email
            </h3>

            <p>gopalatharmopack@gmail.com</p>
          </div>

        </div>

      </div>

    </section>
  );
}