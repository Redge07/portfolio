import React, { useEffect, useRef, useState } from "react";
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
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="achievement">
      <div className="smooth" id={link_id}></div>
      <a
        ref={refAchievement}
        href={link}
        style={{
          background: `linear-gradient( ${link_id == "Petanque" ? "to top left" : "to top"}, ${colorBottom}, ${colorTop} 50%, ${colorTop} 100%)`,
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
        <p
          style={
            link_id == "Petanque"
              ? showDescription
                ? { height: "auto" }
                : { height: "300px", overflow: "hidden" }
              : {}
          }
        >
          {description}
          {link_id == "Petanque" && (
            <div
              onClick={() => setShowDescription(!showDescription)}
              className="voirplus"
              style={
                showDescription
                  ? { transform: "translate(0%, 100%)" }
                  : { transform: "translate(0%, 0%)" }
              }
            >
              Voir {showDescription ? "moins" : "plus"}
            </div>
          )}
        </p>
        <span className="date">{date}</span>
        <ul className="technologies">
          {/* technologies représente les outils utilisé pour la réalisation web */}
          {/* Un map qui passe toute les technologie de la réalisations web en
          question */}
          {technologies.map((technologie) => (
            // showTechnologie lance un switch qui en fonction du nom de la technologie, affiche la technologie avec ces propriétes
            <div key={technologie}>{showTechnologies(technologie)}</div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievement;
