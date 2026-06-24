export default function Clients() {

  const clients = [
    "Britannia",
    "NTPC",
    "Indian Oil",
    "Parle",
    "Aditya Birla",
    "Indian Railways",
    "Hawkins",
    "Superhouse Group",
  ];

  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
          Trusted Clients
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white h-36 rounded-2xl shadow-lg flex items-center justify-center text-xl font-bold text-blue-900"
            >
              {client}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}