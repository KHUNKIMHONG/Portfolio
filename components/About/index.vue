<template>
  <section
    id="about"
    class="min-h-screen flex items-center justify-center px-6 lg:px-24 py-12 relative"
  >
    <div class="container mx-auto max-w-7xl">
      <!-- Faded "ABOUT ME" Text in Background -->
      <h1
        class="text-[30px] md:text-[50px] lg:text-[60px] font-extrabold text-red-600 opacity-10 absolute top-5 md:top-10 left-1/2 transform -translate-x-1/2"
      >
        ABOUT ME
      </h1>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative"
      >
        <!-- Left Section: Personal Info -->
        <div class="space-y-6 md:space-y-8 text-center lg:text-left">
          <!-- Header Text -->
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide"
          >
            Know Me More
          </h2>

          <!-- Description -->
          <h3
            class="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-400"
          >
            I'm <span class="text-red-500 text-3d-effect">KHUN KIMHONG</span>, a
            Web Developer
          </h3>
          <p
            class="text-left text-base md:text-lg text-gray-300 leading-relaxed"
          >
            I was born in Takeo Province, Cambodia. In 2019, after completing
            high school, I achieved a Grade C in the national exam. Following
            that, I pursued my passion for technology by enrolling at the
            Institute of Technology of Cambodia (ITC), where I studied Software
            Engineering. Over the past five years, I have dedicated myself to
            mastering web development, and by 2024, I will officially complete
            my degree.
          </p>
          <p
            class="text-left text-base md:text-lg text-gray-300 leading-relaxed"
          >
            My goal is to become a highly skilled web developer, creating
            innovative and efficient solutions that enhance user experience. I
            have a deep passion for coding and constantly strive to improve my
            skills to stay ahead in the ever-evolving tech industry.
          </p>

          <!-- Contact Details -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p class="text-gray-400">Nationality:</p>
              <p class="font-bold text-white hover:text-red-500 transition duration-300">Cambodian</p>
            </div>
            <div>
              <p class="text-gray-400">Date of Birth:</p>
              <p class="font-bold text-white hover:text-red-500 transition duration-300">14 April, 2001</p>
            </div>
            <div>
              <p class="text-gray-400">Location:</p>
              <p class="font-bold text-white hover:text-red-500 transition duration-300">Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>

        <!-- Right Section: Experience Card -->
        <div class="flex justify-center mt-8 lg:mt-0">
          <div
            class="relative bg-red-500 shadow-2xl shadow-red-500/50 rounded-md w-64 md:w-80 text-center p-10 md:p-12 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500"
          >
            <!-- Animated Border Glow Effect -->
            <div
              class="absolute inset-0 rounded-lg border-2 border-transparent bg-red-600 p-[2px] -z-10"
            ></div>

            <!-- Foreground Content (Ensure text is visible) -->
            <div class="relative z-10">
              <h4
                class="text-[70px] md:text-[100px] font-bold text-white text-3d-effect leading-none animate-pulse"
              >
                01
              </h4>
              <p class="text-lg md:text-xl font-medium text-gray-300 mt-2">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional styling if needed */
h2 {
  background: linear-gradient(to right, #ffffff, #ef4444);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
