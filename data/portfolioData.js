 
// src/data/portfolioData.js
export const COMPANY = {
  name: "Aishi Technologies",
  tagline: "We don’t build projects. We build products.",
  points: [
    "Scalable architecture",
    "Clean UI/UX",
    "Real business impact",
    "Long-term thinking",
  ],
  process: [
    { title: "Discover", desc: "Understand goals, users, and scope." },
    { title: "Build", desc: "Design + develop production-ready features." },
    { title: "Deploy", desc: "Ship fast with clean CI/CD + hosting." },
    { title: "Support", desc: "Iterate, improve, and maintain." },
  ],
};

export const STATS = [
  { label: "Client Projects", value: "5+" },
  { label: "Internship Experience", value: "6 Months" },
  { label: "Tech Stack", value: "15" },
  { label: "CGPA", value: "10" },
];

export const CLIENTS = [
  {
    name: "Akeel Lights",
    type: "Business Website",
    desc: "Lighting & decoration business website with modern UI + inquiry focus.",
    link: "https://akeel-lights.vercel.app",
    stack: ["Next.js", "Tailwind", "UI/UX"],
    highlights: ["Modern homepage", "Service sections", "Lead-friendly CTA"],
  },
  {
    name: "Clickonadzz",
    type: "Marketing Website",
    desc: " Digital marketing agency website with clean design and service showcase.",
    link: "https://clickonadzz.com",
    stack: ["Next.js", "Tailwind","Framer Motion", "Forms"],
    highlights: ["Responsive", "Fast UI", "Professional design"],
  },
   {
    name: "Nehra Cars",
    type: "Car Rental Website",
    desc: "Self-drive car rental website with clean layout and enquiry flow.",
    link: "https://nehra-cars.vercel.app",
    stack: ["Next.js", "Tailwind", "Forms"],
    highlights: ["Responsive", "Fast UI", "Professional design"],
  },
   {
    name: "Portfolio (client project)",
    type: "Portfolio Website",
    desc: " Personal portfolio website showcasing skills, projects, and contact info with a clean design.",
    link: "https://protfolio-sophia.vercel.app/",
    stack: ["three.js", "Tailwind CSS", "framer-motion"],
    highlights: ["Modern Design", "mobile-friendly", "Professional design"],
  },

];

export const SERVICES = [
  {
    title: "Web Development",
    desc: "Modern websites & dashboards with performance + clean UI.",
  },
  {
    title: "Full-Stack Apps",
    desc: "APIs, auth, database design, and scalable backend systems.",
  },
  {
    title: "Mobile Apps",
    desc: "Expo/React Native apps with real features and smooth UX.",
  },
  {
    title: "Automation / DevOps Basics",
    desc: "Deployments, hosting, monitoring basics, and production readiness.",
  },
];

export const TESTIMONIALS = [
  // Optional – add later
  // { name: "Client Name", text: "Great work...", role: "Business Owner" }
];