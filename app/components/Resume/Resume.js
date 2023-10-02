"use client";
import React from "react";
import Image from "next/image";
import './Resume.css'
import Link from "next/link";
const Resume = () => {
  return (
    <div className="w-full h-[32rem] bg-[#29BF12] background">
      <div className="flex justify-center gap-8 items-center flex-col ">
        <h1 className="font-abril pt-20 text-8xl max-xl:text-6xl max-md:text-4xl max-sm:text-2xl">
          Design Stuff* for &nbsp;
          <span className="relative">
            <span className="font-abril absolute -top-14 max-xl:-top-10 max-md:-top-6">Human</span>
            <span className={`text-white line-through dark:text-[#333]`}>
              Robot
            </span>
          </span>
        </h1>

        <p className=" w-9/12 font-poppins">
          A keen believer in business and analysis capacity is combined with
          design thinking. My primary goal is to provide a richly engaging and
          innovative user experience to the user. Always open to new
          opportunities to grow and test the limits and help the product to grow
          from 0 to 1
        </p>
        <Link
          href="https://html.spec.whatwg.org/print.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="border-2 px-6 py-1 m-2 text-sm text-black font-[900]">
            RESUME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Resume;
