"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 border-t border-white/10 overflow-hidden">
      
      {/* 🌌 Gradient Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-purple-500/10 blur-3xl" />

      {/* 🔲 Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Shiraj<span className="text-white/30">.</span>
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Building scalable web & mobile apps with clean UI,
              powerful backend, and real-world impact.
            </p>

            {/* Mini badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
              🚀 Available for freelance
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-5">Explore</h4>

            <div className="flex flex-col gap-3 text-sm">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="relative w-fit mx-auto md:mx-0 hover:text-yellow-400 transition"
                  >
                    {link}
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-yellow-400 transition-all duration-300 hover:w-full" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* SOCIAL + CTA */}
          <div>
            <h4 className="text-white font-semibold mb-5">Connect</h4>

            {/* Icons */}
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/shirajgit",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/shiraj-mujawar",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://instagram.com/mr_shiraj_mujawar786",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl 
                  bg-white/[0.05] border border-white/10 
                  hover:border-yellow-400/40 hover:text-yellow-300 
                  hover:scale-110 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 
              rounded-xl bg-yellow-400 text-black font-semibold 
              px-6 py-3 hover:bg-yellow-300 shadow-lg"
            >
              Let’s Build Something
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">

          <p>
            © {new Date().getFullYear()} Shiraj Mujawar. Crafted with ❤️
          </p>

          {/* Scroll to top */}
          <a
            href="#top"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            Back to top <FaArrowUp />
          </a>

          <p className="text-gray-600">
            Next.js • Tailwind • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}