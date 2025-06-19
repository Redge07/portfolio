import React from "react";
import showTechnologies from "../utils/showTechnologies";

const Activity = ({ activity }) => {
  const { identity, name, date1, date2, content, technologies, place } =
    activity;
  return (
    <div className="point">
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
        <div className="description">{content}</div>
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
