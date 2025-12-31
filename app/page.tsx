// src/app/page.js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
 

export default function Home() {
  return (
    <>
      <Navbar />
       <Hero />
      <About />
      <Skills />
      <Projects />
    <Experience />
      <Contact /> 
      <Footer /> 
    </>
  );
}
