<template>
  <section id="project"
    class="min-h-screen py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black">

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl animate-float">
      </div>
      <div
        class="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl animate-float-delayed">
      </div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow">
      </div>
    </div>

    <div class="container mx-auto max-w-7xl relative">
      <!-- Header Section with Enhanced Typography -->
      <div class="text-center mb-20">
        <!-- Background Title with Glow Effect -->
        <div class="relative text-7xl sm:text-8xl lg:text-9xl font-black mb-6" data-aos="fade-down"
          data-aos-delay="100">
          <span
            class="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500/30 to-pink-500/30 blur-sm">
            PROJECTS
          </span>
          <span
            class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500/20 to-pink-500/20 tracking-widest select-none">
            PROJECTS
          </span>
        </div>

        <!-- Main Title with Enhanced Gradient -->
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative inline-block" data-aos="fade-up"
          data-aos-delay="200">
          <span class="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
            Portfolio Works
          </span>
        </h2>

        <!-- Animated Decorative Line -->
        <div class="flex items-center justify-center gap-2 mb-8" data-aos="zoom-in" data-aos-delay="300">
          <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
          <div
            class="w-24 h-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-full shadow-lg shadow-red-500/50">
          </div>
          <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500 rounded-full"></div>
        </div>

        <!-- Introduction -->
        <p class="text-gray-400 text-lg text-center max-w-4xl mx-auto leading-relaxed" data-aos="fade-up"
          data-aos-delay="400">
          Explore my recent projects that demonstrate my expertise in web development, from full-stack e-commerce
          platforms to dynamic news sites and innovative applications. Each project reflects my commitment to crafting
          user-focused, high-performance solutions.
        </p>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index"
          class="group relative backdrop-blur-xl overflow-hidden transition-all duration-500" data-aos="fade-up"
          :data-aos-delay="500 + index * 100">

          <!-- Number Badge -->
          <div
            class="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/90 to-pink-600/90 backdrop-blur-sm border border-red-500/30 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-500/30 z-10 group-hover:scale-110 transition-transform duration-300">
            {{ index + 1 }}
          </div>

          <!-- Banner Image with Overlay -->
          <div class="relative rounded-xl overflow-hidden">
            <img :src="project.image" :alt="project.title"
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
          </div>

          <!-- Content -->
          <div class="relative p-2 z-10">
            <h3
              class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 leading-tight mb-3 group-hover:from-red-300 group-hover:to-pink-300 transition-all">
              {{ project.title }}
            </h3>
            <p
              class="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4 group-hover:text-gray-300 transition-colors">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="(tech, idx) in project.technologies.slice(0, 4)" :key="idx"
                class="bg-zinc-800/80 backdrop-blur-sm text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-zinc-700/50 hover:bg-red-600 hover:border-red-500/50 hover:text-white transition-all duration-300">
                {{ tech }}
              </span>
              <span v-if="project.technologies.length > 4"
                class="bg-zinc-800/80 backdrop-blur-sm text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-zinc-700/50">
                +{{ project.technologies.length - 4 }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3">
              <button @click="openModal(project)"
                class="flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-2 border border-red-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Details</span>
              </button>
              <a v-if="project.github" :href="project.github" target="_blank"
                class="bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center border border-zinc-700/50 hover:border-red-500/50 no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.24 1.839 1.24 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.333-5.466-5.931 0-1.312.469-2.382 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.485 11.485 0 0 1 3-.404c1.02.004 2.045.137 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.647 1.653.242 2.873.118 3.176.77.839 1.234 1.909 1.234 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.815 1.103.815 2.222v3.293c0 .321.217.694.825.577 4.765-1.585 8.205-6.083 8.205-11.385 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Bottom Accent Line -->
          <div
            class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div v-if="showModal && selectedProject" @click.self="closeModal"
        class="fixed inset-0 bg-zinc-900/70 backdrop-blur-sm z-50 md:p-4 overflow-y-auto" data-aos="zoom-in"
        data-aos-delay="100">
        
        <!-- <div class="flex min-h-screen items-start md:items-center justify-center p-2 md:p-8" @click.self="closeModal"> -->
        <div class="max-w-4xl w-full mx-auto bg-zinc-900 rounded-xl shadow-2xl relative overflow-hidden"
          data-aos="zoom-in" data-aos-duration="600">

          <!-- Modal Header with Image -->
          <div class="relative h-64 md:h-80 lg:h-96 overflow-hidden">
            <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8">
              <h3
                class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 leading-tight mb-2">
                {{ selectedProject.title }}
              </h3>
            </div>
          </div>

          <!-- Close Button -->
          <button @click="closeModal"
            class="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center border border-zinc-700/50 hover:border-red-500/50 group transform hover:scale-110 hover:rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Modal Content -->
          <div class="p-8 md:p-10 space-y-8">
            <!-- Overview -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-pink-600/20 flex items-center justify-center border border-red-500/20">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 class="text-2xl font-bold text-white">Overview</h4>
              </div>
              <p class="text-gray-300 text-base leading-relaxed pl-13">{{ selectedProject.description }}</p>
            </div>

            <!-- Role -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-pink-600/20 flex items-center justify-center border border-red-500/20">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 class="text-2xl font-bold text-white">My Role</h4>
              </div>
              <p class="text-gray-300 text-base leading-relaxed pl-13">{{ selectedProject.role }}</p>
            </div>

            <!-- Challenges -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-pink-600/20 flex items-center justify-center border border-red-500/20">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 class="text-2xl font-bold text-white">Challenges</h4>
              </div>
              <p class="text-gray-300 text-base leading-relaxed pl-13">{{ selectedProject.challenges }}</p>
            </div>

            <!-- Technologies -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-pink-600/20 flex items-center justify-center border border-red-500/20">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 class="text-2xl font-bold text-white">Technologies Used</h4>
              </div>
              <div class="flex flex-wrap gap-3 pl-13">
                <span v-for="(tech, idx) in selectedProject.technologies" :key="idx"
                  class="bg-zinc-800/80 backdrop-blur-sm text-gray-300 text-sm font-medium px-4 py-2 rounded-lg border border-zinc-700/50 hover:bg-red-600 hover:border-red-500/50 hover:text-white transition-all duration-300">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- GitHub Link (if available) -->
            <div v-if="selectedProject.github" class="pt-4">
              <a :href="selectedProject.github" target="_blank"
                class="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 border border-red-500/20 no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.24 1.839 1.24 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.333-5.466-5.931 0-1.312.469-2.382 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.485 11.485 0 0 1 3-.404c1.02.004 2.045.137 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.647 1.653.242 2.873.118 3.176.77.839 1.234 1.909 1.234 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.815 1.103.815 2.222v3.293c0 .321.217.694.825.577 4.765-1.585 8.205-6.083 8.205-11.385 0-6.627-5.373-12-12-12z" />
                </svg>
                <span class="text-lg">View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Enhanced Projects Section Component
 * 
 * Premium project showcase with modern glassmorphism design,
 * interactive cards, and detailed modal views.
 * 
 * @component
 * @example
 * <ProjectsSection />
 * 
 * Features:
 * - Glassmorphism card design for all projects
 * - Enhanced project cards with hover effects
 * - Numbered badges for easy reference
 * - Technology tags with hover effects
 * - Detailed modal with sections
 * - Smooth transitions and animations
 * - Fully responsive grid layout
 * - AOS animation integration
 * - Floating background elements
 * 
 * @author Khun Kimhong
 */

import { ref } from "vue";
import type { Project } from "@/interface/project_interface";
import { PROJECTS_DATA } from "@/data/projects_data";

const projects = ref<Project[]>(PROJECTS_DATA);
const showModal = ref<boolean>(false);
const selectedProject = ref<Project | null>(null);

const openModal = (project: Project) => {
  selectedProject.value = project;
  showModal.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  showModal.value = false;
  selectedProject.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
/**
 * Floating Animation for Background Elements
 */
@keyframes float {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  33% {
    transform: translateY(-30px) translateX(20px);
  }

  66% {
    transform: translateY(15px) translateX(-15px);
  }
}

@keyframes float-delayed {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  33% {
    transform: translateY(20px) translateX(-20px);
  }

  66% {
    transform: translateY(-15px) translateX(15px);
  }
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 12s ease-in-out infinite;
  animation-delay: 1.5s;
}

/**
 * Slow Pulse Animation
 */
@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/**
 * Hide Scrollbar
 */
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

.overflow-y-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/**
 * Custom Scrollbar for Main Section
 */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #09090b;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #dc2626, #ec4899);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #b91c1c, #be185d);
}

/**
 * Smooth Transitions
 */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/**
 * Performance Optimization
 */
.group {
  will-change: transform, border-color;
}

/**
 * Responsive Typography
 */
@media (max-width: 640px) {
  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }
}
</style>