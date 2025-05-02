<template>
  <section id="project" class="min-h-screen py-16 px-4 sm:px-6 lg:px-12 relative">
    <div class="container mx-auto max-w-6xl">
      <!-- Faded "PROJECTS" Text in Background -->
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 text-center opacity-20 tracking-wider mb-2 lg:mb-8"
        data-aos="fade-down" data-aos-delay="100" v-text="'PROJECTS'">
      </h1>

      <!-- Main Title -->
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left mb-4 lg:mb-6"
        data-aos="fade-up" data-aos-delay="200" v-text="'Portfolio Works'">
      </h2>

      <!-- Introduction -->
      <p class="text-base sm:text-lg text-gray-300 text-center lg:text-left mb-4 lg:mb-10" data-aos="fade-up"
        data-aos-delay="300">
        Explore my recent projects that demonstrate my expertise in web development, from full-stack e-commerce
        platforms to dynamic news sites and innovative applications. Each project reflects my commitment to crafting
        user-focused, high-performance solutions.
      </p>

      <!-- Project Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(project, index) in projects" :key="index" data-aos="fade-up" :data-aos-delay="500 + index * 100">
          <!-- Banner Image -->
          <img :src="project.image" :alt="project.title"
            class="w-full h-60 rounded-md object-cover shadow-md hover:scale-105 transition-all duration-300" />

          <div class="p-2">
            <h3 class="text-xl font-semibold text-red-400">{{ project.title }}</h3>
            <p class="text-gray-200 text-sm mt-2 line-clamp-2">{{ project.description }}</p>

            <!-- Technologies -->
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="(tech, idx) in project.technologies" :key="idx"
                class="bg-red-600 text-white text-xs px-2 py-1 rounded-md hover:bg-red-700 transition-all duration-300">
                {{ tech }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="mt-4 flex justify-start space-x-3">
              <button @click="openModal(project)"
                class="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Details</span>
              </button>
              <a v-if="project.github" :href="project.github" target="_blank"
                class="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 hover:scale-105 transition-all duration-300 flex items-center space-x-2 no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.24 1.839 1.24 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.333-5.466-5.931 0-1.312.469-2.382 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.485 11.485 0 0 1 3-.404c1.02.004 2.045.137 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.647 1.653.242 2.873.118 3.176.77.839 1.234 1.909 1.234 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.815 1.103.815 2.222v3.293c0 .321.217.694.825.577 4.765-1.585 8.205-6.083 8.205-11.385 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div v-if="showModal" @click.self="showModal = null"
        class="fixed inset-0 bg-zinc-900/70 backdrop-blur-sm z-50 p-4 md:p-8 overflow-y-auto" data-aos="zoom-in"
        data-aos-delay="100">
        <div class="max-w-4xl w-full mx-auto bg-zinc-900 rounded-xl shadow-2xl relative overflow-hidden"
          data-aos="zoom-in" data-aos-duration="600">
          <!-- Modal Header -->
          <div class="relative">
            <img :src="selectedProject.image" :alt="selectedProject.title"
              class="w-full h-64 md:h-80 object-cover rounded-t-xl" data-aos="fade-up" data-aos-delay="100" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent rounded-t-xl"></div>
            <div class="absolute bottom-6 left-6">
              <h3 class="text-2xl md:text-3xl font-bold text-white drop-shadow-lg" data-aos="fade-right"
                data-aos-delay="200">
                {{ selectedProject.title }}
              </h3>
            </div>
          </div>

          <!-- Modal Content -->
          <div class="p-6 md:p-8 space-y-6">
            <!-- Description -->
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 class="text-xl font-semibold text-red-400 mb-2">Overview</h4>
              <p class="text-gray-200 text-sm md:text-base leading-relaxed">{{ selectedProject.description }}</p>
            </div>

            <!-- Role -->
            <div data-aos="fade-up" data-aos-delay="400">
              <h4 class="text-xl font-semibold text-red-400 mb-2">My Role</h4>
              <p class="text-gray-200 text-sm md:text-base leading-relaxed">{{ selectedProject.role }}</p>
            </div>

            <!-- Challenges -->
            <div data-aos="fade-up" data-aos-delay="500">
              <h4 class="text-xl font-semibold text-red-400 mb-2">Challenges</h4>
              <p class="text-gray-200 text-sm md:text-base leading-relaxed">{{ selectedProject.challenges }}</p>
            </div>

            <!-- Technologies -->
            <div data-aos="fade-up" data-aos-delay="600">
              <h4 class="text-xl font-semibold text-red-400 mb-2">Technologies Used</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tech, idx) in selectedProject.technologies" :key="idx"
                  class="bg-red-600 text-white text-sm px-3 py-1 rounded-full hover:bg-red-700 transition-all duration-300">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Close Button -->
            <div class="flex justify-center mt-8" data-aos="fade-up" data-aos-delay="600">
              <button @click="showModal = null"
                class="group relative flex items-center bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-full shadow-lg transition-all duration-300 overflow-hidden w-14 h-14 hover:w-56 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Close Modal">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span
                  class="absolute left-16 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-base font-medium">
                  Close Project Details
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with a robust Laravel backend and a dynamic frontend, offering smooth product browsing and a secure checkout process.",
    role: "Led both frontend and backend development, optimizing the site for performance and managing the database using DBeaver and Docker for local development.",
    challenges: "Ensured cross-browser compatibility, optimized database queries for faster load times, and implemented a responsive UI with Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "Laravel", "MySQL", "DBeaver", "Docker"],
    image: "/Portfolio/Project/e-commerce-web.png",
    github: "https://gitlab.com/khunkimhong039/thiesis-back-end/-/tree/developer?ref_type=heads"
  },
  {
    title: "AML Website",
    description: "A responsive multilingual news website built with Nuxt.js, featuring real-time updates, category filtering, and support for both Khmer and English languages.",
    role: "Developed the frontend using Nuxt.js, Bootstrap, and JavaScript, integrated multilingual support with i18n, and handled API communication using Axios.",
    challenges: "Implemented dynamic language switching, ensured RTL/LTR layout compatibility, managed API integration with Laravel backend, and maintained responsive UI across all devices.",
    technologies: ["Nuxt.Js", "JavaScript", "Bootstrap", "CSS", "i18n", "Axios", "Laravel", "API", "MySQL"],
    image: "/Portfolio/Project/AML_Web.png",
    github: "#", // Optional: update if you publish a repo specifically for AML
  },
  {
    title: "Noted App",
    description: "A full-stack note-taking application featuring user authentication, secure API access, and real-time data syncing. Built with a typed and structured frontend using TypeScript and Vue.js.",
    role: "Handled the entire development process—from designing the UI with Vue.js and Tailwind CSS, to building secure RESTful APIs using ASP.NET and implementing JWT-based user authentication.",
    challenges: "Ensured secure login with token-based authentication, implemented efficient syncing between client and server, and optimized the UI for usability and mobile responsiveness.",
    technologies: ["ASP.NET", "JWT", "Vue.Js", "TypeScript", "Tailwind CSS", "SQL Server", "API"],
    image: "/Portfolio/Project/noted_app.png",
    github: "https://github.com/KHUNKIMHONG/Noted_App"
  },
  {
    title: "Tonle Post",
    description: "An in-progress full-stack content-sharing platform built with Laravel for the backend and Nuxt for the frontend, aiming to deliver a clean, responsive, and high-performance experience.",
    role: "Building RESTful APIs with Laravel and developing the frontend using Nuxt and TypeScript, with Docker for local development and DBeaver for database management.",
    challenges: "Implementing real-time data features, managing API integration between Laravel and Nuxt, and setting up an efficient Docker-based development environment.",
    technologies: ["Laravel", "Nuxt.Js", "TypeScript", "Tailwind CSS", "Docker", "MySQL", "DBeaver"],
    image: "/Portfolio/Project/tonla_post.png",
    github: "https://github.com/KHUNKIMHONG/nuxt-news", // Optional: update if you publish a repo specifically for Tonle Post
  },
  {
    title: "SIP App Recycle (Community)",
    description: "A UX/UI design project for a recycling-focused community platform where users can share, donate, and exchange recyclable items.",
    role: "Designed the full user experience and interface using Figma, focusing on intuitive navigation, accessibility, and mobile responsiveness.",
    challenges: "Created user flows and wireframes that encourage eco-friendly behavior while balancing usability and aesthetic appeal.",
    technologies: ["Figma"],
    image: "/Portfolio/Project/recycle-1.png",
    github: "https://www.figma.com/design/ua6FH6itr7VzHQZpincdeP/SIP-App-Recycling--Community-?node-id=0-1&p=f&t=NbisbMf3lpc1xz4i-0",
  },
  {
    title: "POS Coffee",
    description: "A robust Java-based Point of Sale (POS) system tailored for GIC Café Shop, enhancing order processing, inventory management, and daily transaction efficiency.",
    role: "Crafted an intuitive and responsive user interface (UI) to elevate user experience. Developed comprehensive reports and optimized the frontend using HTML, CSS, JavaScript, and Bootstrap, while contributing to backend enhancements.",
    challenges: "Managed real-time order calculations, seamlessly integrated MySQL for efficient product and sales data handling, and ensured a responsive, user-friendly system design.",
    technologies: ["Java Spring Boot", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    image: "/Portfolio/Project/GIC-Coffee.png",
    github: "#" // Optional: update with a dedicated repository link for POS Coffee if available
  }
]);

const showModal = ref(false);
const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
  showModal.value = true;
};
</script>

<style scoped>
h2 {
  background: linear-gradient(to right, #ffffff, #ef4444, #df9f9f);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
/*CSS to hide scrollbar */
.overflow-y-auto::-webkit-scrollbar {
    display: none;
    /* Hide scrollbar for webkit browsers */
}

.overflow-y-auto {
    -ms-overflow-style: none;
    /* Hide scrollbar for IE 10+ */
    scrollbar-width: none;
    /* Hide scrollbar for Firefox */
}
</style>
