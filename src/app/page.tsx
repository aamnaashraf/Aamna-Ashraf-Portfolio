import About from "@/components/About";
import Hero from "@/components/hero"; 
import ParticlesBackground from "@/components/ParticlesBackground";
import ProfessionalSkills from "@/components/ProfessionalSkills";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import WhatIdo from "@/components/WhatIdo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Icons from "@/components/Icons";

export default function Home() {
  return (
    <main className="relative z-0">
      <ParticlesBackground />
      <Hero />
      <WhatIdo />
      <Skills />
      <Icons />
      <ProfessionalSkills />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />

    </main>
  );
}
