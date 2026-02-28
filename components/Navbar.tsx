"use client";

// src/components/Navbar.jsx
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  const links = [
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => document.getElementById(l.id));

      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#top"
          className="font-extrabold text-2xl text-yellow-400 tracking-tight hover:text-yellow-300 transition"
          onClick={() => setOpen(false)}
        >
          Shiraj<span className="text-white/30">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative transition-colors duration-200 ${
                active === l.id
                  ? "text-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              {l.label}

              {/* Active underline */}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-yellow-400 transition-all duration-300 ${
                  active === l.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-200 hover:text-yellow-400 hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-black/85 backdrop-blur-md border-t border-white/10`}
      >
        <div className="flex flex-col items-center gap-4 py-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`transition-colors duration-200 ${
                active === l.id
                  ? "text-yellow-400"
                  : "text-gray-200 hover:text-yellow-400"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="md:hidden fixed inset-0 top-[72px] bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}