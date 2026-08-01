// src/components/Services.jsx
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

const card = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services({ services }) {
  return (
    <section
      id="services"
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
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Services{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              I Offer
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Helping startups and businesses build fast, scalable, and modern
            digital products.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={card}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative rounded-2xl border border-white/10 
              bg-white/[0.04] backdrop-blur-xl p-7 overflow-hidden
              hover:border-yellow-400/40 transition-all duration-300 shadow-xl"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/10 blur-2xl" />

              {/* Icon (optional) */}
              {s.icon && (
                <div className="mb-5 h-12 w-12 flex items-center justify-center 
                rounded-xl bg-white/5 border border-white/10 text-xl">
                  {s.icon}
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <p className="font-bold text-lg group-hover:text-yellow-300 transition">
                  {s.title}
                </p>

                <p className="text-gray-400 mt-3 leading-relaxed group-hover:text-gray-300 transition">
                  {s.desc}
                </p>
              </div>

              {/* Bottom subtle CTA */}
              <div className="mt-6 text-sm text-gray-400 group-hover:text-yellow-300 transition">
                Learn more →
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-yellow-400/20 transition" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}