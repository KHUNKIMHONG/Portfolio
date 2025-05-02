<template>
  <footer class="py-12 px-4 sm:px-6 lg:px-12 bg-gray-950/50 relative">
    <div class="container mx-auto max-w-7xl">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <!-- Branding / Name -->
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 class="text-3xl font-bold text-red-500 mb-4">KHUN KIMHONG</h3>
          <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
            Web Developer | Crafting Modern & Responsive Digital Solutions
          </p>
          <p class="text-gray-400 text-sm mt-2">
            Let’s build your next project together!
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4" data-aos="fade-up" data-aos-delay="300">
          <h4 class="text-xl font-semibold text-red-500 mb-4">Quick Links</h4>
          <ul class="text-sm sm:text-base space-y-3 text-gray-300">
            <li data-aos="fade-up" data-aos-delay="400">
              <a href="#top" class="hover:text-red-500 transition-colors duration-300">Home</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <a href="#project" class="hover:text-red-500 transition-colors duration-300">Projects</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              <a href="#about" class="hover:text-red-500 transition-colors duration-300">About</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              <a href="#blog" class="hover:text-red-500 transition-colors duration-300">Blog</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="700">
              <a href="#contact" class="hover:text-red-500 transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4" data-aos="fade-up" data-aos-delay="800">
          <h4 class="text-xl font-semibold text-red-500">Get in Touch</h4>

          <!-- Email Section -->
          <div class="flex items-center justify-center md:justify-start space-x-4" data-aos="fade-left"
            data-aos-delay="900">
            <span class="bg-gray-800 text-red-500 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 3H3v5l9 5 9-5V3zm0 15V8l-9 5-9-5v10h18z" />
              </svg>
            </span>
            <a href="mailto:khunkimhong039@gmail.com"
              class="text-gray-200 hover:text-red-500 transition-colors duration-300">
              khunkimhong039@gmail.com
            </a>
          </div>

          <!-- Phone Section -->
          <div class="flex items-center justify-center md:justify-start space-x-4" data-aos="fade-left"
            data-aos-delay="1000">
            <span class="bg-gray-800 text-red-500 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <a href="tel:+855964674365" class="text-gray-200 hover:text-red-500 transition-colors duration-300">
              +855 964 674 365
            </a>
          </div>

          <!-- Location Section -->
          <div class="flex items-center justify-center md:justify-start space-x-4" data-aos="fade-left"
            data-aos-delay="1100">
            <span class="bg-gray-800 text-red-500 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 2a8 8 0 00-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 00-8-8zm0 10a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </span>
            <p class="text-gray-200">Phnom Penh, Cambodia</p>
          </div>
        </div>
      </div>

      <!-- Copyright & Back to Top -->
      <div class="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <!-- Grouped Copyright and Powered By -->
        <div class="flex flex-col gap-2 text-center md:text-left">
          <p class="text-gray-400 text-sm font-medium">
            Version: 2.00
          </p>
          <p class="text-gray-400 text-sm font-medium">
            Powered by: <a href="https://nuxt.com" target="_blank" class="hover:text-red-500 transition-colors">Nuxt
              JS</a>
          </p>
          <p class="text-gray-400 text-sm font-medium">
            Designed by: <span class="font-semibold">KHUN KIMHONG</span>
          </p>
          <p @click="openModal"
            class="text-gray-400 text-sm font-medium cursor-pointer hover:text-red-500 transition-colors">
            © {{ year }} All Rights Reserved | <span class="font-semibold">KHUN KIMHONG</span>
          </p>
        </div>
       
        <!-- Back to Top -->
        <div class="flex flex-col items-center mt-6 md:mt-0">
          <a href="#top"
            class="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center gap-1.5 text-sm font-medium group">
            <svg class="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7 7 7m-7-7v18" />
            </svg>
            {{ backToTopText }}
          </a>

          <!-- Display image below the Back to Top -->
          <img src="/Flower/DaisyFlower.png" alt="Daisy Flower" class="mt-6 w-24 h-16 rounded-md object-contain" />
        </div>
      </div>
      <!-- End of Copyright & Back to Top -->
    </div>

    <!-- Decorative Element -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></div>

    <!-- Modal -->
    <div v-if="showModal" @click.self="closeModal"
      class="fixed inset-0 z-50 bg-zinc-900/60 p-4 backdrop-blur-sm overflow-y-auto" role="dialog"
      aria-labelledby="modal-title" data-aos="fade-in" data-aos-duration="500">
      <div class="bg-zinc-900 p-6 rounded-xl max-w-2xl w-full mx-auto shadow-2xl relative overflow-hidden" data-aos="zoom-in"
        data-aos-delay="200" data-aos-duration="600">
        <!-- Modal Header -->
        <h2 id="modal-title" class="text-2xl font-bold text-red-500 mb-6 text-center" data-aos="fade-up"
          data-aos-delay="300">
          About My Portfolio
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm font-medium mb-6 text-center" data-aos="fade-up"
          data-aos-delay="350">
          This portfolio showcases my work and skills as a web developer, featuring a modern design, responsive layout,
          and interactive elements.
        </p>

        <!-- Version Release -->
        <div class="mb-6" data-aos="fade-up" data-aos-delay="400">
          <h3 class="text-white font-semibold mb-2">Version Release</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm font-medium">
            Version 1.00 - Released on March 17, 2025<br />
            Version 2.00 - Releasing on May 03, 2025
          </p>
        </div>

        <!-- Portfolio Description -->
        <div class="mb-6" data-aos="fade-up" data-aos-delay="450">
          <h3 class="text-white font-semibold mb-2">Portfolio Overview</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm font-medium">
            Welcome to my portfolio website, crafted by
            <span class="font-semibold text-red-500">KHUN KIMHONG</span>.
            Every element, from UI/UX design to code, is built with passion and precision to showcase my skills and
            creativity.
          </p>
        </div>

        <!-- Privacy Policy and Copyright -->
        <div class="mb-6" data-aos="fade-up" data-aos-delay="500">
          <h3 class="text-white font-semibold mb-2">Privacy Policy</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm font-medium mb-4">
            Your privacy is my priority. This website does not collect, store, or share any personal information.
          </p>
          <h3 class="text-white font-semibold mb-2">Copyright</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm font-medium">
            All content, designs, and code are original works by
            <span class="font-semibold">KHUN KIMHONG</span>, protected under copyright law © {{ year }}.
          </p>
        </div>

        <!-- Contact Information -->
        <div class="mb-6" data-aos="fade-up" data-aos-delay="550">
          <h3 class="text-white font-semibold mb-2">Get in Touch</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm font-medium">
            For inquiries, collaborations, or feedback, reach out via email at
            <a href="mailto:khunkimhong039@gmail.com"
              class="text-red-500 hover:text-red-400 underline transition-colors">
              khunkimhong039@gmail.com
            </a>
            or connect on
            <a href="https://t.me/khun_kimhong365" target="_blank"
              class="text-red-500 hover:text-red-400 underline transition-colors">
              Telegram
            </a>.
          </p>
        </div>

        <!-- Close Button -->
        <div class="flex justify-center mt-8" data-aos="fade-up" data-aos-delay="600">
          <button @click="closeModal"
            class="group relative flex items-center bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-full shadow-lg transition-all duration-300 overflow-hidden w-14 h-14 hover:w-48 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Close Modal">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <span
              class="absolute left-16 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-base font-medium">
              Close Modal
            </span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const year = ref("");
const showModal = ref(false);

onMounted(() => {
  year.value = new Date().getFullYear();
});

const backToTopText = computed(() => "Back to Top".trim());

// Functions to open/close modal
const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
/* Hide scrollbar for category filters and modals */
.hide-scrollbar::-webkit-scrollbar,
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar,
.overflow-y-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Footer styles */
a:hover svg {
  transform: translateY(-2px);
  transition: transform 0.3s ease;
}
</style>
