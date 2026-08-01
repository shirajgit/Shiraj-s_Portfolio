"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-black text-gray-200 overflow-hidden"
    >
      {/* 🌌 Background */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full" />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Production-ready builds with clean UI, strong backend, and real impact.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title ?? index}
              variants={card}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden h-72 md:h-96">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={70}
                  loading="lazy"
                  className="object-cover
                  transition duration-700 ease-out
                  group-hover:scale-110 group-hover:rotate-[1deg]"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* FLOATING TITLE */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech?.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full 
                        bg-white/10 text-gray-200 backdrop-blur border border-white/10
                        group-hover:border-yellow-400/40 group-hover:text-yellow-200 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TAG */}
                {project.tag && (
                  <div className="absolute top-5 left-5 text-xs px-3 py-1 rounded-full 
                  bg-black/40 backdrop-blur border border-white/10 text-gray-300">
                    {project.tag}
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                {/* BUTTONS */}
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
                      bg-gradient-to-r from-yellow-400 to-orange-400 
                      text-black font-semibold shadow-lg
                      hover:scale-105 transition"
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

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute inset-0 rounded-3xl ring-1 ring-yellow-400/30" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm">
            🚀 Have an idea? Let’s turn it into a product.
          </p>
        </div>
      </div>
    </section>
  );
}