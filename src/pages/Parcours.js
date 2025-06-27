import React from "react";
import activities from "../utils/dataActivities";
import Activity from "../components/Activity";

const Parcours = () => {
  return (
    <div className="container-route">
      <div className="smooth" id="parcours"></div>
      <h2>
        Me connaitre, <span>Mon parcours</span>
      </h2>
      <div className="routes">
        <div className="route">
          <h3>Formations</h3>
          {/* Représente un tableau composé d'objet qui contiennent toutes les informations d'un point de parcours */}
          {activities
            // Ici on affiche que les activités qui parle du tableau en questions
            .filter((activity) =>
              ["ISM-AG", "MIASHS", "Bac", "U9"].includes(activity.identity)
            )
            // On affiche le point en envoyant au composant Activity, l'objet qui correspond à toutes les informations de ce point
            .map((activity) => (
              <Activity key={activity.identity} activity={activity} />
            ))}
          <h3>
            Projets universitaire <div className="smooth" id="projets"></div>
          </h3>
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
          <h3>
            Expèriences <div className="smooth" id="stages"></div>
          </h3>
          {activities
            .filter((activity) =>
              ["IRIT_Ex", "Vialle_Construction"].includes(activity.identity)
            )
            .map((activity) => (
              <Activity key={activity.identity} activity={activity} />
            ))}
          <h3>
            Petit Job <div className="smooth" id="job"></div>
          </h3>
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
