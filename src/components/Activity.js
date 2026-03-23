import React, { useState } from "react";
import showTechnologies from "../utils/showTechnologies";

const Activity = ({ activity }) => {
  const { identity, name, date1, date2, content, technologies, place } =
    activity;
  const [activeScreen, setActiveScreen] = useState(false);
  return (
    <div className="point">
      {activeScreen && (
        <div className="container-screen">
          <img src="./images/powerbi.png" alt="" />
          <ion-icon
            name="close-outline"
            onClick={() => setActiveScreen(false)}
          ></ion-icon>
        </div>
      )}
      <div className="smooth" id={identity}></div>
      <div
        style={date1 === "" ? { display: "none" } : { display: "flex" }}
        className="date"
      >
        {date1}
      </div>
      <div className="content">
        <div
          style={date2 === "" ? { display: "none" } : { display: "flex" }}
          className="date"
        >
          {date2}
        </div>
        {name}
        <div className="description">
          {content}{" "}
          {identity == "BI" && (
            <p onClick={() => setActiveScreen(true)} className="screen">
              Voir Screen Rapport
            </p>
          )}
        </div>
        <ul
          style={
            technologies.length === 0
              ? { display: "none" }
              : { display: "flex" }
          }
          className="technologies"
        >
          {technologies.map((technologie) => showTechnologies(technologie))}
        </ul>
        <Place place={place} />
      </div>
    </div>
  );
};

export default Activity;

const Place = ({ place }) => {
  return (
    <div
      style={place === "" ? { display: "none" } : { display: "flex" }}
      className="place"
    >
      <ion-icon name="location-outline"></ion-icon>
      <span>{place}</span>
    </div>
  );
};
