"use client";
import { React, useState } from "react";
import Work from "./Work";
import Experience from "./Experience";

const WorkExp = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="flex justify-center flex-col items-center gap-4 py-4 w-screen">
      <div className={`absolute space-x-6 font-bold top-[2.5rem] max-md:text-[80%] max-sm:space-x-3`}>
        <button
          className={`${activeTab === "experience" ? "text-primaryGreen" : ""} `}
          onClick={() => setActiveTab("experience")}
        >
          {activeTab === "experience" ? "EXPERIENCE-" : "EXPERIENCE"}
        </button>
        <button
          className={`${activeTab === "work" ? "text-primaryGreen" : ""} `}
          onClick={() => setActiveTab("work")}
        >
          {activeTab === "work" ? "WORK-" : "WORK"}
        </button>
      </div>
      <div>
        {activeTab === "experience" && <Experience />}
        {activeTab === "work" && <Work />}
      </div>
    </div>
  );
};

export default WorkExp;
