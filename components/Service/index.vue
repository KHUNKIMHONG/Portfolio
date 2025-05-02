<template>
  <section id="services" class="py-16 px-6 lg:px-24 relative">
    <div class="container mx-auto max-w-6xl">
      <!-- Faded "SERVICES" Text in Background -->
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-red-600 opacity-10 tracking-widest mb-2 lg:mb-8"
        v-text="'SERVICES'" data-aos="fade-down" data-aos-delay="100"></h1>

      <!-- Title -->
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left mb-2 lg:mb-4 relative"
        data-aos="fade-up" data-aos-delay="200"
        v-text="'What I Offer?'">
      </h2>

      <p class="text-gray-300 text-lg text-left mx-auto mb-4" 
            data-aos="fade-up" 
            data-aos-delay="300"
            v-text="'Helping businesses and individuals create modern, high-performing websites and applications.'">
      </p>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="service.title"
          class="group bg-zinc-900 p-6 border border-red-400 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-zinc-950"
          data-aos="fade-up" :data-aos-delay="400 + index * 100">
          <div class="flex items-center mb-4">
            <div class="bg-red-600 p-3 rounded-lg group-hover:bg-red-500 transition">
              <svg :class="'w-8 h-8 text-white'" v-html="service.icon"></svg>
            </div>
            <h3 class="text-xl font-semibold text-white text-3d-effect ml-4">
              {{ service.title }}
            </h3>
          </div>
          <p class="text-gray-300 mb-4 ml-2">
            {{ service.description }}
          </p>
          <span class="text-sm text-red-400 font-semibold ml-2 group-hover:text-red-300 transition">
            {{ service.tagline }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Service {
  title: string;
  description: string;
  tagline: string;
  icon: string;
}

const services = ref<Service[]>([
  {
    title: "Frontend Development",
    description: "Crafting responsive, user-friendly interfaces with Nuxt.js, Vue.js, and Tailwind CSS for seamless experiences.",
    tagline: "Pixel-perfect designs",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
  },
  {
    title: "Backend Development",
    description: "Building robust APIs and efficient database systems using Laravel, MySQL, and Node.js for scalable solutions.",
    tagline: "Reliable performance",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
  },
  {
    title: "Project Collaboration",
    description: "Streamlining teamwork with Git and Docker practices to deliver projects efficiently and effectively.",
    tagline: "Seamless teamwork",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  },
]);;
</script>

<style scoped>
h2 {
  background: linear-gradient(to right, #f8f7f7, #ef4444, #df9f9f);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
