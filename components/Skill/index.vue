<template>
  <section id="skill" class="min-h-screen flex items-center justify-center px-6 lg:px-24 py-12 relative">
    <div class="container mx-auto max-w-5xl">
      <!-- Faded "SKILLS" Text in Background -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 text-center opacity-20 tracking-wider mb-2 lg:mb-8"
          data-aos="fade-down" data-aos-delay="100"
          v-text="'SKILLS'">
      </h1>

      <!-- Main Title -->
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left mb-2 lg:mb-8 relative"
          v-text="'Developer Toolkit'"
          data-aos="fade-up" data-aos-delay="200">
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start relative">
        <!-- Left Section: Introduction -->
        <div class="space-y-6 text-start">
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            As a versatile web developer, I bring a robust skill set spanning frontend, backend, databases, and tools to
            create seamless, high-performance web solutions. My technical expertise is complemented by strong
            problem-solving and collaboration skills, enabling me to deliver projects that exceed expectations.
          </p>
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            From crafting responsive user interfaces to building scalable server-side applications, I’m passionate about
            leveraging the latest technologies to solve real-world challenges. Explore my skills below and let’s build
            something extraordinary together!
          </p>
          <!-- Call-to-Action Button -->
          <div class="mt-6" data-aos="fade-up" data-aos-delay="500">
            <a href="#contact"
              class="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              Let’s Collaborate
            </a>
          </div>
        </div>

        <!-- Right Section: Skill Categories -->
        <div class="w-full space-y-6">
          <!-- Frontend Skills -->
          <div data-aos="fade-left" data-aos-delay="600">
            <h3 class="text-xl sm:text-2xl font-semibold text-red-500 text-3d-effect mb-3">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in frontendSkills" :key="skill"
                    class="bg-red-600 text-white text-sm sm:text-base px-3 py-1 rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Backend Skills -->
          <div data-aos="fade-left" data-aos-delay="700">
            <h3 class="text-xl sm:text-2xl font-semibold text-red-500 text-3d-effect mb-3">Backend</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in backendSkills" :key="skill"
                    class="bg-red-600 text-white text-sm sm:text-base px-3 py-1 rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Tools Skills -->
          <div data-aos="fade-left" data-aos-delay="900">
            <h3 class="text-xl sm:text-2xl font-semibold text-red-500 text-3d-effect mb-3">Tools</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in toolsSkills" :key="skill"
                    class="bg-red-600 text-white text-sm sm:text-base px-3 py-1 rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const frontendSkills = ref([
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Vue.js (Vue 2 & 3) & Vuex",
  "Nuxt.js",
  "React.js",
  "Bootstrap",
  "Tailwind CSS",
  "Responsive Web Design",
  "API Integration",
  "jQuery",
  "Axios",
  "i18n",
  "Figma"
]);


const backendSkills = ref([
  "Laravel",
  "PHP",
  "Node.js",
  "Express",
  "RESTful APIs",
  "MySQL",
  "MongoDB",
  "SQL Server",
]);

const toolsSkills = ref([
  "Visual Studio Code (VSCode)",
  "Postman",
  "Docker",
  "Git",
  "GitHub",
  "GitLab",
  "Figma",
  "Trello",
  "Canva",
  "npm & yarn",
  "Vite",
  "Webpack",
  "ESLint & Prettier",
  "Chrome DevTools"
]);

const databaseSkills = ref([
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "SQL Server",
]);

</script>

<style scoped>
h2 {
  background: linear-gradient(to right, #ffffff, #ef4444);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>