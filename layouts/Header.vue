<template>
  <header :class="{ 'bg-gradient-to-r from-red-800 via-rose-900 to-red-800 backdrop-blur-md': isScrolled }"
    class="text-white fixed top-0 p-2 w-full z-40">
    <nav ref="menuRef" class="container mx-auto max-w-6xl flex items-center justify-between">
      <!-- Logo and Text Section -->
      <div class="flex items-center space-x-2">
        <img src="/ower/ownPhoto.jpg" alt="Logo"
          class="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-rose-600 logo-3d-effect" />
        <div class="flex flex-col">
          <h1 class="text-xl sm:text-2xl font-bold text-red-500 text-3d-effect">
            KHUN KIMHONG
          </h1>
          <div class="flex items-center space-x-2 text-gray-300 text-xs sm:text-sm">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Available for Work</span>
          </div>
        </div>
      </div>

      <!-- Toggle Button (Always Visible on Small Screens) -->
      <button @click="toggleMenu" class="lg:hidden text-2xl text-white flex-shrink-0 z-50 p-2">
        <span v-if="!isMenuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </span>
        <span v-else>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex lg:space-x-6 lg:items-center lg:text-md lg:font-medium transition-colors duration-300"
        :class="isScrolled ? 'text-white' : 'text-gray-300'">
        <li v-for="(section, index) in sections" :key="index">
          <a :href="'#' + section" @click="updateActiveSection(section)"
            class="hover:text-amber-600 transition-colors duration-200 ease-in-out" :class="getLinkClass(section)"
            v-text="section.charAt(0).toUpperCase() + section.slice(1)" />
        </li>
      </ul>

      <!-- Mobile Menu -->
      <transition name="slide">
        <div v-if="isMenuOpen" @click="toggleMenu"
          class="absolute top-16 left-0 w-full h-screen bg-zinc-900 text-lg text-white px-4 py-4 lg:hidden z-40">
          <ul class="flex flex-col space-y-2">
            <li v-for="(section, index) in sections" :key="index">
              <a :href="'#' + section" @click="updateActiveSection(section)"
                class="hover:text-amber-600 block py-2" :class="getLinkClass(section)"
                v-text="section.charAt(0).toUpperCase() + section.slice(1)" />
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// DOM references
const menuRef = ref<HTMLElement | null>(null);

// Reactive states
const isMenuOpen = ref<boolean>(false);
const isScrolled = ref<boolean>(false);
const activeSection = ref<string>("top");

// Section names
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

// Toggle menu open/close
const toggleMenu = (event: MouseEvent): void => {
  isMenuOpen.value = !isMenuOpen.value;
  event.stopPropagation();
};

// Handle click outside to close menu
const closeMenuOnClickOutside = (event: MouseEvent): void => {
  if (isMenuOpen.value && menuRef.value && !menuRef.value.contains(event.target as Node)) {
    isMenuOpen.value = false;
  }
};

// Update active section on click
const updateActiveSection = (section: string): void => {
  activeSection.value = section;
};

// Scroll effect
const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 0;
};

// Observe section intersection
const observeSections = (): void => {
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
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

// Get link style based on active section
const getLinkClass = (sectionId: string): string => {
  return activeSection.value === sectionId
    ? "text-amber-400 font-bold transition duration-200 ease-in-out"
    : "transition duration-200 ease-in-out";
};

// Mount / Unmount
onMounted(() => {
  document.addEventListener("click", closeMenuOnClickOutside);
  window.addEventListener("scroll", handleScroll);
  observeSections();
});

onUnmounted(() => {
  document.removeEventListener("click", closeMenuOnClickOutside);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Slide transition styles */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>