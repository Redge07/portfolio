import React from "react";
import Github from "../components/Github";

const Realisations = () => {
  return (
    <div className="container-achievements">
      <h2>
        Réalisations dans le <span>Développement Web</span>
      </h2>
      <p className="intro">
        Vous trouverez toutes ces réalisations sur mon Github
      </p>
      <Github />

      <div className="achievements">
        <div className="achievement">
          <a href="https://siteludo.stat-football.fr" target="_blank">
            <div className="titled">
              <p>
                Lors d’un stage réalisé au Canada, dans la région de Montréal,
                plus précisément dans la petite ville de Sainte-Adèle, j’ai
                développé un site internet pour une entreprise de construction
                appelée Vialle Construction.
              </p>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="picture"></div>
          </a>
          <div className="description">
            <h3>Site Vialle Construction</h3>
            <p>
              Mon premier grand projet en développement web a débuté avec les
              incontournables HTML, CSS et JavaScript. Par la suite, j’ai
              entièrement redéveloppé le site en React afin d’optimiser la
              fluidité, réduire la quantité de code et améliorer l’expérience
              utilisateur.
            </p>
            <span className="date">06 Mai 2024 - 28 Juin 2024</span>
            <ul>
              <li>
                <ion-icon name="logo-html5"></ion-icon>
                <span>HTML</span>
              </li>
              <li>
                <ion-icon name="logo-css3"></ion-icon>
                <span>CSS</span>
              </li>
              <li>
                <ion-icon name="logo-javascript"></ion-icon>
                <span>JavaScript</span>
              </li>
              <li>
                <i class="fa-brands fa-php"></i>
                <span>PHP</span>
              </li>
              <li>
                <ion-icon name="logo-react"></ion-icon>
                <span>React</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="achievement">
          <a
            href="https://vacybersecurite-redge07.netlify.app/iustagecapec/"
            target="_blank"
            className="cyber-a"
          >
            <div className="titled">
              <p>
                Lors d’un stage à l’IRIT (Institut de Recherche en Informatique
                de Toulouse), j’ai développé une interface utilisateur
                permettant de parcourir une base de données grâce aux requêtes
                saisies par l’utilisateur dans des barres de recherche.
              </p>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="picture cyber-picture"></div>
          </a>
          <div className="description">
            <h3 className="cyber-h3">Interface utilisateur</h3>
            <p>
              Un projet visant à faciliter l’exploration d’une base de données
              contenant des informations liées à la cybersécurité. Cette base a
              été créée à l’aide d’un programme Python que j’ai développé durant
              mon stage. Encore une fois l'interface à été développé en HTML,
              CSS et JavaScript. Le code Python est disponible sur mon GitHub.
            </p>
            <span className="date">06 Janvier 2025 - 28 Février 2025</span>
            <ul>
              <li>
                <ion-icon name="logo-html5"></ion-icon>
                <span>HTML</span>
              </li>
              <li>
                <ion-icon name="logo-css3"></ion-icon>
                <span>CSS</span>
              </li>
              <li>
                <ion-icon name="logo-javascript"></ion-icon>
                <span>JavaScript</span>
              </li>
              <li>
                <i class="fa-brands fa-php"></i>
                <span>PHP</span>
              </li>
              <li>
                <img
                  src="./images/python.svg"
                  alt=""
                  className="cyber-python"
                />
                <span>Python</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realisations;
