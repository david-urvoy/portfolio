import type { Cv } from "@/types/cv"

export const cv: Cv = {
  name: "David Urvoy",
  title: "Expert technique & développeur fullstack (React.js & Node.js)",
  location: "Lyon",
  email: "pro@david.urvoy.email",
  website: "https://david-urvoy.github.io",
  phone: "0782450298",
  github: "david-urvoy",
  linkedin: "david-urvoy-198611b1",

  experiences: [
    {
      title: "Lead Developer Web Front",
      company: "Descours & Cabaud",
      location: "Lyon",
      period: "Septembre 2024 - Aujourd'hui",
      description: "Lead dev Front pour la refonte du site e-commerce multi-marques (Prolians, Hydralians, Dexis).",
      details: `
Refonte du site Magento 2 vers un stack React / Next.js 15 / Tailwind / Apollo GraphQL.
Lead front dans la squad du compte client puis du tunnel de commande (~8 devs).
Expertise OAuth2/JWT, optimisation GraphQL, caching, formation et revue de code.
Organisation technique de la squad (backlog, rétrospectives, accompagnement développeurs).
      `,
      stack: [
        "TypeScript",
        "React",
        "Next.js",
        "GraphQL",
        "Apollo",
        "Jotai",
        "TailwindCSS",
        "Vitest",
        "React Testing Library",
        "Storybook"
      ],
    },
    {
      title: "Développeur Web",
      company: "Carrier",
      location: "Lyon",
      period: "Décembre 2022 - Décembre 2023",
      description: "Développement fullstack de l'application Matrix pour configuration et versioning des machines Carrier.",
      details: `
Application pour équipes R&D, marketing et vente.
Gestion configuration et versioning des machines, options et incompatibilités.
Backend CRUD généré via Prisma et servi par Apollo GraphQL. Hébergé sur AWS (Lambdas, CloudFront, RDS).
      `,
      stack: [
        "TypeScript",
        "React",
        "GraphQL",
        "Tanstack Query",
        "Zustand",
        "Vite",
        "Node.js",
        "Apollo GraphQL",
        "Prisma",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Vitest",
        "Playwright",
        "React Testing Library"
      ],
    },
    {
      title: "Développeur Web",
      company: "ContentSide",
      location: "Lyon",
      period: "Septembre 2021 - Juin 2022",
      description: "Développement de microservices pour une plateforme d'analyse sémantique.",
      details: `
Socle technique pour microservices (REST API, producers/subscribers).
Module parsing, débalisage et balisage HTML pour analyse sémantique.
Maintenance évolutive/corrective d'application éditoriale juridique.
Cloud GCP, Kubernetes, front React/Redux, services REST Kotlin/Spring.
      `,
      stack: [
        "TypeScript",
        "React",
        "Redux",
        "Kotlin",
        "Spring Boot",
        "Docker",
        "GCP",
        "Kubernetes"
      ],
    },
    {
      title: "Développeur Web (Freelance - Association)",
      location: "Lyon",
      period: "Janvier 2021 - Juin 2021",
      description: "Développement d’un site web et divers outils informatiques pour une association.",
      details: `
Site web en React, NextJS et Docusaurus 2.
Mise en place déploiements automatisés (Github Actions), hébergement GCP.
Développement services REST et wiki interne.
      `,
      stack: [
        "TypeScript",
        "JavaScript",
        "React",
        "NextJS",
        "Docusaurus 2",
        "ExpressJS",
        "Docker",
        "GCP",
        "Vercel",
        "Github Actions"
      ],
    },
    {
      title: "Architecte logiciel - Lead Dev (Freelance)",
      company: "Descours & Cabaud",
      location: "Lyon",
      period: "Novembre 2019 – Décembre 2020",
      description: "Conception et implémentation d’une architecture microservices.",
      details: `
Application E-Commerce en microservices distribués et événementiels (RabbitMQ).
Architecture hexagonale (DDD), starters modulaires pour REST, AMQP, JPA.
TDD, BDD (Cucumber), tests unitaires et acceptance, accompagnement de 5 devs.
      `,
      stack: [
        "Kotlin",
        "Java 8",
        "Spring Boot",
        "Microservices",
        "REST API",
        "RabbitMQ",
        "Docker",
        "Kubernetes"
      ],
    },
    {
      title: "Ingénieur d'études - Développeur (prestataire)",
      company: "Groupama G2S",
      location: "Ecully",
      period: "Janvier 2019 – Septembre 2019",
      description: "Développement d'une application microservices pour la gestion de sinistres.",
      stack: [
        "Angular 7",
        "TypeScript",
        "Java 8",
        "Spring Boot",
        "REST API",
        "Architecture microservices",
      ],
    },
    {
      title: "Ingénieur d'études - Développeur (prestataire)",
      company: "Enedis",
      location: "Lyon",
      period: "Juin 2018 – Décembre 2018",
      description: "Supervision de compteurs intelligents destinés aux professionnels.",
      stack: [
        "Javascript",
        "AngularJS",
        "Java 8",
        "Scala",
        "Spring Boot",
        "Kafka",
        "Cassandra",
        "ElasticSearch",
        "Docker",
      ],
    },
    {
      title: "Ingénieur d'études - Développeur",
      company: "Worldline Global",
      location: "Lyon",
      period: "Mars 2017 – Juin 2018",
      description: "Plateforme Digital Banking (PSD2, XS2A).",
      stack: ["Java 8", "Spring Boot", "EmberJS", "Docker", "ELK Stack"],
    },
    {
      title: "Développeur fullstack",
      company: "Sword Group",
      location: "Lyon",
      period: "Avril 2016 – Mars 2017",
      description: "Application de géolocalisation pour GrDF.",
      stack: ["JavaScript", "Java 8", "Spring Boot", "Google Maps API"],
    },
    {
      title: "Ingénieur d'études - Développeur (prestataire)",
      company: "Tessi Documents Services",
      location: "Saint-Étienne",
      period: "Juillet 2014 – Mars 2016",
      description: "Refonte d’une application web EDI bancaire.",
      stack: ["Java 7", "Spring", "Hibernate", "Maven", "JUnit", "Mockito"],
    }
  ],

  skills: {
    frontend: ["React", "EcmaScript", "TypeScript", "Three.js", "Next.js"],
    backend: ["Node.js", "Express.js", "Apollo GraphQL"],
    other: ["Docker", "Git", "Cloud (GCP, AWS)"],
  },

  projects: [
    {
      title: "Site web associatif (WIP)",
      stack: ["TypeScript", "React", "JSX", "Next.js", "Vercel"],
      description: "Mise en place d'un site web pour un groupe associatif."
    },
    {
      title: "Wiki association",
      stack: ["TypeScript", "React", "JSX", "MDX", "Docusaurus 2"],
      description: "Construction d'un wiki pour un groupe associatif."
    },
    {
      title: "Docker presentation",
      stack: ["Python", "Bash", "Docker", "Kotlin", "React", "Spring"],
      description: "Démo des bases de Docker : containerisation d'une app React/Kotlin/MySQL et exploitation multi-instances."
    }
  ],

  education: [
    {
      school: "ICAM Nantes",
      degree: "Ingénieur généraliste",
      period: "2010 – 2013"
    }
  ]
};
