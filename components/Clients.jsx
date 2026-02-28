// src/components/Clients.jsx
export default function Clients({ clients }) {
  return (
    <section id="clients" className="py-24 bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
          Client <span className="text-yellow-400">Work</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/70 to-gray-950/70 p-8 hover:border-yellow-400/30 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-bold">{c.name}</p>
                  <p className="text-gray-400">{c.type}</p>
                </div>

                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 font-semibold"
                  >
                    Live →
                  </a>
                )}
              </div>

              <p className="mt-4 text-gray-300">{c.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {c.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.03]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2 text-gray-400">
                {c.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}