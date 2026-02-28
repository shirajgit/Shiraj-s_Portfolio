// src/app/page.js
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
