const dataAchievements = [
  {
    link_id: "Petanque",
    link: "https://petanque-play-pro.base44.app/demo",
    colorBottom: "rgb(39, 245, 207)",
    colorTop: "rgb(53, 148, 102)",
    colorBox: "rgb(184, 255, 219)",
    summary:
      "Cette application a pour but de faciliter l’organisation de tournois de pétanque en permettant aux organisateurs de créer leurs tournois, d’inscrire des joueurs, et de suivre les résultats en temps réel. L'application est encore en cours de développement mais je mets a disposition une version démo pour ce faire une idée de l'application",
    image: "petanque",
    title: "Application Full Stack Pétanque",
    description: (
      <p>
        Mon plus gros projet en développement web, c'est une application full
        stack que je développe seul, ce qui me fait utiliser toutes les
        compétences que j'ai acquises. Le front-end est développé en React et le
        back-end en Node.js avec une base de données SQL. Côté front-end,
        l'application est séparée en 2 grandes sections : une première pour les
        organisateurs de tournois, qui peuvent tout gérer, de l'inscription des
        joueurs jusqu'à la gestion du tournoi pour arriver au vainqueur final.
        La seconde est dédiée aux participants, qui peuvent s'inscrire aux
        tournois créés par les organisateurs et suivre leur avancée en
        connaissant leur adversaire et les résultats des autres matchs. <br />{" "}
        <br />
        Côté back-end, j'ai mis en place une API REST qui gère toutes les
        requêtes du front-end. C'est vraiment la partie la plus complexe du
        projet, avec la gestion de la logique métier pour le déroulement du
        tournoi et la gestion des utilisateurs avec leurs rôles (organisateur ou
        participant). Derrière, une base de données SQL stocke toutes les
        données de l'application : les users, les tournois, les matchs, les
        joueurs, etc. <br /> <br />
        Il y a aussi un système d'authentification avec création de compte via
        email et mot de passe, suivi d'une confirmation par mail, mais aussi une
        connexion rapide via Google en un clic. La session est ensuite gérée
        avec des tokens JWT. J'ai pour objectif de rendre l'application
        disponible sur iOS et Android. Pour ça, j'ai découvert React Native, un
        framework mobile qui repose sur les mêmes bases que React, ce qui m'a
        permis de réutiliser une grande partie du code front-end pour le mobile.{" "}
        <br /> <br />
        J'ai aussi commencé à intégrer des fonctionnalités comme l'envoi de
        notifications pour prévenir les joueurs de leur prochain match, la
        récupération de la localisation des joueurs pour aider les
        organisateurs, et l'intégration de Stripe pour des fonctionnalités
        premium. L'objectif final est d'avoir le front-end web hébergé sur
        Hostinger, le back-end sur Render, la base de données sur Hostinger
        également, et l'application mobile disponible sur iOS et Android.
        L'application est encore en cours de développement, mais je mets à
        disposition une version démo pour se faire une idée.
      </p>
    ),
    date: "Septembre 2025 - ...",
    technologies: ["React", "Node.js", "SQL", "Tailwind", "ReactNative"],
  },
  {
    link_id: "VC",
    link: "https://vialleconstruction.ca",
    colorBottom: "yellow",
    colorTop: "rgb(183, 119, 0)",
    colorBox: "rgb(255, 255, 48)",
    summary:
      "Lors d’un stage réalisé au Canada, dans la région de Montréal, plus précisément dans la petite ville de Sainte-Adèle, j’ai développé un site internet pour une entreprise de construction appelée Vialle Construction.",
    image: "vialleconstruction",
    title: "Site Vialle Construction",
    description:
      "Mon premier grand projet en développement web a débuté avec les incontournables HTML, CSS et JavaScript. Par la suite, j’ai entièrement redéveloppé le site en React afin d’optimiser la fluidité, réduire la quantité de code et améliorer l’expérience utilisateur.",
    date: "06 Mai 2024 - 28 Juin 2024",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "React"],
  },
  {
    link_id: "IRIT",
    link: "https://vacybersecurite-redge07.netlify.app/iustagecapec/",
    colorBottom: "white",
    colorTop: "rgb(0, 157, 255)",
    colorBox: "rgb(0, 38, 255)",
    summary:
      "Lors d’un stage à l’IRIT (Institut de Recherche en Informatique de Toulouse), j’ai développé une interface utilisateur permettant de parcourir une base de données grâce aux requêtes saisies par l’utilisateur dans des barres de recherche.",
    image: "cybersecurite",
    title: "Interface utilisateur",
    description:
      "Un projet visant à faciliter l’exploration d’une base de données contenant des informations liées à la cybersécurité. Cette base a été créée à l’aide d’un programme Python que j’ai développé durant mon stage. Encore une fois l'interface à été développé en HTML, CSS et JavaScript. Le code Python est disponible sur mon GitHub.",
    date: "06 Janvier 2025 - 28 Février 2025",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Python"],
  },
  {
    link_id: "Movie",
    link: "https://appmovieredge.netlify.app/",
    colorBottom: "rgb(255, 123, 253)",
    colorTop: "rgb(90, 0, 142)",
    colorBox: "pink",
    summary:
      "Application React permettant de recenser les films issus d’une API en ligne. Elle offre des fonctionnalités telles que la recherche de films et leur tri en fonction de leur note.",
    image: "movie",
    title: "App Movie",
    description:
      "Ce projet m’a permis de maîtriser le framework React en exploitant des fonctionnalités essentielles telles que les hooks, les props, et la gestion avancée des composants. L’application affiche une liste de films consultable via des recherches dynamiques, offre un tri par notes, et permet à l’utilisateur de sauvegarder ses favoris grâce au localStorage.",
    date: "Mars 2025",
    technologies: ["HTML", "SASS", "JavaScript", "React"],
  },
  {
    link_id: "Crypto",
    link: "https://crypto-market-redge07.netlify.app/",
    colorBottom: "rgb(248, 156, 156)",
    colorTop: "rgb(252, 0, 0)",
    colorBox: "rgb(196, 68, 68)",
    summary:
      "Nouvelle application React permettant de recenser les données liées aux cryptomonnaies, en s’appuyant sur l’API en ligne fournie par CoinGecko. L’interface présente des statistiques générales en haut de l’écran, suivies d’un tableau détaillé regroupant les informations pertinentes pour chaque cryptomonnaie.",
    image: "crypto",
    title: "Crypto Watch",
    description:
      "Cette application s’est principalement articulée autour de la manipulation de données et de l’optimisation du code, avec une logique d’affichage répétitive sur l’ensemble des lignes. L’utilisation de la librairie Recharts a permis d’intégrer des visualisations pertinentes pour le suivi de l’évolution des marchés. Un système de tri simple et efficace a été mis en place, et l’ajout d’une fonctionnalité de gestion des favoris a été l’occasion d’explorer Redux, une bibliothèque de gestion d’état, idéale pour gérer les données partagées entre plusieurs composants de manière cohérente.",
    date: "Mai 2025",
    technologies: ["React", "Redux"],
  },
  {
    link_id: "Pokemon",
    link: "https://pokenative.netlify.app/",
    colorBottom: "rgb(248, 156, 156)",
    colorTop: "rgb(255, 0, 102)",
    colorBox: "rgb(196, 68, 68)",
    summary:
      "Application développée en React Native qui m'a permis de décourir le domaine du développement mobile. L'application permet de parcourir une liste de Pokémon et d’accéder à des détails spécifiques pour chaque créature. (L'application est fait pour une application mobile classique, mais elle est également compatible avec les navigateurs web.)",
    image: "pokemon",
    title: "Pokemon Explorer",
    description:
      "Cette application mobile regroupe les bases du développement avec React Native. L’objectif était de reprendre mes compétences en React et de les appliquer au développement mobile afin d’élargir ma palette de compétences. Le fonctionnement est simple : on peut visualiser les Pokémon et naviguer directement entre eux sans revenir à la page d’accueil. Cela m’a permis de mieux comprendre la logique de navigation dans une application mobile. J’ai également intégré des animations pour rendre l’expérience plus fluide et agréable.",
    date: "Décembre 2025",
    technologies: ["ReactNative"],
  },
  // {
  //   link_id: "User",
  //   link: "https://stat-football.fr/",
  //   colorBottom: "rgb(0, 204, 255)",
  //   colorTop: "rgb(0, 0, 239)",
  //   colorBox: "rgb(0, 255, 179)",
  //   summary:
  //     "Un site internet mettant principalement en avant un système d'authentification, avec la création d’un compte suivie d’une connexion menant à l’espace personnel de l’utilisateur. Pour valider son compte, l’utilisateur reçoit un e-mail de confirmation dans sa boîte de réception.",
  //   image: "login",
  //   title: "UserAccess",
  //   description:
  //     "Ce projet se concentre principalement sur le back-end, avec une interface utilisateur directement reliée à une base de données via PHP. Lors de la création de compte ou de la connexion, le code PHP traite les données du formulaire et exécute des requêtes SQL pour interagir avec une base de données MySQL. Avant toute insertion ou authentification, un système de validation assure que les informations saisies respectent certains critères, tels qu’une adresse e-mail valide et un mot de passe conforme. Une fois les données validées, la page se met à jour automatiquement afin d’afficher les informations personnalisées de l’utilisateur.",
  //   date: "Avril - Mai 2024",
  //   technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  // },
  {
    link_id: "Bubble",
    link: "https://bubble-game-redge07.netlify.app/",
    colorBottom: "rgb(218, 255, 183)",
    colorTop: "rgb(32, 125, 0)",
    colorBox: "rgb(140, 227, 0)",
    summary:
      "Un petit jeu de bulles où le but est d’éclater un maximum de bulles dans un temps imparti. L’utilisateur peut choisir la durée du jeu, et le score s’affiche instantanément à la fin du temps choisi. Les bulles apparaissent aléatoirement en bas de l’écran, accompagnées d’un petit bruitage à chaque fois qu’une bulle est éclatée.",
    image: "bubble",
    title: "Bubble Game",
    description:
      "Ce jeu avait surtout pour but d'exploiter tout le potentiel de JavaScript, montrant qu'avec un peu de créativité, on peut créer de nombreuses petites fonctionnalités. Le code est extrêmement condensé, utilisant un système de boucles à intervalles réguliers pour la création des bulles.",
    date: "Décembre 2024",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export default dataAchievements;
