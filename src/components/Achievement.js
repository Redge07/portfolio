import React, { useEffect, useRef } from "react";
import showTechnologies from "../utils/showTechnologies";

const Achievement = ({ achievement }) => {
  const {
    link_id,
    link,
    colorBottom,
    colorTop,
    colorBox,
    summary,
    image,
    title,
    description,
    date,
    technologies,
  } = achievement;
  const refAchievement = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          refAchievement.current.style.transform = "scale(1)";
        } else {
          refAchievement.current.style.transform = "scale(0.5)";
        }
      });
    });
    observer.observe(refAchievement.current);
    return () => {
      observer.unobserve(refAchievement.current);
    };
  }, []);
  return (
    <div className="achievement" id={link_id}>
      <a
        ref={refAchievement}
        href={link}
        style={{
          background: `linear-gradient(to top, ${colorBottom}, ${colorTop} 50%, ${colorTop} 100%)`,
        }}
        target="_blank"
      >
        <div className="summary">
          <p>{summary}</p>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div
          className="picture"
          style={{
            background: `url('/images/realisations/${image}.png') center/cover`,
            boxShadow: `0 0 40px 0 ${colorBox}, 0 0 20px white`,
          }}
        ></div>
      </a>
      <div className="description">
        <h3>
          {title}
          <div className="bar" style={{ background: colorTop }}></div>
        </h3>
        <p>{description}</p>
        <span className="date">{date}</span>
        <ul className="technologies">
          {technologies.map((technologie) => (
            <div key={technologie}>{showTechnologies(technologie)}</div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievement;
