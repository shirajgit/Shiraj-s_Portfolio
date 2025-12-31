// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50 shadow-md">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

    {/* Logo */}
    <h1 className="font-extrabold text-2xl text-yellow-400 tracking-tight">
      Shiraj
    </h1>

    {/* Desktop Menu */}
    <div className="space-x-8 hidden md:flex text-gray-300 font-medium">
      <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">
        About
      </a>
      <a href="#skills" className="hover:text-yellow-400 transition-colors duration-300">
        Skills
      </a>
      <a href="#projects" className="hover:text-yellow-400 transition-colors duration-300">
        Projects
      </a>
      <a href="#experience" className="hover:text-yellow-400 transition-colors duration-300">
        Experience
      </a>
      <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">
        Contact
      </a>
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button id="mobile-menu-button" className="focus:outline-none">
        <svg className="w-6 h-6 text-gray-300 hover:text-yellow-400 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

  </div>

  {/* Mobile Menu (hidden by default, toggle with JS) */}
  <div id="mobile-menu" className="hidden md:hidden bg-black/90 backdrop-blur-md">
    <div className="flex flex-col items-center space-y-4 py-4">
      <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About</a>
      <a href="#skills" className="hover:text-yellow-400 transition-colors duration-300">Skills</a>
      <a href="#projects" className="hover:text-yellow-400 transition-colors duration-300">Projects</a>
      <a href="#experience" className="hover:text-yellow-400 transition-colors duration-300">Experience</a>
      <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a>
    </div>
  </div>
</nav>

  );
}
