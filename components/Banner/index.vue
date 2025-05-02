<template>
  <section id="top" class="bg-gradient-to-r from-red-800 via-rose-900 to-red-800 text-white py-8 lg:py-12 lg:h-[80vh]">
    <div class="container mx-auto px-4 mt-2 lg:mt-20">
      <div class="flex flex-col-reverse lg:flex-row items-center gap-8">
        <!-- Left Content -->
        <div class="flex flex-col text-center lg:text-left lg:w-1/2">
          <h1 class="text-[30px] md:text-[50px] lg:text-[60px] font-normal text-3d-effect text-white"
            v-text="'KHUN KIMHONG'" data-aos="fade-down" data-aos-delay="100"></h1>

          <!-- Only show currentTitle after the component has mounted -->
          <h2 v-if="isClient" class="text-2xl md:text-3xl font-semibold text-white text-3d-effect transition-opacity duration-500"
            :class="{ 'opacity-0': isFading }">
            {{ currentTitle }}
          </h2>

          <p class="text-center lg:text-left text-lg lg:text-xl text-gray-300 mt-2" data-aos="fade-up"
            data-aos-delay="300"> Hello, I'm a passionate web developer crafting dynamic, user-focused websites with <span class="text-red-500 font-medium text-3d-effect">Vue Js</span> , <span class="text-red-500 font-medium text-3d-effect">Nuxt Js</span> , and <span class="text-red-500 font-medium text-3d-effect">Laravel</span>. Ready to create something extraordinary together? </p>

          <!-- Social Media Links -->
          <div class="flex justify-center lg:justify-start mt-4 space-x-4 items-center" data-aos="fade-up"
            data-aos-delay="400">
            <a v-for="social in socialMedia" :key="social.name" :href="social.link" target="_blank"
              rel="noopener noreferrer" class="text-white p-2 rounded-md bg-gradient-to-r hover:from-red-700 hover:to-red-900 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor"
                viewBox="0 0 24 24" v-html="social.svg"></svg>
            </a>
          </div>

          <!-- Buttons -->
          <div class="flex flex-row items-center justify-center space-x-4 mt-4 lg:items-start lg:justify-start"
            data-aos="fade-up" data-aos-delay="500">
            <!-- Download CV Button -->
            <a href="/Portfolio/CV/KHUN KIMHONG_CV.pdf"
              class="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md py-3 px-8 rounded-lg hover:scale-105 hover:brightness-110 hover:shadow-red-700/50 transition-all duration-300 flex items-center gap-2"
              data-aos="zoom-in" data-aos-delay="600">
              <span>Download CV</span>
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            <NuxtLink to="#about"
              class="bg-white text-red-500 shadow-md py-3 px-8 rounded-lg hover:text-white hover:scale-105 hover:bg-red-400 hover:shadow-red-500/50 transition-all duration-300 flex items-center gap-2"
              data-aos="zoom-in" data-aos-delay="700">
              <span>Discover More</span>
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Image -->
        <div class="flex justify-center lg:justify-end lg:w-1/2" data-aos="fade-left" data-aos-delay="400">
          <img src="/ower/khun_kimhong.png" alt="KHUN KIMHONG"
            class="w-full mt-10 max-w-[200px] max-h-[200px] lg:max-w-[500px] lg:max-h-[600px] rounded-full object-cover"
            loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { socialMedia } from "~/stores/SocialMedia/socialMedia";

const titles = ref<string[]>([
  "Web Developer",
  "Front-End Developer",
  "Back-End Developer",
  "Software Engineer",
]);

const currentIndex = ref<number>(0);
const displayedText = ref<string>(""); // this will hold what’s typed
const currentTitle = computed(() => displayedText.value); // define currentTitle as a computed property
const isDeleting = ref<boolean>(false); // whether we are deleting text
const typingSpeed = ref<number>(100); // typing speed (ms per letter)
const isClient = ref(false);
const isFading = ref(false); // Add isFading as a reactive property

onMounted(() => {
  isClient.value = true;
  typeEffect(); // start typing
});

function typeEffect() {
  const fullText = titles.value[currentIndex.value];

  if (!isDeleting.value) {
    // Typing
    displayedText.value = fullText.substring(0, displayedText.value.length + 1);
  } else {
    // Deleting
    displayedText.value = fullText.substring(0, displayedText.value.length - 1);
  }

  let speed = typingSpeed.value;

  if (!isDeleting.value && displayedText.value === fullText) {
    // Pause at full word
    speed = 2000;
    isDeleting.value = true;
  } else if (isDeleting.value && displayedText.value === "") {
    // Move to next title after deleting
    isDeleting.value = false;
    currentIndex.value = (currentIndex.value + 1) % titles.value.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

// description stays the same
const description = computed(
  () =>
    "Hey there! I’m a web developer who loves turning ideas into interactive websites and apps. I work with Vue.js, Nuxt.js, and Laravel to craft fast, modern, and user-friendly digital experiences. Let’s build something amazing together!"
);
</script>
