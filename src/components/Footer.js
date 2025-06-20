import React, { useState } from "react";

const Footer = () => {
  const [copy, setCopy] = useState(false);
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
    <footer>
      <div className="main">
        <div className="links">
          <a
            href="https://www.linkedin.com/in/r%C3%A9gis-mathon-661225300/"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://github.com/Redge07" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
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
      <p>© 2025 Régis Mathon</p>
    </footer>
  );
};

export default Footer;
