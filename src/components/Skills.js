"use client";
import React, { useState } from "react";
import Stars from "./Star";

function Skills({ skills }) {

    const [selectSkill, setSkill] = useState("")
     const handleSkillClick = (skill) => {
       setSkill(skill);
     };
    const closeSkill = () => {
        setSkill("")
    }

  return (
    <div
      id="skills"
      className="capitalise w-11/12 h-[20rem] p-3 ml-auto mr-auto mt-10 mb-10  rounded-2xl"
    >
      <ul className="flex items-center justify-around h-12 gap-2 p-1 cursor-pointer">
        {skills.map((skill, index) => (
          <li
            key={index}
            onClick={() => handleSkillClick(skill)}
            className=" bg-red-300 w-full h-full text-center flex items-center justify-center	rounded-full transition duration-300 transform hover:scale-105 "
          >
            {skill.name}
          </li>
        ))}
      </ul>

      {selectSkill && (
        <div className="w-[25%] h-[8vh] rounded-lg p-3 ml-2 bg-blue-400 relative transition duration-300 transform hover:scale-105">
          <div
            className="absolute right-3 top-1 bg-black text-white  rounded-full text-center w-6 h-6 cursor-pointer"
            onClick={() => closeSkill()}
          >
            X
          </div>
          <div className="flex">
            <span>Level of Experience:</span>{" "}
            <span className="ml-3 flex-1">
              <Stars rating={selectSkill.level} />
            </span>
          </div>
          <div>Years of Experience: {selectSkill.experience}</div>
        </div>
      )}
    </div>
  );
}

export default Skills;
