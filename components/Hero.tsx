// src/components/Hero.jsx
export default function Hero() {
  return (
   <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white relative overflow-hidden">
  
  {/* Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

  <div className="relative z-10 text-center px-6 max-w-3xl">
    
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
      Hi, I’m <span className="text-yellow-400">Shiraj Mujawar</span>
    </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-semibold mb-8">
      <span className="text-yellow-400">Building the Future</span>, One Line of Code at a Time
    </p>

    <p className="text-lg md:text-xl text-gray-300 mb-8">
      MERN Stack Developer • React • Next.js • Node.js • MongoDB
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#projects"
        className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
      >
        🚀 View Projects
      </a>

      <a
        href="/resume.pdf"
        className="border border-gray-700 px-8 py-3 rounded-xl hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
      >
        📄 Download Resume
      </a>
    </div>

    {/* Scroll Hint */}
    <p className="mt-12 text-sm text-gray-500 animate-bounce">
      ↓ Scroll to explore
    </p>

  </div>
</section>

  );
}
