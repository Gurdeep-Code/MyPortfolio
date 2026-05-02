import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Performance } from "@/components/portfolio/Performance";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Gurdeep Singh — SDE-1 · Senior Frontend & MERN Engineer";
    const desc = "Gurdeep Singh — Software Development Engineer with 4+ years building enterprise React, Next.js & Node.js platforms. View projects, skills and experience.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-1 focus:rounded">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <section id="about" />
        <Skills />
        <Experience />
        <Projects />
        <Performance />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
