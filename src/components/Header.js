import React from "react";
import "../styles/components/header.scss";

const Header = () => {
  return (
    <header>
      <div className="photo-profil">
        <img src="./images/tete2.webp" alt="photo de profil" />
      </div>
      <ul>
        <li>Home</li>
        <li>Réalisations</li>
        <li>Technologies</li>
        <li>Stages</li>
        <li>Projets</li>
        <li>Parcours</li>
        <li>Job</li>
        <li>Centres d'intérêts</li>
      </ul>
      <div className="search">
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </header>
  );
};

export default Header;
