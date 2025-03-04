<template>
  <section
    id="top"
    class="text-white bg-gradient-to-r from-red-700 via-rose-900 to-red-700 py-12 lg:px-24 lg:h-[80vh]"
  >
    <div class="container mx-auto px-4 lg:mt-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <!-- Left Content -->
        <div class="text-center lg:text-left mt-4">
          <h1
            class="text-[30px] md:text-[50px] lg:text-[60px] font-black text-white text-3d-effect"
          >
            KHUN KIMHONG
          </h1>
          <h2
            class="text-2xl font-semibold text-white text-3d-effect transition-opacity duration-500"
            :class="{ 'opacity-0': isFading }"
          >
            {{ currentTitle }}
          </h2>
          <p class="text-left text-lg lg:text-xl text-gray-300 mt-2">
            I’m a passionate web developer committed to building sleek,
            high-performance websites that blend innovation with functionality.
            With expertise in full-stack development, particularly in Vue.js,
            Nuxt.js, and Laravel, I create seamless, interactive, and scalable
            digital solutions designed to enhance user experiences and drive
            meaningful results.
          </p>

          <!-- Social Media Links -->
          <div
            class="flex justify-center lg:justify-start mt-2 space-x-4 items-center"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              class="text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.496c0-1.28-.025-2.926-1.783-2.926-1.784 0-2.056 1.394-2.056 2.83v5.592h-3v-10h2.877v1.367h.041c.4-.759 1.378-1.559 2.838-1.559 3.036 0 3.583 2.001 3.583 4.605v5.587z"
                />
              </svg>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              class="text-white p-2 rounded-full hover:bg-gray-800 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.24 1.839 1.24 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.333-5.466-5.931 0-1.312.469-2.382 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.485 11.485 0 0 1 3-.404c1.02.004 2.045.137 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.647 1.653.242 2.873.118 3.176.77.839 1.234 1.909 1.234 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.815 1.103.815 2.222v3.293c0 .321.217.694.825.577 4.765-1.585 8.205-6.083 8.205-11.385 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>

            <a
              href="https://telegram.org"
              target="_blank"
              class="text-white p-2 rounded-full hover:bg-blue-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.447 2.728c-.255-.204-.594-.289-.926-.239l-20.412 4.064c-1.042.208-1.173 1.003-.205 1.393l5.005 1.92 9.633-5.846c.394-.237.789-.32 1.15-.217.36.103.627.369.73.73.103.361.02.757-.217 1.15l-5.846 9.633 1.92 5.005c.39.968 1.185.837 1.393-.205l4.064-20.412c.051-.332-.035-.671-.239-.926z"
                />
              </svg>
            </a>
          </div>

          <!-- Buttons -->
          <div
            class="flex flex-row items-center justify-center space-x-4 mt-4 lg:items-start lg:justify-start"
          >
            <!--Downloard CV Button -->
            <a
              href="/CV/KHUN KIMHONG_CV.pdf"
              class="bg-red-600 text-white shadow-md py-3 px-8 rounded-lg hover:bg-yellow-600 hover:scale-105 transition duration-300 flex items-center gap-2"
            >
              <span>Downloard CV</span>
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

        <!-- Right Image -->
        <div class="flex justify-center lg:justify-end">
          <img
            src="/ower/me -removebg.png"
            alt="KHUN KIMHONG"
            class="lg:block w-full max-w-[200px] max-h-[200px] lg:max-w-[500px] lg:max-h-[600px] rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Define the titles to cycle through, emphasizing your web development role
const titles = ["Web Developer", "Software Engineer" , "Full-Stack Developer"];

// State to track the current title and fading effect
const currentTitle = ref(titles[0]);
const isFading = ref(false);

// Function to toggle between titles with a fade effect
const toggleTitle = () => {
  isFading.value = true; // Start fade out
  setTimeout(() => {
    // Switch title after fade out
    currentTitle.value =
      titles[(titles.indexOf(currentTitle.value) + 1) % titles.length];
    isFading.value = false; // Fade back in
  }, 500); // Match this with the transition duration
};

// Set up an interval to toggle titles every few seconds
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(toggleTitle, 3000); // Switch every 3 seconds
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId); // Clean up interval on component unmount
  }
});
</script>

<style scoped>
/* Ensure smooth transitions for the fade effect */
.transition-opacity {
  transition: opacity 0.5s ease-in-out;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .lg:text-left,
  .lg:justify-start,
  .lg:justify-end {
    text-align: center;
    justify-content: center;
  }
}
</style>
