<template>
  <section
    id="Project"
    class="min-h-screen py-12 px-6 lg:px-24 relative"
  >
    <div class="container mx-auto max-w-6xl">
      <!-- Faded "Projects" Text in Background -->
      <h1 class="text-[30px] md:text-[50px] lg:text-[60px] font-extrabold text-red-500 opacity-10 absolute top-5 md:top-10 left-1/2 transform -translate-x-1/2">PROJECT</h1>

      <!-- Main Title -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left mb-4 lg:mb-16 mt-4 lg:mt-24">My Projects</h2>

      <p class="text-lg text-left text-gray-300 mb-12">A collection of my latest work, showcasing creativity, development, and design.</p>
 
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-gray-800 border border-red-500 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <!-- Banner Image -->
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-60 object-cover overflow-hidden"
          />

          <div class="p-6">
            <h3 class="text-2xl font-semibold text-red-400">
              {{ project.title }}
            </h3>
            <p class="text-gray-300 mt-2 line-clamp-2">
              {{ project.description }}
            </p>

            <div class="mt-4">
              <span
                v-for="(tech, idx) in project.technologies"
                :key="idx"
                class="bg-gray-700 text-white text-sm px-2 py-1 rounded-full mr-2"
              >
                {{ tech }}
              </span>
            </div>

            <div class="mt-6 flex justify-between items-center">
              <button
                @click="openModal(project)"
                class="text-lime-400 hover:underline"
                v-text="`View Details`"
              >
              </button>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="text-blue-400 hover:underline"
                v-text="`GitHub`"
              >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50"
    >
      <div class="bg-gray-900 p-6 rounded-lg max-w-lg w-full shadow-lg">
        <h3 class="text-3xl font-semibold text-red-400">
          {{ selectedProject.title }}
        </h3>
        <img
          :src="selectedProject.image"
          :alt="selectedProject.title"
          class="w-full h-60 object-cover mt-4 rounded-lg"
        />
        <p class="text-gray-300 mt-4">{{ selectedProject.description }}</p>

        <div class="mt-4">
          <span
            v-for="(tech, idx) in selectedProject.technologies"
            :key="idx"
            class="bg-gray-700 text-white text-sm px-2 py-1 rounded-full mr-2"
          >
            {{ tech }}
          </span>
        </div>

        <div class="mt-6 flex justify-end">
          <button
            @click="showModal = false"
            class="text-white bg-red-500 px-4 py-2 rounded"
          >
            Close
          </button>
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
    description:
      "A full-featured e-commerce site with Laravel backend and Nuxt.js frontend.",
    technologies: ["JQuery", "Laravel", "Bootstrap", "MySQL"],
    image: "/Project/e-commerce.jpg",
    github: "https://github.com/yourrepo/ecommerce",
  },
  {
    title: "News Website",
    description:
      "A dynamic news website featuring real-time updates and category filtering.",
    technologies: ["Nuxt.js", "Laravel", "TailwindCSS", "MySQL"],
    image: "/Project/aml.png",
    github: "https://github.com/yourrepo/news",
  },
  {
    title: "Noted App",
    description:
      "A note-taking application with real-time syncing, built using ASP.NET for the backend and Vue for the frontend, styled with Tailwind CSS.",
    technologies: ["ASP.NET", "Vue", "Tailwind CSS", "SQL Server"],
    image: "/Project/noted-app.png",
    github: "https://github.com/KHUNKIMHONG/Noted_App",
  },
]);

/*!-- show box Modal --*/
const showModal = ref(false);
const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
  showModal.value = true;
};
</script>

<style scoped>
h2 {
  background: linear-gradient(to right, #ffffff, #ef4444 , #df9f9f);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
