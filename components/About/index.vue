<template>
  <section id="about" class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 relative">
    <div class="container mx-auto max-w-6xl">
      <!-- Faded "ABOUT ME" Text in Background -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 text-center opacity-20 tracking-wider mb-2 lg:mb-8"
        data-aos="fade-down" data-aos-delay="100">
        ABOUT ME
      </h1>

      <!-- Header Text -->
      <h2 class="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-start font-bold text-white tracking-wide mb-2 lg:mb-6" data-aos="fade-up"
            data-aos-delay="200">
            Know Me More
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
        <!-- Left Section: Personal Info -->
        <div class="space-y-6 lg:text-left">

          <!-- Description -->
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300" data-aos="fade-up"
            data-aos-delay="300">
            I'm <span class="text-red-500 text-3d-effect">KHUN KIMHONG</span>, a Passionate Web Developer
          </h3>
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            Born in Takeo Province, Cambodia, I embarked on my tech journey after earning a Grade C in the 2019 national
            exam. I pursued Software Engineering at the Institute of Technology of Cambodia (ITC), where I honed my
            skills over five years. By 2024, I will proudly graduate, equipped with expertise in building modern,
            responsive, and user-centric web solutions.
          </p>
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="500">
             My goal is to build websites and applications that are effortless to use and visually captivating. With a passion for clean code and innovative technology, I create seamless, beautiful experiences that users love.
          </p>

          <!-- Contact Details -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6" data-aos="fade-left" data-aos-delay="700">
            <div>
              <p class="text-gray-400 text-sm">Nationality:</p>
              <p class="font-semibold text-white hover:text-red-500 transition duration-300">Cambodian</p>
            </div>
            <div>
              <p class="text-gray-400 text-sm">Date of Birth:</p>
              <p class="font-semibold text-white hover:text-red-500 transition duration-300">14 April, 2001</p>
            </div>
            <div>
              <p class="text-gray-400 text-sm">Location:</p>
              <p class="font-semibold text-white hover:text-red-500 transition duration-300">Phnom Penh, Cambodia</p>
            </div>
          </div>

          <!-- Call-to-Action Button -->
          <div class="mt-8" data-aos="fade-up" data-aos-delay="800">
            <a href="#contact"
              class="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              Let’s Work Together
            </a>
          </div>
        </div>

        <!-- Right Section: Experience Card -->
        <div class="flex justify-center mt-8 lg:mt-0" data-aos="zoom-in" data-aos-delay="700">
          <div
            class="relative bg-red-700 shadow-2xl shadow-red-500/50 rounded-md w-64 md:w-80 text-center p-10 md:p-12 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500">
            <!-- Animated Border Glow Effect -->
            <div class="absolute inset-0 rounded-lg border-2 border-transparent bg-red-600 p-[2px] -z-10"></div>

            <!-- Foreground Content -->
            <div class="relative z-10">
              <h4 class="text-[70px] md:text-[100px] font-bold text-white text-3d-effect leading-none animate-pulse">
                01
              </h4>
              <p class="text-lg md:text-xl font-medium text-gray-300 mt-2">
                Years of Experience of Web Development
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
