"use client";
import { React, useState } from "react";
import Work from "./Work";
import Experience from "./Experience";

const WorkExp = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <div className={`relative space-x-6 font-bold`}>
        <button
          className={`${activeTab === "experience" ? "text-primaryGreen" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          {activeTab === "experience" ? "EXPERIENCE-" : "EXPERIENCE"}
        </button>
        <button
          className={`${activeTab === "work" ? "text-primaryGreen" : ""}`}
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
