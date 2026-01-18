<template>
  <section id="skill"
    class="min-h-screen flex items-center justify-center px-6 lg:px-24 py-20 relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black">
    
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
            SKILLS
          </span>
          <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500/20 to-rose-500/20 tracking-widest select-none">
            SKILLS
          </span>
        </div>

        <!-- Main Title with Enhanced Gradient -->
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative inline-block" data-aos="fade-up" data-aos-delay="200">
          <span class="bg-gradient-to-r from-white via-red-100 to-rose-100 bg-clip-text text-transparent">
            Developer Toolkit
          </span>
        </h2>

        <!-- Animated Decorative Line -->
        <div class="flex items-center justify-center gap-2 mb-8" data-aos="zoom-in" data-aos-delay="300">
          <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
          <div class="w-24 h-1 bg-gradient-to-r from-red-500 via-rose-500 to-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
          <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500 rounded-full"></div>
        </div>

        <!-- Subtitle -->
        <p class="text-gray-400 text-lg text-center max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
          A comprehensive overview of my technical skills and expertise across various domains in web development.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        <!-- Left Section: Introduction & Stats -->
        <div class="space-y-8">
          
          <!-- Introduction Card -->
          <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl hover:border-red-500/30 transition-all duration-500" data-aos="fade-right" data-aos-delay="300">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20 shadow-lg shadow-red-500/20">
                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white">Technical Expertise</h3>
            </div>

            <div class="space-y-4 text-gray-300 leading-relaxed">
              <p>
                As a versatile web developer, I bring a robust skill set spanning <span class="text-red-400 font-semibold">frontend</span>,
                <span class="text-red-400 font-semibold">backend</span>, <span class="text-red-400 font-semibold">databases</span>,
                and <span class="text-red-400 font-semibold">tools</span> to create seamless, high-performance web solutions.
              </p>
              <p>
                From crafting responsive user interfaces to building scalable server-side applications, I'm passionate about
                leveraging the latest technologies to solve real-world challenges.
              </p>
            </div>
          </div>

          <!-- Skill Stats -->
          <div class="grid grid-cols-2 gap-4" data-aos="fade-right" data-aos-delay="400">

            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl p-6 rounded-xl border border-zinc-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">10+</p>
                  <p class="text-sm text-gray-400 font-medium">Frontend Skills</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl p-6 rounded-xl border border-zinc-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">5+</p>
                  <p class="text-sm text-gray-400 font-medium">Backend Skills</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl p-6 rounded-xl border border-zinc-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">3+</p>
                  <p class="text-sm text-gray-400 font-medium">Databases</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl p-6 rounded-xl border border-zinc-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">9+</p>
                  <p class="text-sm text-gray-400 font-medium">Dev Tools</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Call-to-Action Button -->
          <div data-aos="fade-right" data-aos-delay="500">
            <a href="#contact"
              class="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 border border-red-500/20">
              <span class="text-lg">Let's Collaborate</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Section: Skill Categories -->
        <div class="w-full space-y-6">
          <div v-for="(category, idx) in skills" :key="idx" 
            class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group"
            data-aos="fade-left"
            :data-aos-delay="500 + idx * 100">
            
            <!-- Gradient Overlay on Hover -->
            <div class="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-red-600/20 to-rose-600/20 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20 border border-red-500/20 group-hover:scale-110 transition-transform duration-300"
                  v-html="category.svgIcon"></div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 leading-tight mb-1">
                    {{ category.category }}
                  </h3>
                  <p class="text-sm text-gray-400">{{ category.description }}</p>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-3">
                <span v-for="skill in category.skills" :key="skill" class="skill-badge">
                  {{ skill }}
                </span>
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
 * Enhanced Skills Section Component
 * 
 * Premium skills showcase with modern glassmorphism design,
 * categorized skills, and enhanced visual hierarchy.
 * 
 * @component
 * @example
 * <SkillsSection />
 * 
 * Features:
 * - Glassmorphism card design throughout
 * - Skill categories with icons and descriptions
 * - Interactive skill badges with hover effects
 * - Stats cards with gradient numbers
 * - Two-column layout: overview and categories
 * - Fully responsive grid layout
 * - AOS animation integration
 * - Floating background elements
 * - Smooth transitions and hover states
 * 
 * @author Khun Kimhong
 */

import { ref } from "vue";
import type { SkillCategory } from "@/interface/skills_interface";
import { SKILLS_DATA } from "@/data/skills_data";

const skills = ref<SkillCategory[]>(SKILLS_DATA);
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
 * Enhanced Skill Badge Styling
 * Individual skill tags with premium effects
 */
.skill-badge {
  @apply bg-gradient-to-br from-zinc-800/80 to-zinc-800/40 backdrop-blur-sm text-gray-200 text-sm font-medium px-4 py-2.5 rounded-lg border border-zinc-700/50 hover:bg-gradient-to-br hover:from-red-600 hover:to-rose-600 hover:border-red-500/50 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-red-500/30;
}

/**
 * Custom Scrollbar Styling
 */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #09090b;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #dc2626, #f43f5e);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #b91c1c, #e11d48);
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
  
  .skill-badge {
    @apply text-xs px-3 py-2;
  }
}
</style>