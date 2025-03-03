<template>
  <button
    v-on:click="goTop"
    v-if="showButton"
    class="fixed bottom-4 right-4 bg-red-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

// Handle scroll event
const handleScroll = () => {
  showButton.value = window.scrollY > 200; // Show button after scrolling 200px
};

// Scroll to top smoothly
const goTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Add and remove scroll event listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* No additional CSS needed; Tailwind handles all styling */
</style>
