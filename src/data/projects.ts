import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "fisherhouse",
    title: "fisherhouse",
    description:
      "Fisher House Foundation builds comfort homes where military & veteran families can stay free of charge, while a loved one is in the hospital.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://fisherhouse.org/",
    tags: ["Node.js", "Next.js", "MongoDB", "Stripe"],
  },
  {
    id: "onezoo",
    title: "onezoo",
    description:
      "ONEzoo B2B online ordering platforms",
    icon: "/skills/php.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://onezoo.com.au/",
    tags: ["PHP", "MySQL", "Stripe"],
  },
  {
    id: "dejavusports",
    title: "dejavusports",
    description:
      "It provides a platform to use your baseball knowledge to outsmart your friends and other players.  It is obviously analogous to Casino Craps and thus gambling, and we hope all players will play responsibly.",
    icon: "/skills/Wordpress.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://dejavusports.com/",
    tags: ["WordPress"],
  },
  {
    id: "social-media-app-flutter",
    title: "Social Media App",
    description:
      "A social media mobile application developed using Flutter, GetX, Firebase Notifications and Hive.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/suptechie/social-media-app-flutter",
    tags: ["Flutter", "Dart", "GetX", "Hive"],
  },
  {
    id: "social-media-api-nodejs",
    title: "Social Media API",
    description:
      "A RESTful API developed using Node.js, Express.js, and MongoDB to integrate backend and frontend with ease.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/suptechie/social-media-api-nodejs",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "E-commerce API",
    description:
      "A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/suptechie/ecommerce-api-nodejs",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },
]
export default projects;
