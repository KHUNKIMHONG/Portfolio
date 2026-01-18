<!-- REPLACE YOUR ENTIRE HEADER TEMPLATE WITH THIS -->

<template>
  <header 
    :class="{ 'bg-zinc-900/95 backdrop-blur-xl shadow-2xl shadow-red-500/10 border-b border-zinc-800/50': isScrolled }"
    class="text-white fixed top-0 w-full z-20 transition-all duration-500">
    
    <nav ref="menuRef" class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
      <div class="flex items-center justify-between">
        
        <!-- Logo and Text Section -->
        <div class="flex items-center gap-3 group">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img 
              src="/ower/ownPhoto.jpg" 
              alt="KHUN KIMHONG Logo"
              class="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-red-500/50 group-hover:border-red-500 transition-all duration-300 object-cover shadow-lg shadow-red-500/30" 
            />
          </div>
          
          <div class="flex flex-col">
            <h1 class="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 group-hover:from-red-400 group-hover:to-rose-400 transition-all duration-300">
              KHUN KIMHONG
            </h1>
            <div class="flex items-center gap-2 text-gray-400 text-xs">
              <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
              <span class="font-medium">Available for Work</span>
            </div>
          </div>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden lg:flex lg:gap-1 lg:items-center">
          <li v-for="(section, index) in sections" :key="index">
            <a 
              :href="'#' + section" 
              @click="updateActiveSection(section)"
              class="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/link overflow-hidden"
              :class="getLinkClass(section)">
              
              <span 
                class="absolute inset-0 bg-gradient-to-r from-red-600/20 to-rose-600/20 rounded-lg transition-opacity duration-300"
                :class="activeSection === section ? 'opacity-100' : 'opacity-0 group-hover/link:opacity-100'">
              </span>
              
              <span class="relative z-10">
                {{ section.charAt(0).toUpperCase() + section.slice(1) }}
              </span>
              
              <span 
                v-if="activeSection === section"
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-red-500 to-rose-500 rounded-full">
              </span>
            </a>
          </li>
        </ul>

        <!-- Mobile Toggle Button -->
        <button 
          @click.stop="toggleMenu" 
          class="lg:hidden relative p-2 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:bg-zinc-800 hover:border-red-500/50 transition-all duration-300 group z-50"
          :class="{ 'bg-red-600/20 border-red-500/50': isMenuOpen }">
          
          <div class="w-6 h-6 flex flex-col justify-center items-center">
            <span 
              class="block w-5 h-0.5 bg-gray-300 group-hover:bg-red-400 transition-all duration-300"
              :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }">
            </span>
            <span 
              class="block w-5 h-0.5 bg-gray-300 group-hover:bg-red-400 my-1 transition-all duration-300"
              :class="{ 'opacity-0': isMenuOpen }">
            </span>
            <span 
              class="block w-5 h-0.5 bg-gray-300 group-hover:bg-red-400 transition-all duration-300"
              :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }">
            </span>
          </div>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu - FIXED VERSION -->
    <Transition name="mobile-menu">
      <div 
        v-if="isMenuOpen" 
        class="lg:hidden fixed left-0 right-0 top-[64px] bottom-0 bg-black/95 backdrop-blur-xl overflow-y-auto overscroll-contain">
        
        <!-- Menu Container -->
        <div class="container mx-auto max-w-7xl px-4 py-8">
          
          <!-- Navigation Links -->
          <ul class="space-y-2">
            <li v-for="(section, index) in sections" :key="index">
              <a 
                :href="'#' + section" 
                @click.prevent="handleMobileClick(section)"
                class="group/mobile flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 overflow-hidden relative"
                :class="getMobileLinkClass(section)">
                
                <span 
                  class="absolute inset-0 bg-gradient-to-r from-red-600/10 to-rose-600/10 opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300">
                </span>
                
                <div class="relative z-10 flex items-center gap-4">
                  <span 
                    class="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-sm font-bold transition-all duration-300"
                    :class="activeSection === section ? 'bg-gradient-to-br from-red-600/30 to-rose-600/30 border-red-500/50 text-red-400' : 'text-gray-400 group-hover/mobile:border-red-500/30'">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  
                  <span 
                    class="text-lg font-semibold transition-all duration-300"
                    :class="activeSection === section ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400' : 'text-gray-300 group-hover/mobile:text-white'">
                    {{ section.charAt(0).toUpperCase() + section.slice(1) }}
                  </span>
                </div>
                
                <svg 
                  class="relative z-10 w-5 h-5 transition-all duration-300"
                  :class="activeSection === section ? 'text-red-400' : 'text-gray-500 group-hover/mobile:text-red-400 group-hover/mobile:translate-x-1'"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
                
                <span 
                  v-if="activeSection === section"
                  class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-red-500 to-rose-500 rounded-r-full">
                </span>
              </a>
            </li>
          </ul>
          
          <!-- Quick Contact in Mobile Menu -->
          <div class="mt-8 pt-8 border-t border-zinc-800/50 pb-8">
            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800/50">
              <h3 class="text-lg font-bold text-white mb-4">Let's Connect</h3>
              <p class="text-sm text-gray-400 mb-6">Ready to start your next project?</p>
              <a 
                href="#contact" 
                @click.prevent="handleMobileClick('contact')"
                class="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 border border-red-500/20">
                <span>Get in Touch</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const menuRef = ref<HTMLElement | null>(null);
const isMenuOpen = ref<boolean>(false);
const isScrolled = ref<boolean>(false);
const activeSection = ref<string>("top");

const sections = ref<string[]>([
  "top",
  "services",
  "about",
  "skill",
  "experience",
  "education",
  "project",
  "workflow",
  "blog",
  "contact",
  "faq",
]);

const toggleMenu = (event?: MouseEvent): void => {
  if (event) {
    event.stopPropagation();
  }
  isMenuOpen.value = !isMenuOpen.value;
  
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const closeMenuOnClickOutside = (event: MouseEvent): void => {
  if (isMenuOpen.value && menuRef.value && !menuRef.value.contains(event.target as Node)) {
    isMenuOpen.value = false;
    document.body.style.overflow = 'auto';
  }
};

const updateActiveSection = (section: string): void => {
  activeSection.value = section;
};

const handleMobileClick = (section: string): void => {
  updateActiveSection(section);
  isMenuOpen.value = false;
  document.body.style.overflow = 'auto';
  
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 50;
};

const observeSections = (): void => {
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, observerOptions);

  sections.value.forEach((sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      observer.observe(sectionElement);
    }
  });
};

const getLinkClass = (sectionId: string): string => {
  return activeSection.value === sectionId
    ? "text-white"
    : "text-gray-400 hover:text-white";
};

const getMobileLinkClass = (sectionId: string): string => {
  return activeSection.value === sectionId
    ? "bg-zinc-800/50 border border-zinc-700/50"
    : "border border-transparent hover:border-zinc-800/50";
};

onMounted(() => {
  document.addEventListener("click", closeMenuOnClickOutside);
  window.addEventListener("scroll", handleScroll);
  observeSections();
});

onUnmounted(() => {
  document.removeEventListener("click", closeMenuOnClickOutside);
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = 'auto';
});
</script>

<style scoped>
/**
 * Mobile Menu Transitions
 */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/**
 * Smooth Transitions
 */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/**
 * Custom Scrollbar for Mobile Menu
 */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(24, 24, 27, 0.5);
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #dc2626, #f43f5e);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #b91c1c, #e11d48);
}

/**
 * Performance Optimization
 */
.group {
  will-change: transform;
}
</style>