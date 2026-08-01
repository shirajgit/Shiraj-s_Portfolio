// src/components/motion-kit.jsx
// Reusable animation components — import what you need anywhere.
"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

/* ─────────────────────────────────────────────
   1) ScrollProgress — thin gradient bar at top.
   Add <ScrollProgress /> once in layout.js or page.js
───────────────────────────────────────────── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]
      bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300"
    />
  );
}

/* ─────────────────────────────────────────────
   2) Magnetic — buttons subtly follow the cursor.
   Wrap your CTAs: <Magnetic><a ...>View Projects</a></Magnetic>
───────────────────────────────────────────── */
export function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    if (ref.current)
      ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block transition-transform duration-300 ease-out will-change-transform"
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   3) RevealText — words slide up one by one.
   Use for your hero heading:
   <RevealText text="Hi, I'm Shiraj Mujawar" className="text-5xl font-extrabold" />
───────────────────────────────────────────── */
export function RevealText({ text, className = "", delay = 0 }) {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap justify-center gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: delay + i * 0.08,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ─────────────────────────────────────────────
   4) TiltCard — 3D tilt following the cursor.
   Wrap any card: <TiltCard className="rounded-2xl ...">...</TiltCard>
───────────────────────────────────────────── */
export function TiltCard({ children, className = "", max = 8 }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(800px) rotateY(${(px - 0.5) * max * 2}deg) rotateX(${(0.5 - py) * max * 2}deg)`;
  };

  const reset = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   5) Marquee — infinite scrolling strip of skills/logos.
   <Marquee items={["MERN", "Next.js", "IoT", "DevOps"]} />
───────────────────────────────────────────── */
export function Marquee({ items, speed = 25 }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        className="flex gap-4 w-max"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="px-5 py-2 text-sm rounded-full border border-white/10
            bg-white/[0.04] text-gray-300 whitespace-nowrap
            hover:border-yellow-400/40 hover:text-yellow-300 transition"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}