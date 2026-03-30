"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
  

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
    
   
      {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

      {/* ✨ Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />

      {/* 🔲 Grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* 🧊 Glass Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
          backdrop-blur-md bg-white/5 mt-21 border border-white/10 text-sm text-gray-300 shadow-lg"
        >
          <span className="w-2 h-2  bg-yellow-400 rounded-full animate-pulse" />
          Product mindset • MERN • Next.js • App Dev
        </motion.div>

        {/* 👤 Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <div className="relative w-40 h-40 md:w-56 md:h-56">

            {/* Glow */}
            <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-20 rounded-full animate-pulse" />

            {/* Gradient Ring */}
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-yellow-400 via-purple-500 to-yellow-400 animate-spin-slow">
              <div className="w-full h-full bg-black rounded-full" />
            </div>

            {/* Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
              <Image
                src="/profile.jpeg"
                alt="Shiraj Mujawar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* 🧠 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent animate-gradient">
            Shiraj Mujawar
          </span>
        </motion.h1>

        {/* 💡 Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-5 text-xl md:text-2xl text-gray-300"
        >
          <span className="text-yellow-400 font-semibold">
            Building real products
          </span>{" "}
          — not just projects.
        </motion.p>

        {/* ⚙️ Tech */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-gray-400"
        >
          MERN • Next.js • App Dev • DevOps • IoT
        </motion.p>

        {/* 🔥 CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-yellow-300"
          >
            View Projects <FaArrowRight />
          </motion.a>

          {/* Secondary */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 border border-white/20 px-8 py-3 rounded-2xl text-gray-300 hover:border-yellow-400 hover:text-yellow-300 backdrop-blur-md"
          >
            Download Resume <FaDownload />
          </motion.a>
        </motion.div>

        {/* 🏷 Highlights */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Clean UI", "Scalable APIs", "Auth", "Deployment", "Freelance"].map(
            (t) => (
              <span
                key={t}
                className="px-4 py-1.5 text-sm rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400/10 hover:text-yellow-300 transition"
              >
                {t}
              </span>
            )
          )}
        </div>

        {/* ⬇ Scroll */}
        <p className="mt-14 text-gray-500 text-sm animate-bounce">
          ↓ Scroll Down
        </p>
      </div>
    </section>
  );
}