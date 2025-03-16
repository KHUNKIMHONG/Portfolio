<template>
    <section id="services" class="py-16 px-6 lg:px-24 relative">
      <div class="container mx-auto max-w-6xl">
        <!-- Faded "SERVICES" Text in Background -->
        <h1
        class="text-[30px] md:text-[50px] lg:text-[60px] font-extrabold text-red-500 opacity-10 absolute top-5 md:top-10 left-1/2 transform -translate-x-1/2"
        v-text="'SERVICES'"
        ></h1>
  
        <!-- Title -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left mb-4 lg:mb-10 relative lg:mt-16">My Services</h2>
  
        <p class="text-gray-300 text-lg text-left mx-auto mb-10">Helping businesses and individuals create modern, high-performing websites and applications.</p>
  
        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="group bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-gray-700"
          >
            <div class="flex items-center mb-4">
              <div class="bg-red-600 p-3 rounded-lg group-hover:bg-red-500 transition">
                <svg :class="'w-8 h-8 text-white'" v-html="service.icon"></svg>
              </div>
              <h3 class="text-xl font-semibold text-white ml-4">
                {{ service.title }}
              </h3>
            </div>
            <p class="text-gray-300 mb-4">
              {{ service.description }}
            </p>
            <span class="text-sm text-red-400 font-semibold group-hover:text-red-300 transition">
              {{ service.tagline }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive websites using Nuxt.js, Vue.js, and Tailwind CSS.",
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M12 8v4l3 3m6-11H3v14h18V4z" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`
    },
    {
      title: "Backend Development",
      description: "Creating APIs and database structures with Laravel and MySQL.",
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14m-7-7v14" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`
    },
    {
      title: "Project Collaboration",
      description: "Working with teams using Git, Docker, and Agile methodologies.",
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m6 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`
    },
  ];
  </script>
  
  <style scoped>
  h2 {
    background: linear-gradient(to right, #f8f7f7, #ef4444 , #df9f9f);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  </style>
  
