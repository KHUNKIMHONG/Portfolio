<template>
  <footer
    class="relative py-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black border-t border-zinc-800/50">

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl animate-pulse-slow"
        style="animation-delay: 1s;"></div>
    </div>

    <div class="container mx-auto max-w-7xl relative z-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">

        <!-- Branding Section -->
        <div class="text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
          <div class=" transition-all duration-500">
            <h3
              class="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 mb-4">
              KHUN KIMHONG
            </h3>
            <p class="text-gray-300 text-base leading-relaxed mb-3">
              Web Developer crafting modern & responsive digital solutions
            </p>
            <p class="text-gray-400 text-sm italic mb-6">
              Let's build something amazing together!
            </p>

            <!-- Social Links -->
            <div class="flex items-center justify-center md:justify-start gap-3">
              <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                rel="noopener noreferrer"
                class="group relative w-11 h-11 bg-zinc-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-zinc-700/50 hover:bg-gradient-to-br hover:from-red-600 hover:to-rose-600 hover:border-red-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30"
                :aria-label="`Visit ${social.name}`">
                <component :is="social.icon"
                  class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="text-center md:text-left" data-aos="fade-up" data-aos-delay="200">
          <div class=" transition-all duration-500">
            <div class="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h4 class="text-xl font-bold text-white">Quick Links</h4>
            </div>

            <ul class="space-y-3">
              <li v-for="(link) in quickLinks" :key="link.href">
                <a :href="link.href"
                  class="group flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg hover:bg-zinc-800/50 transition-all duration-300">
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-150 transition-transform duration-300"></span>
                  <span
                    class="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">{{
                      link.label }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="text-center md:text-left" data-aos="fade-up" data-aos-delay="300">
          <div class="transition-all duration-500">
            <div class="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 class="text-xl font-bold text-white">Get in Touch</h4>
            </div>

            <div class="space-y-4">
              <!-- Email -->
              <div
                class="group flex items-start justify-center md:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-300">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-zinc-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-zinc-700/50 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-rose-600 group-hover:border-red-500/50 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-red-400 group-hover:text-white transition-colors duration-300" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-gray-500 mb-1">Email</p>
                  <a href="mailto:khunkimhong039@gmail.com"
                    class="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm break-all">
                    khunkimhong039@gmail.com
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div
                class="group flex items-start justify-center md:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-300">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-zinc-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-zinc-700/50 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-rose-600 group-hover:border-red-500/50 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-red-400 group-hover:text-white transition-colors duration-300" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-gray-500 mb-1">Phone</p>
                  <a href="tel:+855964674365"
                    class="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm">
                    +855 964 674 365
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div
                class="group flex items-start justify-center md:justify-start gap-4 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-300">
                <div
                  class="flex-shrink-0 w-10 h-10 bg-zinc-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-zinc-700/50 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-rose-600 group-hover:border-red-500/50 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-red-400 group-hover:text-white transition-colors duration-300" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-gray-500 mb-1">Location</p>
                  <p class="text-gray-300 text-sm">Phnom Penh, Cambodia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8"></div>

      <!-- Bottom Footer -->
      <div class="flex flex-col lg:flex-row justify-between items-center gap-8">

        <!-- Left: Info & Copyright (now takes full width) -->
        <div
          class="bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800/50 w-full">

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">

            <!-- Column 1 -->
            <div class="space-y-2">
              <p class="text-gray-400">
                <span class="text-gray-300 font-semibold">Version:</span> {{ version }}
              </p>
              <p class="text-gray-400">
                <span class="text-gray-300 font-semibold">Powered by:</span>
                <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer"
                  class="text-red-400 hover:text-red-300 transition-colors duration-300 ml-1">
                  Nuxt.js
                </a>
              </p>
              <p class="text-gray-400">
                <span class="text-gray-300 font-semibold">Type:</span> Personal Portfolio
              </p>
            </div>

            <!-- Column 2 -->
            <div class="space-y-2">
              <p class="text-gray-400">
                <span class="text-gray-300 font-semibold">Designed by:</span> KHUN KIMHONG
              </p>
              <p class="text-gray-400">
                <span class="text-gray-300 font-semibold">Last Updated:</span> {{ lastUpdated }}
              </p>
              <button @click="openModal"
                class="text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer text-left">
                © {{ currentYear }} All Rights Reserved
              </button>
            </div>

            <!-- Column 3 – flower that opens modal -->
            <div class="space-y-4 sm:space-y-3 flex flex-col items-start sm:items-end">

              <div class="relative group cursor-pointer" @click="openFlowerModal">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-red-500/30 to-rose-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                </div>

                <div
                  class="relative bg-zinc-900/60 backdrop-blur-sm rounded-xl p-2 border border-zinc-700/60 shadow-md">
                  <img src="/Flower/DaisyFlower.png" alt="Daisy Flower – click for a wish"
                    class="w-28 h-20 sm:w-32 sm:h-24 rounded-lg object-contain group-hover:scale-105 transition-transform duration-400"
                    title="Click me for a little magic ✨" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Flower Wish Modal -->
    <Transition enter-active-class="transition duration-400 ease-out" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <div v-if="showFlowerModal" @click.self="closeFlowerModal"
        class="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
        <div @click.stop
          class="relative max-w-md w-full bg-gradient-to-b from-zinc-900/95 to-zinc-950/95 backdrop-blur-xl rounded-3xl border border-zinc-700/50 shadow-2xl overflow-hidden">

          <!-- Close button -->
          <button @click="closeFlowerModal"
            class="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center border border-zinc-700/50 hover:border-red-500/50 group transform hover:scale-110 hover:rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Flower big -->
          <div class="relative pt-10 pb-6 px-8 flex justify-center">
            <div
              class="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-purple-500/5 to-transparent pointer-events-none">
            </div>
            <img src="/Flower/DaisyFlower.png" alt="Daisy Flower"
              class="w-52 h-40 object-contain drop-shadow-[0_15px_25px_rgba(244,63,94,0.4)] animate-slow-float" />
          </div>

          <!-- Wish message -->
          <div class="px-10 pb-10 text-center space-y-4">
            <h3 class="text-2xl font-semibold bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">
              A little wish for you
            </h3>

            <p class="text-zinc-300 leading-relaxed">
              May your dreams blossom into reality,<br>
              your heart find peace and happiness,<br>
              and every day bring you closer to your goals.
            </p>

            <p class="text-sm text-zinc-500 italic pt-4">
              🌼 With love from your friendly daisy 🌼
            </p>
          </div>

        </div>
      </div>
    </Transition>

    <!-- Modal with Enhanced Design -->
    <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="showModal" @click.self="closeModal"
        class="fixed inset-0 bg-zinc-900/70 backdrop-blur-sm z-50 md:p-4 overflow-y-auto">

        <div class="max-w-4xl w-full mx-auto bg-zinc-900 rounded-xl shadow-2xl relative overflow-hidden" @click.stop>

          <!-- Modal Header -->
          <div class="relative bg-gradient-to-br from-red-600/20 to-rose-600/20 p-8 border-b border-zinc-800/50">
            <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-2">
              About My Portfolio
            </h2>
            <p class="text-gray-400 text-sm">
              Showcasing my work and skills as a web developer
            </p>
          </div>

          <!-- Close Button -->
          <button @click="closeModal"
            class="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center border border-zinc-700/50 hover:border-red-500/50 group transform hover:scale-110 hover:rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Modal Content -->
          <div class="p-8 space-y-6">
            <!-- Version Release -->
            <div class="bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">Version Release</h3>
              </div>
              <div class="space-y-3">
                <div v-for="release in versionReleases" :key="release.version"
                  class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg">
                  <span class="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-rose-500"></span>
                  <span class="font-bold text-red-400 min-w-[4rem]">{{ release.version }}</span>
                  <span class="text-gray-400 text-sm">{{ release.date }}</span>
                </div>
              </div>
            </div>

            <!-- Portfolio Overview -->
            <div class="bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">Portfolio Overview</h3>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                Welcome to my portfolio website, crafted by <span class="font-bold text-red-400">KHUN KIMHONG</span>.
                Every element, from UI/UX design to code, is built with passion and precision to showcase my skills and
                creativity.
              </p>
            </div>

            <!-- Privacy & Copyright -->
            <div class="bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">Privacy & Copyright</h3>
              </div>
              <div class="space-y-3 text-gray-300 text-sm">
                <p class="leading-relaxed">
                  <span class="font-semibold text-white">Privacy:</span> Your privacy is my priority. This website does
                  not collect, store, or share any personal information.
                </p>
                <p class="leading-relaxed">
                  <span class="font-semibold text-white">Copyright:</span> All content, designs, and code are original
                  works by <span class="font-bold text-red-400">KHUN KIMHONG</span>, protected under copyright law © {{
                    currentYear }}.
                </p>
              </div>
            </div>

            <!-- Contact -->
            <div class="bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">Get in Touch</h3>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                For inquiries, collaborations, or feedback, reach out via email at
                <a href="mailto:khunkimhong039@gmail.com"
                  class="text-red-400 hover:text-red-300 underline transition-colors">
                  khunkimhong039@gmail.com
                </a>
                or connect on
                <a href="https://t.me/khun_kimhong365" target="_blank" rel="noopener noreferrer"
                  class="text-red-400 hover:text-red-300 underline transition-colors">
                  Telegram
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </footer>
</template>

<script setup lang="ts">
/**
 * Enhanced Footer Component
 * Premium footer with modern glassmorphism design,
 * comprehensive information, and modal details.
 *
 * @component
 * @example <FooterSection />
 *
 * @author Khun Kimhong
 */

import { ref, onUnmounted, h } from 'vue';

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: any;
}

