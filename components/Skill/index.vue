<template>
  <section id="skill" 
   class="min-h-screen flex items-center justify-center px-6 lg:px-24 py-12 relative">
    <div class="container mx-auto max-w-5xl">
      <!-- Faded "SKILLS" Text in Background -->
      <h1
        class="text-[30px] md:text-[50px] lg:text-[60px] font-extrabold text-red-500 opacity-10 absolute top-5 md:top-10 left-1/2 transform -translate-x-1/2">
        SKILL
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start relative">
        <!-- Left Section: Skills List -->
        <div class="space-y-6 md:space-y-8 text-left">
          <h2 class="text-3xl text-center lg:text-left md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
            My Development Skills
          </h2>
          <p class="text-gray-300 text-lg md:text-xl">
            A showcase of my expertise in frontend and backend development. I specialize in building modern, scalable,
            and high-performance web applications using cutting-edge technologies.
          </p>
        </div>

        <!-- Right Section: Experience Card -->
        <div class="w-full mx-auto space-y-6">
          <h3 class="text-2xl text-red-500 font-semibold text-3d-effect">Frontend Skills</h3>
          <div v-for="skill in frontendSkills" :key="skill.name" class="text-white">
            <div class="flex justify-between">
              <span class="text-md">{{ skill.name }}</span>
              <span class="text-md">{{ skill.percentage }}%</span>
            </div>
            <div class="w-full bg-gray-800 rounded-full h-1 mt-2">
              <div class="bg-red-600 h-1 rounded-full transition-all duration-500"
                :style="{ width: skill.percentage + '%' }">
              </div>
            </div>
          </div>

          <h3 class="text-2xl text-red-500 font-semibold text-3d-effect mt-6">Backend Skills</h3>
          <div v-for="skill in backendSkills" :key="skill.name" class="text-white">
            <div class="flex justify-between">
              <span class="text-md">{{ skill.name }}</span>
              <span class="text-md">{{ skill.percentage }}%</span>
            </div>
            <div class="w-full bg-gray-800 rounded-full h-1 mt-2">
              <div class="bg-rose-600 h-1 rounded-full transition-all duration-500"
                :style="{ width: skill.percentage + '%' }">
              </div>
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
  { name: "HTML & CSS", percentage: 70 },
  { name: "JavaScript & TypeScript", percentage: 60 },
  { name: "Vue.js & Nuxt.js", percentage: 65 },
  { name: "Tailwind CSS", percentage: 60 }
]);

const backendSkills = ref([
  { name: "Laravel & PHP", percentage: 60 },
  { name: "Node.js & Express", percentage: 55 },
  { name: "RESTful APIs", percentage: 60 },
  { name: "MySQL", percentage: 60 }
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