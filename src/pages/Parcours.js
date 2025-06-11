import React from "react";

const Parcours = () => {
  return (
    <div className="container-route">
      <h2>
        Me connaitre, <span>Mon parcours</span>
      </h2>
      <div className="routes">
        <div className="route">
          <h3>Formations</h3>
          <div className="point">
            <div className="date">2024-2026</div>
            <div className="content">
              <h4>
                Master ISM-AG{" "}
                <span>
                  (Ingénierie et science des données orientées métiers
                  appliquées - à la gestion de production)
                </span>
              </h4>
              <div className="description">
                Un master où l'objectif consiste à pouvoir donner du sens aux
                données de l'entreprise pour de l'aide à la décision grâce à des
                compétences en analyse de données, en optimisation et en
                ingénierie informatique.
              </div>
              <div className="place">
                <ion-icon name="location-outline"></ion-icon>
                <span>Université Toulouse Jean Jaurès</span>
              </div>
            </div>
          </div>
          <div className="point">
            <div className="date">2021-2024</div>
            <div className="content">
              <h4>
                Licence MIASHS{" "}
                <span>
                  (Licence mathématique et informatiques aplliquées aux sciences
                  humaines et sociales)
                </span>
              </h4>
              <div className="description">
                Cette licence m’a permis de développer des compétences en
                analyse et manipulation de données, ainsi que de découvrir le
                monde de l’informatique à travers l’apprentissage de langages de
                programmation et des bases du développement web.
              </div>
              <Place place={"Université Toulouse Jean Jaurès"} />
            </div>
          </div>
          <div className="point">
            <div className="date">2019</div>
            <div className="content">
              <h4>Attestation de formation Module U9</h4>
              <div className="description">
                Formation consistant a être en capacité de prendre en charge un
                groupe d’enfant âgé de 7 a 8 ans et d'animer une séance
                d’entraînement au sein d'une école de foot
              </div>
              <Place place={"Lycée Charles et Adrien Dupuy Le Puy-en-Velay"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Place = ({ place }) => {
  return (
    <div className="place">
      <ion-icon name="location-outline"></ion-icon>
      <span>{place}</span>
    </div>
  );
};

export default Parcours;
