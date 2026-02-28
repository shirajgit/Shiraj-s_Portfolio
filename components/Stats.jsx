 // src/components/Stats.jsx
export default function Stats({ stats }) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-950 to-black text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-yellow-400/30 transition"
            >
              <p className="text-3xl font-extrabold text-yellow-400">
                {s.value}
              </p>
              <p className="text-gray-400 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}