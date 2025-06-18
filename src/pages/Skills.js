import React, { useEffect, useRef } from "react";
import showTechnologies from "../utils/showTechnologies";

const Skills = () => {
  const refFlower = useRef();
  useEffect(() => {
    const scroll = () => {
      refFlower.current.style.transform = `translate(-50%, -55%) rotate(${
        window.scrollY / 10
      }deg)`;
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <div className="container-skills" id="Other">
      <div className="flower" ref={refFlower}></div>
      <h2>
        Mes outils <span>et langages</span>
      </h2>
      <ul>
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "SASS",
          "React",
          "PHP",
          "Python",
          "Redux",
          "SQL",
          "Power BI",
          "Beautiful Soup",
          "Excel",
          "VBA",
          "R",
          "Pandas",
          "Matplotlib",
          "Git",
          "GitHub",
        ].map((technologie) => showTechnologies(technologie))}
      </ul>
    </div>
  );
};

export default Skills;
