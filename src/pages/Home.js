import React, { useEffect, useState } from "react";
import Github from "../components/Github";

const Home = ({ activeSearch }) => {
  // Représente l'avancée du mot
  const [letterActive, setLetterActive] = useState("");
  const [copy, setCopy] = useState(false);
  const adjectifs = ["développeur", "data analyst", "sportif"];
  // Un useEffect qui ajoute l'animation des adjectifs, pour bien comprendre la logique, suit l'algo en partant du fait qu'on est à la 1ère lettre du premier mot
  useEffect(() => {
    let timeid;
    // Pour savoir on est à quelle lettre de quelle adjectif, par exemple ici c'est le d de "développeur"
    let position = [0, 0];
    const interval = () => {
      // Au début d'un interval on récupère directement la position de la lettre de l'adjectif, mais du coup c'est la position de la fin de l'interval précedent
      const [i, j] = position;
      // Si l'index de la lettre est égale à la longueur de son mot alors (ca veut dire qu'on a deja parcouru tout le mot)
      if (j === adjectifs[i].length) {
        // On va forcément modifier l'avancée du mot
        setLetterActive((prev) => {
          // Si quand on commence l'interval l'avancée est vide, ça veut dire qu'on a fini d'effacer le mot et pourra passer au suivant après
          if (prev === "") {
            // Si on a fini d'effacter le dernier adjectif, alors on va reprendre depuis le début en prenant la première lettre du premeir mot
            if (i === adjectifs.length - 1) {
              position = [0, 0];
              timeid = setTimeout(interval, 1000);
              return "";
              // Sinon on passe à la première lettre du mot suivant
            } else {
              position = [i + 1, 0];
              timeid = setTimeout(interval, 1000);
              return "";
            }
            // Pour enlever le mot en partant de la fin
          } else {
            timeid = setTimeout(interval, 100);
            return prev.slice(0, -1);
          }
        });
        // Si nous ne sommes pas à la dernière lettre d'un mot
      } else {
        // On va modier le mot affiché
        setLetterActive((prev) => {
          // Si la longueur du mot représente la longueur du mot auquel il est associé, donc est à la fin d'un mot
          if (prev.length === adjectifs[i].length - 1) {
            // Avant de commencer à effacer le mot, on le laisse 2 secondes au lieu de 500ms
            timeid = setTimeout(interval, 2000);
            return prev + adjectifs[i][j];
          } else {
            // Sinon a additione le mot affiché plus la lettre suivante
            timeid = setTimeout(interval, 300);
            return prev + adjectifs[i][j];
          }
        });
        // Et donc on reste sur le meme mot est on va à la lettre suivante
        position = [i, j + 1];
      }
    };
    // Au lancement du composant on lance un setinterval qui éxècute une fonction toutes les 500 mili secondes
    setTimeout(() => {
      interval();
    }, 500);
    return () => {
      clearTimeout(timeid);
    };
  }, []);
  // Fonction pour copier un mot
  const handleCopy = (e) => {
    navigator.clipboard.writeText("mathonregis28@gmail.com");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
    const button = e.currentTarget;
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 100);
  };
  return (
    <div
      className="container-home"
      style={
        activeSearch
          ? { filter: "blur(5px)", pointerEvents: "none", opacity: 0.5 }
          : { filter: "none", pointerEvents: "auto", opacity: 1 }
      }
    >
      <div className="smooth" id="home"></div>
      <div className="cover">
        <div className="name">
          <h2>Régis Mathon</h2>
        </div>
        <div className="profile">
          <p>
            je suis <span>{letterActive}</span>
          </p>
        </div>
        <div className="formation">
          <p>
            Master <span>I</span>ngénierie et <span>S</span>cience des données
            orientées <span>M</span>étiers - <span>A</span>ppliquées à la{" "}
            <span>G</span>estion de production
          </p>
        </div>
        <div className="links">
          <div className="left-links">
            <Github />
            <div className="cv">
              <a href="./images/CV.pdf" download target="_blank">
                Télécharger mon CV
              </a>
              <ion-icon name="download-outline"></ion-icon>
            </div>
          </div>
          <div className="mail">
            <a href="mailto:mathonregis28@gmail.com">mathonregis28@gmail.com</a>
            <button
              onClick={(e) => handleCopy(e)}
              style={
                copy
                  ? { background: "#07d707", color: "white" }
                  : { background: "white", color: "black" }
              }
            >
              {copy ? "Copié !" : "Copier"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
