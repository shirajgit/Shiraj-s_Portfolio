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
  title: "Shiraj Mujawar - Full Stack Engineer & Product Builder",
  description:
    "Shiraj Mujawar is a Full Stack Engineer from India building scalable web applications, modern UI systems, and digital products.",
  keywords: [
    "Shiraj Mujawar",
    "MERN developer",
    "App developer",
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
      <Company company={COMPANY} />
       <Services services={SERVICES} />
      <Skills />
      <Stats stats={STATS} />
      <Projects />
      <Clients clients={CLIENTS} />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}