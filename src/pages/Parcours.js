import React from "react";
import showTechnologies from "../utils/showTechnologies";
import activities from "../utils/dataActivities";
import Activity from "../components/Activity";

const Parcours = () => {
  return (
    <div className="container-route">
      <h2>
        Me connaitre, <span>Mon parcours</span>
      </h2>
      <div className="routes">
        <div className="route">
          <h3>Formations</h3>
          {activities
            .filter((activity) =>
              ["ISM-AG", "MIASHS", "Bac", "U9"].includes(activity.identity)
            )
            .map((activity) => (
              <Activity key={activity.identity} activity={activity} />
            ))}
          <h3>Projets universitaire</h3>
          {activities
            .filter((activity) =>
              ["BI", "VBA", "Web_scraping"].includes(activity.identity)
            )
            .sort((a, b) => a.period - b.period)
            .map((activity) => (
              <Activity key={activity.identity} activity={activity} />
            ))}
        </div>
        <div className="route">
          <h3>Expèriences</h3>
          {activities
            .filter((activity) =>
              ["IRIT_Ex", "Vialle_Construction"].includes(activity.identity)
            )
            .map((activity) => (
              <Activity key={activity.identity} activity={activity} />
            ))}
          <h3>Petit Job</h3>
          {activities
            .filter((activity) =>
              ["Bénévolat", "Myrtilles"].includes(activity.identity)
            )
            .sort((a, b) => a.period - b.period)
            .map((activity) => (
              <Activity key={activity.identity} activity={activity} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Parcours;
