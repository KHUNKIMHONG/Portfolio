<template>
  <section
    id="top"
    class="text-white bg-gradient-to-r from-red-700 via-rose-900 to-red-700 py-12 lg:px-24 lg:h-[80vh]"
  >
    <div class="container mx-auto px-4 lg:mt-20">
      <div class="flex flex-col-reverse lg:flex-row items-center gap-8">
        <!-- Left Content -->
        <div class="flex flex-col text-center lg:text-left lg:w-1/2">
          <h1
            class="text-[30px] md:text-[50px] lg:text-[60px] font-black text-3d-effect text-white"
            v-text="`KHUN KIMHONG`">
          </h1>

          <!-- Only show currentTitle after the component has mounted -->
          <h2
            v-if="isClient"
            class="text-2xl font-semibold text-white text-3d-effect transition-opacity duration-500"
            :class="{ 'opacity-0': isFading }"
          >
            {{ currentTitle }}
          </h2>

          <p class="text-left text-lg lg:text-xl text-gray-300 mt-2">
            {{ description }}
          </p>

          <!-- Social Media Links -->
          <div
            class="flex justify-center sm:justify-start mt-4 space-x-3 sm:space-x-4 items-center"
          >
            <a
              v-for="social in socialMedia"
              :key="social.name"
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white p-2 rounded-full transition duration-300"
              :class="social.hoverClass"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 sm:w-7 sm:h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                v-html="social.svg"
              ></svg>
            </a>
          </div>

          <!-- Buttons -->
          <div
            class="flex flex-row items-center justify-center space-x-4 mt-4 lg:items-start lg:justify-start"
          >
            <!-- Downloard CV Button -->
            <a
              href="/CV/KHUN KIMHONG_CV.pdf"
              class="bg-red-600 text-white shadow-md py-3 px-8 rounded-lg hover:bg-yellow-600 hover:scale-105 transition duration-300 flex items-center gap-2"
            >
              <span>Download CV</span>
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            <NuxtLink
              to="#about"
              class="bg-white text-red-600 shadow-md py-3 px-8 rounded-lg hover:bg-gray-400 hover:scale-105 transition duration-300 flex items-center gap-2"
            >
              <span>Discover More</span>
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Image (Appears Above on Small Screens) -->
        <div class="flex justify-center lg:justify-end lg:w-1/2">
          <img
            src="/ower/khun_kimhong.png"
            alt="KHUN KIMHONG"
            class="w-full mt-10 max-w-[200px] max-h-[200px] lg:max-w-[500px] lg:max-h-[600px] rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

// Interface for social media items
interface SocialMediaItem {
  name: string;
  link: string;
  svg: string;
  hoverClass: string;
}

// Social media data with TypeScript typing
const socialMedia = ref<SocialMediaItem[]>([
  {
    name: "Facebook",
    link: "https://facebook.com",
    svg: `<path d="M12 2.04c-5.5 0-10 4.5-10 10 0 4.98 3.66 9.1 8.44 9.9v-7h-2.54v-2.9h2.54v-2.2c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.24c-1.22 0-1.6.76-1.6 1.54v1.96h2.8l-.45 2.9h-2.35v7c4.78-.8 8.44-4.92 8.44-9.9 0-5.5-4.5-10-10-10z"/>`,
    hoverClass: "hover:bg-blue-600",
  },
  {
    name: "YouTube",
    link: "https://youtube.com",
    svg: `<path d="M23.5 6.2c-.3-1-1-1.8-2-2.1-1.8-.5-9-.5-9-.5s-7.2 0-9 .5c-1 .3-1.7 1-2 2.1-.5 1.8-.5 5.6-.5 5.6s0 3.8.5 5.6c.3 1 1 1.8 2 2.1 1.8.5 9 .5 9 .5s7.2 0 9-.5c1-.3 1.7-1 2-2.1.5-1.8.5-5.6.5-5.6s0-3.8-.5-5.6zm-13.9 9.6v-7.2l6.2 3.6-6.2 3.6z"/>`,
    hoverClass: "hover:bg-red-600",
  },
  {
    name: "Telegram",
    link: "https://telegram.org",
    svg: `<path d="M22.447 2.728c-.255-.204-.594-.289-.926-.239l-20.412 4.064c-1.042.208-1.173 1.003-.205 1.393l5.005 1.92 9.633-5.846c.394-.237.789-.32 1.15-.217.36.103.627.369.73.73.103.361.02.757-.217 1.15l-5.846 9.633 1.92 5.005c.39.968 1.185.837 1.393-.205l4.064-20.412c.051-.332-.035-.671-.239-.926z"/>`,
    hoverClass: "hover:bg-blue-500",
  },
  {
    name: "GitHub",
    link: "https://github.com/KHUNKIMHONG",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.24 1.839 1.24 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.333-5.466-5.931 0-1.312.469-2.382 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.485 11.485 0 0 1 3-.404c1.02.004 2.045.137 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.647 1.653.242 2.873.118 3.176.77.839 1.234 1.909 1.234 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.815 1.103.815 2.222v3.293c0 .321.217.694.825.577 4.765-1.585 8.205-6.083 8.205-11.385 0-6.627-5.373-12-12-12z"/>
      </svg>`,
    hoverClass: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.496c0-1.28-.025-2.926-1.783-2.926-1.784 0-2.056 1.394-2.056 2.83v5.592h-3v-10h2.877v1.367h.041c.4-.759 1.378-1.559 2.838-1.559 3.036 0 3.583 2.001 3.583 4.605v5.587z"/>
      </svg>`,
    hoverClass: "hover:bg-blue-500",
  },
]);

const titles = ref<string[]>([
  "Web Developer",
  "Software Engineer",
  "Full-Stack Developer",
]);
const currentIndex = ref<number>(0);
const isFading = ref<boolean>(false);
const isClient = ref(false);

// Ensure currentTitle is computed consistently on server and client
const currentTitle = computed(() => titles.value[currentIndex.value]);

// Store the description in a computed property for consistent rendering
const description = computed(
  () =>
    "I’m a passionate web developer with expertise in Vue.js, Nuxt.js, and Laravel, dedicated to building dynamic, high-performance websites. I focus on crafting seamless user experiences, combining clean design with powerful functionality to create scalable and efficient digital solutions."
);

onMounted(() => {
  isClient.value = true;

  // Rotate titles every 3 seconds
  setInterval(() => {
    isFading.value = true;
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % titles.value.length;
      isFading.value = false;
    }, 500); // Match the duration of the transition-opacity
  }, 3000);
});
</script>

