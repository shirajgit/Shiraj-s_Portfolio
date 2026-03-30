// src/components/Stats.jsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) return;

    const duration = 1200;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return <>{count}+</>;
}

export default function Stats({ stats }) {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-950 via-black to-black text-gray-200 overflow-hidden">
      
      {/* 🌌 Background Glow */}
      <div className="absolute -top-32 left-1/3 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            <span className="text-yellow-400">My</span> Stats
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative rounded-2xl border border-white/10 
              bg-white/[0.04] backdrop-blur-xl p-6 overflow-hidden
              hover:border-yellow-400/40 transition-all duration-300 shadow-xl"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/10 blur-2xl" />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-4xl font-extrabold text-yellow-400">
                  <Counter value={s.value} />
                </p>

                <p className="text-gray-400 mt-2 group-hover:text-yellow-200 transition">
                  {s.label}
                </p>
              </div>

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-yellow-400/20 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}