"use client";

import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Clients({ clients }) {
  return (
    <section
      id="clients"
      className="relative py-24 bg-black text-gray-200 overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute -top-32 left-1/3 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Client <span className="text-yellow-400">Work</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-white/10 
              bg-white/[0.04] backdrop-blur-xl p-8 overflow-hidden
              hover:border-yellow-400/40 transition-all duration-300 shadow-xl"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/5 blur-2xl" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-bold group-hover:text-yellow-300 transition">
                    {c.name}
                  </p>
                  <p className="text-gray-400 text-sm">{c.type}</p>
                </div>

                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                  >
                    Live <FaArrowUpRightFromSquare size={12} />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-300 leading-relaxed">
                {c.desc}
              </p>

              {/* Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {c.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-white/[0.05] border border-white/10 
                    backdrop-blur-sm hover:border-yellow-400/30 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="mt-5 space-y-2 text-gray-400 text-sm">
                {c.highlights.map((h) => (
                  <li key={h} className="flex gap-2 items-start">
                    <span className="text-yellow-400 mt-[2px]">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom subtle CTA */}
              <div className="mt-6 text-sm text-gray-500 group-hover:text-yellow-300 transition">
                View project details →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}