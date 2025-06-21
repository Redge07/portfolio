import React, { useEffect, useRef } from "react";

const Interets = () => {
  const refInterests = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          refInterests.current.style.opacity = "1";
          refInterests.current.style.transform = "translate(0px, 0px) scale(1)";
        } else {
          refInterests.current.style.opacity = "0";
          refInterests.current.style.transform =
            "translate(-50%, 100px) scale(0.8)";
        }
      });
    });
    observer.observe(refInterests.current);
    return () => {
      observer.unobserve(refInterests.current);
    };
  }, []);
  return (
    <div className="container-interests">
      <div className="smooth" id="centres"></div>
      <h2>
        Centres d'<span>intérêts</span>
      </h2>
      <div className="container" ref={refInterests}>
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
