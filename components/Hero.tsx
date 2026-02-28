// src/components/Hero.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-purple-500/10 rounded-full blur-3xl" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-300"
        >
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          Product mindset • MERN • Next.js • App Dev
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mt-10 flex justify-center"
        >
        <div className="relative w-36 h-36 md:w-52 md:h-52">
  {/* Outer Glow */}
  <div className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl opacity-30 animate-pulse" />

  {/* Rotating Gradient Ring */}
  <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-yellow-400 via-purple-500 to-yellow-400 animate-spin-slow">
    <div className="w-full h-full rounded-full bg-black" />
  </div>

  {/* Image */}
  <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
    <Image
      src="/profile.jpeg"
      alt="Shiraj Mujawar"
      fill
      priority
      className="object-cover rounded-full"
      sizes="(max-width: 768px) 144px, 208px"
    />  
  </div>
</div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.16 }}
          className="mt-7 text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I’m <span className="text-yellow-400">Shiraj Mujawar</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.24 }}
          className="mt-5 text-xl md:text-2xl text-gray-300 font-semibold"
        >
          <span className="text-yellow-400">Building products</span>, not just
          projects — one clean feature at a time.
        </motion.p>

        {/* Tech line */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.32 }}
          className="mt-6 text-base md:text-xl text-gray-400"
        >
          MERN Stack • App Dev • Next.js • Node.js • MongoDB • DevOps Basics • IoT
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-300"
          >
            🚀 View Projects
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download="Shiraj_Mujawar_Resume.pdf"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/[0.02]
                       px-8 py-3 rounded-2xl text-gray-200 hover:border-yellow-400/50 hover:text-yellow-300 transition"
          >
            📄 Download Resume
          </motion.a>
        </motion.div>

        {/* Quick highlights */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.48 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            "Clean UI/UX",
            "Scalable APIs",
            "Auth & RBAC",
            "Deployment Ready",
            "Client Work",
          ].map((t) => (
            <span
              key={t}
              className="px-4 py-1.5 text-sm rounded-full border border-white/10 bg-white/[0.03] text-gray-300 hover:border-yellow-400/30 hover:text-yellow-200 transition"
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 text-sm text-gray-500"
        >
          <span className="inline-block animate-bounce">↓</span> Scroll to explore
        </motion.p>
      </div>
    </section>
  );
}