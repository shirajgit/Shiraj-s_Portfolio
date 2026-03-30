"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  // 🔥 Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      links.forEach((l) => {
        const section = document.getElementById(l.id);
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActive(l.id);
        }
      });

      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
      transition-all duration-300
      ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border border-white/10 shadow-lg"
          : "bg-white/5 backdrop-blur-md border border-white/10"
      }
      rounded-2xl px-6 py-3 w-[95%] max-w-5xl`}
    >
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#top"
          className="font-extrabold text-xl text-yellow-400"
          onClick={() => setOpen(false)}
        >
          Shiraj<span className="text-white/30">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2 relative">

          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition"
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-yellow-400/10 rounded-xl border border-yellow-400/20"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </a>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5"
        >
          <div className="space-y-1">
            <span
              className={`block h-[2px] w-5 bg-white transition ${
                open ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition ${
                open ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* 🔥 Mobile Fullscreen Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-xl"
        >
          {links.map((l) => (
            <motion.a
              key={l.id}
              href={l.href}
              onClick={() => setOpen(false)}
              whileHover={{ scale: 1.1 }}
              className={`${
                active === l.id ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              {l.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}