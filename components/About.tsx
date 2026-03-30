// src/components/About.jsx
"use client";

import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaMobileAlt,
  FaBuilding,
  FaHandshake,
  FaReact,
  FaBrain,
  FaMapMarkerAlt,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black text-gray-200 overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Who I am
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-14"
        >
          {/* LEFT */}
          <motion.div variants={item} className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 shadow-xl">
              
              <p className="text-lg leading-relaxed">
                I’m{" "}
                <span className="text-yellow-400 font-semibold">
                  Shiraj Mujawar
                </span>
                , a <span className="font-semibold">Full-Stack Developer</span>{" "}
                focused on building{" "}
                <span className="text-gray-100">
                  real-world, production-ready products
                </span>
                .
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed">
                I’ve worked on scalable web applications using{" "}
                <span className="text-gray-100">
                  React, Next.js, Node, and MongoDB
                </span>{" "}
                — building clean UI, secure APIs, and performance-driven systems.
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed">
                I also bring experience in{" "}
                <span className="text-yellow-300 font-semibold">
                  Embedded Systems & IoT
                </span>
                , which helps me think beyond just code — focusing on reliability,
                performance, and real-world impact.
              </p>
            </div>

            {/* Strength Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { k: "Focus", v: "Product mindset" },
                { k: "Strength", v: "Frontend + Backend" },
                { k: "Approach", v: "Clean & scalable" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur p-4 text-center hover:border-yellow-400/30 transition"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                    {x.k}
                  </p>
                  <p className="mt-1 font-semibold">{x.v}</p>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "MERN Stack",
                "Next.js",
                "DevOps",
                "IoT",
                "REST APIs",
                "Auth Systems",
              ].map((b) => (
                <motion.span
                  key={b}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="px-4 py-1.5 text-sm rounded-full bg-white/[0.05] border border-white/10 hover:border-yellow-400/40 hover:text-yellow-300 transition"
                >
                  {b}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={item}>
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 shadow-xl">

              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-yellow-400">
                  Quick Info
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-400/20">
                  Open to work
                </span>
              </div>

              <ul className="space-y-5">
                {[
                  { icon: <FaUserGraduate />, text: "Diploma (2026)" },
                  { icon: <FaLaptopCode />, text: "Full-Stack Developer" },
                  { icon: <FaMobileAlt />, text: "App Development" },
                  { icon: <FaBuilding />, text: "Startup Projects" },
                  { icon: <FaHandshake />, text: "Freelance Work" },
                  { icon: <FaReact />, text: "React • Next • Node" },
                  { icon: <FaBrain />, text: "IoT & Embedded" },
                  { icon: <FaMapMarkerAlt />, text: "India" },
                ].map((row) => (
                  <li
                    key={row.text}
                    className="flex items-center gap-4 hover:translate-x-1 transition"
                  >
                    <span className="text-yellow-400 text-lg">
                      {row.icon}
                    </span>
                    <span className="text-gray-300">{row.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl 
                bg-yellow-400 text-black font-semibold py-3 hover:bg-yellow-300 transition"
              >
                Let’s build something →
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}