import type { Project } from "@/interface/project_interface";

export const PROJECTS_DATA: Project[] = [
  {
    title: "E-Commerce Platform",
    type: "Academic / Thesis Project",
    year: "2024",
    status: "Completed",
    description:
      "A full-featured e-commerce platform built with a robust Laravel backend and a dynamic frontend, offering smooth product browsing and a secure checkout process.",
    role:
      "Led both frontend and backend development — designed the database schema, built RESTful APIs with Laravel, and crafted the responsive UI using Bootstrap and jQuery.",
    challenges:
      "Ensured cross-browser compatibility, optimized slow database queries for faster load times, and handled complex product filtering logic on the frontend.",
    outcome:
      "Successfully delivered as a final thesis project at ITC, demonstrating end-to-end full-stack development with a working cart, checkout, and admin dashboard.",
    features: [
      "Product browsing with category and price filtering",
      "Secure user authentication and registration",
      "Shopping cart and checkout flow",
      "Admin dashboard for product and order management",
      "Responsive design across desktop and mobile",
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "Laravel", "MySQL", "DBeaver", "Docker"],
    image: "/Portfolio/Project/e-commerce-web.png",
    github: "https://gitlab.com/khunkimhong039/thiesis-back-end/-/tree/developer?ref_type=heads",
  },
  {
    title: "AML Website",
    type: "Internship Project",
    year: "2023",
    status: "Completed",
    description:
      "A responsive multilingual news website built with Nuxt.js, featuring real-time updates, category filtering, and full support for Khmer and English languages.",
    role:
      "Developed the entire frontend using Nuxt.js, Bootstrap, and JavaScript. Integrated i18n for bilingual support and handled all API communication with Axios.",
    challenges:
      "Implementing dynamic language switching at runtime, ensuring correct RTL/LTR layout for Khmer text, and keeping the UI consistent across browsers and screen sizes.",
    outcome:
      "Delivered a production-ready bilingual news platform connected to a Laravel backend, now actively used for publishing news and legal updates in both languages.",
    features: [
      "Bilingual support — Khmer and English with dynamic switching",
      "Real-time news and article listing via REST API",
      "Category filtering and search functionality",
      "RTL/LTR layout compatibility",
      "Mobile-first responsive design",
    ],
    technologies: ["Nuxt.js", "JavaScript", "Bootstrap", "CSS", "i18n", "Axios", "Laravel", "MySQL"],
    image: "/Portfolio/Project/AML_Web.png",
    github: "#",
  },
  {
    title: "Noted App",
    type: "Personal Project",
    year: "2023",
    status: "Completed",
    description:
      "A full-stack note-taking application with user authentication, secure JWT-based API access, and real-time data syncing between the Vue.js frontend and ASP.NET backend.",
    role:
      "Handled the entire development lifecycle — designed the UI with Vue.js and Tailwind CSS, built secure RESTful APIs with ASP.NET, and implemented JWT authentication from scratch.",
    challenges:
      "Designing a secure token refresh flow, keeping client-side state in sync with the server, and making the UI feel fast and responsive on mobile devices.",
    outcome:
      "A fully working personal productivity app that demonstrates secure API design, TypeScript discipline, and clean full-stack architecture.",
    features: [
      "JWT-based user authentication with token refresh",
      "Create, edit, pin, and delete notes",
      "Real-time sync between frontend and backend",
      "TypeScript for end-to-end type safety",
      "Responsive, mobile-friendly UI",
    ],
    technologies: ["ASP.NET", "JWT", "Vue.js", "TypeScript", "Tailwind CSS", "SQL Server"],
    image: "/Portfolio/Project/noted_app.png",
    github: "https://github.com/KHUNKIMHONG/Noted_App",
  },
  {
    title: "Tonle Post",
    type: "Personal Project",
    year: "2024",
    status: "In Progress",
    description:
      "A full-stack content-sharing platform built with Laravel for the backend and Nuxt.js for the frontend, aiming to deliver a clean, fast, and modern publishing experience.",
    role:
      "Building the RESTful API with Laravel and developing the frontend with Nuxt.js and TypeScript. Using Docker for local development and DBeaver for database management.",
    challenges:
      "Designing a flexible content schema that supports multiple post types, managing authentication state between Nuxt and Laravel, and setting up a reliable Docker dev environment.",
    outcome:
      "Currently in active development — the core API and frontend scaffolding are in place, with content creation and user profiles underway.",
    features: [
      "User authentication and profile management",
      "Post creation with rich text support",
      "Comment and interaction system",
      "RESTful API with Laravel Sanctum",
      "Docker-based local development setup",
    ],
    technologies: ["Laravel", "Nuxt.js", "TypeScript", "Tailwind CSS", "Docker", "MySQL", "DBeaver"],
    image: "/Portfolio/Project/tonla_post.png",
    github: "https://github.com/KHUNKIMHONG/nuxt-news",
  },
  {
    title: "SIP App Recycle",
    type: "UI/UX Design",
    year: "2023",
    status: "Completed",
    description:
      "A UX/UI design project for a recycling community platform where users can share, donate, and exchange recyclable items to promote eco-friendly habits.",
    role:
      "Designed the complete user experience and interface in Figma — including user flows, wireframes, component library, and high-fidelity mockups for all key screens.",
    challenges:
      "Designing intuitive flows that encourage eco-friendly behavior without overwhelming users, while keeping the visual design clean and accessible.",
    outcome:
      "Delivered a complete Figma prototype with detailed user flows, ready for handoff to a development team. Showcases product thinking and user-centered design skills.",
    features: [
      "Item sharing, donation, and exchange flows",
      "User onboarding and profile screens",
      "Community feed and item listing",
      "Mobile-first responsive design system",
      "Accessibility-focused color palette and typography",
    ],
    technologies: ["Figma"],
    image: "/Portfolio/Project/recycle-1.png",
    github: "https://www.figma.com/design/ua6FH6itr7VzHQZpincdeP/SIP-App-Recycling--Community-?node-id=0-1&p=f&t=NbisbMf3lpc1xz4i-0",
  },
  {
    title: "POS Coffee",
    type: "Academic Project",
    year: "2023",
    status: "Completed",
    description:
      "A Java Spring Boot Point of Sale system built for GIC Café, streamlining order processing, inventory management, and daily sales reporting.",
    role:
      "Designed and built the responsive frontend UI, developed sales and inventory reports, and contributed to backend enhancements using Java Spring Boot and MySQL.",
    challenges:
      "Handling real-time order calculations accurately, integrating MySQL for fast product and sales data retrieval, and keeping the UI intuitive for non-technical café staff.",
    outcome:
      "Delivered a fully functional POS system actively used at GIC Café to manage orders and track inventory, replacing manual processes.",
    features: [
      "Real-time order processing and billing",
      "Product and category management",
      "Inventory tracking with stock alerts",
      "Daily and monthly sales reports",
      "Intuitive UI designed for non-technical users",
    ],
    technologies: ["Java Spring Boot", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    image: "/Portfolio/Project/GIC-Coffee.png",
    github: "#",
  },
];
