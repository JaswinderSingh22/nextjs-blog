"use client";

import React from "react";
// import Details from "../../data/Details.json";
function page({Details}) {
  const journey = Details.details.education;
  return (
    <div
      id="experience"
      className=" w-11/12 h-[40rem] m-auto flex flex-col gap-4 p-4 capitalize rounded-2xl"
    >
      <h1 className="w-full h-16 p-3 flex items-center justify-center text-3xl text-center bg-slate-400 rounded-2xl">
        JOURNEY
      </h1>
      <div className="overflow-auto">
        {journey.map((jour, index) => (
          <div className="w-3/5 mx-auto my-5  flex-1" key={index}>
            <div className="flex items-center justify-center gap-3 h-10">
              <div className="w-full h-full flex items-center justify-center bg-[#e2ed8c]">
                {jour.name}
              </div>
              <div className="w-full h-full  flex items-center justify-center bg-yellow-200">
                {jour.year}
              </div>
            </div>
            {index !== journey.length - 1 && (
              <span className="text-[4rem] text-white flex justify-center">
                {"\u2193"}
              </span>
            )}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
