const dataActivities = [
  {
    identity: "ISM-AG",
    period: 1,
    name: (
      <h4>
        Master ISM-AG{" "}
        <span>
          (Ingénierie et science des données orientées métiers appliquées - à la
          gestion de production)
        </span>
      </h4>
    ),
    date1: "2024-2026",
    date2: "",
    content: (
      <p>
        Un master où l'objectif consiste à pouvoir donner du sens aux données de
        l'entreprise pour de l'aide à la décision grâce à des compétences en
        analyse de données, en optimisation et en ingénierie informatique.
      </p>
    ),
    technologies: [],
    place: "Université Toulouse Jean Jaurès",
  },
  {
    identity: "MIASHS",
    period: 2,
    name: (
      <h4>
        Licence MIASHS{" "}
        <span>
          (Licence mathématique et informatiques aplliquées aux sciences
          humaines et sociales)
        </span>
      </h4>
    ),
    date1: "2021-2024",
    date2: "",
    content: (
      <p>
        Cette licence m’a permis de développer des compétences en analyse et
        manipulation de données, ainsi que de découvrir le monde de
        l’informatique à travers l’apprentissage de langages de programmation et
        des bases du développement web.
      </p>
    ),
    technologies: [],
    place: "Université Toulouse Jean Jaurès",
  },
  {
    identity: "Bac",
    period: 3,
    name: <h4>Bac général</h4>,
    date1: "2021",
    date2: "",
    content: (
      <ul>
        <li>Mathématiques</li>
        <li>Physique-Chimie</li>
        <li>Science de l'ingénieur</li>
      </ul>
    ),
    technologies: [],
    place: "Lycée Charles et Adrien Dupuy Le Puy-en-Velay",
  },
  {
    identity: "U9",
    period: 4,
    name: <h4>Attestation de formation Module U9</h4>,
    date1: "2019",
    date2: "",
    content: (
      <p>
        Formation consistant a être en capacité de prendre en charge un groupe
        d’enfant âgé de 7 a 8 ans et d'animer une séance d’entraînement au sein
        d'une école de foot
      </p>
    ),
    technologies: [],
    place: "Lycée Charles et Adrien Dupuy Le Puy-en-Velay",
  },
  {
    identity: "BI",
    period: 1,
    name: <h4>Projet Power BI</h4>,
    date1: "2024",
    date2: "",
    content: (
      <p>
        Projet dans lequel notre professeur nous a confié un vaste jeu de
        données désorganisé sur des brûlages dans la région Midi-Pyrénées.
        L'objectif était de créer un tableau de bord interactif avec Power BI,
        mettant en évidence des graphiques pertinents pour extraire des
        informations clés. Le projet se concluait par une présentation orale,
        durant laquelle nous devions nous mettre dans la peau d’un data analyst
        afin d’expliquer nos analyses et conclusions.
      </p>
    ),
    technologies: ["Python", "Power BI"],
    place: "",
  },
  {
    identity: "VBA",
    period: 3,
    name: <h4>Interface VBA</h4>,
    date1: "2023",
    date2: "",
    content: (
      <p>
        Projet réalisé en méthode agile, dont l’objectif était de développer des
        fonctionnalités en VBA sur Excel. Le contexte simulait une situation
        professionnelle où nous devions répondre à une demande client, en
        organisant notre travail par sprints pour assurer un développement
        structuré.
      </p>
    ),
    technologies: ["Excel", "VBA"],
    place: "",
  },
  {
    identity: "IRIT",
    period: 1,
    name: (
      <h4>
        Stage IRIT
        <span>(Institut de recherche en informatique de Toulouse)</span>
      </h4>
    ),
    date1: "",
    date2: "06 Janvier - 28 Février 2025",
    content: (
      <p>
        Extraction de données sur le site internet de CAPEC{" "}
        <a href="https://capec.mitre.org/" target="_blank">
          Voir le site
        </a>{" "}
        , qui recense les attaques en cybersécurité : j'y ai effectué du web
        scraping afin de concevoir une base de données et par la suite j'ai
        réalisé une interface utilisateur pour consulter la base de données. On
        pouvait voir le site internet comme une base de données où chaque
        attaque était associée à un identifiant, un nom, une description et
        d'autres information. <br />
        <br />
        Ma mission consistait à extraire et structurer ces données afin de créer
        un tableau résumant les informations clés de chaque attaque. Cette tâche
        relevait du web scraping, une technique qui permet d’extraire
        automatiquement des données d’un site web en analysant son code HTML.
      </p>
    ),
    technologies: ["Python", "Beautiful Soup", "NLTK"],
    place: "Maison de la recherche UT2J",
  },
  {
    identity: "Vialle Construction",
    period: 2,
    name: <h4>Stage Vialle Construction</h4>,
    date1: "",
    date2: "06 Mai - 28 Juin 2024",
    content: (
      <p>
        Ma mission s'est déroulé au Canada dans le domaine du développement web,
        puisque ma mission consistait à réaliser un site internet codé de A à Z
        pour une jeune entreprise québécoise{" "}
        <a href="https://vialleconstruction.ca" target="_blank">
          Voir le site
        </a>
        . <br />
        <br />
        Ce stage a débuté avec la conception du "squelette" du site internet
        jusqu'a sa mise en ligne officielle et j'ai pu énormément développer mes
        compétences en HTML, CCS, Javascript et PHP. Par la suite j'ai recodé le
        site internet avec le framework React afin d’optimiser la fluidité,
        réduire la quantité de code et améliorer l’expérience utilisateur.
      </p>
    ),
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "React"],
    place: "Canada - Saint-Adèle - Vialle Construction",
  },
  {
    identity: "Web scraping",
    period: 2,
    name: <h4>Web Scraping</h4>,
    date1: "2024",
    date2: "",
    content: (
      <p>
        L'objectif était d'extraire des données à partir du code HTML de pages
        web afin de constituer une base de données. Le web scraping a été
        réalisé sur les pages d'AlloCiné, qui répertorie des milliers de films.
        Le but était de développer un programme capable de parcourir
        automatiquement les pages contenant des films et d'en extraire des
        informations telles que l'identifiant, le nom, le résumé, ainsi que
        d'autres données pertinentes.
      </p>
    ),
    technologies: ["Python", "Beautiful Soup", "SQL"],
    place: "",
  },
  {
    identity: "Bénévolat",
    period: 2,
    name: <h4>Bénévolat Festival</h4>,
    date1: "2022-2024",
    date2: "",
    content: (
      <p>
        Bénévole auprès du festival de Mézilhac pour l'organisation du
        stationnement des voitures et installation de la place principal
      </p>
    ),
    technologies: [],
    place: "Mézilhac - Ardèche",
  },
  {
    identity: "Myrtilles",
    period: 1,
    name: <h4>Cueillette de myrtilles</h4>,
    date1: "2020-2024",
    date2: "",
    content: (
      <p>
        Chaque été, notamment pendant le mois de juillet, je fais la saison des
        myrtilles où je ramasse des myrtilles sauvages afin de les revendre à
        des particuliers. Le réveil se fait à 5h du matin pour commencer la
        cueillette au lever du soleil, alors que la rosée est encore présente.
        Je travaille ainsi jusqu’à 11h, puis je trie les myrtilles à l’aide
        d’une machine dans l’après-midi pour les vendre triées.
      </p>
    ),
    technologies: [],
    place: "Mézilhac - Ardèche",
  },
];

export default dataActivities;
