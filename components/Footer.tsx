// src/components/Footer.jsx
"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-black to-black text-gray-400 border-t border-white/10 overflow-hidden">
      
      {/* subtle glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 bg-yellow-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-yellow-400 tracking-tight">
              Shiraj<span className="text-white/30">.</span>
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              MERN Stack Developer building product-ready web & mobile
              applications with clean UI and scalable backend systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-yellow-400 transition"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>

            <div className="flex justify-center md:justify-start gap-6 mb-6">
              <a
                href="https://github.com/shirajgit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shiraj-mujawar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://instagram.com/mr_shiraj_mujawar786"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Instagram
              </a>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 text-black font-semibold px-5 py-2.5 hover:bg-yellow-300"
            >
              Let’s Build Something →
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px bg-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Shiraj Mujawar. All rights reserved.
          </p>

          <p className="text-gray-600">
            Built with Next.js + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}