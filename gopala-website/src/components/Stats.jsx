export default function Stats() {
  const stats = [
    {
      number: "17+",
      title: "Years Experience",
    },
    {
      number: "500+",
      title: "Projects Completed",
    },
    {
      number: "100+",
      title: "Industrial Clients",
    },
    {
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-br from-[#071A52] via-[#0B3B8C] to-[#071A52] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-[#FF7A00] font-semibold">
            Our Achievements
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Numbers That Reflect Our Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-lg
                border border-white/20
                rounded-3xl
                p-10
                shadow-2xl
                text-center
                hover:bg-white/15
                transition-all
                duration-300
              "
            >
              <h2 className="text-5xl font-bold text-[#FF7A00]">
                {item.number}
              </h2>

              <p className="mt-5 text-lg text-gray-200">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
