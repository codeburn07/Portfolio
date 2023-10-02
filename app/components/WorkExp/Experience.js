"use client";
import React, { useState } from "react";
import { experienceData } from "../data";
import Image from "next/image";
const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(experienceData[0]);
  const handleClick = (index) => {
    setActiveExperience(experienceData[index]);
  };
  return (
    <div className="w-auto">
      <div className="py-32 font-poppins flex flex-col items-center">
        {activeExperience && (
          <div className=" flex flex-col justify-center items-center">
            <p className="font-[500] text-lg">{activeExperience.position}</p>
            <p className="text-primaryGreen text-sm font-medium pt-2 pb-6">
              {activeExperience.duration}
            </p>
            <p className="font-[400] px-[4rem] ">{activeExperience.descShort}</p>
          </div>
        )}
        <div className="flex py-8 items-center">
          {experienceData.map((exp, index) => (
            <button
              key={index}
              className={`${
                activeExperience === exp
                  ? "text-primaryGreen transform translate-y-[-1px]"
                  : ""
              } px-10 max-sm:px-3 py-2 text-sm border-none transition-all ease-in-out duration-100 `}
              onClick={() => handleClick(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        {activeExperience && (
          <div className="px-2 md:w-[100%] md:h-[auto]">

          
          <div className="rounded-2xl border-[1px]  dark:bg-[#4D4D4D] bg-white flex justify-center items-center gap-2 max-lg:flex-col-reverse">
            <p className="font-[400] m-4">{activeExperience.descLong}</p>
            <img
              className="m-4 rounded-2xl"
              src={activeExperience.exeImg}
              height="300"
              width="350"
              alt=""
            />
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
