 // src/components/Company.jsx
export default function Company({ company }) {
  return (
    <section id="company" className="py-24 bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
          <span className="text-yellow-400">{company.name}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-2xl font-semibold leading-snug">
              {company.tagline}
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              {company.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-yellow-400 text-black font-semibold px-5 py-3 hover:bg-yellow-300 transition"
            >
              DM me to build your business →
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/70 to-gray-950/70 p-8">
            <h3 className="text-xl font-semibold text-yellow-400 mb-6">
              Process
            </h3>

            <div className="space-y-5">
              {company.process.map((step) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-gray-400 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}