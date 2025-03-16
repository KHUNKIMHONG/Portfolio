<template>
  <header
    class="bg-gradient-to-r from-red-700 via-rose-900 to-red-700 text-white fixed top-0 py-2 w-full z-40"
  >
    <nav
      ref="menuRef"
      class="container mx-auto flex justify-between items-center px-4"
    >
      <!-- Logo / Title with Close Button -->
      <div class="flex items-center justify-between w-full lg:w-auto space-x-2">
        
        <div class="flex items-center space-x-2">
          <!-- Profile Image -->
          <img
            src="/ower/ownPhoto.jpg"
            alt="Logo"
            class="h-10 w-10 mr-2 rounded-full border-2 border-rose-600 shadow-2xl shadow-black transition-all duration-300 logo-3d-effect"
          />
          <!-- Name and Available for Work Section in a Row -->
          <div class="flex flex-col ml-2">
            <!-- Name -->
            <h1
              class="text-2xl font-bold text-red-500 text-3d-effect hover:text-red-600"
            >
              KHUN KIMHONG
            </h1>
            <!-- Available for Work Section -->
            <div class="flex items-center space-x-2 text-gray-300 text-sm">
              <!-- Green Dot -->
              <span
                class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
              ></span>
              <!-- Text -->
              <span>Available for Work</span>
            </div>
          </div>
        </div>

        <button @click="toggleMenu" class="lg:hidden text-2xl text-white">
          <span v-if="!isMenuOpen">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </span>
          <span v-else>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>

      <!-- Navigation Menu -->
      <ul v-if="sections.length > 0"
        :class="[
          'lg:flex flex-col p-8 space-y-4 border border-yellow-900 rounded-md mt-2 bg-red-600 text-white text-lg absolute left-0 w-96 z-10 lg:text-sm lg:p-1 lg:border-hidden lg:relative top-16 lg:top-0 lg:w-auto lg:bg-transparent lg:flex-row lg:space-y-0 lg:space-x-6',
          isMenuOpen ? 'block' : 'hidden',
        ]"
        @click="isMenuOpen = false"
        class="transition-all duration-300"
      >
        <li v-for="(section, index) in sections" :key="index">
          <a
            :href="'#' + section"
            @click="updateActiveSection(section)"
            class="hover:text-lime-400 block py-2 lg:py-1"
            :class="getLinkClass(section)"
            v-text="section.charAt(0).toUpperCase() + section.slice(1)"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// State for menu toggle
const isMenuOpen = ref(false);
const menuRef = ref(null);
const activeSection = ref("top"); // Track the active section visually

// Sections list
const sections = ref([
  "top",
  "services",
  "about",
  "skill",
  "experience",
  "education",
  "Project",
  "Workflow",
  "contact",
].map(section => section.trim()));

// Function to toggle the mobile menu
const toggleMenu = (event) => {
  isMenuOpen.value = !isMenuOpen.value;
  event.stopPropagation();
};

// Close menu when clicking outside
const closeMenuOnClickOutside = (event) => {
  if (
    isMenuOpen.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target)
  ) {
    isMenuOpen.value = false;
  }
};

// Function to update active section only on click
const updateActiveSection = (section) => {
  activeSection.value = section; // Update active section for styling
};

// Intersection Observer for tracking active section (only for styling, not URL)
const observeSections = () => {
  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.6, // 60% of the section should be visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Only update activeSection for styling, not the URL
        activeSection.value = entry.target.id;
      }
    });
  }, observerOptions);

  // Observe all sections
  sections.value.flatMap((sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) observer.observe(sectionElement);
  });
};

//hook
onMounted(() => {
  document.addEventListener("click", closeMenuOnClickOutside);
  observeSections();
});

onUnmounted(() => {
  document.removeEventListener("click", closeMenuOnClickOutside);
});

// Function to get active link class
const getLinkClass = (sectionId) => {
  return activeSection.value === sectionId
    ? "text-lime-400 font-bold transition duration-200 ease-in-out"
    : "transition duration-200 ease-in-out";
};
</script>

<style scoped>
/* Optional: add some custom styles for mobile view and alignment */
/* @media (max-width: 1024px) {
  .lg:hidden {
    display: block;
  }
} */
</style>
