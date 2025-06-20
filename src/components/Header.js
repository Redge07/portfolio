import React from "react";

const Header = ({ setActiveSearch, refLogoSearch }) => {
  return (
    <header>
      <div className="container-header">
        <div className="photo-profil">
          <img src="./images/tete2.webp" alt="photo de profil" />
        </div>
        <ul>
          <a href="#home">Home</a>
          <a href="#realisations">Réalisations</a>
          <a href="#Other">Technologies</a>
          <a href="#stages">Stages</a>
          <a href="#projets">Projets</a>
          <a href="#parcours">Parcours</a>
          <a href="#job">Job</a>
          <a href="#centres">Centres d'intérêts</a>
        </ul>
        <div className="search" onClick={() => setActiveSearch(true)}>
          <ion-icon name="search-outline" ref={refLogoSearch}></ion-icon>
        </div>
      </div>
    </header>
  );
};

export default Header;
