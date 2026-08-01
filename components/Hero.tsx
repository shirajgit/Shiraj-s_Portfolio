// src/components/Hero.jsx — Split layout version
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { Magnetic } from "./motion-kit";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center bg-black text-white overflow-hidden"
    >
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

      {/* 🔦 Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-[background] duration-300"
        style={{
          background: `radial-gradient(700px circle at ${spot.x}% ${spot.y}%, rgba(250,204,21,0.06), transparent 60%)`,
        }}
      />

      {/* ✨ Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-3xl animate-float [animation-delay:2s]" />

      {/* 🔲 Grid, fading at edges */}
      <div
        className="absolute inset-0 opacity-[0.06]
        bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
        bg-[size:60px_60px]
        [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]"
      />

      {/* 📌 LEFT SOCIAL RAIL (desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden lg:flex flex-col items-center gap-5 absolute left-8 bottom-0 z-20"
      >
        {[
          { icon: <FaGithub />, href: "https://github.com/shirajgit" },
          { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shiraj-mujawar" },
          { icon: <FaEnvelope />, href: "mailto:shirajmujawar03@gmail.com" },
        ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-yellow-400 hover:-translate-y-1 transition text-lg"
          >
            {s.icon}
          </a>
        ))}
        {/* vertical line under icons */}
        <div className="w-[1px] h-24 bg-gradient-to-b from-yellow-400/50 to-transparent" />
      </motion.div>

      {/* ═══════════ MAIN GRID ═══════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center pt-28 pb-16 lg:py-0">

        {/* ◀️ LEFT — TEXT */}
        <motion.div variants={{container} }initial="hidden" animate="show" className="text-center lg:text-left">

          {/* Badge */}
          <motion.div
            variants={{fadeUp}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            backdrop-blur-md bg-white/5 border border-white/10 text-sm text-gray-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
            </span>
            Open to work • Freelance • Startups
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            variants={{fadeUp}}
            className="mt-8 text-sm uppercase tracking-[0.3em] text-gray-500"
          >
            Full-Stack Developer
          </motion.p>

          {/* HUGE headline, stacked */}
          <motion.h1
            variants={{fadeUp}} 
            className="mt-4 text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Shiraj
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent animate-gradient"
              >
                Mujawar
              </motion.span>
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={{fadeUp}} className="mt-6 text-lg md:text-xl text-gray-400 max-w-md mx-auto lg:mx-0">
            <span className="text-yellow-400 font-semibold">Building real products</span>{" "}
            — not just projects. MERN, Next.js, App Dev & IoT.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{fadeUp}}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <Magnetic>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 bg-yellow-400 text-black px-8 py-3
                rounded-2xl font-semibold shadow-[0_0_30px_rgba(250,204,21,0.25)]
                hover:bg-yellow-300 hover:shadow-[0_0_45px_rgba(250,204,21,0.4)] transition-shadow"
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Magnetic>

            <Magnetic>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/20 px-8 py-3 rounded-2xl
                text-gray-300 hover:border-yellow-400 hover:text-yellow-300 backdrop-blur-md transition-colors"
              >
                Resume <FaDownload />
              </motion.a>
            </Magnetic>
          </motion.div>

          {/* Inline mini-stats — structure, not decoration */}
          <motion.div
            variants={{fadeUp}}
            className="mt-12 flex gap-10 justify-center lg:justify-start"
          >
            {[
              { n: "10+", l: "Projects shipped" },
              { n: "5+", l: "Happy clients" },
              { n: "2+", l: "Years building" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <p className="text-2xl font-extrabold text-yellow-400">{s.n}</p>
                <p className="text-xs text-gray-500 mt-1">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ▶️ RIGHT — VISUAL */}
        <motion.div
          variants={{fadeRight}}
          initial="hidden"
          animate="show"
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-80 md:w-80 md:h-96">

            {/* Backing shape — rotated rounded square instead of circle */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-yellow-400/20 via-transparent to-purple-500/20 rotate-6" />
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 -rotate-3" />

            {/* Photo card */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/15
              rotate-2 transition-transform duration-500 shadow-2xl"
            >
              <Image
                src="/profile.jpeg"
                alt="Shiraj Mujawar"
                fill
                className="object-cover"
                priority
              />
              {/* bottom fade for text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="font-semibold">Shiraj Mujawar</p>
                <p className="text-xs text-gray-400">Founder • Aishi Technologies</p>
              </div>
            </motion.div>

            {/* 🪄 Floating card 1 — top left */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-10 flex items-center gap-2 px-4 py-2.5 rounded-2xl
              bg-white/[0.06] border border-white/10 backdrop-blur-xl shadow-xl text-sm"
            >
              <FaCode className="text-yellow-400" />
              <span>MERN • Next.js</span>
            </motion.div>

            {/* 🪄 Floating card 2 — bottom right */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -right-8 flex items-center gap-2 px-4 py-2.5 rounded-2xl
              bg-white/[0.06] border border-white/10 backdrop-blur-xl shadow-xl text-sm"
            >
              <FaRocket className="text-yellow-400" />
              <span>Shipping real products</span>
            </motion.div>

            {/* 🪄 Floating card 3 — right middle */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/3 -right-14 hidden md:flex items-center gap-2 px-4 py-2.5 rounded-2xl
              bg-yellow-400 text-black font-semibold shadow-[0_0_25px_rgba(250,204,21,0.35)] text-sm"
            >
              ⚡ IoT + Web
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ⬇ Scroll indicator — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-yellow-400"
          />
        </div>
      </motion.div>
    </section>
  );
}