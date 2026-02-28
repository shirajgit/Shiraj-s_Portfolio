// src/components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const container = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black text-gray-200 overflow-hidden"
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute -top-24 left-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Case studies
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            <span className="text-yellow-400">My</span> Projects
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A few builds where I focused on clean UI, solid backend, and
            production-ready details.
          </p>
        </motion.div>

        {/* cards */}
        <motion.div
          variants={{container}}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title ?? index}
              variants={{card}}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/70 to-gray-950/70 overflow-hidden shadow-xl"
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                />

                {/* top gradient for readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-2xl font-bold text-yellow-300">
                      {project.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech?.map((tech, i) => (
                        <span
                          key={`${tech}-${i}`}
                          className="text-xs px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* corner badge */}
                {project.tag && (
                  <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur">
                    {project.tag}
                  </div>
                )}
              </div>

              {/* content */}
              <div className="p-7">
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03]
                                 hover:border-yellow-400/40 hover:text-yellow-300 transition"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2 rounded-xl bg-yellow-400 text-black font-semibold
                                 hover:bg-yellow-300 hover:scale-[1.03] transition"
                    >
                      Live Demo →
                    </a>
                  )}

                  {project.caseStudy && (
                    <a
                      href={project.caseStudy}
                      className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03]
                                 hover:border-white/20 hover:text-white transition"
                    >
                      Case Study
                    </a>
                  )}
                </div>
              </div>

              {/* subtle border glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-yellow-400/20 transition" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

 