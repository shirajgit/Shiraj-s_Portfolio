// src/components/Skills.jsx
export default function Skills() {
  return (
  <section
  id="skills"
  className="py-24 bg-gradient-to-b from-black via-gray-950 to-black text-gray-200"
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
      <span className="text-yellow-400">Technical</span> Skills
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      {/* Frontend */}
      <div className="group bg-gradient-to-br from-gray-900 to-gray-950 p-7 rounded-2xl border border-gray-800 hover:border-yellow-400/60 transition shadow-lg">
        <h3 className="text-xl font-semibold mb-5 group-hover:text-yellow-400 transition">
          Frontend Development
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "HTML5",
            "Typescript",
            "ejs",
            "JavaScript (ES6+)",
            "React.js",
            "Next.js",
            "Shadcn",
            "Tailwind CSS",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-gray-700
                         hover:border-yellow-400/50 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Backend / MERN */}
      <div className="group bg-gradient-to-br from-gray-900 to-gray-950 p-7 rounded-2xl border border-gray-800 hover:border-yellow-400/60 transition shadow-lg">
        <h3 className="text-xl font-semibold mb-5 group-hover:text-yellow-400 transition">
          Backend & MERN Stack
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Authentication",
            "PuterJs",
            "Supbase",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-gray-700
                         hover:border-yellow-400/50 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Embedded */}
      <div className="group bg-gradient-to-br from-gray-900 to-gray-950 p-7 rounded-2xl border border-gray-800 hover:border-yellow-400/60 transition shadow-lg">
        <h3 className="text-xl font-semibold mb-5 group-hover:text-yellow-400 transition">
          Tools & Embedded
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Git & GitHub",
            "VS Code",
            "Vercel",
            "Figma",
            "PCB",
            "Embedded Systems",
            "C",
            "C++",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-gray-700
                         hover:border-yellow-400/50 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

  );
}
