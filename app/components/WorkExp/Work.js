"use client";
import React, { useState } from "react";
import Image from "next/image";
import { workData } from "../data";

const Work = () => {
  const [activeWork, setActiveWork] = useState(workData[0]);
  const handleClick = (index) => {
    setActiveWork(workData[index]);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col font-poppins">
      {activeWork && (
        <div className="mt-2 px-4">
          <img
            className="rounded-2xl "
            src={activeWork.workImg}
            alt={activeWork.name}
            height="500"
            width="500"
            
          />
          <p className="relative pt-6 text-center font-bold text-4xl">
            {activeWork.about}
          </p>
        </div>
      )}
      <div className="flex py-8 items-center justify-center space-x-20 max-sm:space-x-2 flex-wrap overflow-auto  max-sm:w-3/4  p-4">
        {workData.map((work, index) => (
          <button
            key={index}
            className={`${
              activeWork === work
                ? "transform translate-y-[-4px] font-bold"
                : ""
            } py-2 text-sm transition-all ease-in-out duration-200`}
            onClick={() => handleClick(index)}
          >
            {work.name}
            <div className="h-[3px] w-6 rounded-md bg-primaryGreen absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Work;
