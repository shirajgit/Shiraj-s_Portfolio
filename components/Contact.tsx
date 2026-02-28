// src/components/Contact.jsx
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Contact() {
  const links = [
    {
      label: "Email Me",
      sub: "shirajmujawar03@gmail.com",
      href: "mailto:shirajmujawar03@gmail.com",
      icon: "✉️",
      primary: true,
    },
      {
      label: "WhatsApp Me",
      sub: "+91 81053 69922",
      href: "https://wa.me/918105369922",
      icon: "💬",
 
    },
    {
      label: "Call Me",
      sub: "+91 81053 69922",
      href: "tel:+918105369922",
      icon: "📞",
    },
    {
      label: "LinkedIn",
      sub: "Connect professionally",
      href: "https://www.linkedin.com/in/shiraj-mujawar",
      icon: "💼",
      external: true,
    },
    {
      label: "GitHub",
      sub: "See my projects",
      href: "https://github.com/shirajgit",
      icon: "🐙",
      external: true,
    },
    {
      label: "Instagram",
      sub: "@mr_shiraj_mujawar786",
      href: "https://instagram.com/mr_shiraj_mujawar786",
      icon: "📸",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-gray-950 text-gray-200 overflow-hidden"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute -top-24 left-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Let’s talk
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            <span className="text-yellow-400">Contact</span> Me
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or need a reliable{" "}
            <span className="text-gray-200 font-semibold">
              Full-Stack Developer
            </span>
            ? Let’s build something clean, fast, and scalable.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          variants={{container}}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={{item}}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/70 to-gray-950/70 p-10 shadow-xl overflow-hidden"
          >
            {/* inner glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-yellow-400/10 blur-3xl" />

            {/* Buttons */}
            <div className="grid sm:grid-cols-2 gap-5">
              {links.map((l) => (
                <motion.a
                  key={l.label}
                  variants={{item}}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noreferrer" : undefined}
                  className={
                    l.primary
                      ? "group rounded-2xl bg-yellow-400 text-black border border-yellow-300/30 p-5 hover:bg-yellow-300 transition"
                      : "group rounded-2xl bg-white/[0.03] border border-white/10 p-5 hover:border-yellow-400/30 hover:bg-white/[0.05] transition"
                  }
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={
                        l.primary
                          ? "h-11 w-11 rounded-xl bg-black/10 flex items-center justify-center text-xl"
                          : "h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl"
                      }
                    >
                      {l.icon}
                    </div>

                    <div className="flex-1">
                      <p
                        className={
                          l.primary
                            ? "font-bold text-lg"
                            : "font-semibold text-lg text-gray-200 group-hover:text-yellow-200 transition"
                        }
                      >
                        {l.label}
                      </p>
                      <p
                        className={
                          l.primary
                            ? "text-sm text-black/70"
                            : "text-sm text-gray-400"
                        }
                      >
                        {l.sub}
                      </p>
                    </div>

                    <span
                      className={
                        l.primary
                          ? "text-black/60 font-semibold"
                          : "text-gray-500 group-hover:text-yellow-300 transition font-semibold"
                      }
                    >
                      →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Bottom Note */}
            <motion.div variants={{item}} className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                Prefer WhatsApp? Ping me on call number — I reply fast ⚡
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}