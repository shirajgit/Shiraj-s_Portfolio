// src/components/About.jsx
export default function About() {
  return (
   <section
  id="about"
  className="py-24 bg-gradient-to-b from-gray-950 via-gray-950 to-black text-gray-200"
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
      <span className="text-yellow-400">About</span> Me
    </h2>

    <div className="grid md:grid-cols-2 gap-14 items-start">
      
      {/* Left Content */}
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          I’m <span className="text-yellow-400 font-semibold">Shiraj Mujawar</span>,
          a <span className="font-semibold">MERN Stack Developer</span> pursuing a
          diploma from <span className="font-semibold">Government Polytechnic Vijayapura</span>.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          I completed a <span className="font-semibold text-gray-100">6-month internship at OneRoot, Bengaluru</span>,
          where I worked as a <span className="font-semibold">Full-Stack Developer</span>
          building scalable and production-ready web applications using
          <span className="text-gray-100"> React.js, Node.js, Express.js, and MongoDB</span>.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          I have hands-on experience developing REST APIs, integrating frontend
          with backend services, implementing authentication and authorization,
          and optimizing application performance. I focus on writing clean,
          maintainable code and delivering reliable user-focused solutions.
        </p>

        {/* Highlight Badges */}
        <div className="flex flex-wrap gap-3 pt-2">
          <span className="px-4 py-1.5 text-sm rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
            MERN Stack
          </span>
          <span className="px-4 py-1.5 text-sm rounded-full bg-white/5 border border-gray-700">
            Full-Stack Development
          </span>
          <span className="px-4 py-1.5 text-sm rounded-full bg-white/5 border border-gray-700">
            Embedded Systems
          </span>
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 shadow-xl">
        <h3 className="text-xl font-semibold mb-6 text-yellow-400">
          Quick Info
        </h3>

        <ul className="space-y-5 text-gray-300">
          <li className="flex items-center gap-4">
            <span className="text-xl">🎓</span>
            <span>Diploma Student <span className="text-sm text-gray-400">(2026)</span></span>
          </li>

          <li className="flex items-center gap-4">
            <span className="text-xl">💻</span>
            <span>MERN Stack Developer</span>
          </li>

          <li className="flex items-center gap-4">
            <span className="text-xl">⚛️</span>
            <span>React • Next.js • Node • MongoDB</span>
          </li>

          <li className="flex items-center gap-4">
            <span className="text-xl">🧠</span>
            <span>Embedded Systems Engineer</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-xl">💻</span>
            <span>Fornted Developer</span>
          </li>

          <li className="flex items-center gap-4">
            <span className="text-xl">📍</span>
            <span>India,Vijaypura, indi 586-209</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

  );
}
