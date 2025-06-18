import React, { useEffect, useRef, useState } from "react";
import showTechnologies from "../utils/showTechnologies";

const Search = ({ setActiveSearch }) => {
  const [search, setSearch] = useState("");
  const refInput = useRef();
  const technologies = [
    ["HTML", "VC"],
    ["CSS", "VC"],
    ["JavaScript", "Bubble"],
    ["SASS", "Movie"],
    ["React", "Crypto"],
    ["PHP", "User"],
    ["Python", "IRIT"],
    ["Redux", "Crypto"],
    ["SQL", "User"],
    ["Power BI", "BI"],
    ["Beautiful Soup", "IRIT_Ex"],
    ["Excel", "VBA"],
    ["VBA", "VBA"],
    ["R", "Other"],
    ["Pandas", "BI"],
    ["Matplotlib", "Other"],
    ["Git", "Other"],
    ["GitHub", "Other"],
  ];
  const countSearch = technologies.filter((technologie) =>
    technologie[0].toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    refInput.current?.focus();
  }, []);
  return (
    <div className="container-search">
      <div className="search">
        <ion-icon name="search-outline"></ion-icon>
        <input
          ref={refInput}
          type="text"
          placeholder="Chercher un outil..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <ion-icon
          name="close-outline"
          onClick={() => setActiveSearch(false)}
        ></ion-icon>
      </div>
      <ul data-lenis-prevent>
        {countSearch.length === 0 ? (
          <p>Pas de résultats</p>
        ) : (
          technologies
            .filter((technologie) =>
              technologie[0].toLowerCase().includes(search.toLowerCase())
            )
            .map((technologie) => (
              <a
                href={"#" + technologie[1]}
                onClick={() => setActiveSearch(false)}
              >
                {showTechnologies(technologie[0])}
              </a>
            ))
        )}
      </ul>
      <div className="links">
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="logo-github"></ion-icon>
      </div>
    </div>
  );
};

export default Search;
