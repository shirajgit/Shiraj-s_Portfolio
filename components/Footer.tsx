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
    <footer className="relative text-gray-400 overflow-hidden">
      
      {/* subtle glow only (no heavy bg box) */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Shiraj<span className="text-white/30">.</span>
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Building modern web & mobile apps with clean UI, scalable backend,
              and real-world impact.
            </p>

            {/* status */}
            <p className="mt-3 text-sm text-yellow-400">
              ● Available for freelance
            </p>
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
                    className="group w-fit mx-auto md:mx-0 text-gray-400 hover:text-yellow-400 transition"
                  >
                    {link}
                    <span className="block h-[1px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-5">Connect</h4>

            <div className="flex justify-center md:justify-start gap-4">
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
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl text-gray-400 hover:text-yellow-400 transition"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex mt-6 items-center justify-center gap-2 
              text-sm text-yellow-400 hover:text-yellow-300 transition"
            >
              Let’s Build Something →
            </motion.a>
          </div>
        </div>

        {/* Divider (very soft) */}
        <div className="mt-16 h-px bg-white/10" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">

          <p>
            © {new Date().getFullYear()} Shiraj Mujawar
          </p>

          {/* Scroll top */}
          <motion.a
            href="#top"
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            Back to top <FaArrowUp />
          </motion.a>

          <p className="text-gray-600">
            Next.js • Tailwind • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}