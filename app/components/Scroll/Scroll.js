"use client"
import React, { useRef, useEffect } from "react";
import WorkExp from "../WorkExp/WorkExp";
import Social from "../Social/Social";
import "./Scroll.css";

const Scroll = () => {
  const stickySectionsRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      transform(stickySectionsRef.current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector(".scroll_section");
    let percentage =
      ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  }

  return (
    <div>
      <div className="sticky_parent">
        <div className="sticky" ref={stickySectionsRef}>
          <div className="scroll_section">
            <WorkExp />
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
