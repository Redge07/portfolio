const dataAchievements = [
  {
    link: "https://siteludo.stat-football.fr",
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
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
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
    link: "https://stat-football.fr/",
    colorBottom: "rgb(0, 204, 255)",
    colorTop: "rgb(0, 0, 239)",
    colorBox: "rgb(0, 255, 179)",
    summary:
      "Un site internet mettant principalement en avant un système d'authentification, avec la création d’un compte suivie d’une connexion menant à l’espace personnel de l’utilisateur. Pour valider son compte, l’utilisateur reçoit un e-mail de confirmation dans sa boîte de réception.",
    image: "login",
    title: "UserAccess",
    description:
      "Ce projet se concentre principalement sur le back-end, avec une interface utilisateur directement reliée à une base de données via PHP. Lors de la création de compte ou de la connexion, le code PHP traite les données du formulaire et exécute des requêtes SQL pour interagir avec une base de données MySQL. Avant toute insertion ou authentification, un système de validation assure que les informations saisies respectent certains critères, tels qu’une adresse e-mail valide et un mot de passe conforme. Une fois les données validées, la page se met à jour automatiquement afin d’afficher les informations personnalisées de l’utilisateur.",
    date: "Avril - Mai 2024",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  },
  {
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
