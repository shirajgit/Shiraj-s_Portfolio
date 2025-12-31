// src/components/Projects.jsx
import { projects } from "@/data/projects";

export default function Projects() {
  return (
<section
  id="projects"
  className="py-24 bg-gradient-to-b from-black via-gray-950 to-black text-gray-200"
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
      <span className="text-yellow-400">My</span> Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-br from-gray-900 to-gray-950 
                     border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-yellow-500/50 transition-shadow duration-300"
        >
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-400 mb-5 leading-relaxed">
              {project.description}
            </p>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 rounded-lg border border-gray-700
                           hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                GitHub
              </a>

              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  className="px-5 py-2 rounded-lg bg-yellow-400 text-black 
                             font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





  );
}
