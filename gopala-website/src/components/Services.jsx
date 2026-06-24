export default function Services() {
  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="shadow-lg rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              Cold Storage Installation
            </h3>

            <p className="text-gray-600">
              Complete cold room installation solutions.
            </p>
          </div>

          <div className="shadow-lg rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              AMC Service
            </h3>

            <p className="text-gray-600">
              Annual maintenance contracts for cold storage plants.
            </p>
          </div>

          <div className="shadow-lg rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              Industrial Refrigeration
            </h3>

            <p className="text-gray-600">
              Advanced cooling and refrigeration systems.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}