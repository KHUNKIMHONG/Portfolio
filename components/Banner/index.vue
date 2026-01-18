<template>
  <section id="top" class="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-800 via-zinc-900 to-red-800 text-white">
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <div class="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20 lg:py-0">

        <!-- Left Content -->
        <div class="flex flex-col text-center lg:text-left lg:w-1/2 space-y-4">

          <!-- Main Heading with Enhanced Gradient -->
          <h1 class="relative" data-aos="fade-down" data-aos-delay="100">
            <span class="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black">
              <span class="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500/30 to-rose-500/30 blur-sm">
                KHUN KIMHONG
              </span>
              <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-white">
                KHUN KIMHONG
              </span>
            </span>
          </h1>

          <!-- Dynamic Typing Title -->
          <div class="h-16 flex items-center justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="200">
            <div class="p-2">
              <h2 v-if="isClient" class="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 transition-all duration-300" :class="{ 'opacity-0 scale-95': isFading, 'opacity-100 scale-100': !isFading }">
                {{ currentTitle }}
                <span class="animate-pulse text-red-500">|</span>
              </h2>
            </div>
          </div>

          <!-- Description -->
          <div class="p-2" data-aos="fade-up" data-aos-delay="300">
            <p class="text-base lg:text-lg text-gray-300 leading-relaxed">
              Hello, I'm a passionate web developer crafting dynamic, user-focused websites with
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-bold">Next.js</span>,
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-bold">Nuxt.js</span>, and
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-bold">Elixir</span>.
              Ready to create something extraordinary together?
            </p>
          </div>

          <!-- Social Media Links -->
          <div class="flex justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="400">
            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-4 border border-zinc-800/50 shadow-xl">
              <div class="flex gap-3">
                <a v-for="social in socialMedia" :key="social.name" :href="social.link" target="_blank" rel="noopener noreferrer" :aria-label="`Visit my ${social.name} profile`" class="group relative p-3 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-red-500/50 hover:bg-gradient-to-br hover:from-red-600 hover:to-rose-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" v-html="social.svg"></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-4 pt-4" data-aos="fade-up" data-aos-delay="600">
            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-xl p-4 border border-zinc-800/50 text-center hover:border-red-500/30 transition-all duration-300 group">
              <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 group-hover:scale-110 transition-transform duration-300">5+</p>
              <p class="text-xs text-gray-400 mt-1">Projects</p>
            </div>
            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-xl p-4 border border-zinc-800/50 text-center hover:border-red-500/30 transition-all duration-300 group">
              <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 group-hover:scale-110 transition-transform duration-300">01+</p>
              <p class="text-xs text-gray-400 mt-1">Experience</p>
            </div>
            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-xl p-4 border border-zinc-800/50 text-center hover:border-red-500/30 transition-all duration-300 group">
              <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 group-hover:scale-110 transition-transform duration-300">5+</p>
              <p class="text-xs text-gray-400 mt-1">Technologies</p>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="flex justify-center items-center lg:w-1/2" data-aos="fade-left" data-aos-delay="400">
          <div class="relative group">
            <!-- Glowing ring effect with multiple layers -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-red-500 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            <div class="absolute inset-4 rounded-full bg-gradient-to-r from-rose-500 via-red-500 to-rose-500 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" style="animation-delay: 0.5s;"></div>

            <!-- Image container with glassmorphism border -->
            <div class="relative rounded-full overflow-hidden border-4 border-zinc-800/50 shadow-2xl shadow-red-500/30 group-hover:shadow-red-500/50 transition-all duration-500 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm">
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/10 to-rose-600/10 group-hover:from-red-600/20 group-hover:to-rose-600/20 transition-all duration-500"></div>
              <img src="/ower/khun_kimhong.png" alt="KHUN KIMHONG - Web Developer" class="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>

            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-red-600/20 to-rose-600/20 border border-red-500/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div class="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-red-600/20 to-rose-600/20 border border-red-500/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block" data-aos="fade-up" data-aos-delay="800">
      <div class="flex flex-col items-center gap-2 animate-bounce">
        <span class="text-xs text-gray-400 font-medium uppercase tracking-wider">Scroll Down</span>
        <div class="w-6 h-10 rounded-full border-2 border-red-500/50 flex justify-center p-2">
          <div class="w-1.5 h-3 bg-red-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
/**
 * Enhanced Hero Section Component
 * 
 * Premium hero section with modern glassmorphism design,
 * typewriter effect, and enhanced visual elements.
 * 
 * @component
 * @example
 * <HeroSection />
 * 
 * Features:
 * - Glassmorphism design throughout
 * - Typewriter effect for job titles
 * - Available for hire badge
 * - Enhanced profile image with decorative elements
 * - Social media links in glassmorphism container
 * - Quick stats cards
 * - Action buttons with hover effects
 * - Scroll indicator
 * - Fully responsive layout
 * - AOS animation integration
 * - Floating background elements
 * 
 * @author Khun Kimhong
 */

import { ref, computed, onMounted } from "vue";
import { socialMedia } from "~/stores/SocialMedia/socialMedia";

const titles = ref<string[]>([
  "Web Developer",
  "Front-End Developer",
  "Back-End Developer",
  "Software Engineer",
]);

const currentIndex = ref<number>(0);
const displayedText = ref<string>("");
const isDeleting = ref<boolean>(false);
const typingSpeed = ref<number>(100);
const isClient = ref<boolean>(false);
const isFading = ref<boolean>(false);

const currentTitle = computed(() => displayedText.value);

onMounted(() => {
  isClient.value = true;
  typeEffect();
});

function typeEffect(): void {
  const fullText = titles.value[currentIndex.value] || "";

  if (isDeleting.value && displayedText.value === fullText) {
    isFading.value = true;
  } else if (!isDeleting.value && displayedText.value === "") {
    isFading.value = false;
  }

  if (!isDeleting.value) {
    displayedText.value = fullText.substring(0, displayedText.value.length + 1);
  } else {
    displayedText.value = fullText.substring(0, displayedText.value.length - 1);
  }

  let speed = typingSpeed.value;

  if (!isDeleting.value && displayedText.value === fullText) {
    speed = 2000;
    isDeleting.value = true;
  } else if (isDeleting.value && displayedText.value === "") {
    isDeleting.value = false;
    currentIndex.value = (currentIndex.value + 1) % titles.value.length;
    speed = 500;
  } else if (isDeleting.value) {
    speed = 50;
  }

  setTimeout(typeEffect, speed);
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
 * Scroll Animation for Indicator
 */
@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.animate-scroll {
  animation: scroll 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  will-change: transform;
}

/**
 * Responsive Typography
 */
@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
}

/**
 * Reduced Motion Support
 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>