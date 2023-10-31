"use client";

import React from "react";
import Details from "../../data/Details.json";
function page() {
  console.log("Details:", Details);
  const journey = Details.details.education;
  return (
    <div className="bg-blue-100 w-11/12 h-[80vh] m-auto flex flex-col gap-4 p-4">
      <h1 className="w-full text-3xl text-center bg-slate-400">JOURNEY</h1>
      {journey.map((jour, index) => (
        <div className="w-4/5 mx-auto my-5 bg-purple-200" key={index}>
          <div className="flex items-center justify-center gap-3 h-10">
            <div className="w-full h-full  flex items-center justify-center bg-yellow-200">
              {jour.year}
            </div>
            <div className="w-full h-full flex items-center justify-center bg-[#e2ed8c]">
              {jour.name}
            </div>
          </div>
          {index !== journey.length - 1 && (
            <span className="text-[4rem] flex justify-center">{"\u2193"}</span>
          )}{" "}
        </div>
      ))}
    </div>
  );
}

export default page;
