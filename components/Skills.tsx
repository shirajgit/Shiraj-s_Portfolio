"use client";

import { motion } from "framer-motion";

const BLOCKS = [
  {
    title: "Frontend Development",
    subtitle: "UI, performance, and component systems",
    icon: "⚡",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Expo",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "EJS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & MERN Stack",
    subtitle: "APIs, auth, and scalable data",
    icon: "🧩",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "Role-based Access",
      "Supabase",
      "Postman",
    ],
  },
  {
    title: "Tools & Embedded",
    subtitle: "Shipping, design, and hardware basics",
    icon: "🛠️",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Vercel",
      "Render",
      "Figma",
      "C",
      "C++",
      "Embedded Systems",
      "PCB Basics",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-black text-gray-200 overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      {/* 🔲 Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Tech Stack
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Skills & Tools
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Technologies I use to build fast, scalable, and production-ready applications.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {BLOCKS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl border border-white/10 
              bg-white/[0.04] backdrop-blur-xl p-7 shadow-2xl 
              overflow-hidden transition"
            >
              {/* ✨ Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-yellow-400/5 blur-2xl" />

              {/* 🔥 Top */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-yellow-300 transition">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {b.subtitle}
                  </p>
                </div>

                <div className="w-11 h-11 flex items-center justify-center rounded-xl 
                bg-white/[0.05] border border-white/10 text-xl 
                group-hover:scale-110 transition">
                  {b.icon}
                </div>
              </div>

              {/* 💡 Skills */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {b.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1.5 text-sm rounded-full 
                    bg-white/[0.05] border border-white/10 
                    hover:border-yellow-400/40 hover:text-yellow-300 
                    transition cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* 📊 Progress Bar Fake (premium feel) */}
              <div className="mt-6">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-400"
                  />
                </div>
              </div>

              {/* 🧠 Footer */}
              <p className="mt-4 text-xs text-gray-500">
                Used in real-world projects & client work.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}