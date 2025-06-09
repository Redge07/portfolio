import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Github from "../components/Github";

const Home = () => {
  const [letterActive, setLetterActive] = useState("");
  const [copy, setCopy] = useState(false);
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
              timeid = setTimeout(interval, 1000);
              return "";
            } else {
              position = [i + 1, 0];
              timeid = setTimeout(interval, 1000);
              return "";
            }
          } else {
            timeid = setTimeout(interval, 100);
            return prev.slice(0, -1);
          }
        });
      } else {
        setLetterActive((prev) => {
          if (prev.length === adjectifs[i].length - 1) {
            timeid = setTimeout(interval, 2000);
            return prev + adjectifs[i][j];
          } else {
            timeid = setTimeout(interval, 300);
            return prev + adjectifs[i][j];
          }
        });
        position = [i, j + 1];
      }
    };
    setTimeout(() => {
      interval();
    }, 500);
    return () => {
      clearTimeout(timeid);
    };
  }, []);
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
        <div className="formation">
          <p>
            Master <span>I</span>ngénierie et <span>S</span>cience des données
            orientées <span>M</span>étiers - <span>A</span>ppliquées à la{" "}
            <span>G</span>estion de production
          </p>
        </div>
        <div className="links">
          <Github />
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
