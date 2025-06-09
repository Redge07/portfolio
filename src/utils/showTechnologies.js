const showTechnologies = (technologie) => {
  switch (technologie) {
    case "HTML":
      return (
        <li>
          <ion-icon
            name="logo-html5"
            className="icon"
            style={{ color: "rgb(227, 121, 0)" }}
          ></ion-icon>
          <span>HTML</span>
        </li>
      );
    case "CSS":
      return (
        <li>
          <ion-icon
            name="logo-css3"
            className="icon"
            style={{ color: "rgb(0, 132, 255)" }}
          ></ion-icon>
          <span>CSS</span>
        </li>
      );
    case "JavaScript":
      return (
        <li>
          <ion-icon
            name="logo-javascript"
            className="icon"
            style={{ color: "yellow" }}
          ></ion-icon>
          <span>JavaScript</span>
        </li>
      );
    case "PHP":
      return (
        <li style={{ gap: "15px" }}>
          <i
            className="fa-brands fa-php icon"
            style={{ color: "rgb(57, 44, 196)" }}
          ></i>
          <span>PHP</span>
        </li>
      );
    case "Python":
      return (
        <li>
          <img src="./images/python.svg" alt="" className="icon" />
          <span>Python</span>
        </li>
      );
    case "Redux":
      return (
        <li>
          <img src="./images/redux.png" alt="" className="icon" />
          <span>Redux</span>
        </li>
      );
    case "SQL":
      return (
        <li>
          <img
            src="./images/sql.png"
            alt=""
            className="icon"
            style={{ width: "50px" }}
          />
        </li>
      );
    case "React":
      return (
        <li>
          <ion-icon
            name="logo-react"
            className="icon"
            style={{ color: "rgb(0, 229, 255)" }}
          ></ion-icon>
          <span>React</span>
        </li>
      );
    default:
      return null;
  }
};

export default showTechnologies;
