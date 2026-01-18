<template>
  <section 
    id="faq" 
    class="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black">
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div 
        class="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-float"
        aria-hidden="true">
      </div>
      <div 
        class="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-3xl animate-float-delayed"
        aria-hidden="true">
      </div>
      <div 
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"
        aria-hidden="true">
      </div>
    </div>

    <div class="container mx-auto max-w-5xl relative z-10">
      
      <!-- Header Section with Enhanced Typography -->
      <div class="text-center mb-20">
        <!-- Background Title with Glow Effect -->
        <div 
          class="relative text-7xl sm:text-8xl lg:text-9xl font-black mb-6"
          data-aos="fade-down"
          data-aos-delay="100">
          <span class="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500/30 to-rose-500/30 blur-sm">
            FAQ
          </span>
          <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500/20 to-rose-500/20 tracking-widest select-none">
            FAQ
          </span>
        </div>

        <!-- Main Title with Enhanced Gradient -->
        <h2 
          class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative inline-block"
          data-aos="fade-up"
          data-aos-delay="200">
          <span class="bg-gradient-to-r from-white via-red-100 to-rose-100 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </h2>

        <!-- Animated Decorative Line -->
        <div 
          class="flex items-center justify-center gap-2 mb-8"
          data-aos="zoom-in"
          data-aos-delay="300">
          <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
          <div class="w-24 h-1 bg-gradient-to-r from-red-500 via-rose-500 to-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
          <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500 rounded-full"></div>
        </div>

        <!-- Introduction Text -->
        <p 
          class="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400">
          Have questions? I've compiled answers to the most common inquiries about my work, expertise, and collaboration process.
        </p>
      </div>

      <!-- FAQ Accordion List with Enhanced Design -->
      <div class="space-y-4">
        <article
          v-for="(faq, index) in faqs"
          :key="index"
          class="group relative bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-800/50 hover:border-red-500/30 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-500/10"
          data-aos="fade-up"
          :data-aos-delay="400 + index * 80"
          data-aos-duration="600">
          
          <!-- Subtle Gradient Overlay on Hover -->
          <div class="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Question Header - Clickable -->
          <button
            @click="toggleFaq(index)"
            class="relative w-full text-left px-6 sm:px-8 py-6 flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-inset transition-all duration-300"
            :aria-expanded="activeFaq === index"
            :aria-controls="`faq-answer-${index}`">
            
            <!-- Question Number Badge with Glow -->
            <span 
              class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 text-red-400 text-sm font-bold mt-0.5 border border-red-500/20 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-all duration-300"
              :class="{ 'bg-gradient-to-br from-red-600/30 to-rose-600/30 scale-110': activeFaq === index }">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <!-- Question Text -->
            <h3 
              class="flex-1 text-base sm:text-lg font-semibold text-gray-100 leading-relaxed group-hover:text-white transition-colors duration-300">
              {{ faq.question }}
            </h3>

            <!-- Expand/Collapse Icon with Enhanced Animation -->
            <span 
              class="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-800/80 backdrop-blur-sm transition-all duration-500 mt-0.5 border border-zinc-700/50"
              :class="{ 
                'rotate-180 bg-red-600/20 border-red-500/30 shadow-lg shadow-red-500/20': activeFaq === index,
                'group-hover:bg-zinc-700/80': activeFaq !== index
              }">
              <svg 
                class="w-5 h-5 transition-all duration-300"
                :class="activeFaq === index ? 'text-red-400' : 'text-gray-400 group-hover:text-gray-300'"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path 
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <!-- Answer Content - Collapsible with Enhanced Styling -->
          <div
            :id="`faq-answer-${index}`"
            class="grid transition-all duration-500 ease-in-out"
            :style="{
              gridTemplateRows: activeFaq === index ? '1fr' : '0fr'
            }"
            role="region"
            :aria-labelledby="`faq-question-${index}`">
            
            <!-- Answer Text with Enhanced Padding -->
            <div class="overflow-hidden">
              <div class="px-6 sm:px-8 pb-7 pl-20 sm:pl-24 border-t border-zinc-800/50">
                <p class="text-gray-400 leading-relaxed pt-5 text-sm sm:text-base">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Enhanced Call-to-Action Section -->
      <div 
        class="mt-20 text-center relative group"
        data-aos="fade-up"
        data-aos-delay="600">
        
        <!-- CTA Card with Glassmorphism -->
        <div class="relative bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl border border-zinc-800/50 p-10 sm:p-12 shadow-2xl overflow-hidden">
          
          <!-- Animated Background Gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <!-- Decorative Corner Accents -->
          <div class="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-br-full"></div>
          <div class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-rose-500/10 to-transparent rounded-tl-full"></div>
          
          <div class="max-w-2xl mx-auto relative z-10">
            <!-- Icon with Pulse Animation -->
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600/20 to-rose-600/20 mb-8 border border-red-500/20 shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform duration-500">
              <svg 
                class="w-10 h-10 text-red-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 class="text-3xl sm:text-4xl font-bold text-white mb-5">
              Still Have Questions?
            </h3>
            
            <p class="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              Don't hesitate to reach out! I'm always happy to discuss your project, answer specific questions, or explore collaboration opportunities.
            </p>
            
            <!-- Enhanced CTA Button -->
            <a 
              href="#contact"
              class="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 group/btn border border-red-500/20">
              <span class="text-lg">Get in Touch</span>
              <svg 
                class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2.5" 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
 * Enhanced FAQ Section Component
 * 
 * Premium FAQ section with modern glassmorphism design,
 * smooth animations, and enhanced visual hierarchy.
 * 
 * @component
 * @example
 * <FAQSection />
 * 
 * Features:
 * - Glassmorphism card design with backdrop blur
 * - Smooth accordion animations with CSS Grid
 * - Enhanced hover states and micro-interactions
 * - Gradient overlays and glow effects
 * - Fully responsive and accessible
 * - AOS animation integration
 * - Premium CTA section with animated elements
 * 
 * @author Khun Kimhong
 */

import { ref } from "vue"
import type { FAQ } from "@/interface/faq_interface"
import { FAQ_DATA } from "@/data/faq_data"

const faqs = ref<FAQ[]>(FAQ_DATA)
const activeFaq = ref<number>(-1)

const toggleFaq = (index: number): void => {
  activeFaq.value = activeFaq.value === index ? -1 : index
}
</script>

<style scoped>
/**
 * Smooth Grid Animation for Accordion
 */
.grid {
  display: grid;
  transition: grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/**
 * Floating Animation for Background Elements
 */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-20px) translateX(10px);
  }
  66% {
    transform: translateY(10px) translateX(-10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(15px) translateX(-15px);
  }
  66% {
    transform: translateY(-10px) translateX(10px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
  animation-delay: 1s;
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
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/**
 * Smooth Rotation
 */
.rotate-180 {
  transform: rotate(180deg);
}

/**
 * Focus States for Accessibility
 */
button:focus-visible {
  outline: 2px solid rgba(239, 68, 68, 0.5);
  outline-offset: -2px;
}

/**
 * Performance Optimization
 */
article,
button,
a {
  will-change: transform;
}

/**
 * Responsive Typography Adjustments
 */
@media (max-width: 640px) {
  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .pl-20 {
    padding-left: 3.5rem;
  }
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
  background: linear-gradient(to bottom, #dc2626, #e11d48);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #b91c1c, #be123c);
}

/**
 * Number Badge Typography
 */
article span:first-of-type {
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
}
</style>