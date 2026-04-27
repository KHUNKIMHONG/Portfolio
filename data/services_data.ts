// \Portfolio\my-portfolio\data\services_data.ts
import type { ServicesData } from '@/interface/service_interface';

export const servicesData: ServicesData = {
  heading: "Our Services",
  subtitle: "We provide a wide range of development solutions",
  services: [
    {
      title: "Full Stack Development",
      description: "Building complete web products from UI to server — responsive interfaces, robust APIs, and solid database architecture, all in one end-to-end solution.",
      tagline: "End-to-End",
      technologies: ["Vue.js", "Nuxt.js", "Next.js", "Elixir", "Laravel"],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="3.5" width="19" height="8" rx="2"/><rect x="2.5" y="14" width="9" height="6.5" rx="2"/><rect x="14" y="14" width="7.5" height="6.5" rx="2"/><path d="M7 7.5h1.5M7 11h5"/></svg>`
    },
    {
      title: "API & Integration",
      description: "Connecting services, payment gateways, and third-party APIs. Designing clean RESTful interfaces and automating data flows between systems.",
      tagline: "Connected Systems",
      technologies: ["REST API", "GraphQL", "Axios", "Webhooks"],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.25"/><circle cx="18" cy="6" r="2.25"/><circle cx="18" cy="18" r="2.25"/><path d="M8.1 11.2 15.9 6.8"/><path d="M8.1 12.8 15.9 17.2"/></svg>`
    },
    {
      title: "Database Design",
      description: "Designing structured, efficient database schemas for web applications. Optimizing queries and managing relational data for performance and reliability.",
      tagline: "Structured & Efficient",
      technologies: ["PostgreSQL", "MySQL", "SQL Server"],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="2.5"/><path d="M4 5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5"/><path d="M4 10v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5"/><path d="M4 15v4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-4"/></svg>`
    },
  ]
};
