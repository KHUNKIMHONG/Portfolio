<template>
  <section id="services" class="min-h-screen py-20 px-6 lg:px-24 relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black flex items-center">
    
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
            SERVICES
          </span>
          <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500/20 to-rose-500/20 tracking-widest select-none">
            SERVICES
          </span>
        </div>
        
        <!-- Main Title with Enhanced Gradient -->
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative inline-block" data-aos="fade-up" data-aos-delay="200">
          <span class="bg-gradient-to-r from-white via-red-100 to-rose-100 bg-clip-text text-transparent">
            What I Offer?
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
          Helping businesses and individuals create modern, high-performing websites and applications with cutting-edge technologies.
        </p>
      </div>

      <!-- Services Grid with Enhanced Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl p-8 shadow-2xl border border-zinc-800/50 transition-all duration-500 hover:border-red-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20"
          data-aos="zoom-in" 
          :data-aos-delay="500 + index * 100">
          
          <!-- Animated gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-500/0 to-rose-600/0 group-hover:from-red-600/10 group-hover:via-red-500/5 group-hover:to-rose-600/10 transition-all duration-500 rounded-2xl"></div>
          
          <!-- Number Badge -->
          <div class="absolute top-6 right-6 w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 border border-red-500/20 flex items-center justify-center text-red-400 font-bold text-lg shadow-lg shadow-red-500/20 group-hover:scale-110 group-hover:shadow-red-500/40 transition-all duration-300">
            {{ index + 1 }}
          </div>
          
          <!-- Content -->
          <div class="relative z-10">
            <!-- Icon with Enhanced Styling -->
            <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600/20 to-rose-600/20 border-2 border-red-500/30 shadow-xl shadow-red-500/30 group-hover:shadow-red-500/50 group-hover:scale-110 group-hover:border-red-500/50 transition-all duration-300">
              <div v-html="service.icon" class="w-10 h-10 text-red-400"></div>
            </div>

            <!-- Title -->
            <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
              {{ service.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-400 text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
              {{ service.description }}
            </p>

            <!-- Technologies Badge -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="tech in service.technologies" 
                :key="tech"
                class="text-xs px-3 py-1.5 rounded-lg bg-zinc-800/80 backdrop-blur-sm text-gray-300 border border-zinc-700/50 group-hover:border-red-500/40 group-hover:bg-zinc-800 transition-all duration-300">
                {{ tech }}
              </span>
            </div>

            <!-- Tagline with arrow -->
            <div class="flex items-center gap-2 text-red-400 font-semibold group-hover:gap-4 transition-all duration-300">
              <span class="text-sm">{{ service.tagline }}</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>

          <!-- Decorative corner element with enhanced animation -->
          <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-600/10 to-rose-600/10 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-500"></div>
          
          <!-- Bottom Accent Line -->
          <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      <!-- Enhanced Call to Action -->
      <div class="mt-20 text-center" data-aos="fade-up" data-aos-delay="900">
        <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-3xl p-10 sm:p-12 border border-zinc-800/50 shadow-2xl relative overflow-hidden group max-w-3xl mx-auto">
          
          <!-- Animated Background Gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <!-- Decorative Corner Accents -->
          <div class="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-br-full"></div>
          <div class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-rose-500/10 to-transparent rounded-tl-full"></div>
          
          <div class="relative z-10">
            <!-- Icon -->
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600/20 to-rose-600/20 mb-8 border border-red-500/20 shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform duration-500">
              <svg class="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <h3 class="text-3xl sm:text-4xl font-bold text-white mb-5">
              Ready to bring your ideas to life?
            </h3>
            
            <p class="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              Let's collaborate to create something amazing together. Your vision, my expertise.
            </p>
            
            <a 
              href="#contact"
              class="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 group/btn border border-red-500/20">
              <span class="text-lg">Let's Start a Project</span>
              <svg class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Enhanced Services Section Component
 * 
 * Premium services showcase with modern glassmorphism design,
 * animated cards, and enhanced visual hierarchy.
 * 
 * @component
 * @example
 * <ServicesSection />
 * 
 * Features:
 * - Glassmorphism card design for all services
 * - Enhanced icon containers with better styling
 * - Numbered badges for easy reference
 * - Technology tags with hover effects
 * - Animated decorative elements
 * - Premium call-to-action section
 * - Fully responsive grid layout
 * - AOS animation integration
 * - Floating background elements
 * - Smooth hover transitions
 * 
 * @author Khun Kimhong
 */

import { ref } from 'vue';
import { servicesData } from '@/data/services_data';
import type { ServicesData, Service } from '@/interface/service_interface';

const services = ref<Service[]>(servicesData.services);
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
}

/**
 * Grid Gap Adjustments for Better Spacing
 */
@media (min-width: 768px) and (max-width: 1023px) {
  .grid {
    gap: 1.5rem;
  }
}
</style>