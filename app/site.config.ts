// app/site.config.ts
// 🔧 SINGLE SOURCE OF TRUTH for all SEO. Change values here — everything
// (metadata, Open Graph, sitemap, robots, JSON-LD) reads from this file.

export const siteConfig = {
  name: "Shiraj Mujawar",
  // 👇 CHANGE THIS to your real deployed URL (no trailing slash).
  //    e.g. "https://shiraj-mujawar.vercel.app"
  url: "https://shiraj-portfolio.vercel.app",

  title: "Shiraj Mujawar — Full-Stack Developer & Product Builder",
  shortTitle: "Shiraj Mujawar",
  description:
    "Shiraj Mujawar is a full-stack developer building scalable web & mobile products with MERN, Next.js, React Native and IoT. Founder of Aishi Technologies.",

  role: "Full-Stack Developer",
  company: "Aishi Technologies",
  locale: "en_US",

  keywords: [
    "Shiraj Mujawar",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "React Native Developer",
    "App Developer",
    "IoT Developer",
    "Web Developer India",
    "Aishi Technologies",
    "Portfolio",
  ],

  links: {
    github: "https://github.com/shirajgit",
    linkedin: "https://www.linkedin.com/in/shiraj-mujawar",
    email: "shirajmujawar03@gmail.com",
  },

  // Set to your Twitter/X handle if you have one, else keep empty.
  twitterHandle: "",
} as const;

export type SiteConfig = typeof siteConfig;
