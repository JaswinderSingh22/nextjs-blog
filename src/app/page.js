"use client";

import Projects from "@/components/Projects.js";
import Skills from "../components/Skills.js";
import Experience from "../components/Experience.js";
import Details from "../data/Details.json";
import Contact from "@/components/Contact.js";
import Intro from "@/components/Intro.js";
export default function Home() {
  return (
    <main>
      <div className="overflow-scroll flex flex-col h-[91vh] gap-5">
        <Intro />
        <Skills skills={Details.details.professional.skills} />
        <Projects projects={Details.details.professional.projects} />
        <Experience Details={Details} />
        <Contact />
      </div>
    </main>
  );
}
