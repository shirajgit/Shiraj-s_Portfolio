// src/components/Stats.jsx
"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { TiltCard } from "./motion-kit";

/* 🔢 Counter that only runs when scrolled into view, with spring easing */
function Counter({ value, suffix = "+" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (inView) motionVal.set(parseInt(value) || 0);
  }, [inView, value, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.floor(v) + suffix;
    });
    return () => unsub();
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
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
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              My
            </span>{" "}
            Stats
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TiltCard
                max={10}
                className="group relative rounded-2xl border border-white/10
                bg-white/[0.04] backdrop-blur-xl p-6 overflow-hidden h-full
                hover:border-yellow-400/40 shadow-xl [transform-style:preserve-3d]"
              >
                {/* ✨ Shimmer sweep on hover */}
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                  transition-transform duration-1000 ease-out
                  bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"
                />

                {/* content lifted off the card in 3D space */}
                <div className="relative z-10 [transform:translateZ(40px)]">
                  <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent tabular-nums">
                    <Counter value={s.value} />
                  </p>
                  <p className="text-gray-400 mt-2 group-hover:text-yellow-200 transition">
                    {s.label}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/5 blur-xl rounded-full group-hover:bg-yellow-400/15 transition" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-yellow-400/20 transition" />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}