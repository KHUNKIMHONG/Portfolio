<template>
  <section 
    id="experience" 
    class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20 overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <div class="container mx-auto max-w-7xl relative z-10">
      <!-- Header Section with Enhanced Typography -->
      <div class="text-center mb-20">
        <!-- Background Title with Glow Effect -->
        <div class="relative text-7xl sm:text-8xl lg:text-9xl font-black mb-6" data-aos="fade-down" data-aos-delay="100">
          <span class="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500/30 to-rose-500/30 blur-sm">
            EXPERIENCE
          </span>
          <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500/20 to-rose-500/20 tracking-widest select-none">
            EXPERIENCE
          </span>
        </div>
        
        <!-- Main Title with Enhanced Gradient -->
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative inline-block" data-aos="fade-up" data-aos-delay="200">
          <span class="bg-gradient-to-r from-white via-red-100 to-rose-100 bg-clip-text text-transparent">
            Professional Journey
          </span>
        </h2>
        
        <!-- Animated Decorative Line -->
        <div class="flex items-center justify-center gap-2 mb-8" data-aos="zoom-in" data-aos-delay="300">
          <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
          <div class="w-24 h-1 bg-gradient-to-r from-red-500 via-rose-500 to-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
          <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500 rounded-full"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Left Section: Introduction & Achievements -->
        <div class="space-y-8">
          <!-- Introduction Card -->
          <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl hover:border-red-500/30 transition-all duration-500" data-aos="fade-right" data-aos-delay="300">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20 shadow-lg shadow-red-500/20">
                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white">Career Overview</h3>
            </div>

            <div class="space-y-4 text-gray-300 leading-relaxed">
              <p>
                My career as a web developer has been shaped by diverse roles in frontend, backend, and full-stack development. Each experience has strengthened my ability to deliver innovative, user-focused solutions that drive business success.
              </p>
              <p>
                Explore my professional milestones and discover how my commitment to excellence has consistently delivered impactful results across various projects and organizations.
              </p>
            </div>
          </div>

          <!-- Key Achievements Card -->
          <div 
            class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl hover:border-red-500/30 transition-all duration-500"
            data-aos="fade-right" 
            data-aos-delay="400"
          >
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-red-600/20 to-rose-600/20 rounded-xl flex items-center justify-center border border-red-500/20 shadow-lg shadow-red-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white">Key Achievements</h3>
            </div>

            <ul class="space-y-4">
              <li 
                v-for="(achievement, idx) in achievements" 
                :key="idx" 
                class="flex items-start gap-3 group/achievement p-3 rounded-xl hover:bg-zinc-800/50 transition-all duration-300"
              >
                <div class="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20 group-hover/achievement:scale-110 group-hover/achievement:shadow-lg group-hover/achievement:shadow-red-500/30 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-300 leading-relaxed group-hover/achievement:text-gray-200 transition-colors duration-300">
                  {{ achievement }}
                </span>
              </li>
            </ul>
          </div>

          <!-- CTA Button -->
          <div data-aos="fade-right" data-aos-delay="500">
            <a 
              href="#contact"
              class="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 border border-red-500/20"
            >
              <span class="text-lg">Connect for Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Section: Experience Cards with Custom Scrollbar -->
        <div class="relative">
          <!-- Vertical Timeline Line (for visual effect) -->
          <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-rose-500/50 to-transparent hidden lg:block"></div>

          <div class="max-h-[850px] overflow-y-auto custom-scrollbar space-y-8 lg:ml-8 pr-2">
            <div 
              v-for="(job, index) in experience" 
              :key="job.company"
            >
              <!-- Timeline Dot -->
              <div class="absolute left-0 top-10 w-4 h-4 bg-gradient-to-br from-red-600 to-rose-600 rounded-full border-4 border-black shadow-lg shadow-red-500/50 -ml-[2.4rem] hidden lg:block z-20 group-hover:scale-125 transition-transform duration-300"></div>

              <!-- Card -->
              <div class="relative bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl border border-zinc-800/50 p-6 sm:p-8 hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 group overflow-hidden">
                
                <!-- Gradient Overlay on Hover -->
                <div class="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <!-- Number Badge -->
                <div class="absolute top-6 right-6 w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 border border-red-500/20 flex items-center justify-center text-red-400 font-bold text-lg shadow-lg shadow-red-500/20 group-hover:scale-110 group-hover:shadow-red-500/40 transition-all duration-300">
                  {{ index + 1 }}
                </div>
                
                <div class="relative z-10">
                  <!-- Header -->
                  <div class="mb-6 pr-12">
                    <h3 class="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 leading-tight mb-3">
                      {{ job.position }}
                    </h3>
                    <span class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/80 rounded-xl text-sm font-semibold text-gray-300 backdrop-blur-sm border border-zinc-700/50">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {{ job.duration }}
                    </span>
                  </div>

                  <!-- Company Info -->
                  <div class="flex items-center gap-4 mb-6 p-5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 group-hover:bg-zinc-800/80 transition-colors duration-300">
                    <div class="flex-shrink-0 w-14 h-14 bg-white rounded-xl p-2.5 flex items-center justify-center shadow-xl">
                      <img 
                        :src="job.logo" 
                        :alt="`${job.company} logo`" 
                        class="w-full h-full object-contain"
                      />
                    </div>
                    <div class="font-bold text-white text-lg">
                      {{ job.company }}
                    </div>
                  </div>

                  <!-- Short Description -->
                  <p class="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors mb-4">
                    {{ expandedJob === index ? job.shortDescription : truncateText(job.shortDescription) }}
                  </p>

                  <!-- Expanded Details -->
                  <transition
                    enter-active-class="transition duration-300 ease-out"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition duration-200 ease-in"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <div v-if="expandedJob === index" class="mt-6 pt-6 border-t border-zinc-700/50">
                      <h4 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
                        <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                        Key Responsibilities
                      </h4>
                      <ul class="space-y-3">
                        <li 
                          v-for="(item, idx) in job.description" 
                          :key="idx" 
                          class="flex items-start gap-3 group/item p-2 rounded-lg hover:bg-zinc-800/50 transition-all duration-300"
                        >
                          <div class="mt-0.5 flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20 group-hover/item:scale-110 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span class="text-sm text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">
                            {{ item }}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </transition>

                  <!-- Toggle Button -->
                  <button
                    @click="toggleExpand(index)"
                    class="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-red-400 hover:text-red-300 hover:bg-zinc-800/80 hover:border-red-500/30 transition-all duration-300 font-medium group/button"
                  >
                    <span>{{ expandedJob === index ? 'Show Less' : 'Show More Details' }}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      class="w-4 h-4 transition-transform duration-300"
                      :class="expandedJob === index ? 'rotate-180' : ''"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <!-- Bottom Accent Line -->
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Enhanced Experience Section Component
 * 
 * Premium experience timeline with modern glassmorphism design,
 * expandable cards, and enhanced visual hierarchy.
 * 
 * @component
 * @example
 * <ExperienceSection />
 * 
 * Features:
 * - Glassmorphism card design throughout
 * - Expandable/collapsible experience cards
 * - Vertical timeline with animated dots
 * - Custom scrollbar styling
 * - Numbered badges for easy reference
 * - Two-column layout: overview and timeline
 * - Smooth animations and transitions
 * - Fully responsive and accessible
 * - AOS animation integration
 * - Floating background elements
 * 
 * @author Khun Kimhong
 */

import { ref } from 'vue'
import { EXPERIENCE_DATA, ACHIEVEMENTS_DATA } from '@/data/experience_data'
import type { Job } from '~/interface/experience_interface'

const expandedJob = ref<number | null>(null)
const experience = ref<Job[]>(EXPERIENCE_DATA)
const achievements = ref<string[]>(ACHIEVEMENTS_DATA)

const toggleExpand = (index: number): void => {
  expandedJob.value = expandedJob.value === index ? null : index
}

const truncateText = (text: string, maxLength: number = 130): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}
</script>

<style scoped>
/**
 * Floating Animation for Background Elements
 */
@keyframes float {
  0%, 100% {
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
  0%, 100% {
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
  0%, 100% {
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
 * Custom Scrollbar Styling
 */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(239, 68, 68, 0.5) rgba(24, 24, 27, 0.3);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(24, 24, 27, 0.3);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #ef4444, #f43f5e);
  border-radius: 10px;
  border: 2px solid rgba(24, 24, 27, 0.3);
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #dc2626, #e11d48);
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