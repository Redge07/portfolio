import React, { useEffect, useState } from "react";
import "../styles/pages/home.scss";
import Header from "../components/Header";

const Home = () => {
  const [letterActive, setLetterActive] = useState("");
  const adjectifs = ["développeur", "data analyst", "sportif"];
  useEffect(() => {
    let timeid;
    let position = [0, 0];
    const interval = () => {
      const [i, j] = position;
      if (j === adjectifs[i].length) {
        setLetterActive((prev) => {
          if (prev === "") {
            if (i === adjectifs.length - 1) {
              position = [0, 0];
              return "";
            } else {
              position = [i + 1, 0];
              return "";
            }
          } else {
            return prev.slice(1);
          }
        });
        timeid = setTimeout(interval, 100);
      } else {
        setLetterActive((prev) => {
          if (j === 0) {
            return adjectifs[i][j];
          } else {
            return prev + adjectifs[i][j];
          }
        });
        position = [i, j + 1];
        timeid = setTimeout(interval, 500);
      }
    };
    interval();
    return () => {
      clearTimeout(timeid);
    };
  }, []);
  return (
    <div className="container-home">
      <Header />
      <div className="cover">
        <div className="name">
          <h2>Régis Mathon</h2>
        </div>
        <div className="profile">
          <p>
            je suis <span>{letterActive}</span>
          </p>
        </div>
        <div className="links">
          <div className="github">
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="cv">
            <a
              href="https://www.vialleconstruction.ca/realisations/IMG/Traverse/1%20(1).webp"
              download
              target="_blank"
            >
              Télécharger mon CV
            </a>
            <ion-icon name="download-outline"></ion-icon>
          </div>
          <div className="mail">
            <a href="mailto:mathonregis28@gmail.com">mathonregis28@gmail.com</a>
            <button>Copier</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
