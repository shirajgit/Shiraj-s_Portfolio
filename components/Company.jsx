// src/components/Company.jsx
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Company({ company }) {
  return (
    <section
      id="company"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black text-gray-200 overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            About Company
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {company.name}
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Left - Info */}
          <motion.div
            variants={item}
            className="group relative rounded-2xl border border-white/10 
            bg-white/[0.04] backdrop-blur-xl p-8 overflow-hidden shadow-xl"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/10 blur-2xl" />

            <p className="text-2xl font-semibold leading-snug group-hover:text-yellow-300 transition">
              {company.tagline}
            </p>

            <ul className="mt-6 space-y-4 text-gray-300">
              {company.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 group/item hover:translate-x-1 transition"
                >
                  <span className="text-yellow-400 mt-[2px]">✓</span>
                  <span className="group-hover/item:text-gray-200 transition">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center justify-center rounded-xl 
              bg-yellow-400 text-black font-semibold px-6 py-3 
              hover:bg-yellow-300 transition shadow-lg"
            >
              Build your product →
            </motion.a>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-yellow-400/20 transition" />
          </motion.div>

          {/* Right - Process */}
          <motion.div
            variants={item}
            className="relative rounded-2xl border border-white/10 
            bg-gradient-to-br from-gray-900/70 to-gray-950/70 p-8 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-8">
              My Process
            </h3>

            <div className="relative space-y-8">
              {/* vertical line */}
              <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-yellow-400/20" />

              {company.process.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-10"
                >
                  {/* dot */}
                  <div className="absolute left-0 top-2 h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold text-black">
                    {i + 1}
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:border-yellow-400/30 transition">
                    <p className="font-semibold text-gray-200">
                      {step.title}
                    </p>
                    <p className="text-gray-400 mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}