<template>
  <section
    id="experience"
    class="min-h-screen flex items-center justify-center px-6 lg:px-24 py-12 relative"
  >
    <div class="container mx-auto max-w-5xl">
      <!-- Faded "EXPERIENCE" Text in Background -->
      <h1
        class="text-[30px] md:text-[50px] lg:text-[60px] font-extrabold text-red-500 opacity-10 absolute top-5 md:top-10 left-1/2 transform -translate-x-1/2"
      >
        EXPERIENCE
      </h1>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start relative"
      >
        <!-- Left Section: Brief Description -->
        <div class="space-y-6 md:space-y-8 text-left">
          <h2
            class="text-3xl text-left md:text-4xl lg:text-5xl font-bold text-white tracking-wide"
          >
            Professional Experience
          </h2>
          <p class="text-gray-300 text-lg md:text-xl">
            Over the years, I have had the opportunity to work in various roles
            that shaped my expertise. Here's a look at some of my key
            experiences and contributions to the teams and projects I've been
            part of.
          </p>
        </div>

        <!-- Right Section: Experience Cards -->
        <div class="w-full mx-auto space-y-8">
          <div
            v-for="job in experience"
            :key="job.company"
            class="bg-gray-800 p-6 rounded-lg border border-red-600 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div class="flex justify-between items-center mb-4">
              <div class="text-2xl font-semibold text-red-500">
                {{ job.position }}
              </div>
              <div class="text-gray-400 text-sm">{{ job.duration }}</div>
            </div>
            <div class="text-gray-400 mb-2">{{ job.company }}</div>
            <p class="text-gray-300">{{ job.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const experience = ref([
{
    "position": "Frontend Developer Intern",
    "company": "FinTech Center",
    "duration": "2023",
    "description": "Created a responsive website with Nuxt.js and JavaScript, adding APIs for dynamic content. Collaborated to improve UI and front-end."
  },
  {
    "position": "Full Stack Developer Intern",
    "company": "ITC",
    "duration": "2024",
    "description": "Developed an e-commerce site with Laravel, Bootstrap, JQuery, and MySQL. Managed project and deployment using Docker and GitLab."
  },
  {
    "position": "Web Developer",
    "company": "Freelander",
    "duration": "Present",
    "description": "Developed web applications using modern technologies, contributing to live projects with front-end expertise."
 },
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