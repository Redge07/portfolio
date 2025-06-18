import React from "react";

const Header = ({ setActiveSearch, refLogoSearch }) => {
  return (
    <header>
      <div className="container-header">
        <div className="photo-profil">
          <img src="./images/tete2.webp" alt="photo de profil" />
        </div>
        <ul>
          <a>Home</a>
          <a>Réalisations</a>
          <a>Technologies</a>
          <a>Stages</a>
          <a>Projets</a>
          <a>Parcours</a>
          <a>Job</a>
          <a>Centres d'intérêts</a>
        </ul>
        <div className="search" onClick={() => setActiveSearch(true)}>
          <ion-icon name="search-outline" ref={refLogoSearch}></ion-icon>
        </div>
      </div>
    </header>
  );
};

export default Header;
