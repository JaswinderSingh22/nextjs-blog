import React from "react";
import bgimg from "../assets/img1.jpeg";

function Projects({ projects }) {
  return (
    <div
      id="projects"
      className="flex w-11/12 flex-col items-center m-auto rounded-2xl p-3 flex-wrap  justify-center "
    >
      <div className=" w-full h-16 rounded-2xl p-3 bg-purple-200 text-center flex justify-center items-center text-3xl">PROJECTS</div>
      <div className="flex w-11/12 m-auto rounded-2xl p-3 flex-wrap  justify-center ">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[30%] h-[40vh] bg-yellow-200 m-2 p-3 rounded-lg transition duration-300 transform hover:scale-105"
            style={{ backgroundImage: `url(${bgimg.src})` }}
            key={index}
          >
            <div>
              Name: <span>{project.name}</span>
            </div>
            <div>
              Techstack Used: <span>{project.tech}</span>
            </div>
            <div>
              Link: <span>{project.link}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
