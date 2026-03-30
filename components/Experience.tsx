"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Founder",
    company: "Aishi Technologies",
    duration: "2025 – Present",
    highlight: true,
    points: [
      "Founded a product-focused digital company delivering scalable web solutions.",
      "Built and shipped business websites and internal tools for real clients.",
      "Led full lifecycle: design → development → deployment → client delivery.",
      "Focused on clean UI/UX, performance optimization, and conversion.",
      "Handled client communication and pricing strategy.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "OneRoot, Bengaluru",
    duration: "6 Months Internship",
    points: [
      "Developed full-stack apps using MERN stack.",
      "Built secure REST APIs with auth & RBAC.",
      "Integrated frontend with backend services.",
      "Optimized API performance.",
      "Used Git & GitHub for collaboration.",
    ],
  },
  {
    role: "Founding Engineer",
    company: "Dtrue",
    duration: "2025",
    points: [
      "Built core frontend & backend architecture.",
      "Designed scalable APIs and auth systems.",
      "Defined product roadmap with stakeholders.",
      "Handled deployment workflows.",
      "Made system-level architecture decisions.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    duration: "2024 – Present",
    points: [
      "Delivered custom web apps and landing pages.",
      "Built scalable MERN solutions.",
      "Handled full development lifecycle.",
      "Implemented auth systems.",
      "Managed client delivery.",
    ],
  },
  {
    role: "Hardware Designer Intern",
    company: "Sadom, Bengaluru",
    duration: "3 Months Internship",
    points: [
      "Built IoT prototypes using Arduino & ESP32.",
      "Integrated sensors & automation systems.",
      "Optimized power & reliability.",
      "Managed firmware versioning.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-black text-gray-200 overflow-hidden"
    >
      {/* 🌌 Background */}
      <div className="absolute -top-32 left-1/3 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      {/* 🔲 Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Career Path
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10 mb-14 group"
            >
              {/* LINE GLOW */}
              <div className="absolute left-[-1px] top-0 h-full w-[2px] bg-gradient-to-b from-yellow-400/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* DOT */}
              <div
                className={`absolute left-[-10px] top-2 w-5 h-5 rounded-full flex items-center justify-center 
                ${
                  exp.highlight
                    ? "bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.7)]"
                    : "bg-gray-900 border border-white/20"
                }`}
              >
                <FaBriefcase className="text-black text-[10px]" />
              </div>

              {/* CARD */}
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-2xl border border-white/10 
                bg-white/[0.04] backdrop-blur-xl p-7 shadow-xl 
                hover:border-yellow-400/40 transition"
              >
                {/* TOP */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl font-semibold group-hover:text-yellow-300 transition">
                    {exp.role}
                  </h3>

                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-yellow-400 mt-1 text-sm">
                  {exp.company}
                </p>

                {/* POINTS */}
                <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-yellow-400 mt-[2px]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm">
            Always building, always improving 🚀
          </p>
        </div>
      </div>
    </section>
  );
}