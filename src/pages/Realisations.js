import React from "react";
import Github from "../components/Github";
import Achievement from "../components/Achievement";
import achievements from "../utils/dataAchievements";

const Realisations = () => {
  return (
    <div className="container-achievements">
      <div className="smooth" id="realisations"></div>
      <h2>
        Réalisations dans le <span>Développement Web</span>
      </h2>
      <p className="intro">
        Vous trouverez toutes ces réalisations sur mon Github
      </p>
      <Github />

      <div className="achievements">
        {/* achievements qui est un tableau composé d'objet qui représente chaque réalisations en dev web */}
        {achievements.map((achievement) => (
          // Pour chaque réalisations on affiche la réalisations avec l'objet du tableau qui correspond a cette réalisation
          <Achievement key={achievement.link} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};

export default Realisations;
