// src/components/Footer.jsx
export default function Footer() {
  return (
   <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-400 py-12 border-t border-gray-800">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h3 className="text-2xl font-extrabold text-yellow-400 mb-2 tracking-wide">
      Shiraj Mujawar
    </h3>

    <p className="text-gray-400 mb-6">
      MERN Stack Developer • React • Next.js • Node.js
    </p>

    {/* Social Links */}
    <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
      <a
        href="https://github.com/shirajgit"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-400 transition-all"
      >
        🐙 GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/shiraj-mujawar"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-400 transition-all"
      >
        💼 LinkedIn
      </a>

      <a
        href="https://instagram.com/mr_shiraj_mujawar786"
        className="hover:text-yellow-400 transition-all"
      >
        📧 insta
      </a>
    </div>

    {/* Divider */}
    <div className="w-24 h-px bg-gray-800 mx-auto mb-4"></div>

    <p className="text-xs text-gray-500 tracking-wide">
      © {new Date().getFullYear()} Shiraj Mujawar. All rights reserved.
    </p>

  </div>
</footer>

  );
}
