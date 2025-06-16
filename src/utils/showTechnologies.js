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
          <img src="./images/logo/python.svg" alt="" className="icon" />
          <span>Python</span>
        </li>
      );
    case "Redux":
      return (
        <li>
          <img src="./images/logo/redux.png" alt="" className="icon" />
          <span>Redux</span>
        </li>
      );
    case "SQL":
      return (
        <li>
          <img
            src="./images/logo/sql.png"
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
    case "Power BI":
      return (
        <li>
          <img src="./images/logo/powerbi.svg" alt="" className="icon" />
          <span>Power BI</span>
        </li>
      );
    case "VBA":
      return (
        <li>
          <img
            src="./images/logo/vba.svg"
            alt=""
            className="icon"
            style={{ width: "30px" }}
          />
          <span>VBA</span>
        </li>
      );
    case "Excel":
      return (
        <li>
          <img src="./images/logo/excel.png" alt="" className="icon" />
          <span>Excel</span>
        </li>
      );
    case "SASS":
      return (
        <li>
          <img src="./images/logo/sass.svg" alt="" className="icon" />
          <span>SASS</span>
        </li>
      );
    case "R":
      return (
        <li>
          <img src="./images/logo/R.png" alt="" className="icon" />
          <span>R Studio</span>
        </li>
      );
    case "Pandas":
      return (
        <li>
          <img src="./images/logo/pandas.svg" alt="" className="icon" />
          <span>Pandas</span>
        </li>
      );
    case "Matplotlib":
      return (
        <li>
          <img src="./images/logo/matplotlib.png" alt="" className="icon" />
          <span>Matplotlib</span>
        </li>
      );
    case "Git":
      return (
        <li>
          <img src="./images/logo/git.svg" alt="" className="icon" />
          <span>Git</span>
        </li>
      );
    case "GitHub":
      return (
        <li>
          <img
            style={{ borderRadius: "50%" }}
            src="./images/logo/github.png"
            alt=""
            className="icon"
          />
          <span>GitHub</span>
        </li>
      );
    default:
      return <li>{technologie}</li>;
  }
};

export default showTechnologies;
