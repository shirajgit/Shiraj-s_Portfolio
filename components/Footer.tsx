"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/shirajgit", label: "GitHub" },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/shiraj-mujawar",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com/mr_shiraj_mujawar786",
    label: "Instagram",
  },
];

const explore = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      {/* 🌌 Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      {/* 🔲 Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black,transparent)]" />

      {/* Top hairline */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">
        {/* ═══════ CTA BAND ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-3xl border border-white/10 bg-white/[0.04]
          backdrop-blur-xl p-8 md:p-12 shadow-2xl overflow-hidden"
        >
          {/* hover glow */}
          <div className="absolute -top-24 -right-16 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition duration-700" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-yellow-300/90">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
                </span>
                Available for work
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                Let’s build &amp; ship{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  something real.
                </span>
              </h2>

              <p className="mt-4 text-gray-400">
                Full-stack development, product building, Shopify, automation &amp;
                integrations — from idea to production.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group/btn inline-flex items-center justify-center gap-2 rounded-2xl
                bg-yellow-400 text-black font-semibold px-7 py-3.5
                shadow-[0_0_30px_rgba(250,204,21,0.25)] hover:bg-yellow-300
                hover:shadow-[0_0_45px_rgba(250,204,21,0.4)] transition"
              >
                Start a project
                <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="mailto:shirajmujawar03@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl
                border border-white/15 px-7 py-3.5 text-gray-200
                hover:border-yellow-400/40 hover:text-yellow-300 backdrop-blur-md transition"
              >
                <FaEnvelope /> Email me
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* ═══════ MAIN GRID ═══════ */}
        <div className="mt-16 grid gap-12 md:grid-cols-[1.6fr_1fr_1fr] text-center md:text-left">
          {/* BRAND */}
          <div>
            <a
              href="#top"
              className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            >
              Shiraj<span className="text-white/30">.</span>
            </a>

            <p className="mt-4 text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Full-Stack Engineer &amp; Product Builder — building and shipping
              real products across web, e-commerce, automation, and IoT.
            </p>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
              {["MERN", "Next.js", "Shopify", "APIs", "IoT"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-[0.15em]">
              Explore
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              {explore.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="group w-fit mx-auto md:mx-0 text-gray-400 hover:text-yellow-400 transition"
                >
                  {link}
                  <span className="block h-[1px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-[0.15em]">
              Connect
            </h4>

            <div className="flex justify-center md:justify-start gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-11 w-11 flex items-center justify-center rounded-xl text-lg
                  bg-white/[0.05] border border-white/10 text-gray-300
                  hover:text-yellow-300 hover:border-yellow-400/40 transition"
                >
                  <span aria-hidden="true">{s.icon}</span>
                </motion.a>
              ))}
            </div>

            <a
              href="https://aishitech.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-300 transition"
            >
              Aishi Technologies ↗
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-white/10" />

        {/* ═══════ BOTTOM BAR ═══════ */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Shiraj Mujawar. All rights reserved.</p>

          <p className="text-gray-500">
            Built with{" "}
            <span className="text-gray-400">Next.js · Tailwind · Framer Motion</span>
          </p>

          <motion.a
            href="#top"
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03]
            px-4 py-2 text-gray-400 hover:text-yellow-400 hover:border-yellow-400/40 transition"
          >
            Back to top <FaArrowUp />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
