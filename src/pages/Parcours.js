import React from "react";
import showTechnologies from "../utils/showTechnologies";

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
            <div className="date">2021</div>
            <div className="content">
              <h4>Bac général</h4>
              <div className="description">
                <ul>
                  <li>Mathématiques</li>
                  <li>Physique-Chimie</li>
                  <li>Science de l'ingénieur</li>
                </ul>
              </div>
              <Place place={"Lycée Charles et Adrien Dupuy Le Puy-en-Velay"} />
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
          <h3>Projets universitaire</h3>
          <div className="point">
            <div className="date">2024</div>
            <div className="content">
              <h4>Projet Power BI</h4>
              <div className="description">
                Projet dans lequel notre professeur nous a confié un vaste jeu
                de données désorganisé sur des brûlages dans la région
                Midi-Pyrénées. L'objectif était de créer un tableau de bord
                interactif avec Power BI, mettant en évidence des graphiques
                pertinents pour extraire des informations clés. Le projet se
                concluait par une présentation orale, durant laquelle nous
                devions nous mettre dans la peau d’un data analyst afin
                d’expliquer nos analyses et conclusions.
              </div>
              <ul className="technologies">
                {["Python", "Power BI"].map(showTechnologies)}
              </ul>
            </div>
          </div>
          <div className="point">
            <div className="date">2023</div>
            <div className="content">
              <h4>Interface VBA</h4>
              <div className="description">
                Projet réalisé en méthode agile, dont l’objectif était de
                développer des fonctionnalités en VBA sur Excel. Le contexte
                simulait une situation professionnelle où nous devions répondre
                à une demande client, en organisant notre travail par sprints
                pour assurer un développement structuré.
              </div>
              <ul className="technologies">
                {["Excel", "VBA"].map(showTechnologies)}
              </ul>
            </div>
          </div>
        </div>
        <div className="route">
          <h3>Expèriences</h3>
          <div className="point">
            <div className="content">
              <div className="date">06 Janvier - 28 Février 2025</div>
              <h4>
                Stages IRIT{" "}
                <span>(Institut de recherche en informatique de Toulouse)</span>
              </h4>
              <div className="description">
                Extraction de données sur le site internet de CAPEC{" "}
                <a href="https://capec.mitre.org/" target="_blank">
                  Voir le site
                </a>{" "}
                , qui recense les attaques en cybersécurité : j'y ai effectué du
                web scraping afin de concevoir une base de données et par la
                suite j'ai réalisé une interface utilisateur pour consulter la
                base de données. On pouvait voir le site internet comme une base
                de données où chaque attaque était associée à un identifiant, un
                nom, une description et d'autres information. <br />
                <br />
                Ma mission consistait à extraire et structurer ces données afin
                de créer un tableau résumant les informations clés de chaque
                attaque. Cette tâche relevait du web scraping, une technique qui
                permet d’extraire automatiquement des données d’un site web en
                analysant son code HTML.
              </div>
              <ul className="technologies">
                {["Python", "Beautiful Soup", "NLTK"].map(showTechnologies)}
              </ul>
              <Place place={"Maison de la recherche UT2J"} />
            </div>
          </div>
          <div className="point">
            <div className="content">
              <div className="date">06 Mai - 28 Juin 2024</div>
              <h4>Stages Vialle Construction</h4>
              <div className="description">
                Ma mission s'est déroulé au Canada dans le domaine du
                développement web, puisque ma mission consistait à réaliser un
                site internet codé de A à Z pour une jeune entreprise québécoise{" "}
                <a href="https://vialleconstruction.ca" target="_blank">
                  Voir le site
                </a>
                . <br />
                <br />
                Ce stage a débuté avec la conception du "squelette" du site
                internet jusqu'a sa mise en ligne officielle et j'ai pu
                énormément développer mes compétences en HTML, CCS, Javascript
                et PHP. Par la suite j'ai recodé le site internet avec le
                framework React afin d’optimiser la fluidité, réduire la
                quantité de code et améliorer l’expérience utilisateur.
              </div>
              <ul className="technologies">
                {["HTML", "CSS", "JavaScript", "PHP", "React"].map(
                  showTechnologies
                )}
              </ul>
              <Place place={"Canada - Saint-Adèle - Vialle Construction"} />
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
