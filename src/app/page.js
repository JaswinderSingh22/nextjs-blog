"use client";

import Projects from "@/components/Projects.js";
import Skills from "../components/Skills.js";
import Details from "../data/Details.json";
export default function Home() {
  return (
    <main>
      <div>
        {/* <Skills skills={Details.details.professional.skills} /> */}
        <Projects projects={Details.details.professional.projects} />
      </div>
    </main>
  );
}