interface VersionRelease {
  version: string;
  date: string;
}

const showModal = ref(false);
const showFlowerModal = ref(false);
const currentYear = ref(new Date().getFullYear());
const version = ref('3.00');
const lastUpdated = ref('January 01, 2026');

const quickLinks: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#project' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/khunkimhong',
    icon: () =>
      h(
        'svg',
        { class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
        [
          h('path', {
            d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
          }),
        ]
      ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/khunkimhong',
    icon: () =>
      h(
        'svg',
        { class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
        [
          h('path', {
            d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
          }),
        ]
      ),
  },
  {
    name: 'Telegram',
    url: 'https://t.me/khun_kimhong365',
    icon: () =>
      h(
        'svg',
        { class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
        [
          h('path', {
            d: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
          }),
        ]
      ),
  },
];

const versionReleases: VersionRelease[] = [
  { version: 'v1.00', date: 'Released on March 17, 2025' },
  { version: 'v2.00', date: 'Released on May 03, 2025' },
  { version: 'v3.00', date: 'Released on January 01, 2026' },
];

const openModal = () => {
  showModal.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = 'auto';
};

onUnmounted(() => {
  document.body.style.overflow = 'auto';
});

const openFlowerModal = () => {
  showFlowerModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeFlowerModal = () => {
  showFlowerModal.value = false
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
/**
 * Slow Pulse Animation
 */
@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.3;
  }

  50% {
    opacity: 0.6;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes slow-float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
}

.animate-slow-float {
  animation: slow-float 6s ease-in-out infinite;
}

/**
 * Smooth Transitions
 */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/**
 * Custom Scrollbar
 */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(24, 24, 27, 0.5);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #dc2626, #f43f5e);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #b91c1c, #e11d48);
}
</style>