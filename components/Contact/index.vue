<template>
  <section id="contact" class="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-16 py-16">
    <div class="container mx-auto max-w-7xl">
      <!-- Background Title -->
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 text-center opacity-10 tracking-widest mb-2 lg:mb-8"
        data-aos="fade-down" data-aos-delay="100">
        CONTACT
      </h1>

      <!-- Main Heading -->
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4 z-10"
        data-aos="fade-up" data-aos-delay="200">
        Let’s Connect and Build Something Great
      </h2>

      <!-- Short Description -->
      <p
        class="text-gray-400 text-lg sm:text-xl leading-relaxed text-center mb-4 max-w-3xl mx-auto"
        data-aos="fade-up" data-aos-delay="300">
        Interested in working together? I'm always open to discussing exciting ideas, projects, and collaborations.
        Let’s turn your vision into reality!
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
        <!-- Left: Image -->
        <div class="flex justify-center" data-aos="fade-right" data-aos-delay="400">
          <img src="/Contact/computer-rmb.png" alt="Contact Image" 
            class="w-full max-w-md hover:scale-105 transition-transform duration-500" />
        </div>

        <!-- Right: Contact Info -->
        <div class="space-y-10" data-aos="fade-left" data-aos-delay="500">
          <div class="space-y-6 text-gray-300 text-base sm:text-lg">
            <p>
              Feel free to reach out through any of the methods below. I'm looking forward to hearing from you!
            </p>

            <!-- Email -->
            <div class="flex items-center space-x-4">
              <span class="text-red-500 bg-gray-800 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 3H3v5l9 5 9-5V3zm0 15V8l-9 5-9-5v10h18z" />
                </svg>
              </span>
              <a href="mailto:khunkimhong039@gmail.com"
                class="text-gray-200 hover:text-red-500 transition-colors duration-300">
                khunkimhong039@gmail.com
              </a>
            </div>

            <!-- Phone -->
            <div class="flex items-center space-x-4">
              <span class="bg-gray-800 text-red-500 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <a href="tel:+855964674365"
                class="hover:text-red-400 transition">
                +855 964 674 365
              </a>
            </div>

            <!-- Location -->
            <div class="flex items-center space-x-4">
              <span class="bg-gray-800 text-red-500 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 2a8 8 0 00-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 00-8-8zm0 10a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </span>
              <p>Phnom Penh, Cambodia</p>
            </div>
          </div>

          <!-- Social Media -->
          <div class="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
            <a
              v-for="social in socialMedia"
              :key="social.name"
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white bg-gray-800 hover:bg-red-500 hover:text-white p-3 rounded-full transition duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 block" fill="currentColor" viewBox="0 0 24 24"
                v-html="social.svg">
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { socialMedia } from "~/stores/SocialMedia/socialMedia";
</script>

<style scoped>
h2 {
  background: linear-gradient(to right, #ffffff, #ef4444);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
