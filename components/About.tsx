// src/components/About.jsx
"use client";

import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-950 to-black text-gray-200 overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Who I am
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            <span className="text-yellow-400">About</span> Me
          </h2>
        </motion.div>

        <motion.div
          variants={{container}}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-2 gap-14 items-start"
        >
          {/* Left Content */}
          <motion.div variants={{item}} className="space-y-6">
            <motion.div
              variants={{item}}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
            >
              <p className="text-lg leading-relaxed">
                I’m{" "}
                <span className="text-yellow-400 font-semibold">
                  Shiraj Mujawar
                </span>
                , a <span className="font-semibold">MERN Stack Developer</span>{" "}
                pursuing a diploma from{" "}
                <span className="font-semibold">
                  Government Polytechnic Vijayapura
                </span>
                .
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                I completed a{" "}
                <span className="font-semibold text-gray-100">
                  6-month internship at OneRoot, Bengaluru
                </span>
                , where I worked as a{" "}
                <span className="font-semibold">Full-Stack Developer</span>{" "}
                building scalable, production-ready web apps using{" "}
                <span className="text-gray-100">
                  React, Node, Express, and MongoDB
                </span>
                .
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                I’ve built REST APIs, integrated frontend with backend services,
                implemented authentication/authorization, and improved
                performance — focusing on clean, maintainable code and
                user-focused solutions.
              </p>
 

              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                Along with web development, I have a strong background in{" "}
                <span className="text-gray-100 font-semibold">
                  hardware & IoT / embedded engineering
                </span>
                . That helps me think in systems — performance, reliability, and
                real-world constraints.
              </p>

               
            </motion.div>

            {/* Added: strengths row */}
            <motion.div
              variants={{item}}
              className="grid sm:grid-cols-3 gap-3"
            >
              {[
                { k: "Focus", v: "Product mindset" },
                { k: "Strength", v: "UI + Backend" },
                { k: "Style", v: "Clean & scalable" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                    {x.k}
                  </p>
                  <p className="mt-1 font-semibold text-gray-200">{x.v}</p>
                </div>
              ))}
            </motion.div>

            {/* Badges */}
            <motion.div variants={{item}} className="flex flex-wrap gap-3 pt-2">
              {[
                "MERN Stack",
                "Full-Stack Dev ",
                "Next.js",
                "DevOps Basics",
                "Embedded / IoT",
                "UI/UX Focus",
                "REST APIs",
                "Auth & RBAC",
              ].map((b) => (
                <motion.span
                  key={b}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="px-4 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-gray-200 hover:border-yellow-400/40 hover:text-yellow-300"
                >
                  {b}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div variants={{item}}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-gray-900/70 to-gray-950/70 shadow-xl overflow-hidden"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-yellow-400/10 blur-3xl" />

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-yellow-400">
                  Quick Info
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-400/20">
                  Available for work
                </span>
              </div>

              <ul className="space-y-5 text-gray-300">
                {[
  {
    icon: "🎓",
    text: "Diploma Student",
    meta: "(Graduating 2026)",
  },
  { icon: "💻", text: "MERN Stack Developer", meta: "" },
  {
    icon: "📱",
    text: "App Development (React Native / Expo)",
    meta: "",
  },
  {
    icon: "🏢",
    text: "Building products for startups & companies",
    meta: "",
  },
  {
    icon: "🤝",
    text: "Client Projects & Freelance Work",
    meta: "",
  },
  {
    icon: "⚛️",
    text: "React • Next.js • Node • MongoDB",
    meta: "",
  },
  {
    icon: "🧠",
    text: "Embedded / IoT Engineering",
    meta: "",
  },
  { icon: "📍", text: "Vijayapura, India", meta: "" },
].map((row) => (
                  <motion.li
                    key={row.text}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-xl">{row.icon}</span>
                    <span>
                      {row.text}{" "}
                      {row.meta && (
                        <span className="text-sm text-gray-400">{row.meta}</span>
                      )}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Added: mini value statement */}
              <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  I build fast, modern web apps with a product mindset — clean
                  UI, scalable backend, and deployment-ready workflows.
                    Along with web development, I have a strong background in{" "}
                  <span className="text-yellow-300 font-semibold">
                    Embedded Systems & IoT
                  </span>
                  , which helps me think in systems — performance, reliability, and real-world constraints. 
                </p>
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 text-black font-semibold py-3 hover:bg-yellow-300"
              >
                Let’s work together →
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}