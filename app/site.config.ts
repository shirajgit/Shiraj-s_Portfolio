// app/site.config.ts
// 🔧 SINGLE SOURCE OF TRUTH for all SEO. Change values here — everything
// (metadata, Open Graph, sitemap, robots, JSON-LD) reads from this file.

export const siteConfig = {
  name: "Shiraj Mujawar",
  // 👇 CHANGE THIS to your real deployed URL (no trailing slash).
  //    e.g. "https://shiraj-mujawar.vercel.app"
  url: "https://shiraj-portfolio.vercel.app",

  title: "Shiraj Mujawar — Full-Stack Engineer & Product Builder",
  shortTitle: "Shiraj Mujawar",
  description:
    "Shiraj Mujawar is a Full-Stack Engineer and Product Builder with 2+ years of experience in IT, building and shipping production-ready web applications, digital products, Shopify experiences, business automations, and IoT solutions.",

  role: "Full-Stack Engineer & Product Builder",
  company: "Aishi Technologies",
  locale: "en_US",

  keywords: [
    "Shiraj Mujawar",
    "Full Stack Engineer",
    "Full Stack Developer",
    "Product Builder",
    "2+ Years Experience",
    "Experienced Web Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Shopify Developer",
    "API Integration",
    "Automation",
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
