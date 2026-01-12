// src/components/Contact.jsx
export default function Contact() {
  return (
  <section
  id="contact"
  className="py-24 bg-gradient-to-b from-black via-gray-950 to-gray-950 text-gray-200"
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
      <span className="text-yellow-400">Contact</span> Me
    </h2>

    <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 
      border border-gray-800 rounded-2xl p-10 shadow-xl">

      <p className="text-center text-lg text-gray-400 mb-10 leading-relaxed">
        Have a project in mind or looking for a reliable  
        <span className="text-gray-200 font-medium"> Full-Stack Developer</span>?  
        Let’s build something great together.
      </p>

      <div className="space-y-5">
        {/* Email */}
        <a
          href="mailto:shirajmujawar03@gmail.com"
          className="flex items-center justify-center gap-3 bg-yellow-400 
            text-black py-3 rounded-xl font-semibold text-lg 
            hover:opacity-90 transition-all"
        >
          📧 Email Me
        </a>

        {/* Phone */}
        <a
          href="tel:+918105369922"
          className="flex items-center justify-center gap-3 border border-gray-700 
            py-3 rounded-xl text-lg hover:border-yellow-400 
            hover:text-yellow-400 transition-all"
        >
          📞 Call Me: +91 81053 69922
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shiraj-mujawar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 border border-gray-700 
            py-3 rounded-xl text-lg hover:border-yellow-400 
            hover:text-yellow-400 transition-all"
        >
          💼 LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/shirajgit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 border border-gray-700 
            py-3 rounded-xl text-lg hover:border-yellow-400 
            hover:text-yellow-400 transition-all"
        >
          🐙 GitHub
        </a>
      </div>
    </div>
  </div>
</section>


  );
}
