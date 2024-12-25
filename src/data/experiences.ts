import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Senior Fullstack Developer",
    company: "Byteball Foundation",
    startDate: "Aug 2022",
    isCurrentJob: true,
    location: "Singapore",
    description: [
      "Launched a full-stack feature set for user-generated content moderation that reduced the manual review workload by 70% while maintaining community guidelines compliance.",
      "Led the integration of a front-end component library with a custom PHP backend, resulting in a 15% increase in development speed and better UX consistency.",
      "Implemented comprehensive XSS and CSRF protection in PHP applications, securing the platform against common web vulnerabilities.",
      "Reengineered a complex PHP application to embrace a serverless architecture with AWS Lambda, leading to a 30% cost saving on infrastructure.",
      "Orchestrated a migration from a legacy codebase to a modern MVC framework, resulting in a 50% reduction in code complexity and a 20% improvement in response times.",
    ],
  },
  {
    designation: "Backend Developer",
    company: "SkyLab Holding",
    startDate: "Apr 2019",
    endDate: "Jul 2022",
    isCurrentJob: false,
    location: "Singapore",
    description: [
      "Spearheaded the development of a cloud-based asset management system in PHP, boosting team productivity by simplifying file sharing and reducing retrieval times by 40%.",
      "Championed a PHP transition project for legacy applications, yielding a 25% improvement in processing efficiency and supporting forward-compatibility.",
      "Instituted a modernized error-handling framework that led to a 30% reduction in critical faults reported by end-users.",
      "Directed the PHP development team in adopting test-driven development (TDD) practices, achieving a 20% boost in code quality metrics.",
      "Redesigned a large-scale PHP monolith into modular services, improving maintainability and setting the stage for future microservices architecture migration",
    ],
  },
  {
    designation: "Frontend Developer",
    company: "Lanex Corporation",
    startDate: "May 2016",
    endDate: "Mar 2019",
    isCurrentJob: false,
    location: "Phillippines",
    description: [
      "Built large and complex website that is related real-estate service for 10 months using React, Typescript, Material UI",
      "Enhanced the core workflow engine and various API integrations with multiple external partners.",
      "Implemented a real-time messaging system and custom calendar feature and other business logic using Firebase.",
      "Contributed to boosting app functionality and revenue generation.",
      "Proactively identified technical challenges and propose innovative solutions to improve application performance, user experience, and overall system reliability.",
    ],
  },
];

export default experiences;
