// src/components/Services.jsx
export default function Services({ services }) {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-950 text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
          Services <span className="text-yellow-400">I Offer</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-yellow-400/30 transition"
            >
              <p className="font-bold text-lg">{s.title}</p>
              <p className="text-gray-400 mt-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}