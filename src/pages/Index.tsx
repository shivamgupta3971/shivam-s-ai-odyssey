import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
        gsap.from(section.querySelectorAll("[data-reveal]"), {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: "top 80%" },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Achievements />
      <Resume />
      <Contact />
    </main>
  );
};

export default Index;
