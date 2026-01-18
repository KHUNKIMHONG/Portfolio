import type { Project } from "@/interface/project_interface";

export const PROJECTS_DATA: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with a robust Laravel backend and a dynamic frontend, offering smooth product browsing and a secure checkout process.",
    role:
      "Led both frontend and backend development, optimizing the site for performance and managing the database using DBeaver and Docker for local development.",
    challenges:
      "Ensured cross-browser compatibility, optimized database queries for faster load times, and implemented a responsive UI with Bootstrap.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "jQuery",
      "Laravel",
      "MySQL",
      "DBeaver",
      "Docker",
    ],
    image: "/Portfolio/Project/e-commerce-web.png",
    github:
      "https://gitlab.com/khunkimhong039/thiesis-back-end/-/tree/developer?ref_type=heads",
  },
  {
    title: "AML Website",
    description:
      "A responsive multilingual news website built with Nuxt.js, featuring real-time updates, category filtering, and support for both Khmer and English languages.",
    role:
      "Developed the frontend using Nuxt.js, Bootstrap, and JavaScript, integrated multilingual support with i18n, and handled API communication using Axios.",
    challenges:
      "Implemented dynamic language switching, ensured RTL/LTR layout compatibility, managed API integration with Laravel backend, and maintained responsive UI across all devices.",
    technologies: [
      "Nuxt.Js",
      "JavaScript",
      "Bootstrap",
      "CSS",
      "i18n",
      "Axios",
      "Laravel",
      "API",
      "MySQL",
    ],
    image: "/Portfolio/Project/AML_Web.png",
    github: "#",
  },
  {
    title: "Noted App",
    description:
      "A full-stack note-taking application featuring user authentication, secure API access, and real-time data syncing. Built with a typed and structured frontend using TypeScript and Vue.js.",
    role:
      "Handled the entire development process—from designing the UI with Vue.js and Tailwind CSS, to building secure RESTful APIs using ASP.NET and implementing JWT-based user authentication.",
    challenges:
      "Ensured secure login with token-based authentication, implemented efficient syncing between client and server, and optimized the UI for usability and mobile responsiveness.",
    technologies: [
      "ASP.NET",
      "JWT",
      "Vue.Js",
      "TypeScript",
      "Tailwind CSS",
      "SQL Server",
      "API",
    ],
    image: "/Portfolio/Project/noted_app.png",
    github: "https://github.com/KHUNKIMHONG/Noted_App",
  },
  {
    title: "Tonle Post",
    description:
      "An in-progress full-stack content-sharing platform built with Laravel for the backend and Nuxt for the frontend, aiming to deliver a clean, responsive, and high-performance experience.",
    role:
      "Building RESTful APIs with Laravel and developing the frontend using Nuxt and TypeScript, with Docker for local development and DBeaver for database management.",
    challenges:
      "Implementing real-time data features, managing API integration between Laravel and Nuxt, and setting up an efficient Docker-based development environment.",
    technologies: [
      "Laravel",
      "Nuxt.Js",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "MySQL",
      "DBeaver",
    ],
    image: "/Portfolio/Project/tonla_post.png",
    github: "https://github.com/KHUNKIMHONG/nuxt-news",
  },
  {
    title: "SIP App Recycle (Community)",
    description:
      "A UX/UI design project for a recycling-focused community platform where users can share, donate, and exchange recyclable items.",
    role:
      "Designed the full user experience and interface using Figma, focusing on intuitive navigation, accessibility, and mobile responsiveness.",
    challenges:
      "Created user flows and wireframes that encourage eco-friendly behavior while balancing usability and aesthetic appeal.",
    technologies: ["Figma"],
    image: "/Portfolio/Project/recycle-1.png",
    github:
      "https://www.figma.com/design/ua6FH6itr7VzHQZpincdeP/SIP-App-Recycling--Community-?node-id=0-1&p=f&t=NbisbMf3lpc1xz4i-0",
  },
  {
    title: "POS Coffee",
    description:
      "A robust Java-based Point of Sale (POS) system tailored for GIC Café Shop, enhancing order processing, inventory management, and daily transaction efficiency.",
    role:
      "Crafted an intuitive and responsive user interface (UI) to elevate user experience. Developed comprehensive reports and optimized the frontend using HTML, CSS, JavaScript, and Bootstrap, while contributing to backend enhancements.",
    challenges:
      "Managed real-time order calculations, seamlessly integrated MySQL for efficient product and sales data handling, and ensured a responsive, user-friendly system design.",
    technologies: [
      "Java Spring Boot",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "MySQL",
    ],
    image: "/Portfolio/Project/GIC-Coffee.png",
    github: "#",
  },
];
