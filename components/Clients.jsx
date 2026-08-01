"use client";

import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Clients({ clients }) {
  return (
    <section
      id="clients"
      className="relative py-28 bg-black text-gray-200 overflow-hidden"
    >
      {/* 🌌 Background */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full" />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            Work
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Client Projects
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-xl mx-auto">
            Real businesses. Real results. Clean, scalable builds.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              className="group relative rounded-3xl overflow-hidden 
              border border-white/10 bg-white/[0.04] backdrop-blur-xl 
              p-8 shadow-2xl transition-all duration-300"
            >
              {/* Glow Layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent blur-2xl" />
              </div>

              {/* TOP */}
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-yellow-300 transition">
                    {c.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{c.type}</p>
                </div>

                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-yellow-400 text-sm font-medium hover:scale-105 transition"
                  >
                    Live <FaArrowUpRightFromSquare size={12} />
                  </a>
                )}
              </div>

              {/* DESCRIPTION */}
              <p className="relative mt-5 text-gray-300 leading-relaxed text-sm md:text-base">
                {c.desc}
              </p>

              {/* STACK */}
              <div className="mt-6 flex flex-wrap gap-2">
                {c.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-white/[0.05] border border-white/10 backdrop-blur
                    group-hover:border-yellow-400/40 group-hover:text-yellow-200 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* HIGHLIGHTS */}
              <ul className="mt-6 space-y-2 text-gray-400 text-sm">
                {c.highlights.map((h) => (
                  <li key={h} className="flex gap-2 items-start">
                    <span className="text-yellow-400 mt-[2px]">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* BOTTOM CTA */}
              <div className="mt-8 flex items-center justify-between text-sm">
                <span className="text-gray-400 group-hover:text-yellow-300 transition">
                  View details
                </span>

                <span className="text-yellow-400 group-hover:translate-x-1 transition">
                  →
                </span>
              </div>

              {/* HOVER BORDER GLOW */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute inset-0 rounded-3xl ring-1 ring-yellow-400/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm">
            🚀 Want your business here? Let’s build it.
          </p>
        </div>
      </div>
    </section>
  );
}