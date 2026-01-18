// \Portfolio\my-portfolio\data\services_data.ts
import type { ServicesData } from '@/interface/service_interface';

export const servicesData: ServicesData = {
  heading: "Our Services",
  subtitle: "We provide a wide range of development solutions",
  services: [
    {
      title: "Frontend Development",
      description: "Crafting responsive, user-friendly interfaces with modern frameworks. Creating pixel-perfect designs that work seamlessly across all devices.",
      tagline: "Beautiful & Responsive",
      technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
    },
    {
      title: "Backend Development",
      description: "Building robust APIs and efficient database systems. Developing scalable server-side solutions that power modern applications.",
      tagline: "Powerful & Scalable",
      technologies: ["Laravel", "Node.js", "MySQL"],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
    },
    {
      title: "API Integration",
      description: "Connecting third-party services and APIs seamlessly. Building custom integrations for payment gateways, social media, and more.",
      tagline: "Connected Systems",
      technologies: ["REST API", "GraphQL", "Webhooks"],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M1 12h6m6 0h6M4.8 4.8l4.2 4.2m0 6l-4.2 4.2"></path></svg>`
    },
  ]
};
