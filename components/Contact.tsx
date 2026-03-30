"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const links = [
    {
      label: "Email Me",
      sub: "shirajmujawar03@gmail.com",
      href: "mailto:shirajmujawar03@gmail.com",
      icon: <FaEnvelope />,
      primary: true,
    },
    {
      label: "WhatsApp",
      sub: "+91 81053 69922",
      href: "https://wa.me/918105369922",
      icon: <FaWhatsapp />,
    },
    {
      label: "Call",
      sub: "+91 81053 69922",
      href: "tel:+918105369922",
      icon: <FaPhoneAlt />,
    },
    {
      label: "LinkedIn",
      sub: "Let’s connect",
      href: "https://www.linkedin.com/in/shiraj-mujawar",
      icon: <FaLinkedin />,
      external: true,
    },
    {
      label: "GitHub",
      sub: "View projects",
      href: "https://github.com/shirajgit",
      icon: <FaGithub />,
      external: true,
    },
    {
      label: "Instagram",
      sub: "@mr_shiraj_mujawar786",
      href: "https://instagram.com/mr_shiraj_mujawar786",
      icon: <FaInstagram />,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 bg-black text-gray-200 overflow-hidden"
    >
      {/* 🌌 Background */}
      <div className="absolute -top-32 left-1/3 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      {/* 🔲 Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Get in touch
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Let’s Work Together
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-xl mx-auto">
            Got an idea, project, or business? Let’s turn it into a clean,
            scalable product 🚀
          </p>
        </motion.div>

        {/* CONTACT GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid sm:grid-cols-2 gap-6"
        >
          {links.map((l) => (
            <motion.a
              key={l.label}
              variants={{item}}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl p-6 overflow-hidden transition
              ${
                l.primary
                  ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black"
                  : "bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:border-yellow-400/40"
              }`}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-400/10 to-transparent" />

              <div className="relative flex items-center gap-4">
                {/* ICON */}
                <div
                  className={`h-12 w-12 flex items-center justify-center rounded-xl text-lg
                  ${
                    l.primary
                      ? "bg-black/10"
                      : "bg-white/5 border border-white/10 group-hover:border-yellow-400/40"
                  }`}
                >
                  {l.icon}
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <p
                    className={`text-lg font-semibold ${
                      l.primary
                        ? ""
                        : "text-gray-200 group-hover:text-yellow-300"
                    }`}
                  >
                    {l.label}
                  </p>

                  <p
                    className={`text-sm ${
                      l.primary ? "text-black/70" : "text-gray-400"
                    }`}
                  >
                    {l.sub}
                  </p>
                </div>

                {/* ARROW */}
                <span
                  className={`text-xl transition ${
                    l.primary
                      ? "text-black/70"
                      : "text-gray-500 group-hover:text-yellow-300"
                  }`}
                >
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA FOOT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 text-sm">
            ⚡ Fast replies • Open for freelance • Let’s build something amazing
          </p>
        </motion.div>
      </div>
    </section>
  );
}