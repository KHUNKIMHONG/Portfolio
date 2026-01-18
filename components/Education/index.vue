<template>
  <section 
    id="education" 
    class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20 overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <div class="container mx-auto max-w-7xl relative z-10">
      <!-- Header Section with Enhanced Typography -->
      <div class="text-center mb-20">
        <!-- Background Title with Glow Effect -->
        <div class="relative text-7xl sm:text-8xl lg:text-9xl font-black mb-6" data-aos="fade-down" data-aos-delay="100">
          <span class="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500/30 to-pink-500/30 blur-sm">
            EDUCATION
          </span>
          <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500/20 to-pink-500/20 tracking-widest select-none">
            EDUCATION
          </span>
        </div>
        
        <!-- Main Title with Enhanced Gradient -->
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative inline-block" data-aos="fade-up" data-aos-delay="200">
          <span class="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
            Learning Timeline
          </span>
        </h2>
        
        <!-- Animated Decorative Line -->
        <div class="flex items-center justify-center gap-2 mb-8" data-aos="zoom-in" data-aos-delay="300">
          <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
          <div class="w-24 h-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-full shadow-lg shadow-red-500/50"></div>
          <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500 rounded-full"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Left Section: Introduction & Achievements -->
        <div class="space-y-8">
          <!-- Introduction Card -->
          <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl hover:border-red-500/30 transition-all duration-500" data-aos="fade-right" data-aos-delay="300">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-pink-600/20 flex items-center justify-center border border-red-500/20 shadow-lg shadow-red-500/20">
                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white">My Journey</h3>
            </div>

            <div class="space-y-4 text-gray-300 leading-relaxed">
              <p>
                My academic journey has been the foundation of my development as a software engineer. From early education through advanced studies in Software Engineering at the Institute of Technology of Cambodia (ITC), each milestone has shaped my technical expertise and problem-solving abilities.
              </p>
              <p>
                Explore my educational path and discover how my dedication to continuous learning drives innovation in every project I undertake.
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
              <div class="w-12 h-12 bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-xl flex items-center justify-center border border-red-500/20 shadow-lg shadow-red-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white">Key Academic Achievements</h3>
            </div>

            <ul class="space-y-4">
              <li 
                v-for="(achievement, idx) in achievements" 
                :key="idx" 
                class="flex items-start gap-3 group/achievement p-3 rounded-xl hover:bg-zinc-800/50 transition-all duration-300"
              >
                <div class="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-red-600/20 to-pink-600/20 flex items-center justify-center border border-red-500/20 group-hover/achievement:scale-110 group-hover/achievement:shadow-lg group-hover/achievement:shadow-red-500/30 transition-all duration-300">
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
              class="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 border border-red-500/20"
            >
              <span class="text-lg">Let's Collaborate</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Section: Education Timeline -->
        <div class="relative">
          <!-- Vertical Timeline Line -->
          <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-pink-500/50 to-transparent hidden lg:block"></div>

          <div class="space-y-8">
            <div 
              v-for="(degree, index) in education" 
              :key="degree.institution"
              class="group relative"
              data-aos="fade-left" 
              :data-aos-delay="600 + index * 100"
            >
              <!-- Timeline Dot -->
              <div class="absolute left-0 top-10 w-4 h-4 bg-gradient-to-br from-red-600 to-pink-600 rounded-full border-4 border-black shadow-lg shadow-red-500/50 -ml-[0.4375rem] hidden lg:block z-20 group-hover:scale-125 transition-transform duration-300"></div>
              
              <!-- Card with Enhanced Design -->
              <div class="relative bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl border border-zinc-800/50 p-6 sm:p-8 lg:ml-8 hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 overflow-hidden group">
                
                <!-- Gradient Overlay on Hover -->
                <div class="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <!-- Number Badge -->
                <div class="absolute top-6 right-6 w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-pink-600/20 border border-red-500/20 flex items-center justify-center text-red-400 font-bold text-lg shadow-lg shadow-red-500/20 group-hover:scale-110 group-hover:shadow-red-500/40 transition-all duration-300">
                  {{ index + 1 }}
                </div>
                
                <div class="relative z-10">
                  <!-- Header -->
                  <div class="mb-6 pr-12">
                    <h3 class="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 leading-tight mb-3">
                      {{ degree.degree }}
                    </h3>
                    <span class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/80 rounded-xl text-sm font-semibold text-gray-300 backdrop-blur-sm border border-zinc-700/50">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {{ degree.year }}
                    </span>
                  </div>

                  <!-- Institution -->
                  <div class="flex items-center gap-4 mb-6 p-5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 group-hover:bg-zinc-800/80 transition-colors duration-300">
                    <div class="flex-shrink-0 w-16 h-16 bg-white rounded-xl p-2.5 flex items-center justify-center shadow-xl">
                      <img 
                        :src="degree.logo" 
                        :alt="`${degree.institution} logo`" 
                        class="w-full h-full object-contain"
                      />
                    </div>
                    <div class="font-bold text-white text-lg">
                      {{ degree.institution }}
                    </div>
                  </div>

                  <!-- Description -->
                  <p class="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                    {{ degree.description }}
                  </p>
                </div>

                <!-- Bottom Accent Line -->
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <!-- Connecting line between cards -->
              <div 
                v-if="index < education.length - 1"
                class="absolute left-0 top-full w-0.5 h-8 bg-gradient-to-b from-red-500/50 to-pink-500/30 ml-[-0.125rem] hidden lg:block"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Enhanced Education Section Component
 * 
 * Premium education timeline with modern glassmorphism design,
 * animated elements, and enhanced visual hierarchy.
 * 
 * @component
 * @example
 * <EducationSection />
 * 
 * Features:
 * - Glassmorphism card design throughout
 * - Vertical timeline with animated dots
 * - Enhanced education cards with hover effects
 * - Numbered badges for easy reference
 * - Two-column layout: overview and timeline
 * - Key achievements section
 * - Fully responsive and accessible
 * - AOS animation integration
 * - Floating background elements
 * 
 * @author Khun Kimhong
 */

import { ref } from 'vue'
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from '@/data/education_data'
import type { Education } from '@/interface/education_interface'

const education = ref<Education[]>(EDUCATION_DATA)
const achievements = ref<string[]>(ACHIEVEMENTS_DATA)
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
 * Smooth Transitions
 */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/**
 * Custom Scrollbar
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