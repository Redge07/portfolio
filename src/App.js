import React, { useEffect, useRef, useState } from "react";
import "./styles/index.scss";
import Home from "./pages/Home";
import Realisations from "./pages/Realisations";
import Lenis from "@studio-freight/lenis";
import Parcours from "./pages/Parcours";
import Skills from "./pages/Skills";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const nbEtoiles = 60;
  const listEtoile = [];
  const refEtoiles = useRef();
  const [activeSearch, setActiveSearch] = useState(false);
  const refSearch = useRef();
  const refLogoSearch = useRef();
  for (let i = 1; i <= nbEtoiles; i++) {
    listEtoile.push(i);
  }
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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
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
      style={activeSearch ? { height: "100vh" } : { height: "auto" }}
    >
      <Header setActiveSearch={setActiveSearch} refLogoSearch={refLogoSearch} />
      <Home
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        refLogoSearch={refLogoSearch}
      />
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
      {activeSearch && (
        <div className="search-app" ref={refSearch}>
          <Search setActiveSearch={setActiveSearch} />
        </div>
      )}
    </div>
  );
};

export default App;
