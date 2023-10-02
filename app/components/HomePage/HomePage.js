"use client";
import React from "react";
import Image from "next/image";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="flex items-center flex-col justify-center [&>*]:max-w-[1600px] [&>*]:mx-auto">
      <div className="text-center mt-4 absolute">
        <p className="text-sm font-[900] dark:text-primaryGreen">
          Hello, This is
        </p>
        <p className="text-7xl font-poppins font-[100] max-md:text-5xl">
          Rajveer Singh
        </p>
      </div>
      <div
        className={`absolute h-screen w-80 max-md:w-40 justify-items-center dark:bg-[#EFF9EF08] bg-[#29BF12] opacity-10`}
      ></div>
      <div className="relative h-screen w-80">
        <div className="absolute inset-x-0 bottom-0">
          <div className="absolute top-[-30%] left-[20%]">
            <Image className="" src="/round.gif" height={200} width={200} alt=""/>
          </div>
          <div className="w-[4.80644rem] h-[1.14306rem] justify-center flex items-center gap: 0.19356rem absolute top-[24%] left-[40%] bottom-20 bg-[#EFF9EF] px-[0.75488rem] py-[0.34838rem]  dark:bg-[#333] rotate-[7deg]">
            <span className=" font-[400] text-[0.58069rem] absolute font-rubic text-primaryGreen ">
              Lorem Lipsum
            </span>
          </div>
          <Image
            className="mx-auto"
            width={150}
            height={150}
            src="/profile.png"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
