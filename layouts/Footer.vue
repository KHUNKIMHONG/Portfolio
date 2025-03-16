<template>
  <footer class="bg-gray-900 py-12 px-6 lg:px-24 relative">
    <div class="container mx-auto max-w-7xl">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <!-- Branding / Name -->
        <div>
          <h3 class="text-2xl font-Piedr text-red-500 mb-4">KHUN KIMHONG</h3>
          <p class="text-gray-400 text-sm">Web Developer | Crafting Digital Solutions</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-red-500 mb-4">Quick Links</h4>
          <ul class="space-y-2 text-gray-300">
            <li>
              <a href="#home" class="hover:text-red-500 transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="#projects" class="hover:text-red-500 transition-colors duration-300">Projects</a>
            </li>
            <li>
              <a href="#about" class="hover:text-red-500 transition-colors duration-300">About</a>
            </li>
            <li>
              <a href="#contact" class="hover:text-red-500 transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold text-red-500 mb-4">Get in Touch</h4>
          <p class="text-gray-300 flex items-center justify-center md:justify-start mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-2 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 3H3v5l9 5 9-5V3zm0 15V8l-9 5-9-5v10h18z"
              />
            </svg>
            khunkimhong039@gmail.com
          </p>
          <p class="text-gray-300 flex items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-2 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5h2a2 2 0 012 2v10a2 2 0 01-2 2H3m6-8l3 3 3-3m-3 3V5"
              />
            </svg>
            +855 964 674 365
          </p>
        </div>
      </div>

      <!-- Copyright & Back to Top -->
      <div class="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p v-if="year" class="text-gray-500 text-sm">
          © {{ year }} Khun Kimhong. All rights reserved.
        </p>
        <a
          href="#top"
          class="mt-4 md:mt-0 text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7 7 7m-7-7v18" />
          </svg>
          {{ backToTopText }}
        </a>
      </div>
    </div>

    <!-- Decorative Element -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
  </footer>
</template>

<script setup>
import { ref, onMounted,  computed } from 'vue';

const year = ref(''); // Initialize as an empty string

onMounted(() => {
  year.value = new Date().getFullYear(); // Update year on the client side
});

// Fix hydration mismatch by normalizing text content
const backToTopText = computed(() => "Back to Top".trim());
</script>

<style scoped>
footer {
  background: linear-gradient(180deg, #1f2937 0%, #111827 100%);
}

h3 {
  background: linear-gradient(to right, #ffffff, #ef4444);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

a:hover svg {
  transform: translateY(-2px);
  transition: transform 0.3s ease;
}
</style>
  
