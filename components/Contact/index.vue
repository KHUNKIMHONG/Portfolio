<template>
  <section id="contact" class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black">
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <div class="container mx-auto max-w-6xl relative z-10">
      
      <!-- Header Section with Enhanced Typography -->
      <div class="text-center mb-20">
        <!-- Background Title with Glow Effect -->
        <div class="relative text-7xl sm:text-8xl lg:text-9xl font-black mb-6" data-aos="fade-down" data-aos-delay="100">
          <span class="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500/30 to-rose-500/30 blur-sm">
            CONTACT
          </span>
          <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500/20 to-rose-500/20 tracking-widest select-none">
            CONTACT
          </span>
        </div>

        <!-- Main Title with Enhanced Gradient -->
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative inline-block" data-aos="fade-up" data-aos-delay="200">
          <span class="bg-gradient-to-r from-white via-red-100 to-rose-100 bg-clip-text text-transparent">
            Let's Connect and Build Something Great
          </span>
        </h2>

        <!-- Animated Decorative Line -->
        <div class="flex items-center justify-center gap-2 mb-8" data-aos="zoom-in" data-aos-delay="300">
          <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
          <div class="w-24 h-1 bg-gradient-to-r from-red-500 via-rose-500 to-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
          <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500 rounded-full"></div>
        </div>

        <!-- Introduction Text -->
        <p class="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
          Interested in working together? I'm always open to discussing exciting ideas, projects, and collaborations.
          Let's turn your vision into reality!
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Left Side: Contact Image with Enhanced Card -->
        <div class="flex justify-center" data-aos="fade-right" data-aos-delay="400">
          <div class="relative group">
            <!-- Glow effect behind image -->
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-rose-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            
            <!-- Image container with glassmorphism -->
            <div class="relative bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-3xl p-8 border border-zinc-800/50 shadow-2xl group-hover:border-red-500/30 transition-all duration-500">
              <img 
                src="/Contact/computer-rmb.png" 
                alt="Contact illustration showing computer setup" 
                class="w-full max-w-md group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl" 
              />
            </div>
          </div>
        </div>

        <!-- Right Side: Contact Information with Enhanced Design -->
        <div class="space-y-8" data-aos="fade-left" data-aos-delay="500">
          
          <!-- Introduction Message -->
          <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl">
            <p class="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              Feel free to reach out through any of the methods below. I'm looking forward to hearing from you!
            </p>

            <!-- Contact Methods with Enhanced Design -->
            <div class="space-y-5">
              
              <!-- Email -->
              <div class="flex items-start space-x-4 group/item p-4 rounded-xl hover:bg-zinc-800/50 transition-all duration-300">
                <span class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-zinc-700/50 group-hover/item:bg-gradient-to-br group-hover/item:from-red-600 group-hover/item:to-rose-600 group-hover/item:border-red-500/50 group-hover/item:shadow-lg group-hover/item:shadow-red-500/30 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="w-6 h-6 text-red-400 group-hover/item:text-white transition-colors duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    stroke="currentColor" 
                    stroke-width="2"
                    aria-hidden="true">
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                </span>
                <div class="flex-1 min-w-0">
                  <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Email</p>
                  <a 
                    href="mailto:khunkimhong039@gmail.com"
                    class="text-gray-200 hover:text-red-400 transition-colors duration-300 break-all text-sm sm:text-base font-medium"
                    aria-label="Send email to khunkimhong039@gmail.com">
                    khunkimhong039@gmail.com
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4 group/item p-4 rounded-xl hover:bg-zinc-800/50 transition-all duration-300">
                <span class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-zinc-700/50 group-hover/item:bg-gradient-to-br group-hover/item:from-red-600 group-hover/item:to-rose-600 group-hover/item:border-red-500/50 group-hover/item:shadow-lg group-hover/item:shadow-red-500/30 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="w-6 h-6 text-red-400 group-hover/item:text-white transition-colors duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    stroke="currentColor" 
                    stroke-width="2"
                    aria-hidden="true">
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                </span>
                <div class="flex-1">
                  <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Phone</p>
                  <a 
                    href="tel:+855964674365" 
                    class="text-gray-200 hover:text-red-400 transition-colors duration-300 text-sm sm:text-base font-medium"
                    aria-label="Call +855 964 674 365">
                    +855 964 674 365
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div class="flex items-start space-x-4 group/item p-4 rounded-xl hover:bg-zinc-800/50 transition-all duration-300">
                <span class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-zinc-700/50 group-hover/item:bg-gradient-to-br group-hover/item:from-red-600 group-hover/item:to-rose-600 group-hover/item:border-red-500/50 group-hover/item:shadow-lg group-hover/item:shadow-red-500/30 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="w-6 h-6 text-red-400 group-hover/item:text-white transition-colors duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    stroke="currentColor" 
                    stroke-width="2"
                    aria-hidden="true">
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                </span>
                <div class="flex-1">
                  <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Location</p>
                  <p class="text-gray-200 text-sm sm:text-base font-medium">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media Links with Premium Design -->
          <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
                Connect on Social Media
              </h3>
            </div>

            <p class="text-gray-400 text-sm mb-6">
              Follow me on social media to stay updated with my latest projects and insights.
            </p>

            <div class="flex flex-wrap gap-3">
              <!-- Social Media Icons with Enhanced Tooltips -->
              <div
                v-for="social in socialMedia" 
                :key="social.name"
                class="relative group/social">
                <a 
                  :href="social.link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`Visit my ${social.name} profile`"
                  class="flex items-center justify-center w-14 h-14 text-white bg-gradient-to-br from-zinc-800 to-zinc-900 hover:from-red-600 hover:to-rose-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 hover:scale-110 border border-zinc-700/50 hover:border-red-500/50">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="w-6 h-6 block" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    v-html="social.svg"
                    aria-hidden="true">
                  </svg>
                </a>
                
                <!-- Enhanced Tooltip -->
                <span class="absolute -top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-xs font-semibold rounded-xl shadow-2xl opacity-0 group-hover/social:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 border border-gray-700/50 backdrop-blur-sm">
                  {{ social.name }}
                  <!-- Tooltip Arrow -->
                  <span class="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900 to-gray-800 border-r border-b border-gray-700/50 rotate-45"></span>
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
 * Enhanced Contact Section Component
 * 
 * Premium contact section with modern glassmorphism design,
 * enhanced animations, and improved visual hierarchy.
 * 
 * @component
 * @example
 * <ContactSection />
 * 
 * Features:
 * - Glassmorphism cards with backdrop blur
 * - Enhanced contact information display with labels
 * - Premium social media section with improved tooltips
 * - Smooth hover animations and transitions
 * - Fully responsive and accessible
 * - AOS animation integration
 * - Floating background elements
 * 
 * @author Khun Kimhong
 */

import { socialMedia } from "~/stores/SocialMedia/socialMedia";
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
 * Tooltip Animation
 */
.group\/social:hover span {
  animation: tooltipFadeIn 0.3s ease forwards;
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -8px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

/**
 * Smooth Transitions
 */
a, button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/**
 * Social Media Icon Enhanced Hover
 */
.group\/social a:hover {
  transform: scale(1.1) translateY(-4px) rotate(5deg);
}

/**
 * Performance Optimization
 */
.group\/social a {
  will-change: transform;
}

/**
 * Accessibility: Focus States
 */
.group\/social a:focus,
.group\/item:focus-within {
  outline: 2px solid #ef4444;
  outline-offset: 2px;
  border-radius: 0.75rem;
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
 * Responsive Adjustments
 */
@media (max-width: 640px) {
  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .group\/social span {
    font-size: 0.7rem;
    padding: 0.375rem 0.75rem;
  }
}

/**
 * Image Glow Effect on Hover
 */
@keyframes imageGlow {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.group:hover .absolute.inset-0 {
  animation: imageGlow 2s ease-in-out;
}
</style>