// src/components/Experience.jsx
"use client";

import { motion } from "framer-motion";

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
      "Focused on clean UI/UX, performance optimization, and conversion-oriented layouts.",
      "Handled client communication, requirement gathering, and pricing strategy.",
    ],
  },
  {
    role: "Founding Engineer",
    company: "Dtrue",
    duration: "2025",
    points: [
      "Built core frontend and backend architecture from scratch.",
      "Designed scalable REST APIs and integrated authentication systems.",
      "Worked closely with stakeholders to define product roadmap.",
      "Implemented production-ready deployment workflows.",
      "Contributed to technical decisions and system design planning.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "OneRoot, Bengaluru",
    duration: "6 Months Internship",
    points: [
      "Developed full-stack applications using React, Node, Express, MongoDB.",
      "Built secure REST APIs with authentication and role-based access control.",
      "Integrated frontend UI with backend services.",
      "Optimized API performance and improved response times.",
      "Collaborated using Git & GitHub for version control and reviews.",
    ],
  },
  {
    role: "Hardware Designer Intern",
    company: "Sadom, Bengaluru",
    duration: "3 Months Internship",
    points: [
      "Designed IoT prototypes using Arduino and ESP32.",
      "Integrated sensors and actuators for automation systems.",
      "Optimized power consumption and device communication reliability.",
      "Managed firmware and hardware versioning using Git.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black text-gray-200 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            <span className="text-yellow-400">Work</span> Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-yellow-400/20 ml-4 md:ml-10 space-y-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8"
            >
              {/* timeline dot */}
              <div
                className={`absolute -left-[11px] top-2 h-5 w-5 rounded-full border-4 ${
                  exp.highlight
                    ? "bg-yellow-400 border-yellow-400"
                    : "bg-gray-900 border-yellow-400/40"
                }`}
              />

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/70 to-gray-950/70 p-8 shadow-xl">
                <h3 className="text-2xl font-semibold">{exp.role}</h3>

                <p className="text-yellow-400 mt-1">{exp.company}</p>

                <p className="text-sm text-gray-400 mt-1 mb-5">
                  {exp.duration}
                </p>

                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}