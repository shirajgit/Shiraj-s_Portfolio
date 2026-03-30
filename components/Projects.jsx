"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const container = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-black text-gray-200 overflow-hidden"
    >
      {/* 🌌 Background */}
      <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Case studies
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Real-world builds focused on performance, scalability, and clean UX.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title ?? index}
              variants={card}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-white/10 
              bg-white/[0.04] backdrop-blur-xl overflow-hidden shadow-2xl 
              hover:border-yellow-400/40 transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover 
                  group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-2xl font-bold text-yellow-300">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech?.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full 
                        bg-yellow-400/10 text-yellow-300 border border-yellow-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tag */}
                {project.tag && (
                  <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10">
                    {project.tag}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl 
                      border border-white/10 bg-white/[0.03]
                      hover:border-yellow-400/40 hover:text-yellow-300 transition"
                    >
                      <FaGithub /> Code
                    </a>
                  )}

                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2 rounded-xl 
                      bg-yellow-400 text-black font-semibold
                      hover:bg-yellow-300 hover:scale-[1.05] transition"
                    >
                      Live <FaArrowUpRightFromSquare />
                    </a>
                  )}

                  {project.caseStudy && (
                    <a
                      href={project.caseStudy}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl 
                      border border-white/10 bg-white/[0.03]
                      hover:border-white/20 hover:text-white transition"
                    >
                      Case Study <FaArrowRight />
                    </a>
                  )}
                </div>
              </div>

              {/* Glow Hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-yellow-400/20 transition" />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Want something like this? Let’s build your product 🚀
          </p>
        </div>
      </div>
    </section>
  );
}