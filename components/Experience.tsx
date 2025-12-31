// src/components/Experience.jsx
export default function Experience() {
  return (
    <section
  id="experience"
  className="py-24 bg-gradient-to-b from-black via-gray-950 to-black text-gray-200"
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
      <span className="text-yellow-400">Work</span> Experience
    </h2>

    <div className="space-y-12">

      {/* Experience Card 1 */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
        <div className="absolute left-0 top-8 h-[calc(100%-4rem)] w-[2px] bg-yellow-400/30 hidden md:block"></div>

        <h3 className="text-2xl font-semibold mb-1">
          Full-Stack Developer Intern
        </h3>

        <p className="text-yellow-400 mb-1">
          OneRoot, Bengaluru
        </p>

        <p className="text-sm text-gray-400 mb-5">
          6 Months Internship
        </p>

        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li>Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB</li>
          <li>Built secure and scalable REST APIs for authentication and data management</li>
          <li>Designed responsive frontend UI and integrated it with backend services</li>
          <li>Implemented authentication, authorization, and role-based access control</li>
          <li>Optimized application performance and improved API response time</li>
          <li>Used Git & GitHub for version control, collaboration, and code reviews</li>
        </ul>
      </div>

      {/* Experience Card 2 */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
        <div className="absolute left-0 top-8 h-[calc(100%-4rem)] w-[2px] bg-yellow-400/30 hidden md:block"></div>

        <h3 className="text-2xl font-semibold mb-1">
          Hardware Designer
        </h3>

        <p className="text-yellow-400 mb-1">
          Sadom, Bengaluru
        </p>

        <p className="text-sm text-gray-400 mb-5">
          3 Months Internship
        </p>

        <ul className="space-y-2 text-gray-300 list-disc list-inside">
       <li>Designed and developed IoT prototypes using microcontrollers like Arduino and ESP32</li>
<li>Integrated sensors and actuators to build responsive and automated hardware systems</li>
<li>Optimized device performance, power consumption, and ensured reliable data communication</li>
<li>Used version control (Git & GitHub) for hardware design files, firmware, and collaborative development</li>

        </ul>
      </div>

    </div>
  </div>
</section>

  );
}
