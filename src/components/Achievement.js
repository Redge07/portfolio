import React from "react";
import showTechnologies from "../utils/showTechnologies";

const Achievement = ({ achievement }) => {
  const {
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
  return (
    <div className="achievement">
      <a
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
        <ul>{technologies.map(showTechnologies)}</ul>
      </div>
    </div>
  );
};

export default Achievement;
