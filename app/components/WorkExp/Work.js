"use client";
import React, {useState}  from "react";
import Image from "next/image";
import { workData } from "../data";

const Work = () => {
  const [activeWork, setActiveWork] = useState(workData[0]);
  const handleClick = (index) => {
    setActiveWork(workData[index]);
  };

  return (
    <div className="h-screen  flex justify-center items-center flex-col font-poppins">
      {activeWork && (
        <div className="mt-2 pb-6">
          <img
            src={activeWork.workImg}
            alt={activeWork.name}
            height="500"
            width="500"
            className="rounded-2xl max-w-full"
          />
          <p className="relative pt-6 text-center font-bold text-4xl">{activeWork.about}</p>
        </div>
      )}
      <div className="px-96 flex py-8 items-center">
        {workData.map((work, index) => (
          <button key={index}
          className={`${
            activeWork === work
              ? "transform translate-y-[-4px] hover:translate-y-[-4px]"
              : "font-thin"
          } px-4 py-2 text-sm transition-all ease-in-out duration-200  `}
          onClick={() => handleClick(index)}
        >
          {work.name}
          <div className="h-[3px] w-6 rounded-md bg-green absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </button>
        ))}
      </div>
    </div>
  );
};

export default Work;
