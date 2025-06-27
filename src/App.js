import React, { useEffect, useRef, useState } from "react";
import "./styles/index.scss";
import Home from "./pages/Home";
import Realisations from "./pages/Realisations";
import Lenis from "@studio-freight/lenis";
import Parcours from "./pages/Parcours";
import Skills from "./pages/Skills";
import Search from "./components/Search";
import Header from "./components/Header";
import Interets from "./pages/Interets";
import Footer from "./components/Footer";

const App = () => {
  const nbEtoiles = 60;
  // Liste pour faire le map qui fera un div pour chaque étoile
  const listEtoile = [];
  // La balise qui contient toutes les étoiles
  const refEtoiles = useRef();
  // Pour savoir si y'a le composant pour rechercher un outils
  const [activeSearch, setActiveSearch] = useState(false);
  // Balise qui contient le composant Search
  const refSearch = useRef();
  // L'icone en forme de loupe
  const refLogoSearch = useRef();
  // Pour remplir la liste des étoiles pour le map
  for (let i = 1; i <= nbEtoiles; i++) {
    listEtoile.push(i);
  }
  // Un useEffect pour ajouter un changement d'opacity different entre chaque étoile
  useEffect(() => {
    const etoiles = refEtoiles.current.querySelectorAll("div");
    etoiles.forEach((etoile) => {
      const time = Math.floor(Math.random() * 10000);
      let opacity = time > 5000 ? 0.5 : 0;

      setInterval(() => {
        if (opacity === 0.5) {
          opacity = 0;
          etoile.style.opacity = opacity;
        } else {
          opacity = 0.5;
          etoile.style.opacity = opacity;
        }
      }, time);
    });
  }, []);

  // Un useEffect qui ajoute un évènement de clique sur la plage pour dire que le composant de search disparait si on ne clique pas sur lui ou sur le logo de la loupe
  useEffect(() => {
    const handleClick = (e) => {
      if (
        refSearch.current &&
        !refSearch.current.contains(e.target) &&
        e.target != refLogoSearch.current
      ) {
        setActiveSearch(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Un useEffect qui ajoute un design stylé au scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div
      className="App"
      // Quand le composant de search est à l'écran, la page est de taille 100 vh pour empecher le scroll
      style={activeSearch ? { height: "100vh" } : { height: "auto" }}
    >
      <Header setActiveSearch={setActiveSearch} refLogoSearch={refLogoSearch} />
      <Home activeSearch={activeSearch} />
      <div className="etoiles" ref={refEtoiles}>
        {listEtoile.map((etoile) => {
          const left = Math.floor(Math.random() * 100);
          const top = Math.floor(Math.random() * 100);

          return (
            <div
              key={etoile}
              style={{ top: `${top}%`, left: `${left}%` }}
              className="etoile"
            ></div>
          );
        })}
      </div>
      <div
        className="circle"
        style={activeSearch ? { filter: "blur(5px)" } : { filter: "none" }}
      >
        <div></div>
      </div>
      <Realisations />
      <Parcours />
      <Skills />
      <Interets />
      <Footer />
      {activeSearch && (
        <div className="search-app" ref={refSearch}>
          <Search setActiveSearch={setActiveSearch} />
        </div>
      )}
    </div>
  );
};

export default App;
