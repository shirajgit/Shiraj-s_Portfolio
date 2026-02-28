// src/components/Skills.jsx
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

const container = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black text-gray-200 overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute -top-24 left-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            What I use
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            <span className="text-yellow-400">Technical</span> Skills
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A focused stack for building product-ready web apps — clean UI,
            solid backend, and smooth deployment.
          </p>
        </motion.div>

        <motion.div
          variants={{container}}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-3 gap-10"
        >
          {BLOCKS.map((b) => (
            <motion.div
              key={b.title}
              variants={{card}}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/70 to-gray-950/70 p-7 shadow-xl overflow-hidden"
            >
              {/* card glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-yellow-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-yellow-300 transition">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{b.subtitle}</p>
                </div>

                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                  {b.icon}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {b.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/[0.04] border border-white/10 text-gray-200 hover:border-yellow-400/40 hover:text-yellow-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="mt-6 h-[1px] w-full bg-white/10" />

              <p className="mt-4 text-sm text-gray-400">
                {/* small footer line for polish */}
                Building blocks I use frequently in real projects.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}