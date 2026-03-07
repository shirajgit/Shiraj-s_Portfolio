import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Clients from "@/components/Clients";
import Company from "@/components/Company";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import { COMPANY, STATS, CLIENTS, SERVICES } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Shiraj Mujawar | MERN Stack Developer | Full Stack Developer",
  description:
    "Shiraj Mujawar is a MERN stack developer from India building scalable web applications, modern UI systems, and digital products.",
  keywords: [
    "Shiraj Mujawar",
    "MERN developer",
    "Full stack developer",
    "React developer",
    "Node.js developer",
    "Portfolio",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats stats={STATS} />
      <Services services={SERVICES} />
      <Clients clients={CLIENTS} />
      <Company company={COMPANY} />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}