import React from "react";

const Interets = () => {
  return (
    <div className="container-interests">
      <div className="smooth" id="centres"></div>
      <h2>
        Centres d'<span>intérêts</span>
      </h2>
      <div className="container">
        <div className="interet">
          <h3>Football</h3>
          <div className="fond"></div>
        </div>
        <div className="interet">
          <h3>Voyages</h3>
          <div className="fond"></div>
        </div>
        <div className="interet">
          <h3>Développement Web</h3>
          <div className="fond"></div>
        </div>
      </div>
    </div>
  );
};

export default Interets;
