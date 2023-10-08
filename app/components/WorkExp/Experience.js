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
    <div className="w-screen h-screen ">
      <div className="mt-[16rem] font-poppins flex flex-col items-center max-sm:mt-[12rem]">
        {activeExperience && (
          <div className=" flex flex-col justify-center items-center max-sm:mt-2">
            <p className="font-[500] text-[1.25rem]">
              {activeExperience.position}
            </p>
            <p className="text-primaryGreen text-sm font-medium pt-2 pb-6 max-sm:pb-2 max-sm:text-[85%]">
              {activeExperience.duration}
            </p>
            <p className="font-[400] max-sm:mt-[1rem] max-md:text-[0.8rem] text-[1rem]  overflow-y-auto max-lg:h-[150px] max-sm:h-[120px] w-[50%] max-sm:w-[60%]">
              {activeExperience.descShort}
            </p>
          </div>
        )}
        <div className="flex mt-8 max-sm:py-1 items-center">
          {experienceData.map((exp, index) => (
            <button
              key={index}
              className={`${
                activeExperience === exp
                  ? "text-primaryGreen transform translate-y-[-1px]"
                  : ""
              } px-[4rem] max-2xl:px-[3rem] max-lg:px-[1.5rem] max-md:px-[1rem] max-sm:px-[0.6rem]  py-2 text-[0.75rem] font-[400] border-none transition-all ease-in-out duration-100 `}
              onClick={() => handleClick(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="px-2 mt-8 max-sm:mt-[4px] max-2xl:h-[90%] max-2xl:overflow-y-auto  max-sm:h-[50%] md:w-[100%] max-md:w-[30rem] md:h-[60%] flex justify-center items-center max-sm:gap-1 ">
          {activeExperience && (
            <div className="rounded-2xl p-[1.5rem] max-sm:p-[1rem] border-[1px] lg:w-[50%] dark:bg-[#4D4D4D] bg-white flex gap-2 justify-center items-center max-sm:flex-col-reverse">
              <p className="font-[400] mr-4 max-sm:mr-0 max-md:text-[0.8rem] text-[1rem] max-2xl:h-[200px] overflow-y-auto max-xl:h-[180px] max-md:h-[150px] max-xl:w-[300px] max-sm:h-[100px]">
                {activeExperience.descLong}
              </p>

              <img
                className="rounded-2xl max-2xl:w-[300px] max-xl:w-[270px] max-lg:w-[240px] max-md:w-[200px] max-md:h-[150px] max-sm:w-[300px] max-sm:h-[120px]"
                src={activeExperience.exeImg}
                height="300"
                width="350"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
